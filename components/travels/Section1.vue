<template>
  <section class="relative h-[422px]">
    <div class="bg"></div>
    <img :src="bg" class="img-bg" alt="umrah bg" />
    <div class="h-full w-full flex items-center flex-col justify-center gap-6">
      <h1 class="text-3xl md:text-5xl font-bold text-center font-volkhov text-white w-full">
        🌍 Viajes <span class="text-orange"> Atlas</span> Menara Ofertas
      </h1>
      <p class="text-center mt-4 text-white font-poppins">
        En Atlas Menara te ofrecemos una amplia variedad de viajes organizados
        tanto individuales como en grupo.<br />
        Además, tienes la opción de crear tu propio viaje a medida directamente
        desde nuestra web.<br />
        Nuestro objetivo es que vivas cada destino con la máxima comodidad,
        confianza y al mejor precio.
      </p>
      <div class="flex flex-col md:flex-row items-center gap-4 mt-4">
        <button
          class="bg-orange text-white px-5 py-2 rounded-full shadow-md font-poppins hover:bg-white hover:text-orange transition-all duration-300 easy">
          Organizar mi propio viaje
        </button>
        <button @click="navigateTo(`/viaje/#list`)"
          class="flex items-center gap-4 border text-white border-white px-5 py-2 rounded-full hover:bg-white hover:text-orange duration-300 easy">
          <span class="font-semibold font-poppins">Ver los viajes disponibes</span>
          <img :src="icon" alt="icon" />
        </button>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import bg from "@/assets/img/global/umrah-bg.png";
import icon from "@/assets/img/icon/start.svg";
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
