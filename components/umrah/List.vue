<template>
  <section class="box-content">
    <div class="grid grid-cols-12 gap-6">
      <!-- Show 4 skeletons while loading -->
    </div>

    <!-- Mobile: floating filter icon (left, fixed, icon-only) -->
    <button v-if="prices.max > 0" type="button"
      class="fixed left-0 opacity-50 top-[40%] z-40 md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-orange text-white shadow-lg shadow-orange/40 active:scale-95 transition-transform"
      @click="showFilters = true">
      <!-- sliders icon only -->
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h10M4 12h16M4 18h8" />
        <circle cx="14" cy="6" r="1.5" />
        <circle cx="8" cy="12" r="1.5" />
        <circle cx="16" cy="18" r="1.5" />
      </svg>
    </button>

    <div class="w-[90%] md:w-[85%] mx-auto my-10">
      <div class="grid grid-cols-12 gap-4 md:gap-10 justify-between">
        <!-- Filters -->
        <div class="col-span-12 md:col-span-4">
          <!-- Desktop: static sidebar -->
          <div class="hidden md:block" v-if="prices.max > 0">
            <UmrahSectionsLeftFilter :prices="prices" @apply="emit('apply', $event)" @open="emit('open')" />
          </div>

          <!-- Mobile: slide-over drawer -->
          <transition name="filter-fade">
            <div v-if="showFilters && prices.max > 0" class="fixed inset-0 z-40 flex md:hidden">
              <!-- Backdrop -->
              <div class="flex-1 bg-black/40" @click="showFilters = false"></div>

              <!-- Panel (slide from left to match icon side) -->
              <div
                class="w-[85%] max-w-sm bg-white h-full p-4 overflow-y-auto shadow-xl transform transition-transform">
                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-semibold text-gray-900">Filtros</h3>
                  <button type="button" class="p-1 rounded-full hover:bg-gray-100" @click="showFilters = false">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>

                <UmrahSectionsLeftFilter :prices="prices"
                  @apply="payload => { emit('apply', payload); showFilters = false }"
                  @open="() => { emit('open'); showFilters = false }" />
              </div>
            </div>
          </transition>
        </div>

        <!-- 4 items -->
        <div v-if="!props.loading" class="col-span-12 md:col-span-8 grid grid-cols-12 gap-6 md:gap-10">
          <div v-for="item in items.slice(0, 4)" class="col-span-12 md:col-span-6" :key="item.id">
            <UiCard :item="item" class="w-full" />
          </div>
        </div>
        <div v-else class="col-span-12 md:col-span-8">
          <UiGridLoading :items="4" />
        </div>
      </div>

      <!-- Others -->
      <div class="grid grid-cols-12 gap-6 md:gap-10 mt-10">
        <div v-for="item in items.slice(4)" class="col-span-12 md:col-span-4" :key="item.id">
          <UiCard :item="item" class="w-full" />
        </div>
      </div>

      <div class="flex justify-center" v-if="items.length < totalItem">
        <button @click="$emit('next-page')" :disabled="props.loading"
          class="relative bg-orange font-poppins text-white text-center w-[90%] md:w-[85%] mx-auto py-4 rounded-lg my-4 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed">
          <span v-if="!props.loading">Mostrar más resultados</span>
          <span v-else class="flex items-center justify-center gap-2">
            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
            Cargando...
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TravelPackage } from "~/types/travel-package";

const props = defineProps<{
  items: TravelPackage[];
  loading: boolean;
  totalItem: number;
  prices: { min: number; max: number };
}>();

const emit = defineEmits<{
  (e: "next-page"): void;
  (e: "open"): void;
  (e: "apply", payload: { priceMin: number; priceMax: number; stars: number; locations: string }): void;
}>();

const showFilters = ref(false);
</script>

<style scoped>
::v-deep(.main) {
  width: 100%;
}

/* Simple fade for backdrop + panel */
.filter-fade-enter-active,
.filter-fade-leave-active {
  transition: opacity 0.2s ease;
}

.filter-fade-enter-from,
.filter-fade-leave-to {
  opacity: 0;
}
</style>
