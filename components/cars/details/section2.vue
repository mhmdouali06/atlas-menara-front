<template>
  <section class="mx-auto px-4 md:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10" v-if="car">
    <!-- LEFT -->
    <article class="lg:col-span-8">
      <!-- Title -->
      <h1 class="font-Poppins text-3xl md:text-4xl font-extrabold text-[#0E2041]">
        {{ car.title }}
      </h1>

      <!-- Location -->
      <p class="mt-2 text-[15px] font-poppins md:text-base text-[#2b395b]">
        {{ car.city || '—' }}
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
      <h2 class="mt-8 font-poppins text-2xl md:text-[28px] font-extrabold text-[#0E2041]">
        Descripción del servicio
      </h2>
      <div class="mt-3 font-poppins leading-relaxed text-[#1f2a44]" v-html="car.description || '—'"></div>

      <!-- Con Atlas Menara... -->
      <h3 class="mt-8 font-poppins text-[18px] md:text-[20px] font-extrabold text-[#0E2041]">
        Con Atlas Menara disfrutarás de:
      </h3>
      <div class="mt-3 font-poppins leading-relaxed text-[#1f2a44]" v-html="car.includes || '—'"></div>

      <!-- Documentos -->
      <h3 class="mt-8 font-poppins text-[18px] md:text-[20px] font-extrabold text-[#0E2041]">
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

const prettyTransmission = (v?: string | null) => {
  const s = v?.toLowerCase?.() || ''
  if (!s) return null
  if (s.includes('auto')) return 'Automática'
  if (s.includes('man')) return 'Manual'
  return v
}
const prettyFuel = (v?: string | null) => {
  const s = v?.toLowerCase?.() || ''
  if (!s) return null
  if (s.includes('gas')) return 'Gasolina'
  if (s.includes('dies')) return 'Diésel'
  if (s.includes('hyb')) return 'Híbrido'
  if (s.includes('elec')) return 'Eléctrico'
  return v
}

const infoLine = computed(() => {
  const bits: string[] = []
  if (!props.car) return

  if (props.car.brand || props.car.model) {
    bits.push([props.car.brand, props.car.model].filter(Boolean).join(' '))
  }
  if (props.car.year) bits.push(String(props.car.year))
  if (prettyTransmission(props.car.transmission)) bits.push(prettyTransmission(props.car.transmission)!)
  if (prettyFuel(props.car.fuelType)) bits.push(prettyFuel(props.car.fuelType)!)
  if (props.car.seats != null) bits.push(`${props.car.seats} asientos`)
  if (props.car.doors != null) bits.push(`${props.car.doors} puertas`)
  if (props.car.luggage != null) bits.push(`${props.car.luggage} maletas`)
  if (props.car.ac != null) bits.push(`A/C: ${props.car.ac ? 'Sí' : 'No'}`)
  if (props.car.status) bits.push(`Estado: ${props.car.status}`)

  return bits.join(' | ')
})
</script>
