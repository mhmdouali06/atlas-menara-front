<template>
  <section class="relative h-[422px]">
    <div class="bg"></div>
    <img :src="bg" class="img-bg" alt="umrah bg" />
    <div class="h-full w-full flex items-center flex-col justify-center gap-6">
      <h1 class="text-3xl md:text-5xl font-bold text-center font-volkhov text-white w-full">
        Nuestros Servicios <span class="text-orange">de Viajes</span>
      </h1>
      <p class="text-center mt-4 text-white font-poppins w-full mx-auto md:w-2/3">
        En Atlas Menara no solo organizamos tus viajes de Umrah y Hajj, también
        ponemos a tu disposición una gama completa de servicios que harán tu
        experiencia más cómoda, segura y sin complicaciones.
      </p>
      <div class="flex flex-col md:flex-row items-center gap-4 mt-4">
        <button @click="emit('open', 'plane')"
          class="bg-orange w-[226px] h-[42px] text-sm font-semibold text-white rounded-full shadow-md font-poppins">
          Descubrir
        </button>
        <button @click="navigateTo('/servicios#services')"
          class="flex w-[226px] h-[42px] items-center justify-center gap-4 border text-white border-white rounded-full">
          <span class="font-semibold font-poppins text-sm">Contactar un agente</span>
          <img :src="icon" alt="icon" />
        </button>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import bg from "@/assets/img/global/bg-service.png";
import icon from "@/assets/img/icon/start.svg";
const emit = defineEmits<{
  (e: "open", key: 'plane' | 'boat' | 'hotel' | 'visa'): void;
}>();
</script>
<style scoped>
h1 {
  position: relative;
  width: fit-content;
}

h1::after {
  content: "";
  left: 0;
  width: 100%;
  position: absolute;
  bottom: -10px;
  border: 1px solid white;
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

.img-bg {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -2;
}
</style>
