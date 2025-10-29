<script setup lang="ts">
interface itemInterface {
  id: number;
  title: string;
  description: string;
  image: string;
}
const props = defineProps<{
  item: itemInterface;
}>();
</script>
<!-- HomeSectionsCard.vue -->
<template>
  <div
    class="card flex flex-wrap md:flex-nowrap gap-4 w-full p-4 shadow bg-white rounded-lg box-border items-start min-h-[136px]">
    <img :src="props.item.image" :alt="props.item.title" class="w-14 h-14 flex-none shrink-0" />

    <div class="content min-w-0">
      <h3 class="font-bold text-[#07123D] font-volkhov truncate md:whitespace-normal">
        {{ props.item.title }}
      </h3>
      <p class="font-poppins text-[#808080] text-sm md:text-base ">
        {{ props.item.description.slice(0, 10) }}
      </p>
    </div>
  </div>
</template>
