<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BlogCard from '~/components/home/sections/BlogCard.vue'
import type { BlogPost } from '~/types/Blogs'
const route = useRoute()
const categories = ref<BlogPost[]>([])
const isLoading = ref(true)
const { getBlogs } = useBlogsApi()

const fetchBlogsCategories = async () => {
  try {
    const slug = route.params.slug as string
    isLoading.value = true
    const data = await getBlogs("blogCategory.id=" + slug)
    if (data) {
      categories.value = data.member;
      console.log(data);

    }
  } catch (e) {
    console.error(e);

  }
  finally {
    isLoading.value = false
  }
}

onMounted(fetchBlogsCategories)

watch(
  () => route.params.slug,
  () => {
    fetchBlogsCategories()
  }
)
// {{ route.params.slug }}  
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 v-if="categories.length > 0" class="title mb-8">{{ categories[0].category.name }}</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <template v-if="categories.length > 0">

        <BlogCard v-for="item in categories" :key="item.id" :item="item" />
      </template>
      <template v-else>
        <div class="col-span-full text-center mt-10 text-gray-500 text-xl font-semibold">
          No se encontraron blogs en esta categoría.
        </div>
      </template>
    </div>
  </div>
</template>
<style scoped>
.my-4 {
  margin-top: 4rem;
  margin-bottom: 4rem;
}

.title {
  color: var(--Text-primary, #000);

  /* Heading/Desktop/H1 */
  font-family: "Poppins";
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 67.2px */
}

.paragraph {
  width: 70%;
  color: var(--Text-primary, #000);

  /* Text/Medium/Normal */
  font-family: "Poppins";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 27px */
}
</style>
