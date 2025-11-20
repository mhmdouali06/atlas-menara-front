<!-- components/AboutUsSection.vue -->
<script lang="ts" setup>
/* Replace with your real assets (ideally PNGs with transparent background) */
import hero from "@/assets/img/global/illus.png";
</script>

<template>
  <section class="mx-auto max-w-7xl px-4 mb-10" id="about-us">
    <div class="grid items-center gap-10 md:gap-4 md:grid-cols-2">
      <!-- <div class="relative mx-auto w-[260px] sm:w-[320px] md:w-[420px] aspect-square"> -->
      <div class="relative mx-auto w-full h-full aspect-square">
        <img :src="hero" alt="Peregrino realizando súplica" class="absolute inset-0 z-10 m-auto object-cover" />
      </div>

      <!-- RIGHT: Copy -->
      <div class="space-y-4 md:space-y-5">
        <p class="font-semibold text-orange font-poppins">Conócenos</p>

        <h2 class="text-3xl md:text-4xl font-bold text-softblack font-poppins">
          ¿Quiénes somos ?
        </h2>

        <p class="leading-relaxed text-[#808080] font-poppins">
          Somos una
          <span class="font-semibold text-orange">agencia de viajes acreditada</span>
          por el Ministerio del Hajj para viajes de Peregrinación y Umrah a
          Arabia Saudí.
        </p>

        <p class="leading-relaxed text-[#808080] font-poppins">
          Disponemos de nuestra propia flota de
          <span class="font-semibold text-orange">coches de lujo</span> con un
          equipo de conductores profesionales, con experiencia e idiomas, para
          transfers, disposiciones, bodas, congresos, visitas exclusivas… en la
          Península así como en Londres, París y Roma.
        </p>

        <p class="leading-relaxed text-[#808080] font-poppins">
          <span class="font-semibold text-orange">Desde 2005</span>, Viajes
          Atlas Menara se ha distinguido por prestar los mejores servicios a sus
          clientes, tanto en España como en el resto del mundo. Disponemos de
          acreditación IATA 78272460.
        </p>
      </div>
    </div>
  </section>
</template>
