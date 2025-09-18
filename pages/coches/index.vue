<template>
  <CarsSection1 />
  <CarsList v-model:items="vehicles" />
</template>
<script setup lang="ts">
import car from "@/assets/img/global/man-with-car.png";
const vehicles = ref([
  {
    id: 1,
    title: "All New Rush",
    category: "SUV",
    image: car,
    passengers: 6,
    href: "/reservar/rush-1",
    liked: false,
  },
  {
    id: 2,
    title: "All New Rush",
    category: "SUV",
    image: car,
    passengers: 6,
    href: "/reservar/rush-2",
    liked: false,
  },
  {
    id: 3,
    title: "All New Rush",
    category: "SUV",
    image: car,
    passengers: 6,
    href: "/reservar/rush-3",
    liked: false,
  },
  {
    id: 4,
    title: "All New Rush",
    category: "SUV",
    image: car,
    passengers: 6,
    href: "/reservar/rush-4",
    liked: false,
  },
  {
    id: 5,
    title: "All New Rush",
    category: "SUV",
    image: car,
    passengers: 6,
    href: "/reservar/rush-5",
    liked: false,
  },
  {
    id: 6,
    title: "All New Rush",
    category: "SUV",
    image: car,
    passengers: 6,
    href: "/reservar/rush-6",
    liked: false,
  },
]);
</script>
