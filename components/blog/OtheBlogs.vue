<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import type { BlogCategoryLite, BlogPost } from "~/types/Blogs";
import BlogCard from "../home/sections/BlogCard.vue";
const categories = ref<BlogCategoryLite[]>([])
const isLoading = ref(true);


const data = ref<BlogPost[]>([]);


const selectedCategory = ref();

const { getBlogsCategories } = useBlogsApi()




// --------------------------------------

const fetchBlogsCategories = async () => {
  isLoading.value = true
  try {
    const data = await getBlogsCategories("pagination=false")
    if (data) {
      categories.value = data.member
    }
  } catch (e) {
    console.error(e);

  }
  finally {
    isLoading.value = false
  }
}
onMounted(fetchBlogsCategories
)
</script>
<template>
  <section>
    <div v-if="isLoading" class="my-10">
      <UiGridLoading />
    </div>
    <div v-else v-for="category in categories" :key="category.id" class="box">
      <div class="flex justify-between ">

        <h3 class=" blog- ">{{ category.name }}</h3>
        <NuxtLink :to="`/blogs/category/${category.id}`" class="border border-gray p-1 box-border font-poppins">Ver todo
        </NuxtLink>
      </div>

      <div class="flex overflow-x-auto flex-1 overflow-y-hidden gap-8 ">

        <BlogCard v-for="blog in category.blog" v-if="category.blog.length > 0" :item="blog"
          class="min-w-[300px] max-w-[350px] flex-shrink-0 p-4 " />
      </div>

    </div>
  </section>
</template>
<style scoped>
h2 {
  line-height: normal;
}

h3 {
  color: #07113d;

  font-weight: 600;
}

.top-text {
  color: var(--vt-c-orange);
}

.simple-text {
  /* Text Colour 3 */
  color: #808080;
}

img {
  object-fit: contain;
}

.item {
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  padding: 1rem 2rem;
  margin-top: 2rem;
  background: #ffffff;
  box-shadow: 4px 10px 30px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
}

.extract img {
  object-fit: contain;
}

.extract {
  width: 65px;
  height: 65px;
  box-sizing: border-box;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
}

.category {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.category button {
  padding: 0.3rem 1rem;
  height: 60px;
  border: 1px solid #08133e;
  border-radius: 30px;
}

.active {
  background-color: #07113d;
  color: #fff;
}

.blog-category {
  color: var(--Text-primary, #000);

  /* Heading/Desktop/H2 */
  font-family: "Poppins";
  font-size: 38px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 57.6px */
}

.box {
  margin-top: 2rem;
}

@media screen and (max-width: 768px) {
  .category {
    margin-top: 2rem;
  }

}
</style>
