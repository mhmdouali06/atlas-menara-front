<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import type { BlogPost } from "~/types/Blogs";
import { fileUrl } from "~/helpers/functions/imageURl";
const isLoading = ref(true);
const { getBlog } = useBlogsApi()


const route = useRoute();
const post = ref<BlogPost>();
const fetchBlog = async () => {
  const slug = route.params.slug as string
  if (!slug) return
  const data = await getBlog(slug)
  if (data) {
    post.value = data
  }
}

onMounted(async () => {
  isLoading.value = true;
  try {
    fetchBlog()
  }
  finally {
    setTimeout(() => {
      isLoading.value = false
    }, 500);
  }
});
useSeoMeta({
  title: () =>
    `${post.value?.title ?? 'Artículo'} | Blog de Umrah, Hajj y viajes | Viajes Atlas Menara`,
  description: () =>
    post.value?.excerpt ??
    'Artículo del blog de Viajes Atlas Menara sobre Umrah, Hajj y viajes a Marruecos desde España con consejos útiles para viajeros.',
  ogTitle: () =>
    `${post.value?.title ?? 'Artículo'} | Blog de Viajes Atlas Menara`,
  ogDescription: () =>
    post.value?.excerpt ??
    'Descubre guías y consejos para organizar tu Umrah, Hajj o viaje a Marruecos con una agencia especializada.',
  ogType: 'article',
  ogUrl: () => `https://atlasmenara.com/blogs/${route.params.slug}`,
  robots: 'index,follow'
})
</script>

<template>
  <div class="main w-[90%] mx-auto my-10">
    <section v-if="post && !isLoading" class="article-wrapper">
      <div class="container">

        <h1 class="article-title">{{ post.title }}</h1>
        <img v-if="post.thumbnail" :src="fileUrl(post.thumbnail.filePath, 'blog')" alt="" class="article-image " />
        <h3 class="paragraph blog-category mt-3">{{ post.category.name }}</h3>

        <div class="article-content" v-html="post.content"></div>
        <div v-if="post.gallery" class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <figure v-for="(m, i) in post.gallery" :key="i" class="group">
            <img :src="fileUrl(m.filePath, 'blog')" :alt="post?.title || 'imagen'"
              class="w-full h-56 object-cover rounded-xl" />
          </figure>
        </div>
      </div>
    </section>

    <div v-if="isLoading" class="loader-container my-24">

      <ui-detail-loader />
    </div>

    <div v-if="!post && !isLoading" class="not-found">
      <p>No se encontraron blogs</p>
    </div>
  </div>
</template>

<style scoped>
.blog-category {
  color: var(--Text-primary, #000);
  display: flex;
  padding: 4px 8px;
  width: fit-content;
  align-items: flex-start;
  background: var(--Background-color-secondary, #EEE);
  /* Text/Small/Semi Bold */
  font-family: "Poppins";
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  /* 21px */
}

.main {
  min-height: 50vh;
}


.article-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.article-meta {
  color: #888;
  font-size: 0.9rem;
  margin-bottom: 2rem;
}

.article-image {
  width: 100%;
  height: auto;
  max-height: 500px;
  border-radius: 12px;
  margin-bottom: 2rem;
  object-fit: fill;
}

.article-content {
  line-height: 1.8;
  font-size: 1rem;
  color: #222;
}

.not-found {
  text-align: center;
  padding: 4rem 1rem;
  color: #888;
}

.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}

.loader {
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color: #8700ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
