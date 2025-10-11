<template>
  <div class="flex items-center justify-between">
    <h2 class="text-lg md:text-3xl font-bold font-volkhov text-[#181E4B] capitalize">
      {{ firstSegment }} Plan
    </h2>
  </div>

  <div class="mt-6">
    <DetailPackageSectionsPlanTimeline :steps="item.plans" />
  </div>


</template>

<script setup lang="ts">
import type { TravelPackage } from '~/types/travel-package';

import { useRequestURL } from '#app'

// SSR-safe: works both server & client
const url = useRequestURL()
const firstSegment = url.pathname.split('/')[1] || ''

const props = defineProps<{ item: TravelPackage }>();


</script>
