<template>
  <section>
    <div class="w-[90%] mx-auto my-10 grid grid-cols-12 gap-10">
      <div
        v-for="item in items"
        class="col-span-12 md:col-span-4"
        :key="item.id"
      >
        <UiCard :item="item" class="w-full" />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import img1 from "@/assets/img/umrah/tour-img7 (1).png";
import img2 from "@/assets/img/umrah/tour-img7 (3).png";
import img3 from "@/assets/img/umrah/tour-img7.png";
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
<style scoped>
::v-deep(.main) {
  width: 100%;
}
</style>
