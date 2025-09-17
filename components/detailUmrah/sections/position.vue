<template>
  <section class="p-4 gap-8 grid grid-cols-12">
    <div class="left col-span-8 p-8">
      <!-- top info -->
      <div class="flex items-center justify-between">
        <h2 class="text-lg md:text-3xl font-bold font-volkhov text-[#181E4B]">
          Ubicación Hotel
        </h2>
      </div>

      <p class="mt-2 font-poppins text-[#181E4B]">
        Hotel en Medina<br />
        Hotel Moein Taiba
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29709.691510945064!2d39.794283774316405!3d21.440584300000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c204ffffffffff%3A0x5279d08df0f5163a!2sPark%20Inn%20by%20Radisson%20Makkah%20Thakher%20Algharbi!5e0!3m2!1sen!2sma!4v1758137485621!5m2!1sen!2sma"
        width="600"
        height="400"
        class="mt-4"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <p class="mt-8 font-poppins text-[#181E4B]">
        Hotel en Medina <br />Hotel Dar Al Motakamela
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58105.48319831926!2d39.507847648632804!3d24.464912599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf0a52f5e1b1%3A0xf5474c8b1088fab4!2sTaiba%20Suites%20Hotel!5e0!3m2!1sen!2sma!4v1758137847636!5m2!1sen!2sma"
        width="600"
        height="400"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="right col-span-4">
      <DetailUmrahSectionsContact :item="item" />
    </div>
  </section>
</template>
<script setup lang="tsx">
import type { umrahinterface } from "~/types/Umrah";

const props = defineProps<{
  item: umrahinterface;
}>();
</script>
