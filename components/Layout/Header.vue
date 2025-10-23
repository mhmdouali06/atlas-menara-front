<template>
  <header>
    <div class="mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="text-2xl font-bold text-blue">
        <NuxtLink to="/"><img :src="logo" alt="logo" /></NuxtLink>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex md:gap-3 lg:gap-5 items-center relative">
        <NuxtLink to="/" class="active font-poppins">Inicio</NuxtLink>

        <!-- Umrah -->
        <div class="relative" ref="umrahDropdownRef">
          <div class="flex items-center">
            <NuxtLink to="/umrah" class="text-gray-800 hover:text-orange">Umrah</NuxtLink>
            <button @click="toggleDropdown('umrah')"
              class="text-gray-800 hover:text-orange flex items-center gap-1 ml-1">
              <svg class="w-4 h-4 text-gray-500 hover:text-orange transition"
                :class="{ 'rotate-180': openDropdown === 'umrah' }" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div v-if="openDropdown === 'umrah'"
            class="absolute bg-white shadow-lg rounded-md top-full left-0 mt-2 w-48 z-50">
            <NuxtLink to="/umrah/package1" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              @click="closeAllDropdowns">
              Paquete Básico
            </NuxtLink>
            <NuxtLink to="/umrah/package2" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              @click="closeAllDropdowns">
              Paquete Premium
            </NuxtLink>
            <NuxtLink to="/umrah/package3" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              @click="closeAllDropdowns">
              Paquete Deluxe
            </NuxtLink>
          </div>
        </div>

        <!-- Hajj -->
        <div class="relative" ref="hajjDropdownRef">
          <div class="flex items-center">
            <NuxtLink to="/hajj" class="text-gray-800 hover:text-orange">Hajj</NuxtLink>
            <button @click="toggleDropdown('hajj')"
              class="text-gray-800 hover:text-orange flex items-center gap-1 ml-1">
              <svg class="w-4 h-4 text-gray-500 hover:text-orange transition"
                :class="{ 'rotate-180': openDropdown === 'hajj' }" fill="none" stroke="currentColor" stroke-width="2"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div v-if="openDropdown === 'hajj'"
            class="absolute bg-white shadow-lg rounded-md top-full left-0 mt-2 w-48 z-50">
            <NuxtLink to="/hajj/package1" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              @click="closeAllDropdowns">
              Hajj Regular
            </NuxtLink>
            <NuxtLink to="/hajj/package2" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              @click="closeAllDropdowns">
              Hajj Plus
            </NuxtLink>
            <NuxtLink to="/hajj/package3" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              @click="closeAllDropdowns">
              Hajj VIP
            </NuxtLink>
          </div>
        </div>

        <NuxtLink to="/viaje" class="text-gray-800 hover:text-orange">Viajes & Tours</NuxtLink>

        <!-- Servicios -->
        <div class="relative" ref="serviciosDropdownRef">
          <div class="flex items-center">
            <NuxtLink to="/servicios" class="text-gray-800 hover:text-orange">Servicios</NuxtLink>
            <button @click="toggleDropdown('servicios')"
              class="text-gray-800 hover:text-orange flex items-center gap-1 ml-1">
              <svg class="w-4 h-4 text-gray-500 hover:text-orange transition"
                :class="{ 'rotate-180': openDropdown === 'servicios' }" fill="none" stroke="currentColor"
                stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <div v-if="openDropdown === 'servicios'"
            class="absolute bg-white shadow-lg rounded-md top-full left-0 mt-2 w-48 z-50">
            <NuxtLink to="/servicios/visa" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              @click="closeAllDropdowns">
              Visa Assistance
            </NuxtLink>
            <NuxtLink to="/servicios/transport" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              @click="closeAllDropdowns">
              Transporte
            </NuxtLink>
            <NuxtLink to="/servicios/hotel" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition"
              @click="closeAllDropdowns">
              Reservas de Hotel
            </NuxtLink>
          </div>
        </div>

        <NuxtLink to="/blogs" class="text-gray-800 hover:text-orange">Blogs</NuxtLink>
      </nav>

      <!-- Contact Button -->
      <div class="hidden md:block">
        <NuxtLink to="/#contact"
          class="bg-orange text-white px-5 py-2 rounded-full shadow-md hover:bg-orange-700 transition">
          Contactar un agente
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isOpen = !isOpen" class="md:hidden text-gray-700 focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Nav -->
    <transition name="fade">
      <div v-if="isOpen" class="md:hidden bg-white shadow-inner px-4 py-4">
        <nav class="flex flex-col gap-3">
          <NuxtLink to="/" class="text-orange font-semibold" @click="closeMobileMenu">Inicio</NuxtLink>

          <!-- Umrah -->
          <details class="group" ref="umrahMobileDetails">
            <summary class="cursor-pointer text-gray-800 flex justify-between items-center">
              <NuxtLink to="/umrah" @click="closeMobileMenu">Umrah</NuxtLink>
              <svg class="w-4 h-4 text-gray-500 group-open:rotate-180 transition" fill="none" stroke="currentColor"
                stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div class="ml-4 mt-2 space-y-2">
              <NuxtLink to="/umrah/package1" class="block text-sm text-gray-600" @click="closeMobileMenu">Paquete Básico
              </NuxtLink>
              <NuxtLink to="/umrah/package2" class="block text-sm text-gray-600" @click="closeMobileMenu">Paquete
                Premium</NuxtLink>
              <NuxtLink to="/umrah/package3" class="block text-sm text-gray-600" @click="closeMobileMenu">Paquete Deluxe
              </NuxtLink>
            </div>
          </details>

          <!-- Hajj -->
          <details class="group" ref="hajjMobileDetails">
            <summary class="cursor-pointer text-gray-800 flex justify-between items-center">
              <NuxtLink to="/hajj" @click="closeMobileMenu">Hajj</NuxtLink>
              <svg class="w-4 h-4 text-gray-500 group-open:rotate-180 transition" fill="none" stroke="currentColor"
                stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div class="ml-4 mt-2 space-y-2">
              <NuxtLink to="/hajj/package1" class="block text-sm text-gray-600" @click="closeMobileMenu">Hajj Regular
              </NuxtLink>
              <NuxtLink to="/hajj/package2" class="block text-sm text-gray-600" @click="closeMobileMenu">Hajj Plus
              </NuxtLink>
              <NuxtLink to="/hajj/package3" class="block text-sm text-gray-600" @click="closeMobileMenu">Hajj VIP
              </NuxtLink>
            </div>
          </details>

          <NuxtLink to="/viaje" class="text-gray-800" @click="closeMobileMenu">Viajes & Tours</NuxtLink>

          <!-- Servicios -->
          <details class="group" ref="serviciosMobileDetails">
            <summary class="cursor-pointer text-gray-800 flex justify-between items-center">
              <NuxtLink to="/servicios" @click="closeMobileMenu">Servicios</NuxtLink>
              <svg class="w-4 h-4 text-gray-500 group-open:rotate-180 transition" fill="none" stroke="currentColor"
                stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div class="ml-4 mt-2 space-y-2">
              <NuxtLink to="/servicios/visa" class="block text-sm text-gray-600" @click="closeMobileMenu">Visa
                Assistance</NuxtLink>
              <NuxtLink to="/servicios/transport" class="block text-sm text-gray-600" @click="closeMobileMenu">
                Transporte</NuxtLink>
              <NuxtLink to="/servicios/hotel" class="block text-sm text-gray-600" @click="closeMobileMenu">Reservas de
                Hotel</NuxtLink>
            </div>
          </details>

          <NuxtLink to="/blogs" class="text-gray-800" @click="closeMobileMenu">Blogs</NuxtLink>
          <NuxtLink to="/#contact" class="bg-orange text-white text-center py-2 rounded-md shadow hover:bg-orange-700"
            @click="closeMobileMenu">
            Contactar un agente
          </NuxtLink>
        </nav>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import logo from "@/assets/img/global/logo.png";

const isOpen = ref(false);
const openDropdown = ref<string | null>(null);

// Refs for dropdown containers
const umrahDropdownRef = ref<HTMLElement | null>(null);
const hajjDropdownRef = ref<HTMLElement | null>(null);
const serviciosDropdownRef = ref<HTMLElement | null>(null);

// Refs for mobile details elements
const umrahMobileDetails = ref<HTMLElement | null>(null);
const hajjMobileDetails = ref<HTMLElement | null>(null);
const serviciosMobileDetails = ref<HTMLElement | null>(null);

// Toggle dropdown
const toggleDropdown = (dropdown: string) => {
  openDropdown.value = openDropdown.value === dropdown ? null : dropdown;
};

// Close all dropdowns
const closeAllDropdowns = () => {
  openDropdown.value = null;
};

// Close mobile menu
const closeMobileMenu = () => {
  isOpen.value = false;
};

// Click outside handler
const handleClickOutside = (event: MouseEvent) => {
  // Check if click is outside all dropdown containers
  if (
    umrahDropdownRef.value && !umrahDropdownRef.value.contains(event.target as Node) &&
    hajjDropdownRef.value && !hajjDropdownRef.value.contains(event.target as Node) &&
    serviciosDropdownRef.value && !serviciosDropdownRef.value.contains(event.target as Node)
  ) {
    closeAllDropdowns();
  }
};

// Route change handler
const route = useRoute();
watch(() => route.path, () => {
  closeAllDropdowns();
  closeMobileMenu();
});

// Set up event listeners
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
* {
  font-family: "Poppins", sans-serif;
}

.active {
  color: var(--vt-c-orange);
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

.rotate-180 {
  transform: rotate(180deg);
}
</style>