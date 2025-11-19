<template>
  <section class="">
    <!-- top info -->
    <div class="flex flex-col md:flex-row items-center justify-between">
      <h2 class="text-lg md:text-3xl font-bold font-volkhov text-[#181E4B] capitalize">
        detalles del {{ firstSegment }}
      </h2>

      <div>

        <p class="text-lg md:text-3xl font-bold font-poppins text-orange">
          {{ props.item.price }} €
          <span class="text-[#7D7D7D] text-sm">/ Per person</span>
        </p>
        <p v-if="item.premiumPrice" class="text-[10px] md:text-xs text-[#112211] text-opacity-75 text-nowrap">
          Precio real aproximado : {{ item.premiumPrice }} €
        </p>
      </div>
    </div>
    <div class="flex items-center gap-2 mt-1" v-if="props.item.rating && props.item.review">
      <div class="flex items-center gap-0">
        <img v-for="value in props.item.rating" :key="value" :src="star" class="w-4 h-4 object-contain" />
      </div>

      <p class="font-poppins text-sm text-[#7D7D7D] font-semibold">
        ({{ abbr(props.item.review) }} reviews)
      </p>
    </div>


    <!-- date && descreptions  -->
    <p class="text-[#181E4B] font-semibold font-poppins text-lg mt-8">
      Fechas: {{ formatDateTextEs(props.item.startsAt) }} al {{ formatDateTextEs(props.item.endsAt) }}
      <sub class="text-[12px] mt-1 font-poppins text[#112211] text-opacity-75">
        ( {{ formatDuration(props.item.startsAt, props.item.endsAt) }} )
      </sub>
    </p>
    <p class="mt-2 font-poppins" v-html="item.description">
    </p>
    <p class="text-[#181E4B] font-semibold font-poppins text-lg mt-8">
      Tipo de habitación: {{ getHabitationLabel(props.item.habitation + "") }}
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
import star from "@/assets/img/icon/star.svg";
import { formatDateTextEs, formatDuration } from '~/helpers/functions/formatDuration';
import type { TravelPackage } from '~/types/travel-package';

import { useRequestURL } from '#app'
import { getHabitationLabel } from '~/constants/options';
import { abbr } from "~/helpers/functions/formatNumber";

// SSR-safe: works both server & client
const url = useRequestURL()
const firstSegment = url.pathname.split('/')[1] || ''
const props = defineProps<{
  item: TravelPackage;
}>();
</script>
