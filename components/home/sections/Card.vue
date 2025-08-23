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
<template>
  <div
    class="card flex gap-4 w-full p-4 shadow bg-white rounded-lg box-border items-center min-h-[136px]"
  >
    <img :src="props.item.image" :alt="props.item.title" class="w-14 h-14" />
    <div class="content">
      <h3 class="font-bold text-[#07123D] font-volkhov">
        {{ props.item.title }}
      </h3>
      <p class="font-poppins text-[#808080] text-[18px]">
        {{ props.item.description }}
      </p>
    </div>
  </div>
</template>
