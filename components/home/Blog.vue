<template>
  <section class="my-12 mb-28">
    <div class="px-8">
      <p class="font-volkhov text-orange text-center">Descubre</p>
      <h3 class="font-volkhov text-2xl md:text-4xl my-3 font-semibold text-center">
        Lo Último en el Mundo del viaje
      </h3>
    </div>

    <ClientOnly>
      <Carousel v-if="ready" :key="items.length" v-model:currentSlide="currentSlide" breakpointMode="carousel"
        ref="swiperRef" :pauseAutoplayOnHover="true" class="my-8 px-8" :breakpoints="{
          0: { itemsToShow: 1 },
          640: { itemsToShow: 1 },
          768: { itemsToShow: 1 },
          1024: { itemsToShow: 3 }
        }" :wrap-around="true" :autoplay="3000" snap-align="start" :gap="30">
        <Slide v-for="(item, index) in items" :key="index">
          <HomeSectionsBlogCard :item="item" class="w-full" />
        </Slide>

        <template #addons>
          <Pagination />
        </template>
      </Carousel>

      <UiGridLoading :items="3" v-else />
    </ClientOnly>
  </section>
</template>

<script lang="ts" setup>
import { Carousel, Slide, Pagination } from "vue3-carousel";
import type { BlogPost } from "~/types/Blogs";

const loading = ref(true);
const items = ref<BlogPost[]>([]);
const currentSlide = ref(0);          // control the active dot
const { getBlogs } = useBlogsApi();

const ready = computed(() => !loading.value && items.value.length > 0);

const getData = async () => {
  loading.value = true;
  try {
    const data = await getBlogs();
    if (data?.member) items.value = data.member;
    // ensure first dot is active after data loads
    currentSlide.value = 0;
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getData();
});
</script>

<style scoped>
/* Space the dots a bit */
:deep(.carousel__pagination) {
  gap: 10px;
}

/* Make bullets responsive, not railway sleepers */
:deep(.carousel__pagination-button) {
  width: clamp(18px, 8vw, 74px);
  height: clamp(4px, 0.9vw, 6px);
  border-radius: 9999px;
  background: #e5e7eb;
  border: none;
  padding: 0;
  position: relative;
  top: clamp(16px, 4vw, 45px);
  transition: all 0.25s ease;
}

/* Active state */
:deep(.carousel__pagination-button[aria-current="true"]),
:deep(.carousel__pagination-button--active) {
  background: #0e2041;
}

/* Hide default SVG dot */
:deep(.carousel__pagination-button .carousel__icon) {
  display: none;
}

/* Slightly tighter on very small screens */
@media (max-width: 420px) {
  :deep(.carousel__pagination) {
    gap: 6px;
  }
}
</style>
