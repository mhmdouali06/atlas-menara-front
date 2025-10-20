<template>
  <section class="my-12 mb-28">
    <div class="px-8">
      <p class="font-volkhov text-orange text-center">Descubre</p>
      <h3 class="font-volkhov text-2xl md:text-4xl my-3 font-semibold text-center">
        Lo Último en el Mundo del viaje
      </h3>
    </div>
    <ClientOnly>

      <Carousel breakpointMode="carousel" ref="swiperRef" :pauseAutoplayOnHover="true" class="my-8 px-8" :breakpoints="{
        0: { itemsToShow: 1 },
        640: { itemsToShow: 1 },
        768: { itemsToShow: 1 },
        1024: { itemsToShow: 3 },
      }" :wrap-around="true" :autoplay="3000" snap-align="start" :gap="30">
        <Slide v-for="(item, index) in items" :key="index">
          <HomeSectionsBlogCard :item="item" class="w-full" />
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </ClientOnly>
  </section>
</template>
<script lang="ts" setup>
import { Carousel, Slide, Pagination } from "vue3-carousel";
import type { BlogPost } from "~/types/Blogs";


const loading = ref(false)
const { getBlogs } = useBlogsApi();

const items = ref<BlogPost[]>([])

const getData = async () => {
  try {
    const data = await getBlogs()
    if (data) {
      console.log(data.member);

      if (data.member) {
        items.value = data.member
      }
    }
  } catch (error) {
    console.log(error);

  }
  finally {
    loading.value = false
  }



}

onMounted(() => {
  getData()
})
</script>
<style scoped>
:deep(.carousel__pagination) {
  gap: 10px;
}

:deep(.carousel__pagination-button) {
  width: 74px;
  height: 6px;
  border-radius: 9999px;
  background: #e5e7eb;
  border: none;
  padding: 0;
  position: relative;
  top: 45px;
  transition: all 0.3s ease;
}

:deep(.carousel__pagination-button[aria-current="true"]),
:deep(.carousel__pagination-button--active) {
  background: #0e2041;
  /* your orange */
}

:deep(.carousel__pagination-button .carousel__icon) {
  display: none;
}
</style>
