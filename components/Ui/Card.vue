<script setup lang="ts">
import vol from "@/assets/img/icon/vol.svg";
import bed from "@/assets/img/icon/WhiteBed.svg";
import hotel from "@/assets/img/icon/hotel.svg";
import visa from "@/assets/img/icon/visa.svg";
import { fileUrl } from "~/helpers/functions/imageURl";
import { formatDateEs, formatDuration } from "~/helpers/functions/formatDuration";
import type { TravelPackage } from "~/types/travel-package";

const props = defineProps<{
  item: TravelPackage;
}>();
</script>
<template>

  <div class="main cursor-pointer " @click="navigateTo(`/${props.item.type}/${props.item.slug}/`)">
    <div v-if="props.item.status"
      class="absolute top-3 right-3 z-[3] rounded-full px-3 py-1 text-[10px] font-semibold shadow-md  bg-white"
      :class="getStatusColor(props.item.status)">
      {{ getStatusLabel(props.item.status) }}
    </div>

    <div class="blue-background"></div>
    <img :src="fileUrl(item?.thumbnail?.filePath, props.item.type)" class="w-full h-full object-cover main-bg mb-2"
      :alt="props.item.title" />
    <div class="p-4 w-full">
      <p class="text-white font-semibold text-lg font-volkhov w-fit relative title-card">
        {{ props.item.title }} <spa class="text-lg font-normal"> "{{
          formatDuration(props.item.startsAt, props.item.endsAt) }}"</spa>
      </p>
      <p class="font-poppins text-white mt-2">
        Del {{ formatDateEs(props.item.startsAt) }} al {{ formatDateEs(props.item.endsAt) }}
      </p>
      <div class="flex justify-between mt-2">
        <div class="flex gap-4 other">
          <div>
            <img :src="vol" alt="vol" />
          </div>
          <div>
            <span class="text-white font-poppins text-sm me-1">{{ props.item.habitation === "simple" ? 1 :
              props.item.habitation === "doble" ? 2 :
                3 }}</span>
            <img :src="bed" alt="bed" class="bed" />
          </div>
          <div>
            <img :src="hotel" alt="hotel" />
          </div>
          <div>
            <img :src="visa" alt="visa" />
          </div>
        </div>
        <p class="font-volkhov text-2xl text-white ">
          {{ props.item.price }} €
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* * {
  position: relative;
  z-index: 1;
} */

.main {
  position: relative;
  border-radius: 10px;
  width: 378px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
}



.main-bg {
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}

.blue-background {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: rgba(14, 32, 65, 0.69);
}

.other div {
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
}

.other img {
  width: 21px;
  height: 21px;
  margin: 0;
  padding: 0;
}

.other .bed {
  width: 15px;
  height: 15px;
}

.title-card::after {
  content: "";
  left: 0;
  width: 100%;
  position: absolute;
  bottom: -4px;
  border: 1px solid white;
}
</style>
