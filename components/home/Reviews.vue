<!-- components/WhyTravelWithUs.vue -->
<script lang="ts" setup>
const items = [
  {
    id: 1,
    title: "Ouafae El Miri Otmani",
    category: "Haj",
    rating: 5,
    description: "Profesional como la copa de un pino. Viajes asequibles y ...",
    image: "https://placehold.co/400",
  },
  {
    id: 2,
    title: "Rocío Currás",
    category: "Umrah",
    rating: 5,
    description: "Acabamos de volver de nuestro viaje a Egipto, ...",
    image: "https://placehold.co/400",
  },
  {
    id: 3,
    title: "Jorge",
    category: "Haj",
    rating: 5,

    description: "Muy buenas experiencia",
    image: "https://placehold.co/400",
  },
  {
    id: 4,
    title: "anis shaikh",
    category: "Haj",
    rating: 5,

    description:
      "salamoalaykum ...I travelled with this company.....excellent work ...",
    image: "https://placehold.co/400",
  },
  {
    id: 5,
    category: "Haj",
    rating: 5,

    title: "Mariam",
    description:
      "Una experiencia increíble con la Umrah; se encargan de todo ...",
    image: "https://placehold.co/400",
  },
];
</script>

<template>
  <section class="my-12">
    <div class="px-8">
      <p class="font-volkhov text-orange">Lee</p>
      <h3 class="font-volkhov text-2xl md:text-4xl my-3 font-semibold">
        Lo que nuestros clientes opinan
      </h3>
    </div>

    <Carousel
      breakpointMode="carousel"
      :pauseAutoplayOnHover="true"
      ref="swiperRef"
      class="mt-8"
      :breakpoints="{
        0: { itemsToShow: 1 },
        640: { itemsToShow: 1 },
        768: { itemsToShow: 1 },
        1024: { itemsToShow: 3.5 },
      }"
      :autoplay="3000"
      :wrap-around="true"
      snap-align="center"
      :gap="20"
    >
      <Slide v-for="(item, index) in items" :key="index">
        <HomeSectionsCardReview :item="item" />
      </Slide>
    </Carousel>
    <Carousel
      breakpointMode="carousel"
      :pauseAutoplayOnHover="true"
      ref="swiperRef"
      class="mt-8"
      :breakpoints="{
        0: { itemsToShow: 1 },
        640: { itemsToShow: 1 },
        768: { itemsToShow: 1 },
        1024: { itemsToShow: 3.5 },
      }"
      dir="right-to-left"
      :autoplay="2000"
      :wrap-around="true"
      snap-align="center"
      :gap="20"
    >
      <Slide v-for="(item, index) in items" :key="index">
        <HomeSectionsCardReview :item="item" />
      </Slide>
    </Carousel>
    <div class="my-4 flex justify-center">
      <button
        class="rounded-full py-3 px-5 font-poppins bg-orange text-white hover:bg-[#e38a03] shadow shadow-orange"
      >
        Dejar resena
      </button>
    </div>
  </section>
</template>
