<template>
  <article class="group">
    <!-- Image -->
    <div class="overflow-hidden rounded-2xl shadow-sm">
      <img :src="fileUrl(props.item.thumbnail?.filePath, 'viaje')" :alt="props.item.title"
        class="h-56 w-full object-cover transition duration-300 md:h-80" />
    </div>

    <!-- Text -->
    <div class="pt-6">
      <h3 class="text-2xl font-extrabold tracking-tight text-[#0E2041] font-poppins">
        {{ props.item.title }}
      </h3>

      <p class="mt-3 text-[15px] leading-6 text-[#808080] font-poppins" v-html="props.item.description">

      </p>

      <!-- CTA -->
      <NuxtLink :to="`/viaje/${props.item.slug}`"
        class="mt-4 inline-flex items-center gap-2 text-[15px] text-[#ff8a00] hover:opacity-90 font-poppins">
        Más Detalles
        <!-- {{ cta }} -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor"
          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </NuxtLink>
    </div>
  </article>
</template>

<script setup lang="ts">
import { fileUrl } from '~/helpers/functions/imageURl';
import type { TravelPackage } from '~/types/travel-package';

const props =
  defineProps<{
    item: TravelPackage;
  }>();
</script>
