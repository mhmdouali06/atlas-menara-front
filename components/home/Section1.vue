<script lang="tsx" setup>
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

import img1 from "@/assets/img/SlideHomePage/1 61.png";
import img2 from "@/assets/img/SlideHomePage/1 62.png";
import img3 from "@/assets/img/SlideHomePage/1 63.png";
import img4 from "@/assets/img/SlideHomePage/1 64.png";
const data = [
  {
    id: 1,
    title:
      "Viajes de \#Umrah y Hajj :\# \n Descubre nuestros Paquetes \nexclusivos todo el año",
    description:
      "más 16 años haciendo realidad los sueños de miles de personas.",
    image: img1,
  },
  {
    id: 2,
    title: "Umrah \#Youth\# Camp\n Desde 1.190€",
    description:
      "Participa en nuestro exclusivo Campamento Juvenil Umrah. Una experiencia espiritual y educativa diseñada para los jóvenes, con actividades y guías especializados",
    image: img2,
  },
  {
    id: 3,
    title: "Escapada Paradisíaca en \n Maldivas desde 1.400€",
    description:
      "Descubre el encanto de las Maldivas, ideal para una escapada romántica o unas vacaciones en familia. Disfruta de aguas cristalinas y arenas blancas.",
    image: img3,
  },
  {
    id: 4,
    title: "Eid Mubarak en Estambul\n desde 590€",
    description:
      "Experimenta un Eid Mubarak único en la histórica Estambul. Combina espiritualidad y turismo en una ciudad que puentea continentes.",
    image: img4,
  },
];
</script>
<template>
  <section>
    <Carousel
      breakpointMode="carousel"
      ref="swiperRef"
      :pauseAutoplayOnHover="true"
      :breakpoints="{
        0: { itemsToShow: 1 },
      }"
      :wrap-around="true"
      :autoplay="3000"
      snap-align="start"
      :gap="20"
    >
      <Slide v-for="(item, index) in data" :key="index">
        <HomeSectionsSlide :item="item" />
      </Slide>
      <template #addons>
        <Pagination />
      </template>
    </Carousel>
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
  background: #ff7a00; /* your orange */
  width: 44px; /* <- active width */
}

:deep(.carousel__pagination-button .carousel__icon) {
  display: none;
}
</style>
