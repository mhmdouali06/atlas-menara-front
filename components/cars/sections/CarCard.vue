<template>
  <div class="group relative flex flex-col p-5 justify-between rounded-2xl bg-white  shadow-sm transition h-[388px]">
    <!-- like / wishlist -->
    <button type="button"
      class="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition hover:text-rose-500"
      @click="$emit('toggle-like', item)" :aria-pressed="liked ? 'true' : 'false'"
      :title="liked ? 'Quitar de favoritos' : 'Agregar a favoritos'">
      <!-- Heart outline/filled -->
      <svg v-if="!liked" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8">
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
      <svg v-else viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5A4.5 4.5 0 0 1 6.5 4c1.74 0 3.41.81 4.5 2.09A6 6 0 0 1 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </button>

    <!-- title -->
    <div class="mb-2 pr-12 font-poppins">
      <h3 class="text-lg font-bold text-slate-900 leading-6">
        {{ item.title }}
      </h3>
      <p class="text-xs uppercase tracking-wide text-slate-400">
        {{ item.category.name }}
      </p>
    </div>

    <!-- image -->
    <div class="my-4 w-full flex  items-center justify-center">
      <img :src="fileUrl(item.thumbnail?.filePath, 'car')" :alt="item.title" class="h-32 w-full object-cover md:h-36"
        loading="lazy" />
    </div>

    <!-- meta -->
    <div class="mt-2 flex items-center gap-2 text-slate-500 font-poppins">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M9 2C6.38 2 4.25 4.13 4.25 6.75C4.25 9.32 6.26 11.4 8.88 11.49C8.96 11.48 9.04 11.48 9.1 11.49C9.12 11.49 9.13 11.49 9.15 11.49C9.16 11.49 9.16 11.49 9.17 11.49C11.73 11.4 13.74 9.32 13.75 6.75C13.75 4.13 11.62 2 9 2Z"
          fill="#90A3BF" />
        <path
          d="M14.0809 14.1509C11.2909 12.2909 6.74094 12.2909 3.93094 14.1509C2.66094 15.0009 1.96094 16.1509 1.96094 17.3809C1.96094 18.6109 2.66094 19.7509 3.92094 20.5909C5.32094 21.5309 7.16094 22.0009 9.00094 22.0009C10.8409 22.0009 12.6809 21.5309 14.0809 20.5909C15.3409 19.7409 16.0409 18.6009 16.0409 17.3609C16.0309 16.1309 15.3409 14.9909 14.0809 14.1509Z"
          fill="#90A3BF" />
        <path
          d="M19.9894 7.3401C20.1494 9.2801 18.7694 10.9801 16.8594 11.2101C16.8494 11.2101 16.8494 11.2101 16.8394 11.2101H16.8094C16.7494 11.2101 16.6894 11.2101 16.6394 11.2301C15.6694 11.2801 14.7794 10.9701 14.1094 10.4001C15.1394 9.4801 15.7294 8.1001 15.6094 6.6001C15.5394 5.7901 15.2594 5.0501 14.8394 4.4201C15.2194 4.2301 15.6594 4.1101 16.1094 4.0701C18.0694 3.9001 19.8194 5.3601 19.9894 7.3401Z"
          fill="#90A3BF" />
        <path
          d="M21.9902 16.5904C21.9102 17.5604 21.2902 18.4004 20.2502 18.9704C19.2502 19.5204 17.9902 19.7804 16.7402 19.7504C17.4602 19.1004 17.8802 18.2904 17.9602 17.4304C18.0602 16.1904 17.4702 15.0004 16.2902 14.0504C15.6202 13.5204 14.8402 13.1004 13.9902 12.7904C16.2002 12.1504 18.9802 12.5804 20.6902 13.9604C21.6102 14.7004 22.0802 15.6304 21.9902 16.5904Z"
          fill="#90A3BF" />
      </svg>
      <span class="text-sm">{{ item.seats }} Pasajeros</span>
    </div>

    <!-- cta -->
    <div class="mt-5 flex justify-center">
      <NuxtLink :to="'/coches/' + item.slug"
        class="inline-flex items-center justify-center rounded-md bg-[#F4A021] font-poppins px-5 py-2.5 text-sm font-semibold text-white shadow transition">
        Reservar
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fileUrl } from '~/helpers/functions/imageURl';
import type { Car } from '~/types/car';



const props = defineProps<{
  item: Car;
}>();

const liked = computed(() => props.item.liked === true);
</script>
