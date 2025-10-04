<template>
  <div class="flex items-center justify-between">
    <h2 class="text-lg md:text-3xl font-bold font-volkhov text-[#181E4B]">
      Umrah Plan
    </h2>
  </div>

  <div class="mt-6">
    <DetailUmrahSectionsPlanTimeline :steps="item.plans" />
  </div>


</template>

<script setup lang="ts">
import type { Umrah } from '~/types/Umrah';


const props = defineProps<{ item: Umrah }>();


</script>
