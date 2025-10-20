<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useSeoMeta } from '#imports';
import { fileUrl } from '~/helpers/functions/imageURl';
import { formatDateEs } from '~/helpers/functions/formatDuration';
import type { BlogPost } from '~/types/Blogs';
import { useBlogsApi } from '~/composables/useBlogsApi';

const route = useRoute();
const slug = String(route.params.slug || '');

const { getBlog } = useBlogsApi();

const { data, pending, error } = await useAsyncData<BlogPost>(
    `blog:${slug}`,
    () => getBlog(slug),
    { server: true, lazy: false }
);

// 404 if not found
if (!pending.value && (!data.value || (error.value && (error.value as any)?.statusCode === 404))) {
    throw createError({ statusCode: 404, statusMessage: 'Artículo no encontrado' });
}

// SEO
const title = computed(() => data.value?.title ?? 'Blog');
const description = computed(() => data.value?.excerpt || (data.value?.content ?? '').slice(0, 160));
const image = computed(() =>
    data.value?.thumbnail?.filePath ? fileUrl(data.value.thumbnail.filePath, 'blog') : undefined
);

useSeoMeta({
    title: () => `${title.value} | Blog`,
    ogTitle: () => title.value,
    description: () => description.value,
    ogDescription: () => description.value,
    ogType: 'article',
    ogImage: () => image.value,
    twitterCard: 'summary_large_image'
});

const publishedAt = computed(() => {
    const when = data.value?.publishedAt || data.value?.createdAt;
    return when ? formatDateEs(when) : '';
});

// optional gallery list normalized to MediaLite[]
const gallery = computed(() => {
    const g = (data.value?.gallery ?? []) as any[];
    return g
        .map(it => (typeof it === 'object' ? it : null))
        .filter(Boolean)
        .filter((m: any) => m.filePath);
});
</script>

<template>
    <section class="mx-auto max-w-5xl px-6 md:px-8 lg:px-10 py-10">
        <!-- LOADING -->
        <div v-if="pending" class="animate-pulse">
            <div class="h-8 w-3/4 bg-gray-200 rounded mb-3" />
            <div class="h-5 w-40 bg-gray-200 rounded mb-6" />
            <div class="h-[300px] w-full bg-gray-200 rounded-xl mb-8" />
            <div class="space-y-3">
                <div class="h-4 w-full bg-gray-200 rounded" />
                <div class="h-4 w-11/12 bg-gray-200 rounded" />
                <div class="h-4 w-10/12 bg-gray-200 rounded" />
            </div>
        </div>

        <!-- ERROR (non-404) -->
        <div v-else-if="error" class="text-red-600">
            Algo salió mal. Inténtalo más tarde.
        </div>

        <!-- ARTICLE -->
        <article v-else class="prose max-w-none prose-p:leading-7 prose-headings:font-volkhov">
            <!-- Title -->
            <h1 class="font-volkhov text-3xl md:text-4xl text-[#07123D] mb-2">
                {{ data?.title }}
            </h1>

            <!-- Meta -->
            <div class="flex flex-wrap items-center gap-3 text-sm text-[#2B2B2B]/70 mb-6">
                <span class="bg-gray-100 px-3 py-1 rounded">{{ publishedAt }}</span>
                <span v-if="data?.authorName">por {{ data?.authorName }}</span>
                <span v-if="data?.blogCategory?.name">• {{ data?.blogCategory?.name }}</span>
            </div>

            <!-- Thumb -->
            <div v-if="data?.thumbnail?.filePath" class="relative mb-8">
                <img :src="fileUrl(data.thumbnail.filePath, 'blog')" :alt="data.title"
                    class="w-full h-auto rounded-xl object-cover" />
            </div>

            <!-- Content (HTML) -->
            <div class="prose max-w-none prose-img:rounded-xl prose-a:text-[#07123D] hover:prose-a:underline"
                v-html="data?.content" />

            <!-- Gallery -->
            <div v-if="gallery.length" class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <figure v-for="(m, i) in gallery" :key="i" class="group">
                    <img :src="fileUrl(m.filePath, 'blog')" :alt="m.alt || data?.title || 'imagen'"
                        class="w-full h-56 object-cover rounded-xl" />
                </figure>
            </div>

            <!-- Back / CTA -->
            <div class="mt-12 flex items-center gap-3">
                <NuxtLink to="/blog"
                    class="border px-4 h-10 inline-flex items-center rounded-full hover:bg-[#07123D] hover:text-white transition">
                    Ver más artículos
                </NuxtLink>
            </div>
        </article>
    </section>
</template>

<style scoped>
.prose :where(img) {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>
