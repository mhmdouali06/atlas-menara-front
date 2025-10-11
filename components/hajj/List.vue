<template>
  <section class="my-10">
    <h1 class="font-Poppins text-3xl text-center md:text-4xl font-extrabold text-[#0E2041] mb-8">
      Descubre nuestros Paquetes <span class="text-orange-500">Hajj</span>
    </h1>

    <ClientOnly>
      <div class="relative overflow-hidden">
        <Swiper :modules="modules" :slides-per-view="1.7" :space-between="90" :initial-slide="1" :speed="900"
          :grab-cursor="true" :centered-slides="true" ref="swiperRef"
          :pagination="{ el: '.hajj-pagination', clickable: true }">
          <SwiperSlide class="py-8" v-for="(it, idx) in props.items" :key="it.id" :style="{ width: slideWidth }">
            <HajjSectionsHajjCard :item="it" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="mt-4">
        <div class="hajj-pagination flex justify-center gap-1.5"></div>
      </div>
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import type { TravelPackage } from "~/types/travel-package";
const modules = [Pagination];
const props = defineProps<{ items: TravelPackage[] }>();



/* slide width: control how wide the center card is */
const slideWidth = "720px"; // adjust to taste, or detect via breakpoints

const swiperRef = ref<any>(null);
function next() {
  swiperRef.value?.swiper?.slideNext();
}
function prev() {
  swiperRef.value?.swiper?.slidePrev();
}
</script>

<style scoped>
.swiper {
  padding-bottom: 18px;
}

::v-deep(.swiper-slide-active .hajj-card) {
  transform: scale(1.1);
  height: 245px;
}

::v-deep(.swiper-pagination-bullet) {
  width: 40px;
  height: 9px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #8e8d8d;
  cursor: pointer;
}

::v-deep(.swiper-pagination-bullet-active) {
  background: #0e2041;
}

@media (max-width: 768px) {

  /* small screens: make narrower cards */
  :root {
    --slide-w: 320px;
  }
}
</style>
