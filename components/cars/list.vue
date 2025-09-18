<template>
  <section class="w-[92%] mx-auto py-8 md:py-12 mt-24">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <CarsSectionsCarCard
        v-for="v in items"
        :key="v.id ?? v.title"
        :item="v"
        @toggle-like="onToggleLike"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
type Vehicle = {
  id?: string | number;
  title: string;
  category: string;
  image: string;
  passengers: number;
  href?: string;
  liked?: boolean;
};

const props = defineProps<{
  items: Vehicle[];
}>();

const emit = defineEmits<{
  (e: "update:items", items: Vehicle[]): void;
}>();

// simple local toggle helper (optional)
function onToggleLike(item: Vehicle) {
  const next = props.items.map((v) =>
    v === item ? { ...v, liked: !v.liked } : v
  );
  emit("update:items", next);
}
</script>
