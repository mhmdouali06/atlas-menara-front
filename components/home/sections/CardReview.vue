<script setup lang="ts">
import star from "@/assets/img/icon/GoldStar.svg";
interface itemInterface {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  rating: number;
}
const props = defineProps<{
  item: itemInterface;
}>();
</script>
<template>
  <div
    class="card grid grid-cols-12 gap-4 w-full p-4 shadow-lg bg-white rounded-lg box-border min-h-[145px] my-4"
  >
    <div class="flex col-span-2 flex-col items-center gap-2 justify-center">
      <div>
        <img
          :src="props.item.image"
          :alt="props.item.title"
          class="rounded-full"
        />
      </div>
      <div
        class="flex items-center gap-2 bg-[#C1FFFA] justify-center px-4 rounded-full"
      >
        <img :src="star" alt="gold star" />
        <span class="text-[#1DA599]">{{ props.item.rating }}</span>
      </div>
    </div>
    <div class="content col-span-10">
      <span
        class="bg-[#808080] category text-[#000239] rounded-xl px-2 text-center font-poppins block w-20"
        >{{ props.item.category }}</span
      >
      <h3 class="font-bold text-[#4A4A4A] font-volkhov">
        {{ props.item.title }}
      </h3>
      <p class="font-poppins text-[#808080] text-[18px]">
        {{ props.item.description }}
      </p>
    </div>
  </div>
</template>
<style scoped>
* {
  direction: ltr;
  text-align: left;
}
.category {
  text-align: center;
}
</style>
