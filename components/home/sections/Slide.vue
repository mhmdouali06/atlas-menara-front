<script setup lang="ts">
import { formatText } from "~/helpers/functions/formatText";
import icon from "@/assets/img/icon/start.svg";
import type { TravelPackage } from "~/types/travel-package";
import { fileUrl } from "~/helpers/functions/imageURl";


const props = defineProps<{
  item: TravelPackage;
}>();
</script>
<template>
  <div class="relative w-full min-h-[526px] h-full">
    <img :src="fileUrl(props.item.thumbnail?.filePath, props.item.type)" :alt="formatText(props.item.title)"
      class="w-full h-full object-cover absolute left-0 top-0 z-[-2]" />
    <div class="bg"></div>
    <div class="flex flex-col items-center justify-center w-full h-full">
      <h2 v-html="formatText(props.item.title)"
        class="text-white text-3xl/tight md:text-4xl/tight relative mb-4 font-volkhov font-bold text-center"></h2>
      <p v-html="formatText(props.item.description)"
        class="text-white font-poppins text-center font-semibold px-4 md:px-0 w-full md:w-1/2"></p>
      <div class="flex flex-col md:flex-row items-center gap-4 mt-4">
        <button
          class="bg-orange text-white px-5 py-2 rounded-full shadow-md font-poppins hover:bg-white hover:text-orange transition-all duration-300 easy">
          Ver ofertas de Umrah
        </button>
        <button
          class="flex items-center gap-4 border text-white border-white px-5 py-2 rounded-full hover:bg-white hover:text-orange duration-300 easy">
          <span class="font-semibold font-poppins">Contactar un agente</span>
          <img :src="icon" alt="icon" />
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: rgba(14, 32, 65, 0.69);
}

h2::after {
  content: "";
  left: 0;
  width: 100%;
  position: absolute;
  bottom: 0px;
  border: 1px solid white;
}
</style>
