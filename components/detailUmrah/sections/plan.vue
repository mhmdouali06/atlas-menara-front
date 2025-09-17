<template>
  <div class="p-4 gap-8 grid grid-cols-12">
    <div class="left col-span-12 lg:col-span-8 p-2 md:p-8">
      <div class="flex items-center justify-between">
        <h2 class="text-lg md:text-3xl font-bold font-volkhov text-[#181E4B]">
          Umrah Plan
        </h2>
      </div>

      <div class="mt-6">
        <DetailUmrahSectionsPlanTimeline :steps="steps" />
      </div>
    </div>

    <div class="right col-span-12 lg:col-span-4">
      <DetailUmrahSectionsContact :item="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { umrahinterface } from "~/types/Umrah";

const props = defineProps<{ item: umrahinterface }>();

const steps = [
  {
    title: "29 De Mayo:",
    description: "Salida Desde Madrid Y Llegada A Medina",
  },
  {
    title: "29 De Mayo Al 1 De Junio:",
    description: "Estancia En Medina Y Visitas Religiosas",
  },
  {
    title: "1 Al 3 De Junio:",
    description: "Traslado A Meca, Alojamiento Y Realización De Umrah.",
  },
  {
    title: "4 Al 9 De Junio:",
    description:
      "Estancia En Mina Y Arafat Para Los Rituales Principales Del Hajj",
  },
  {
    title: "9 Al 14 De Junio:",
    description: "Regreso A Meca, Finalización De Rituales Y Tiempo Libre.",
  },
  { title: "15 De Junio:", description: "Regreso A Madrid." },
];
</script>
