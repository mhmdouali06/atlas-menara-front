<template>
  <section class="w-[92%] mx-auto py-8 md:py-12 mt-24">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" v-if="!loading">
      <CarsSectionsCarCard v-for="v in items" :key="v.id ?? v.title" :item="v" @toggle-like="onToggleLike" />
    </div>
    <div v-else>
      <UiGridLoading />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Car } from '~/types/car';



const props = defineProps<{
  items: Car[];
  loading: boolean;
}>();

const emit = defineEmits<{
  (e: "update:items", items: Car[]): void;
}>();

// simple local toggle helper (optional)
function onToggleLike(item: Car) {
  const next = props.items.map((v) =>
    v === item ? { ...v, liked: !v.liked } : v
  );
  emit("update:items", next);
}
</script>
