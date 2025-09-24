<template>
  <div
    class="big font-poppins relative overflow-hidden flex flex-col justify-end p-8 pb-14"
  >
    <div class="bg"></div>
    <img
      :src="props.service.img"
      alt="background"
      class="w-full h-full absolute left-0 top-0 z-[-2] object-cover"
    />
    <h3 class="font-extrabold text-white relative my-4 text-3l md:text-5xl">
      {{ props.service.title }}
    </h3>

    <p class="text-white">{{ props.service.bottom }}</p>
    <button
      class="inline-flex w-fit items-center mt-6 text-white gap-2 rounded-full border border-white px-6 py-3 font-semibold shadow-sm"
    >
      Solicitar
      <span
        class="relative inline-flex h-5 w-5 items-center justify-center rounded-full"
      >
        <img :src="start" alt="icon" />
      </span>
    </button>
  </div>
</template>
<script setup lang="ts">
import start from "@/assets/img/icon/start.svg";
interface serviceInterface {
  id: number;
  title: string;
  img?: string;
  bottom: string;
}

const props = defineProps<{
  service: serviceInterface;
}>();
</script>
<style scoped>
.big {
  border-radius: 30px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

.bg {
  background: rgba(14, 32, 65, 0.69);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
}

h3::afterr {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  border-bottom: 1px dotted #fff;
}
</style>
