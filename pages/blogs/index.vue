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
  isLoading.value = true;
  try {
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
  title: 'Blog de Umrah, Hajj y viajes a Marruecos | Viajes Atlas Menara',
  description:
    'Artículos y guías sobre Umrah, Hajj y viajes a Marruecos desde España: consejos, documentación, experiencias de viajeros y recomendaciones prácticas.',
  ogTitle: 'Blog de Umrah, Hajj y viajes a Marruecos',
  ogDescription:
    'Inspírate y prepara mejor tu Umrah, Hajj o viaje a Marruecos con las guías del blog de Viajes Atlas Menara.',
  ogType: 'website',
  ogUrl: 'https://atlasmenara.com/blogs',
  robots: 'index,follow'
})
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

    <div v-if="isLoading" class="my-10">
      <UiGridLoading />
    </div>
    <div v-if="posts.length > 0 && !isLoading">
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

  .title {
    font-size: 32px;
  }
}
</style>
