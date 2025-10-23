<script setup lang="ts">
import { useRoute } from "#app";
import { ref, onMounted } from "vue";
import type { BlogPost } from "~/types/Blogs";
const { getBlogs } = useBlogsApi();
const route = useRoute();
const currentPage = ref(Number(route.query.page) || 1);
const posts = ref<BlogPost[]>([]);
const isLoading = ref(true);

const fetchBlogs = async () => {
  try {
    isLoading.value = true;
    const data = await getBlogs();
    if (data) {
      posts.value = data.member;
    }
  } catch (e) {
    console.error(e);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchBlogs();
});

useSeoMeta({
  title: "Blog de Viajes | Umrah, Hajj y Destinos Personalizados | Atlas Menara",
  description:
    "Consejos, experiencias y noticias sobre el mundo de los viajes espirituales y de lujo. Descubre Umrah, Hajj y destinos únicos con Atlas Menara.",
  ogTitle: "Blog de Viajes | Umrah, Hajj y Destinos Personalizados | Atlas Menara",
  ogDescription:
    "Todo sobre Umrah, Hajj, viajes a Maldivas, Turquía y otros destinos exclusivos. Inspiración y guía de viaje con Atlas Menara.",
  ogImage: "https://atlas-menara.com/_nuxt/images/blog.jpg",
  ogUrl: "https://atlas-menara.com/blogs",
  twitterCard: "summary_large_image",
});

useHead({
  meta: [
    {
      name: "keywords",
      content:
        "blog de viajes, umrah, hajj, maldivas, destinos personalizados, atlas menara, agencia de viajes",
    },
  ],
});
</script>

<template>
  <section class="w-[90%] mx-auto">
    <div class="blog-header">
      <h1 class="title">Explora el Mundo con Atlas Menara</h1>
      <p class="paragraph">
        Sumérgete en el universo de los viajes espirituales y de lujo:
        descubre cómo prepararte para Umrah y Hajj, inspírate con destinos
        exóticos como Maldivas o Turquía y obtén consejos que harán de tu
        experiencia un viaje inolvidable. Atlas Menara te acompaña en cada paso.
      </p>
    </div>

    <div v-if="isLoading">
      <UILoading />
    </div>
    <div v-if="posts.length > 0">
      <BlogList :posts="posts" :current-page="currentPage" />
      <BlogOtheBlogs />
    </div>
  </section>
</template>

<style scoped>
.title {
  color: var(--Text-primary, #000);
  font-family: "Poppins";
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
}

.paragraph {
  width: 70%;
  color: var(--Text-primary, #000);
  font-family: "Poppins";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}

@media screen and (max-width: 780px) {
  .blog-header .paragraph {
    width: 90%;
  }
}
</style>
