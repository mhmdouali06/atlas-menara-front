<!-- components/UmrahPlanTimeline.vue -->
<template>
  <div class="relative">
    <!-- dashed vertical line -->
    <div class="absolute left-[18px] top-0 bottom-6 border-l-2 border-dashed border-[#f5a524]/70"></div>

    <ul class="space-y-8">
      <li v-for="(s, i) in steps" :key="i" class="grid grid-cols-[56px_1fr] items-start gap-4">
        <!-- number badge -->
        <div class="relative z-10">
          <div class="w-10 h-10 rounded-md bg-[#f5a524] text-white grid place-items-center font-bold">
            {{ pad(i + 1) }}
          </div>
        </div>

        <!-- text -->
        <div>
          <p class="font-semibold text-[#181E4B] font-poppins">
            {{ s.title }}
          </p>
          <p v-if="s.description" class="mt-1 text-[15px] text-[#181E4B] font-poppins" v-html="s.description">
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
type Step = { title: string; description?: string };
const props = defineProps<{ steps: Step[] }>();
const pad = (n: number) => String(n).padStart(2, "0");
</script>
