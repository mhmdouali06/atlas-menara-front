<template>
  <section class="box-content ">
    <div class="grid grid-cols-12 gap-6">
      <!-- Show 4 skeletons while loading -->
    </div>
    <div class="w-[90%] mx-auto my-10">
      <!-- first 4 item -->
      <div class="grid grid-cols-12 gap-4 md:gap-10  justify-between">
        <!-- Filters -->
        <div class="col-span-12 md:col-span-4">
          <UmrahSectionsLeftFilter v-if="prices.max > 0" :prices="prices" @apply="emit('apply', $event)"
            @open="emit('open')" />

        </div>
        <!-- 4 items -->
        <div v-if="!props.loading" class="col-span-12 md:col-span-8 grid grid-cols-12 gap-4 md:gap-10">

          <div v-for="item in items.slice(0, 4)" class="col-span-12 md:col-span-6" :key="item.id">


            <UiCard :item="item" class="w-full" />
          </div>
        </div>
        <div v-else class="col-span-12 md:col-span-8">

          <UiGridLoading :items="4" />
        </div>

      </div>

      <!-- -------------------------------------others----------------------------- -->
      <div class="grid grid-cols-12 gap-4 md:gap-10 mt-10">
        <div v-for="item in items.slice(4)" class="col-span-12 md:col-span-4" :key="item.id">
          <UiCard :item="item" class="w-full" />
        </div>
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

    </div>
  </section>
</template>
<script lang="ts" setup>
const props = defineProps<{ items: TravelPackage[], loading: boolean, totalItem: number, prices: { min: number, max: number } }>()
import img1 from "@/assets/img/umrah/tour-img7 (1).png";
import img2 from "@/assets/img/umrah/tour-img7 (3).png";
import img3 from "@/assets/img/umrah/tour-img7.png";
import type { TravelPackage } from "~/types/travel-package";

const emit = defineEmits<{
  (e: 'next-page'): void
  (e: 'open'): void
  (e: 'apply', payload: { priceMin: number; priceMax: number; stars: number; locations: string }): void
}>()

</script>
<style scoped>
::v-deep(.main) {
  width: 100%;
}
</style>
