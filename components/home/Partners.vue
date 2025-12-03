<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

import img1 from "@/assets/img/partnears/download 1.png";
import imgc1 from "@/assets/img/partnears/haj_gov-logo-ar_0.png";

import img2 from "@/assets/img/partnears/logo_iata 1.png";
import imgc2 from "@/assets/img/partnears/logo_iata_no_c.png";

import img3 from "@/assets/img/partnears/logo_royaljord 1.png";
import imgc3 from "@/assets/img/partnears/download (1).png";

import img4 from "@/assets/img/partnears/logo_saudiairline 1.png";
import imgc4 from "@/assets/img/partnears/Saudi-Arabian-Airlines-Logo-1996.png";

import { Carousel, Slide } from "vue3-carousel";

const partnears = [
  { id: 1, img: img1, img2: imgc1 },
  { id: 2, img: imgc2, img2: img2 },
  { id: 3, img: img3, img2: imgc3 },
  { id: 4, img: img4, img2: imgc4 },
];

// Detect mobile
const isMobile = ref(false);

const checkScreen = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkScreen);
});

// Track which slide is hovered (desktop only)
const hovered = ref<number | null>(null);
</script>

<template>
  <section class="w-[90%] mx-auto mt-16">
    <h3 class="font-volkhov text-2xl md:text-3xl text-center mb-8">
      Nuestros <span class="text-orange">partners</span> De confianza
    </h3>

    <Carousel :autoplay="isMobile ? 2000 : 0" snap-align="start" :gap="30" :wrap-around="true" :breakpoints="{
      0: { itemsToShow: 1 },
      640: { itemsToShow: 1 },
      768: { itemsToShow: 3 },
      1280: { itemsToShow: 4 }
    }">
      <Slide v-for="course in partnears" :key="course.id">
        <img :src="isMobile
          ? course.img2                   // mobile = always img2
          : hovered === course.id
            ? course.img2                // desktop + hover = img2
            : course.img                 // desktop default = img
          " alt="partner" class="cursor-pointer transition-all duration-300" @mouseenter="hovered = course.id"
          @mouseleave="hovered = null" />
      </Slide>
    </Carousel>
  </section>
</template>
