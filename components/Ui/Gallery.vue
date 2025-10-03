<template>
  <div>
    <div class="grid grid-cols-12 gap-4 object-contain">
      <div class="left col-span-4">
        <div
          v-for="image in slots.slice(0, 3)"
          :key="image.src"
          class="flex flex-col gap-8"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="w-full h-[200px] mb-4 object-cover"
          />
        </div>
      </div>
      <div class="right col-span-8 relative">
        <img
          v-if="slots.length > 3"
          :src="slots[3].src"
          :alt="slots[3].alt"
          class="w-full h-[634px] object-cover"
        />
      </div>
    </div>
    <div class="bottom">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-8">
          <img
            v-if="slots.length > 4"
            class="w-full h-[200px] object-fill"
            :src="slots[4].src"
            :alt="slots[4].alt"
          />
        </div>
        <div class="col-span-4">
          <img
            v-if="slots.length > 5"
            class="w-full h-[200px] object-fill"
            :src="slots[5].src"
            :alt="slots[5].alt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Img = string | { src: string; alt?: string };
const props = defineProps<{ images: Img[] }>();
const norm = (x: Img) => (typeof x === "string" ? { src: x, alt: "" } : x);
// Use first 6 images. Missing slots are skipped gracefully.
const slots = computed(() => props.images.slice(0, 6).map(norm));
</script>
