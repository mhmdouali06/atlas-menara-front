<script lang="ts" setup>
import inst from "@/assets/img/icon/instagram.svg";
import facebook from "@/assets/img/icon/facebook.svg";

const instgram = import.meta.env.VITE_URL_INSTAGRAM;
const face = import.meta.env.VITE_URL_FACEBOOK;
</script>

<template>
  <section class="mx-auto bg-orange px-4 sm:px-6 lg:px-8 py-2">

    <!-- MOBILE: infinite scrolling line -->
    <div class="md:hidden overflow-hidden">
      <div class="marquee">

        <!-- Copy 1 -->
        <div class="flex items-center gap-6 whitespace-nowrap text-white font-poppins font-semibold text-sm">
          <span>Síguenos en nuestras redes sociales :</span>

          <a :href="instgram" target="_blank" rel="noopener"
            class="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img :src="inst" class="w-4 h-4" alt="Instagram" />
            <span>atlasmenar</span>
          </a>

          <a :href="face" target="_blank" rel="noopener"
            class="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img :src="facebook" class="w-4 h-4" alt="Facebook" />
            <span>Viajes Atlas Menara España</span>
          </a>
        </div>

        <!-- Copy 2 (for seamless infinite loop) -->
        <div class="flex items-center gap-6 whitespace-nowrap text-white font-poppins font-semibold text-sm"
          aria-hidden="true">
          <span>Síguenos en nuestras redes sociales :</span>

          <a :href="instgram" target="_blank" rel="noopener"
            class="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img :src="inst" class="w-4 h-4" alt="Instagram" />
            <span>atlasmenar</span>
          </a>

          <a :href="face" target="_blank" rel="noopener"
            class="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img :src="facebook" class="w-4 h-4" alt="Facebook" />
            <span>Viajes Atlas Menara España</span>
          </a>
        </div>
      </div>
    </div>

    <!-- DESKTOP / TABLET (normal layout) -->
    <div class="hidden md:flex flex-row items-center justify-between gap-6 text-white">
      <p class="font-poppins font-semibold text-sm">
        Síguenos en nuestras redes sociales :
      </p>

      <ul class="flex items-center gap-7">
        <li>
          <a :href="instgram" target="_blank" rel="noopener"
            class="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img :src="inst" class="w-5 h-5" />
            <span class="font-semibold text-sm">atlasmenar</span>
          </a>
        </li>
        <li>
          <a :href="face" target="_blank" rel="noopener"
            class="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <img :src="facebook" class="w-5 h-5" />
            <span class="font-semibold text-sm">Viajes Atlas Menara España</span>
          </a>
        </li>
      </ul>
    </div>

  </section>
</template>

<style scoped>
.marquee {
  display: flex;
  width: max-content;
  animation: scroll 18s linear infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-50%);
  }
}
</style>
