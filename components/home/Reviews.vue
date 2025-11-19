<script lang="ts" setup>
import ouafae from "@/assets/img/reviews/Ouafae.png";
import rocio from "@/assets/img/reviews/Rocio.png";
import jorge from "@/assets/img/reviews/Jorge.png";
import anis from "@/assets/img/reviews/anis.png";
import mariam from "@/assets/img/reviews/Mariam.png";
import karima from "@/assets/img/reviews/Karima.png";
import mohammed from "@/assets/img/reviews/mohammed.png";
import fatima from "@/assets/img/reviews/fatima.png";
import andres from "@/assets/img/reviews/Andres.png";
import samira from "@/assets/img/reviews/Samira.png";
const items = [
  {
    id: 1,
    title: "Ouafae El Miri Otmani",
    category: "Umrah",
    rating: 5,
    description:
      "Profesional como la copa de un pino. Viajes asequibles y trato muy cercano.",
    image: ouafae,
  },
  {
    id: 2,
    title: "Rocío Currás",
    category: "Viaje",
    rating: 5,
    description:
      "Acabamos de volver de nuestro viaje a Egipto, todo muy bien organizado y sin complicaciones.",
    image: rocio,
  },
  {
    id: 3,
    title: "Jorge",
    category: "Viaje",
    rating: 5,
    description: "Muy buena experiencia. Trato excelente.",
    image: jorge,
  },
  {
    id: 4,
    title: "anis shaikh",
    category: "Haj",
    rating: 5,
    description:
      "salamoualaykum... I travelled with this agency, very professional, honest and trustworthy. Highly recommend.",
    image: anis,
  },
  {
    id: 5,
    title: "Mariam",
    category: "Umrah",
    rating: 5,
    description:
      "Una experiencia increíble con la Umrah. Se encargan de todo y siempre están atentos.",
    image: mariam,
  },
  {
    id: 6,
    title: "Karima Benhari",
    category: "Umrah",
    rating: 5,
    description:
      "Todo súper bien desde la salida hasta el regreso. Muy humana la atención.",
    image: karima,
  },
  {
    id: 7,
    title: "Mohamed A.",
    category: "Haj",
    rating: 5,
    description:
      "Gran organización. Facilitó mucho los trámites, especialmente para los mayores.",
    image: mohammed,
  },
  {
    id: 8,
    title: "Fatima Zahra",
    category: "Viaje",
    rating: 5,
    description:
      "Viaje muy bien planificado. Hoteles buenos y guías muy atentos.",
    image: fatima,
  },
  {
    id: 9,
    title: "Andrés López",
    category: "Viaje",
    rating: 5,
    description:
      "Excelente calidad-precio. Muy recomendable para viajes en familia.",
    image: andres,
  },
  {
    id: 10,
    title: "Samira H.",
    category: "Umrah",
    rating: 5,
    description:
      "Gracias por acompañarnos en cada paso. Viaje espiritual inolvidable.",
    image: samira,
  },
];

</script>

<template>
  <section class="my-12">
    <div class="px-8">
      <p class="font-volkhov text-orange">Lee</p>
      <h3 class="font-poppins text-2xl md:text-4xl my-3 font-semibold">
        Lo que nuestros clientes opinan
      </h3>
    </div>

    <Carousel breakpointMode="carousel" :pauseAutoplayOnHover="true" ref="swiperRef" class="mt-8" :breakpoints="{
      0: { itemsToShow: 1 },
      640: { itemsToShow: 1 },
      768: { itemsToShow: 1 },
      1024: { itemsToShow: 3.5 },
    }" :autoplay="3000" :wrap-around="true" snap-align="center" :gap="20">
      <Slide v-for="(item, index) in items" :key="index">
        <HomeSectionsCardReview :item="item" />
      </Slide>
    </Carousel>
    <Carousel breakpointMode="carousel" :pauseAutoplayOnHover="true" ref="swiperRef" class="mt-8" :breakpoints="{
      0: { itemsToShow: 1 },
      640: { itemsToShow: 1 },
      768: { itemsToShow: 1 },
      1024: { itemsToShow: 3.5 },
    }" dir="right-to-left" :autoplay="2000" :wrap-around="true" snap-align="center" :gap="20">
      <Slide v-for="(item, index) in items" :key="index">
        <HomeSectionsCardReview :item="item" />
      </Slide>
    </Carousel>

  </section>
</template>
