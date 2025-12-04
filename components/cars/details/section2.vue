<template>
  <section class="mx-auto px-4 md:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10" v-if="car">
    <!-- LEFT -->
    <article class="lg:col-span-8 ps-8">
      <!-- Title -->
      <h1 class="font-Poppins text-3xl md:text-5xl font-extrabold text-[#0E2041]">
        {{ car.title }}
      </h1>
      <p class="mt-2 text-[15px] font-poppins md:text-base text-[#2b395b]">
        {{ car.category.name }}
      </p>
      <!-- Location -->
      <p class="mt-2 text-[15px] font-poppins md:text-base text-[#2b395b]">
        {{ car.city.title || '—' }}
      </p>

      <!-- Inline info (pipe-separated) -->
      <p class="mt-2 text-sm md:text-[15px] font-poppins text-[#2b395b]">
        {{ infoLine }}
      </p>

      <!-- Red note -->
      <p class="mt-3 text-[18px] md:text-[20px] font-poppins font-semibold text-[#e83333]">
        precio varia segun las condiciones
      </p>

      <!-- Descripción -->
      <h2 class="mt-8 font-poppins text-2xl md:text-3xl font-extrabold text-[#0E2041]">
        Descripción del servicio </h2>
      <div class="mt-3 font-poppins leading-relaxed text-[#1f2a44]" v-html="car.description || '—'"></div>

      <!-- Con Atlas Menara... -->
      <h3 class="mt-8 font-poppins text-[18px] md:text-3xl font-extrabold text-[#F4A021]">
        Con Atlas Menara disfrutarás de:
      </h3>
      <div class="mt-3 font-poppins leading-relaxed text-[#1f2a44]" v-html="car.includes || '—'"></div>

      <!-- Documentos -->
      <h3 class="mt-8 font-poppins text-[18px] md:text-3xl font-extrabold text-[#0E2041]">
        Documentos
      </h3>
      <div class="mt-3 font-poppins leading-relaxed text-[#1f2a44]" v-html="car.documents || '—'"></div>
    </article>


    <!-- RIGHT -->
    <aside class="lg:col-span-4">
      <div class="lg:sticky lg:top-6">
        <CarsDetailsReserveForm />
      </div>
    </aside>
  </section>
  <UiDetailLoader v-else />

</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Car } from '~/types/car'

const props = withDefaults(
  defineProps<{
    car?: Car

  }>(),
  {}
)




const infoLine = computed(() => {
  const bits: string[] = []
  if (!props.car) return


  if (props.car.seats != null) bits.push(`${props.car.seats} asientos`)
  if (props.car.doors != null) bits.push(`${props.car.doors} puertas`)
  if (props.car.luggage != null) bits.push(`${props.car.luggage} maletas`)


  return bits.join(' | ')
})
</script>
