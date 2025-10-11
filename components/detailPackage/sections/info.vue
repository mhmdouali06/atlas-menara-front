<template>
  <section class="">
    <!-- top info -->
    <div class="flex items-center justify-between">
      <h2 class="text-lg md:text-3xl font-bold font-volkhov text-[#181E4B] capitalize">
        detalles del {{ firstSegment }}
      </h2>
      <p class="text-lg md:text-3xl font-bold font-poppins text-orange">
        {{ props.item.price }} €
        <span class="text-[#7D7D7D] text-sm">/ Per person</span>
      </p>
    </div>

    <!-- date && descreptions  -->
    <p class="text-[#181E4B] font-semibold font-poppins text-lg mt-8">
      Fechas: {{ formatDateTextEs(props.item.startsAt) }} al {{ formatDateTextEs(props.item.endsAt) }}
    </p>
    <p class="mt-2 font-poppins" v-html="item.description">
    </p>

    <!-- inclue -->
    <p class="text-[#181E4B] font-semibold font-poppins text-lg mt-8">
      El umrah incluye
    </p>
    <p class="mt-2 font-poppins" v-html="item.includes">

    </p>
    <!-- documents -->
    <p class="text-[#181E4B] font-semibold font-volkhov text-lg mt-8">
      DOCUMENTOS QUE DEBEN PRESENTARSE
    </p>
    <p class="mt-2 font-poppins" v-html="item.documents">

    </p>
  </section>
</template>
<script setup lang="tsx">
import { formatDateTextEs } from '~/helpers/functions/formatDuration';
import type { TravelPackage } from '~/types/travel-package';

import { useRequestURL } from '#app'

// SSR-safe: works both server & client
const url = useRequestURL()
const firstSegment = url.pathname.split('/')[1] || ''
const props = defineProps<{
  item: TravelPackage;
}>();
</script>
