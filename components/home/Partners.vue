<script lang="ts" setup>
import img1 from "@/assets/img/partnears/download 1.png";
import img2 from "@/assets/img/partnears/logo_iata 1.png";
import img3 from "@/assets/img/partnears/logo_royaljord 1.png";
import img4 from "@/assets/img/partnears/logo_saudiairline 1.png";
import { Carousel, Slide } from "vue3-carousel";
const partnears = [
  {
    id: 1,
    img: img1,
  },
  {
    id: 2,
    img: img2,
  },
  {
    id: 3,
    img: img3,
  },
  {
    id: 4,
    img: img4,
  },
];
</script>
<template>
  <section class="w-full my-28">
    <h3 class="font-volkhov text-2xl md:text-3xl text-center mb-8">
      Nuestros <span class="text-orange">partners</span> De confianza
    </h3>
    <Carousel
      :autoplay="2000"
      snapAlign="center"
      class="px-4"
      :wrap-around="true"
      breakpointMode="carousel"
      :breakpoints="{
        0: { itemsToShow: 1 },
        640: { itemsToShow: 1 },
        768: { itemsToShow: 2 },
        1280: { itemsToShow: 3 },
      }"
    >
      <Slide v-for="course in partnears" :key="course.id">
        <img :src="course.img" alt="partnears" />
      </Slide>
    </Carousel>
  </section>
</template>
