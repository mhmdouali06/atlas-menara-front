<template>
  <section class="relative h-[239px]">
    <div class="bg"></div>
    <img :src="bg" class="img-bg" alt="umrah bg" />
    <div class="h-full w-full flex items-center">
      <h1 class="text-3xl md:text-5xl font-bold text-center font-volkhov text-white w-full">
        Ofertas <span class="text-orange">Umrah</span>, hechas a medida
      </h1>
    </div>
    <UmrahSectionsTopFilter v-model:month="monthProxy" v-model:duration="durationProxy" v-model:room="roomProxy" />
  </section>
</template>
<script lang="ts" setup>
import bg from "@/assets/img/global/umrah-bg.png";
const props = defineProps<{
  month?: string;
  duration?: string;
  room?: string;
}>();
const emit = defineEmits<{
  (e: 'update:month', v?: string): void;
  (e: 'update:duration', v?: string): void;
  (e: 'update:room', v?: string): void;
}>();
const monthProxy = computed({
  get: () => props.month,
  set: (v?: string) => emit('update:month', v)
});
const durationProxy = computed({
  get: () => props.duration,
  set: (v?: string) => emit('update:duration', v),
});
const roomProxy = computed({
  get: () => props.room,
  set: (v?: string) => emit('update:room', v),
});
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
