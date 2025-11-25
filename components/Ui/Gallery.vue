<template>
  <div>
    <!-- PREMIUM MOBILE LAYOUT -->
    <div class="md:hidden">
      <div class="flex gap-3 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar">
        <div v-for="(image, index) in slots" :key="'mobile-' + index"
          class="min-w-[75%] snap-center rounded-2xl overflow-hidden shadow-lg">
          <img :src="fileUrl(image.filePath, id)" :alt="id" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <!-- DESKTOP LAYOUT (UNCHANGED) -->
    <div class="hidden md:block">
      <div>
        <div class="grid grid-cols-12 gap-4 object-contain">
          <div class="left col-span-4">
            <div v-for="(image, index) in slots.slice(0, 3)" :key="index" class="flex flex-col gap-4 md:gap-8">
              <img :src="fileUrl(image.filePath, id)" :alt="id" class="w-full h-[200px] mb-4 object-cover" />
            </div>
          </div>
          <div class="right col-span-8 relative">
            <img v-if="slots.length > 3" :src="fileUrl(slots[3].filePath, id)" :alt="id"
              class="w-full h-[634px] object-cover" />
          </div>
        </div>
        <div class="bottom">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-8">
              <img v-if="slots.length > 4" class="w-full h-[200px] object-fill" :src="fileUrl(slots[4].filePath, id)"
                :alt="id" />
            </div>
            <div class="col-span-4">
              <img v-if="slots.length > 5" class="w-full h-[200px] object-fill" :src="fileUrl(slots[5].filePath, id)"
                :alt="id" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { fileUrl } from "~/helpers/functions/imageURl";

export interface MediaFile {
  "@context"?: string;
  "@id"?: string;
  "@type"?: string;
  filePath: string;
}

const props = defineProps<{
  images: MediaFile[];
  id: string;
}>();

const normalize = (img: MediaFile | string): MediaFile =>
  typeof img === "string" ? { filePath: img } : img;

const slots = computed(() => props.images.slice(0, 6).map(normalize));
</script>

<style scoped>
/* Hide scrollbar (Chrome/Safari) */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar (Firefox) */
.hide-scrollbar {
  scrollbar-width: none;
}
</style>
