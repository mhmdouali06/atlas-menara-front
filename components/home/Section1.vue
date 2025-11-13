<script lang="ts" setup>
import { UiDetailLoader } from "#components";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import type { TravelPackage } from '~/types/travel-package';
const loading = ref(true)
const { getSlides } = useTravelPackagesFront('');

const items = ref<TravelPackage[]>([])

const getData = async () => {

  loading.value = true
  try {
    const data = await getSlides()
    if (data) {
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

<template>
  <section>
    <UiHomeSliderSkeleton v-if="loading" />
    <ClientOnly>
      <Carousel breakpointMode="carousel" ref="swiperRef" :pauseAutoplayOnHover="true" :breakpoints="{
        0: { itemsToShow: 1 },
      }" :wrap-around="true" :autoplay="3000" snap-align="start" :gap="20">
        <Slide v-for="(item, index) in items" :key="index">
          <HomeSectionsSlide :item="item" />
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </ClientOnly>
  </section>
</template>
<style scoped>
:deep(.carousel__pagination) {
  gap: 10px;
}

:deep(.carousel__pagination-button) {
  width: 28px;
  height: 6px;
  border-radius: 9999px;
  background: #e5e7eb;
  border: none;
  padding: 0;
  transition: all 0.3s ease;
}

:deep(.carousel__pagination-button[aria-current="true"]),
:deep(.carousel__pagination-button--active) {
  background: #ff7a00;
  /* your orange */
  width: 44px;
  /* <- active width */
}

:deep(.carousel__pagination-button .carousel__icon) {
  display: none;
}
</style>
