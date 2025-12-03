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
    class="card flex flex-wrap items-center justify-center md:justify-normal  md:flex-nowrap gap-4 w-fit  py-4 md:py-0 px-4 shadow bg-white rounded-lg box-border min-h-[135px] md:min-h-[110px] ">
    <img :src="props.item.image" :alt="props.item.title" class="w-14 h-14 flex-none shrink-0" />

    <div class="content w-full text-center md:text-left">
      <h3 class="font-bold text-[#07123D] font-volkhov truncate md:whitespace-normal">
        {{ props.item.title }}
      </h3>
      <p class="font-poppins text-[#808080] text-sm md:text-base text-wrap md:text-nowrap "
        v-html="props.item.description">
      </p>


    </div>
  </div>
</template>
