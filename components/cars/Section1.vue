<template>
  <section class="relative h-[239px]">
    <div class="bg"></div>
    <img :src="bg" class="img-bg" alt="umrah bg" />
    <div class="h-full w-full flex items-center">
      <h1 class="text-3xl md:text-5xl font-bold text-center font-volkhov text-white w-full">
        Alquiler de <span class="text-orange">coches</span> con conductor
      </h1>
    </div>
    <CarsSectionsTopFilter @apply="emit('apply', $event)" :loading="loading" />
  </section>
</template>
<script lang="ts" setup>
import bg from "@/assets/img/global/bg-cars.png";
const props = defineProps<{
  loading?: boolean;
}>()
const emit = defineEmits<{ (e: "apply", payload: any): void }>();
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
