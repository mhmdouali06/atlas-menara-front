<template>
  <section class="p-4 gap-8 grid grid-cols-12">
    <div class="left col-span-8 p-8">
      <!-- top info -->
      <div class="flex items-center justify-between">
        <h2 class="text-lg md:text-3xl font-bold font-volkhov text-[#181E4B]">
          detalles del paquete
        </h2>
        <p class="text-lg md:text-3xl font-bold font-poppins text-orange">
          {{ props.item.price }} €
          <span class="text-[#7D7D7D] text-sm">/ Per Couple</span>
        </p>
      </div>

      <!-- date && descreptions  -->
      <p class="text-[#181E4B] font-semibold font-poppins text-lg mt-8">
        Fechas: 24 de diciembre 2024 al 04 de enero 2025
      </p>
      <p class="mt-2 font-poppins">
        Descubra nuestras ofertas especiales para una Umrah en diciembre de
        2024, que incluye alojamiento en hoteles de lujo de 5 estrellas. Alójese
        en el centro de Medina y La Meca, con una excelente ubicación y una
        excelente relación calidad-precio.
      </p>

      <!-- inclue -->
      <p class="text-[#181E4B] font-semibold font-poppins text-lg mt-8">
        El paquete incluye
      </p>
      <p class="mt-2 font-poppins">
        • Desayuno incluido en Medina y La Meca. <br />
        • Traslados internos en autobuses cómodos y climatizados <br />
        • Visitas religiosas a Medina y La Meca (Ziyarates) <br />
        • Asistencia religiosa y servicio en aeropuertos y hoteles <br />
        • Trámites de visado
      </p>
      <!-- documents -->
      <p class="text-[#181E4B] font-semibold font-volkhov text-lg mt-8">
        DOCUMENTOS QUE DEBEN PRESENTARSE
      </p>
      <p class="mt-2 font-poppins">
        FOTOS DE IDENTIDAD2 fotos de identidades en color.<br />
        LIBRO DE FAMILLEPor las familias para demostrar parentesco con el
        Mahram<br />
        (original). <br />TARJETA DE EUROPARIOCarte de residencia para
        pasaportes extranjeros (original).<br />
        PASSEPORTPaquete válido 6 meses después de la fecha de devolución
        (original) + 2 fotos de identificación en color.
      </p>
    </div>
    <div class="right col-span-4">
      <DetailUmrahSectionsContact :item="item" />
    </div>
  </section>
</template>
<script setup lang="tsx">
import type { umrahinterface } from "~/types/Umrah";

const props = defineProps<{
  item: umrahinterface;
}>();
</script>
