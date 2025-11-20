<script lang="ts" setup>
// Replace these with your real asset paths
import logo from "@/assets/img/global/logo.png";
import badge from "@/assets/img/global/badge.jpg";

import inst from "@/assets/img/icon/orange_instagram.svg";
import fb from "@/assets/img/icon/orange-facebook.svg";
import yt from "@/assets/img/icon/orange-youtube.svg";
import x from "@/assets/img/icon/orange-twitter.svg";
</script>

<template>
  <footer class="bg-orange text-white">
    <div class="mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
      <!-- Top: 4 columns -->
      <div class="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-10 lg:gap-14 items-start">
        <!-- Col 1: Logo + Address -->
        <div class="space-y-4">
          <img :src="logo" alt="Atlas Menara" class="h-14 w-auto rounded-md bg-white p-2" />
          <p class="text-sm leading-relaxed opacity-90 font-poppins font-semibold">
            C. De Parvillas Altas, 15, 28021 Madrid
          </p>
        </div>

        <!-- Col 2: CONTACTO -->
        <div class="space-y-3">
          <h3 class="font-poppins font-bold text-lg">CONTACTO</h3>
          <div class="space-y-2">
            <a href="mailto:Info@Atlasmenara.Com" class="block hover:underline break-all">Info@Atlasmenara.Com</a>
            <ul class="space-y-1 text-[15px]">
              <li>
                <a class="hover:underline" href="tel:+34657373150">• +34 657 373 150</a>
              </li>
              <li>
                <a class="hover:underline" href="tel:+34910648506">• +34 910 648 506</a>
              </li>
              <li>
                <a class="hover:underline" href="tel:+34692342055">• +34 692 342 055</a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Col 3: ENLACES DE INTERES -->
        <div class="space-y-3">
          <h3 class="font-poppins font-semibold text-lg">ENLACES DE INTERES</h3>
          <ul class="list-disc ml-5 space-y-1 text-[15px]">
            <li>
              <NuxtLink to="/#about-us" class="hover:underline">Sobre Nosotros</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#contact" class="hover:underline">Contáctanos</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/faq" class="hover:underline">FAQs</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/condiciones-de-uso" class="hover:underline">Condiciones de uso</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/cookies" class="hover:underline">Cookies</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/politica-de-privacidad" class="hover:underline">Políticas de Privacidad</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Col 4: Years + Badge -->
        <div class="md:justify-self-end">
          <div class="max-w-[220px] md:text-left space-y-3">
            <p class="font-poppins font-semibold text-lg leading-snug">
              22 años de<br />trayectoria nos<br />avalan
            </p>
            <img :src="badge" alt="Reconocimiento 22 años" class="w-32 h-24 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </div>

      <!-- Divider -->
      <hr class="my-6 border-white/40" />

      <!-- Bottom: Copyright + Social -->
      <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p class="text-sm text-white/90 text-center sm:text-left">
          © 2025 Atlas Menara - Todos los derechos reservados.
        </p>

        <ul class="flex items-center gap-3">
          <!-- Social button -->
          <li>
            <a href="#" target="_blank" rel="noopener" aria-label="Instagram"
              class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-orange hover:opacity-90 transition-opacity">
              <img :src="inst" alt="" class="h-5 w-5" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener" aria-label="Facebook"
              class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-orange hover:opacity-90 transition-opacity">
              <img :src="fb" alt="" class="h-5 w-5" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener" aria-label="YouTube"
              class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-orange hover:opacity-90 transition-opacity">
              <img :src="yt" alt="" class="h-5 w-5" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener" aria-label="X"
              class="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white text-orange hover:opacity-90 transition-opacity">
              <img :src="x" alt="" class="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Optional: slight polish for lists on small screens */
@media (max-width: 480px) {
  ul.list-disc {
    margin-left: 1.25rem;
    /* keep bullets visible on tiny screens */
  }
}
</style>
