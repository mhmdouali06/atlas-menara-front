<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useSeoMeta } from '#imports';
import type { BlogPost } from '~/types/Blogs';
import { useBlogsApi } from '~/composables/useBlogsApi';
import { fileUrl } from '~/helpers/functions/imageURl';
import { formatDateEs } from '~/helpers/functions/formatDuration';

const route = useRoute();
const router = useRouter();
const { getBlogs, getBlogsCategories } = useBlogsApi();

// URL state
const q = ref<string>(String(route.query.q ?? ''));
const page = ref<number>(Number(route.query.page ?? 1));
const perPage = ref<number>(Number(route.query.perPage ?? 9));
const categorySlug = ref<string | null>(route.query.category ? String(route.query.category) : null);

// keep URL in sync when user changes filters
function pushQuery() {
    const query: Record<string, any> = {};
    if (q.value) query.q = q.value;
    if (page.value && page.value !== 1) query.page = page.value;
    if (perPage.value && perPage.value !== 9) query.perPage = perPage.value;
    if (categorySlug.value) query.category = categorySlug.value;
    router.replace({ query });
}

// Build API Platform query string
async function buildQuery(): Promise<string> {
    const params = new URLSearchParams();

    // pagination (API Platform defaults: page, itemsPerPage)
    params.set('page', String(page.value || 1));
    params.set('itemsPerPage', String(perPage.value || 9));

    // only show published by default
    params.set('status', 'published');

    // search by title (ipartial in your ApiFilter)
    if (q.value) params.set('title', q.value);

    // category by slug -> resolve id using your endpoint /blog_category/slug/{slug}
    if (categorySlug.value) {
        try {
            const cat = await getBlogsCategories(categorySlug.value);
            if (cat?.id) params.set('blog_category.id', String(cat.id));
        } catch {
            // swallow; no category filter if resolution fails
        }
    }

    return params.toString();
}

// Data fetcher
type BlogsResponse = { member: BlogPost[]; totalItems: number };
const { data, pending, error, refresh } = await useAsyncData<BlogsResponse>(
    'blogs:list',
    async () => {
        const query = await buildQuery();
        return await getBlogs(query);
    },
    { server: true, watch: [page, perPage, q, categorySlug] }
);

// Derived
const items = computed<BlogPost[]>(() => data.value?.member ?? []);
const total = computed<number>(() => data.value?.totalItems ?? 0);
const totalPages = computed<number>(() => Math.max(1, Math.ceil(total.value / perPage.value)));

// Navigation helpers
function goPage(p: number) {
    if (p < 1 || p > totalPages.value) return;
    page.value = p;
    pushQuery();
}

// SEO
useSeoMeta({
    title: 'Blog',
    description: 'Artículos y guías sobre viajes, consejos y novedades.',
    ogTitle: 'Blog',
    ogDescription: 'Artículos y guías sobre viajes, consejos y novedades.'
});

// keep URL synced initially
watch([q, page, perPage, categorySlug], pushQuery);
</script>

<template>
    <section class="mx-auto max-w-6xl px-6 md:px-8 lg:px-10 py-10">
        <!-- Header -->
        <header class="mb-8">
            <p class="font-volkhov text-orange text-center">Descubre</p>
            <h1 class="font-volkhov text-3xl md:text-4xl font-semibold text-center text-[#07123D]">
                Lo Último en el Mundo del viaje
            </h1>
        </header>

        <!-- Filters -->
        <div class="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-6">
            <div class="flex items-center gap-2">
                <input v-model.trim="q" type="search" placeholder="Buscar por título..."
                    class="h-11 w-full md:w-96 rounded-full border px-4 outline-none focus:ring-2 focus:ring-[#07123D]"
                    @keydown.enter="page = 1; pushQuery(); refresh()" />
                <button class="h-11 px-5 rounded-full border hover:bg-[#07123D] hover:text-white transition"
                    @click="page = 1; pushQuery(); refresh()">
                    Buscar
                </button>
            </div>

            <!-- Optional: category chip if filtered by slug -->
            <div v-if="categorySlug" class="text-sm">
                <span class="px-3 py-1 rounded-full bg-gray-100">
                    Categoría: {{ categorySlug }}
                    <button class="ml-2 text-[#07123D]"
                        @click="categorySlug = null; page = 1; pushQuery(); refresh()">×</button>
                </span>
            </div>
        </div>

        <!-- Loading skeleton -->
        <div v-if="pending" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="i in 6" :key="i" class="animate-pulse">
                <div class="h-56 w-full bg-gray-200 rounded-xl mb-3" />
                <div class="h-5 w-3/4 bg-gray-200 rounded mb-2" />
                <div class="h-4 w-1/2 bg-gray-200 rounded" />
            </div>
        </div>

        <!-- Error -->
        <div v-else-if="error" class="text-red-600">
            No se pudo cargar el blog. Inténtalo más tarde.
        </div>

        <!-- Empty -->
        <div v-else-if="!items.length" class="text-center text-gray-600 py-16">
            No hay artículos para mostrar.
        </div>

        <!-- Grid -->
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <article v-for="post in items" :key="post.id" class="group">
                <NuxtLink :to="`/blog/${post.slug}`" class="block">
                    <div class="h-56 w-full relative">
                        <span class="absolute z-[2] top-0 left-6 text-[#2B2B2B] bg-white px-3 py-2 rounded-b">
                            {{ formatDateEs(post.publishedAt || post.createdAt) }}
                        </span>
                        <img v-if="post.thumbnail?.filePath" :src="fileUrl(post.thumbnail.filePath, 'blog')"
                            :alt="post.title" class="rounded-xl object-cover w-full h-full absolute z-0" />
                        <div v-else class="rounded-xl bg-gray-100 w-full h-full" />
                    </div>

                    <h3 class="text-[#07123D] font-poppins mt-3 text-xl font-bold line-clamp-2">
                        {{ post.title }}
                    </h3>

                    <p v-if="post.excerpt" class="text-[15px] text-[#2B2B2B] mt-2 line-clamp-3">
                        {{ post.excerpt }}
                    </p>

                    <div class="mt-3 text-sm text-[#2B2B2B]/70 flex items-center gap-2">
                        <span v-if="typeof post.blogCategory === 'object' && post.blogCategory?.name">
                            {{ post.blogCategory.name }}
                        </span>
                        <span v-if="post.authorName">• {{ post.authorName }}</span>
                    </div>
                </NuxtLink>
            </article>
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="mt-10 flex items-center justify-center gap-2">
            <button class="h-10 px-4 rounded-full border disabled:opacity-40" :disabled="page <= 1"
                @click="goPage(page - 1)">
                Prev
            </button>
            <span class="px-3 py-2">
                Página {{ page }} de {{ totalPages }}
            </span>
            <button class="h-10 px-4 rounded-full border disabled:opacity-40" :disabled="page >= totalPages"
                @click="goPage(page + 1)">
                Next
            </button>

            <select class="h-10 px-3 rounded-full border ml-3" v-model.number="perPage"
                @change="page = 1; pushQuery(); refresh()">
                <option :value="6">6</option>
                <option :value="9">9</option>
                <option :value="12">12</option>
            </select>
        </div>
    </section>
</template>

<style scoped>
/* keep it clean, no circus colors */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
