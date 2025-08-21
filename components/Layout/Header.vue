<template>
  <header>
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between"
    >
      <!-- Logo -->
      <div class="text-2xl font-bold text-blue">
        <NuxtLink to="/"><img :src="logo" alt="logo" class="h-8" /></NuxtLink>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex gap-8 items-center relative">
        <a href="#" class="active font-poppins">Inicio</a>

        <!-- Dropdown -->
        <div class="relative group">
          <button class="text-gray-800 hover:text-blue flex items-center gap-1">
            Todos los cursos
            <svg
              class="w-4 h-4 text-gray-500 group-hover:text-blue transition"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <!-- Fake dropdown -->
          <div
            class="absolute hidden group-hover:block bg-white shadow-lg rounded-md top-full left-0 mt-2 w-48 transition-all duration-200 z-50"
          >
            <a
              href="#"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              >Desarrollo Web</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              >Marketing Digital</a
            >
            <a
              href="#"
              class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              >Diseño UX/UI</a
            >
          </div>
        </div>

        <a
          href="https://selectalent.es/"
          target="_blank"
          class="text-gray-800 hover:text-blue"
          >Sobre Nosotros</a
        >
        <a href="#" class="text-gray-800 hover:text-blue"
          >¿Por qué elegir nuestros talleres?</a
        >
      </nav>

      <!-- Contact Button -->
      <div class="hidden md:block">
        <NuxtLink
          to="/#contact"
          class="bg-blue text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Contacto
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden text-gray-700 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile Nav -->
    <transition name="fade">
      <div
        v-if="isOpen"
        class="md:hidden bg-white shadow-inner px-4 py-4 transition-all duration-300"
      >
        <nav class="flex flex-col gap-3">
          <a href="#" class="text-blue font-semibold">Inicio</a>
          <details class="group">
            <summary
              class="cursor-pointer text-gray-800 flex justify-between items-center"
            >
              Todos los cursos
              <svg
                class="w-4 h-4 text-gray-500 group-open:rotate-180 transition"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </summary>
            <div class="ml-4 mt-2 space-y-2">
              <a href="#" class="block text-sm text-gray-600">Desarrollo Web</a>
              <a href="#" class="block text-sm text-gray-600"
                >Marketing Digital</a
              >
              <a href="#" class="block text-sm text-gray-600">Diseño UX/UI</a>
            </div>
          </details>
          <a
            href="https://selectalent.es/"
            target="_blank"
            class="text-gray-800"
            >Sobre Nosotros</a
          >
          <a href="#" class="text-gray-800"
            >¿Por qué elegir nuestros talleres?</a
          >
          <NuxtLink
            to="/#contact"
            class="bg-blue text-white text-center py-2 rounded-md shadow hover:bg-blue-700"
          >
            Contacto
          </NuxtLink>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import logo from "@/assets/img/global/logo.png";

const isOpen = ref(false);
</script>

<style scoped>
* {
  font-family: "Poppins", sans-serif;
}
.active {
  color: #0d72ff;
  font-weight: 600;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
