<template>
  <DetailUmrahSection1 :item="item" />
  <DetailUmrahSection2 :item="item" />
  <DetailUmrahSectionsOther />
</template>
<script setup lang="ts">
import img1 from "@/assets/img/umrah/tour-img7 (1).png";

const item = {
  id: 1,
  title: "Umrah Ramadan",
  image: img1,
  price: 15.0,
  date_start: "01-01-2023",
  date_end: "03-01-2023",
};
</script>
