<!-- components/WhyTravelWithUs.vue -->
<script lang="ts" setup>
import check from "@/assets/img/global/check.png";
import euro from "@/assets/img/global/euro.png";
import best from "@/assets/img/global/best.png";
import hands from "@/assets/img/global/hands.png";
import bg from "@/assets/img/global/bg-travel.png";
const items = [
  {
    id: 1,
    title: "Selección Premium",
    description:
      "Todos los lugares y actividades son cuidadosamente seleccionados por nosotros.",
    image: check,
  },
  {
    id: 2,
    title: "Precios Insuperables",
    description: "¡Mejor precio garantizado y sin complicaciones!",
    image: euro,
  },
  {
    id: 3,
    title: "Calidad Reconocida",
    description: "Somos una agencia galardonada.",
    image: best,
  },
  {
    id: 4,
    title: "Confianza Probada",
    description: "Con la confianza de más de 80.000 clientes.",
    image: hands,
  },
];
</script>

<template>
  <section class="relative min-h-[478px]">
    <div class="bg"></div>

    <img
      :src="bg"
      alt="bg"
      class="w-full h-full object-cover absolute left-0 top-0 z-[-2]"
    />
    <div class="flex flex-col justify-center items-center h-full absolute">
      <p class="font-volkhov text-orange text-center">Algunas razones de</p>
      <h3
        class="font-volkhov text-white text-2xl md:text-4xl my-3 font-semibold text-center"
      >
        Por qué viajar con nosotros?
      </h3>
      <p class="text-white font-poppins text-center w-full md:w-1/2 mx-auto">
        Para nosotros, cada viaje es una oportunidad para hacer crecer nuestra
        familia. Prestamos atención al más mínimo detalle para que el viaje sea
        de 10.
      </p>
      <Carousel
        breakpointMode="carousel"
        ref="swiperRef"
        class="mt-8 px-8"
        :breakpoints="{
          0: { itemsToShow: 1 },
          640: { itemsToShow: 1 },
          768: { itemsToShow: 1 },
          1024: { itemsToShow: 3 },
        }"
        :autoplay="2000"
        :wrap-around="true"
        snap-align="center"
        :gap="20"
      >
        <Slide v-for="(item, index) in items" :key="index">
          <HomeSectionsCard :item="item" />
        </Slide>
      </Carousel>
    </div>
  </section>
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
</style>
