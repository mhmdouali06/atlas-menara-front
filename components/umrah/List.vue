<template>
  <section>
    <div class="grid grid-cols-12 gap-6">
      <!-- Show 4 skeletons while loading -->
    </div>
    <div class="w-[90%] mx-auto my-10">
      <!-- first 4 item -->
      <div class="grid grid-cols-12 gap-10 justify-between">
        <!-- Filters -->
        <div class="col-span-12 md:col-span-4">
          <UmrahSectionsLeftFilter />
        </div>
        <!-- 4 items -->
        <div class="col-span-12 md:col-span-8 grid grid-cols-12 gap-10">

          <div v-for="item in items.slice(0, 4)" class="col-span-12 md:col-span-6" :key="item.id">
            <div v-if="props.loading" class="w-full h-full m-auto flex justify-center ">

              <UiSkelton />
            </div>
            <UiCard :item="item" class="w-full" />
          </div>
        </div>
      </div>
      <!-- -------------------------------------others----------------------------- -->
      <div class="grid grid-cols-12 gap-10 mt-10">
        <div v-for="item in items.slice(4)" class="col-span-12 md:col-span-4" :key="item.id">
          <UiCard :item="item" class="w-full" />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
const props = defineProps<{ items: Umrah[], loading: boolean }>()
import img1 from "@/assets/img/umrah/tour-img7 (1).png";
import img2 from "@/assets/img/umrah/tour-img7 (3).png";
import img3 from "@/assets/img/umrah/tour-img7.png";
import type { Umrah } from "~/types/Umrah";

</script>
<style scoped>
::v-deep(.main) {
  width: 100%;
}
</style>
