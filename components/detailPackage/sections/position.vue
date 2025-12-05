<template>
  <section>

    <!-- top info -->
    <div class="flex items-center justify-between">
      <h2 class="text-lg md:text-3xl font-bold font-volkhov text-[#181E4B]">
        Ubicación Hotel
      </h2>
    </div>
    <div v-for="item in hotels" class="mt-8">


      <p class="mt-2 font-poppins text-[#181E4B]">
        {{ item.name }}<br />
        {{ item.name2 }}
      </p>
      <iframe :src="item.map" title="map" height="400" class="mt-4 w-full max-w-[400px]" style="border: 0"
        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
</template>
<script setup lang="tsx">
import type { TravelPackageHotelInput } from '~/types/travel-package';



const props = defineProps<{
  hotels: TravelPackageHotelInput[];
}>();
</script>
