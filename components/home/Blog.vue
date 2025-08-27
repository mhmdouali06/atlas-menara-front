<template>
  <section class="my-12 mb-28">
    <div class="px-8">
      <p class="font-volkhov text-orange text-center">Descubre</p>
      <h3
        class="font-volkhov text-2xl md:text-4xl my-3 font-semibold text-center"
      >
        Lo Último en el Mundo del viaje
      </h3>
    </div>
    <Carousel
      breakpointMode="carousel"
      ref="swiperRef"
      :pauseAutoplayOnHover="true"
      class="my-8 px-8"
      :breakpoints="{
        0: { itemsToShow: 1 },
        640: { itemsToShow: 1 },
        768: { itemsToShow: 1 },
        1024: { itemsToShow: 3 },
      }"
      :wrap-around="true"
      :autoplay="3000"
      snap-align="start"
      :gap="30"
    >
      <Slide v-for="(item, index) in items" :key="index">
        <HomeSectionsBlogCard :item="item" />
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
  </section>
</template>
<script setup lang="ts">
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import img1 from "@/assets/img/blogs/668d404a3617b0d2f805894800abee821cd7439b.png";
import img2 from "@/assets/img/blogs/e28a3dced4c6c0df15a6c585c8081697b78e2a80.png";
import img3 from "@/assets/img/blogs/fb6c6411c6676dd13635750c609ff5783bdb3d67.png";
type Article = {
  id: number;
  title: string;
  date: string;
  image: string;
};

const items: Article[] = [
  {
    id: 1,
    title:
      "Preparativos Esenciales para tu Viaje de Hajj: Guía Completa para Peregrinos",
    date: "2025-01-28",
    image: img1,
  },
  {
    id: 2,
    title:
      "Umrah a tu Alcance: Consejos Prácticos para un Viaje Espiritual Inolvidable",
    date: "2025-09-08",
    image: img2,
  },
  {
    id: 3,
    title: "Diferencias entre Hajj y Umrah: Lo que Debes Saber Antes de Viajar",
    date: "2025-02-26",
    image: img3,
  },
];
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
  background: #0e2041; /* your orange */
}

:deep(.carousel__pagination-button .carousel__icon) {
  display: none;
}
</style>
