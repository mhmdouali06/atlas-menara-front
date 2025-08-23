<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import leftButton from "@/assets/img/icon/left-arrow.svg";
import rightButton from "@/assets/img/icon/right-arrow.svg";

// fake image

import img1 from "@/assets/img/umrah/tour-img7 (1).png";
import img2 from "@/assets/img/umrah/tour-img7 (3).png";
import img3 from "@/assets/img/umrah/tour-img7.png";
// -------------------------------------
const swiperRef = ref<any>(null);

const carouselIndex = ref(0);
const totlaItem = ref(4);

const prev = () => {
  if (swiperRef.value) {
    swiperRef.value.prev();
  }
};

const next = () => {
  if (swiperRef.value) {
    swiperRef.value.next();
  }
};

const activeItem = computed(() => carouselIndex.value + 1);

onMounted(() => {
  carouselIndex.value = activeItem.value - 1;
});

const categories = [
  { id: 1, name: "Todo" },
  { id: 2, name: "Economicos" },
  { id: 3, name: "Ramadan" },
  { id: 4, name: "Shawal" },
];
const activeCategory = ref(1);
const items = [
  {
    id: 1,
    title: "Umrah Ramadan",
    image: img1,
    price: 15.0,
    date_start: "01-01-2023",
    date_end: "03-01-2023",
  },
  {
    id: 2,
    title: "Umrah Ramadan",
    image: img2,
    price: 15.0,
    date_start: "01-01-2023",
    date_end: "03-01-2023",
  },
  {
    id: 3,
    title: "Umrah Shawal",
    image: img3,
    price: 15.0,
    date_start: "01-01-2023",
    date_end: "03-01-2023",
  },
  {
    id: 4,
    title: "Umrah Ramadan",
    image: img1,
    price: 15.0,
    date_start: "01-01-2023",
    date_end: "03-01-2023",
  },
];
</script>

<template>
  <section class="my-28 px-4 md:px-12">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div>
        <p class="font-volkhov text-orange text-xl">Explora</p>
        <h3 class="font-volkhov text-2xl md:text-3xl mb-8 font-semibold">
          Nuestras <span class="text-orange font-semibold">ofertas</span> mas
          destacadas
        </h3>
      </div>
      <div class="overflow-auto mb-8 md:my-0 w-full md:w-auto">
        <div class="flex gap-2">
          <button
            v-for="category in categories"
            :key="category.id"
            @click="activeCategory = category.id"
            :class="[
              activeCategory === category.id
                ? 'bg-orange text-white'
                : 'bg-white text-orange',
              'category-button rounded-full px-4 py-2 text-lg font-semibold border border-orange  hover:bg-orange hover:text-white transition duration-300 easy',
            ]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </div>
    <div>
      <Carousel
        breakpointMode="carousel"
        ref="swiperRef"
        :breakpoints="{
          0: { itemsToShow: 1 },
          640: { itemsToShow: 2 },
          768: { itemsToShow: 3 },
          1024: { itemsToShow: 4 },
        }"
        :wrap-around="true"
        snap-align="start"
        :gap="20"
      >
        <Slide v-for="(item, index) in items" :key="index">
          <UiCard :item="item" />
        </Slide>
      </Carousel>
    </div>

    <div class="flex justify-end gap-4 mt-8">
      <button @click="prev" class="rounded-full left hover:shadow-sm">
        <img :src="leftButton" alt="left" /></button
      ><button @click="next" class="right hover:shadow-sm rounded-full">
        <img :src="rightButton" alt="right" />
      </button>
    </div>
  </section>
</template>
<style scoped>
button:not(.category-button) {
  width: 56px;
  height: 56px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: 1px solid #07123d;
  box-sizing: border-box;
}
button img {
  margin: 0;
  padding: 0;
  width: 20px;
  height: 20px;
}
button:not(.category-button):hover {
  background: var(--vt-c-orange);
  box-shadow: 0 1px 9.1px 4px rgba(255, 209, 26, 0.3);
  border-color: var(--vt-c-orange);
}
</style>
