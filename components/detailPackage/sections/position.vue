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
      <iframe :src="item.map" width="600" height="400" class="mt-4" style="border: 0" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <!-- <p class="mt-8 font-poppins text-[#181E4B]">
      Hotel en Medina <br />Hotel Dar Al Motakamela
    </p>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58105.48319831926!2d39.507847648632804!3d24.464912599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf0a52f5e1b1%3A0xf5474c8b1088fab4!2sTaiba%20Suites%20Hotel!5e0!3m2!1sen!2sma!4v1758137847636!5m2!1sen!2sma"
      width="600" height="400" style="border: 0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->

  </section>
</template>
<script setup lang="tsx">
import type { TravelPackageHotelInput } from '~/types/travel-package';



const props = defineProps<{
  hotels: TravelPackageHotelInput[];
}>();
</script>
