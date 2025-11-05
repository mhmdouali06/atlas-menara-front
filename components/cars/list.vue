<template>
  <section class="w-[92%] mx-auto py-8 md:py-12 mt-48  md:mt-24">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" v-if="!loading">
      <CarsSectionsCarCard v-for="v in items" :key="v.id ?? v.title" :item="v"
        @toggle-like="$emit('onToggleLike', v)" />
    </div>
    <div v-else>
      <UiGridLoading />
    </div>
    <div class="flex justify-center" v-if="items.length < totalItem">
      <button @click="$emit('next-page')" :disabled="props.loading"
        class="relative bg-orange font-poppins text-white text-center w-[90%] mx-auto py-4 rounded-lg my-4 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed">
        <span v-if="!props.loading">Mostrar más resultados </span>
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
  </section>
</template>

<script setup lang="ts">
import type { Car } from '~/types/car';



const props = defineProps<{
  items: Car[];
  loading: boolean;
  totalItem: number
}>();

const emit = defineEmits<{
  (e: "update:items", items: Car[]): void;
  (e: "next-page"): void;
  (e: "onToggleLike", item: Car): void;
}>();


</script>
