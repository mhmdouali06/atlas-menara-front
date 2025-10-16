<template>
  <section class="my-12 w-[90%] mx-auto" id="list">
    <p class="text-center text-[#0E6FF0] font-poppins">Explora</p>
    <h3 class="text-center text-3xl md:text-4xl font-extrabold text-[#0E2041] font-poppins">
      🗺️ Nuestros viajes destacados
    </h3>
    <div class="grid gap-12 md:grid-cols-2 mt-12 md:px-12">
      <TravelsSectionsTravelCard v-for="item in items" :key="item.id" :item="item" />
    </div>
  </section>
</template>
<script setup lang="ts">
const props = defineProps<{
  items: TravelPackage[];
  loading: boolean;
}>();
import { TravelsSectionsTravelCard } from "#components";
import type { TravelPackage } from "~/types/travel-package";


</script>
