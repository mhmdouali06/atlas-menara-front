<template>
  <section class="relative h-[239px]">
    <div v-if="props.item" class="h-full w-full relative overflow-hidden flex justify-center items-center">

      <div class="bg"></div>
      <img :src="fileUrl(props.item.thumbnail?.filePath, firstSegment)" class="img-bg" alt="umrah bg" />
      <div class="h-full w-full flex items-center">
        <h1 class="text-3xl md:text-5xl font-bold text-center font-volkhov text-white w-full">
          {{ props.item.title }}
        </h1>
      </div>
    </div>
    <ui-detail-loader v-else />
  </section>
</template>
<script setup lang="ts">
import { fileUrl } from '~/helpers/functions/imageURl';
import type { TravelPackage } from '~/types/travel-package';

import { useRequestURL } from '#app'

const url = useRequestURL()
const firstSegment = url.pathname.split('/')[1] || ''
const props = defineProps<{
  item?: TravelPackage;
}>();
console.log(props.item);

</script>
<style scoped>
.bg {
  background: rgba(14, 32, 65, 0.69);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
}

.img-bg {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -2;
}
</style>
