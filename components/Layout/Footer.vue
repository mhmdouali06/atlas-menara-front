<template>
  <footer class="">
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="text-2xl text-blue-600">
        <img :src="logo" alt="logo" class="h-8" />
      </NuxtLink>

      <!-- Links -->
      <div class="flex gap-6 text-sm">
        <NuxtLink to="/terminos-legales" class="text-blue-600 hover:text-blue">
          TÉRMINOS LEGALES
        </NuxtLink>
        <NuxtLink
          to="/politica-de-privacidad"
          class="text-gray-800 hover:text-blue"
        >
          POLÍTICA DE PRIVACIDAD
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import logo from "@/assets/img/global/logo.png";
</script>
<style scoped>
* {
  font-family: "Poppins", sans-serif;
}
</style>
