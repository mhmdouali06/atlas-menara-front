<script lang="ts" setup>
import inst from "@/assets/img/icon/instagram.svg";
import facebook from "@/assets/img/icon/facebook.svg";
const instgram = import.meta.env.VITE_URL_INSTAGRAM;
const face = import.meta.env.VITE_URL_FACEBOOK;
</script>

<template>
  <section class="mx-auto bg-orange px-4 sm:px-6 lg:px-8 py-4">
    <div class="flex flex-col gap-3 sm:gap-4 md:gap-6 md:flex-row md:items-center md:justify-between">
      <p class="text-white font-poppins font-semibold text-base text-center md:text-left">
        Síguenos en nuestras redes sociales :
      </p>

      <ul class="flex flex-col items-center gap-3 sm:flex-row sm:gap-5 md:gap-7">
        <li>
          <a :href="instgram" target="_blank" rel="noopener" aria-label="Instagram Atlas Menara"
            class="flex items-center gap-2 text-white font-poppins font-semibold hover:opacity-90 transition-opacity">
            <img :src="inst" alt="Instagram" class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            <span class="font-poppins font-semibold text-center md:text-left">atlasmenar</span>
          </a>
        </li>
        <li>
          <a :href="face" target="_blank" rel="noopener" aria-label="Facebook Viajes Atlas Menara España"
            class="flex items-center gap-2 text-white font-poppins font-semibold hover:opacity-90 transition-opacity">
            <img :src="facebook" alt="Facebook" class="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            <span class="font-poppins font-semibold text-center md:text-left">
              Viajes Atlas Menara España
            </span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>
