<template>
  <section class="my-10 ">
    <h1 class="font-Poppins text-3xl text-center md:text-4xl font-extrabold text-[#0E2041] mb-8">
      Descubre nuestros Paquetes <span class="text-orange-500">Hajj</span>
    </h1>

    <ClientOnly v-if="!props.loading">
      <!-- before: class="relative overflow-hidden px-4" -->
      <div class="relative  overflow-visible md:overflow-hidden">
        <Swiper :modules="modules" :slides-per-view="1.7" :space-between="90" :initial-slide="0" :speed="900"
          :grab-cursor="true" :centered-slides="true" :centered-slides-bounds="true"
          :loop="(props.items?.length || 0) > 1" ref="swiperRef"
          :pagination="{ el: '.hajj-pagination', clickable: true }" :breakpoints="{
            0: { slidesPerView: 'auto', spaceBetween: 24, centeredSlides: true, centeredSlidesBounds: true, slidesOffsetBefore: 8, slidesOffsetAfter: 8 },
            640: { slidesPerView: 'auto', spaceBetween: 24, centeredSlides: true, centeredSlidesBounds: true, slidesOffsetBefore: 12, slidesOffsetAfter: 12 },
            768: { slidesPerView: 1.25, spaceBetween: 32, centeredSlides: true, centeredSlidesBounds: true },
            1024: { slidesPerView: 1.55, spaceBetween: 48, centeredSlides: true },
            1280: { slidesPerView: 1.7, spaceBetween: 90, centeredSlides: true }
          }">
          <SwiperSlide v-for="it in props.items" :key="it.id" class="py-8 slide-w">
            <HajjSectionsHajjCard :item="it" />
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="mt-4">
        <div class="hajj-pagination flex justify-center gap-1.5"></div>
      </div>
    </ClientOnly>
    <UiGridLoading v-else :items="3" />
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
const props = defineProps<{ items: TravelPackage[], loading: boolean }>();

/* Keep the same look, just make width adapt across sm/md/lg */
const slideWidth = "clamp(280px, 72vw, 720px)";

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
}

::v-deep(.swiper-pagination-bullet) {
  width: 28px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #8e8d8d;
  cursor: pointer;
}

::v-deep(.swiper-pagination-bullet-active) {
  background: #0e2041;
}

/* sm */
@media (min-width: 640px) {
  ::v-deep(.swiper-pagination-bullet) {
    width: 34px;
    height: 8px;
  }
}

/* md */
@media (min-width: 768px) {
  ::v-deep(.swiper-pagination-bullet) {
    width: 36px;
    height: 9px;
  }
}

/* lg+ keeps your original big bullets */
@media (min-width: 1024px) {
  ::v-deep(.swiper-pagination-bullet) {
    width: 40px;
    height: 9px;
  }
}

/* small screens: keep your intent but without breaking layout */
@media (max-width: 768px) {
  :root {
    --slide-w: 320px;
  }
}

/* make Swiper itself overflow on small screens so peeks are visible */
@media (max-width: 767px) {
  ::v-deep(.swiper) {
    overflow: visible;
  }

  /* container has px-4 (16px each side) -> leave ~64px total peek space */
  .slide-w {
    width: clamp(280px, calc(100vw - 64px), 720px);
  }
}

/* desktop/tablet keeps the tighter look you already have */
@media (min-width: 768px) {
  .slide-w {
    width: clamp(280px, 72vw, 720px);
  }
}

::v-deep(.swiper-slide-active .hajj-card) {
  transform: scale(1.1);
}
</style>
