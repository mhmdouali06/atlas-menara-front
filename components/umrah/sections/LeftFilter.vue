<template>
  <div class="box-border ">
    <div class="bg-white rounded-2xl shadow-md p-6 space-y-4 h-full mb-6">

      <!-- Header -->
      <h3 class="text-gray-900 font-bold text-lg">Filters</h3>

      <!-- Precio (dual slider) -->
      <div class="box-border">
        <div class="flex items-center justify-between cursor-pointer" @click="isPriceExpanded = !isPriceExpanded">
          <span class="font-semibold text-gray-800">Precio</span>
          <svg :class="['w-5 h-5 text-gray-600 transition-transform', isPriceExpanded ? 'rotate-180' : '']" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        <div v-show="isPriceExpanded" class="mt-4">
          <!-- scale labels -->
          <div class="flex justify-between text-xs text-gray-500 mb-2">
            <span>€{{ minLabel }}</span>
            <span>€{{ maxLabel }}</span>
          </div>

          <!-- slider wrap -->
          <div class="relative h-8">
            <!-- Track background (with selected range highlight) -->
            <div class="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 rounded-full"
              :style="{ background: trackGradient }"></div>

            <!-- Left (min) thumb -->
            <input type="range" :min="min" :max="max" :step="step" v-model.number="priceMin" @input="onMinInput"
              class="range-input pointer-events-auto" />

            <!-- Right (max) thumb -->
            <input type="range" :min="min" :max="max" :step="step" v-model.number="priceMax" @input="onMaxInput"
              class="range-input pointer-events-auto" />
          </div>

          <!-- current values -->
          <div class="mt-3 flex items-center justify-between text-sm">
            <span class="inline-flex items-center gap-1 text-gray-700">
              Min:
              <strong class="text-gray-900">€{{ priceMin }}</strong>
            </span>
            <button class="text-sm text-gray-500 hover:text-gray-700" @click="resetPrice" type="button">
              Reset
            </button>
            <span class="inline-flex items-center gap-1 text-gray-700">
              Max:
              <strong class="text-gray-900">€{{ priceMax }}</strong>
            </span>
          </div>
        </div>
      </div>
      <div class="border-b border-[#112211]"></div>

      <!-- Estrellas del Hotel -->
      <div>
        <div class="flex items-center justify-between cursor-pointer" @click="isStarsExpanded = !isStarsExpanded">
          <span class="font-semibold text-gray-800">Estrellas del Hotel</span>
          <svg :class="['w-5 h-5 text-gray-600 transition-transform', isStarsExpanded ? 'rotate-180' : '']" fill="none"
            stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div v-show="isStarsExpanded" class="mt-4 flex flex-wrap gap-2 justify-start">
          <button v-for="star in [0, 1, 2, 3, 4, 5]" :key="star" type="button" @click="selectedStars = star"
            class="px-3 py-1 border rounded text-sm font-medium transition border-orange"
            :class="selectedStars === star ? 'bg-orange text-white' : 'text-gray-600'">
            {{ star }}+
          </button>
        </div>
      </div>
      <div class="border-b border-[#112211]"></div>

      <!-- Ubicación -->
      <div>
        <div class="flex items-center justify-between cursor-pointer" @click="isLocationExpanded = !isLocationExpanded">
          <span class="font-semibold text-gray-800">Ubicación</span>
          <svg :class="['w-5 h-5 text-gray-600 transition-transform', isLocationExpanded ? 'rotate-180' : '']"
            fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div v-show="isLocationExpanded" class="mt-3 space-y-2 text-sm text-gray-700">
          <label class="flex items-center gap-2" v-for="items in positionOptions" :key="items.value">
            <input type="radio" v-model="locations" :value="items.value" class="accent-orange-500" />
            {{ items.label }}
          </label>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex flex-col gap-3 w-[85%] mx-auto">
      <button type="button"
        class="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full transition"
        @click="apply">
        Filtrar
      </button>
      <button type="button" @click="emit('open')"
        class="w-full py-3 border border-orange-500 text-orange font-semibold rounded-full hover:bg-orange-50 transition flex items-center justify-center gap-2">
        <span>
          Umra personalizada
        </span>
        <img :src="orangestar" alt="icon">
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { positionOptions } from '~/constants/options'
import orangestar from "@/assets/img/icon/start-orange.svg"

/** Bounds (not selected values) come from props.prices */
const props = defineProps<{
  prices?: { min?: number; max?: number; step?: number },
  /** Two-way bound selected range */
  range?: { min: number; max: number }
}>()

const emit = defineEmits<{
  (e: 'update:range', value: { min: number; max: number }): void
  (e: 'open'): void
  (e: 'apply', payload: { priceMin: number; priceMax: number; stars: number; locations: string }): void
}>()

/** Collapsible states */
const isPriceExpanded = ref(true)
const isStarsExpanded = ref(true)
const isLocationExpanded = ref(true)

/** Resolve dynamic bounds */
const min = computed(() => Number.isFinite(props.prices?.min) ? Number(props.prices!.min) : 1000)
const max = computed(() => {
  const v = Number.isFinite(props.prices?.max) ? Number(props.prices!.max) : 3000
  return v > min.value ? v : min.value + 1
})

/** Smooth default step ≈ 1% of range, at least 1 */
const step = computed(() => {
  const custom = props.prices?.step
  if (Number.isFinite(custom) && (custom as number) > 0) return Number(custom)
  return Math.max(1, Math.round((max.value - min.value) / 100))
})

/** Local selection, initialized from v-model:range or full bounds */
const priceMin = ref(props.range?.min ?? min.value)
const priceMax = ref(props.range?.max ?? max.value)

/** Keep thumbs valid when bounds change */
watch([min, max], () => {
  // If parent hasn't provided a range, default to full bounds
  if (props.range == null) {
    priceMin.value = min.value
    priceMax.value = max.value
  } else {
    // Clamp incoming v-model to new bounds
    priceMin.value = Math.max(min.value, Math.min(props.range.min, max.value - step.value))
    priceMax.value = Math.min(max.value, Math.max(props.range.max, min.value + step.value))
  }
}, { immediate: true })

/** Sync when parent changes v-model:range explicitly */
watch(() => props.range, (r) => {
  if (!r) return
  priceMin.value = Math.max(min.value, Math.min(r.min, max.value - step.value))
  priceMax.value = Math.min(max.value, Math.max(r.max, min.value + step.value))
}, { deep: true })

/** Emit on every change so parent always holds latest selection */
watch([priceMin, priceMax], () => {
  emit('update:range', { min: priceMin.value, max: priceMax.value })
})

/** Prevent crossing */
function onMinInput() {
  if (priceMin.value > priceMax.value - step.value) {
    priceMin.value = priceMax.value - step.value
  }
  if (priceMin.value < min.value) priceMin.value = min.value
}
function onMaxInput() {
  if (priceMax.value < priceMin.value + step.value) {
    priceMax.value = priceMin.value + step.value
  }
  if (priceMax.value > max.value) priceMax.value = max.value
}

/** Labels and track highlight */
const minLabel = computed(() => String(min.value))
const maxLabel = computed(() => String(max.value))
const trackGradient = computed(() => {
  const rangeSize = max.value - min.value
  const start = ((priceMin.value - min.value) / rangeSize) * 100
  const end = ((priceMax.value - min.value) / rangeSize) * 100
  return `linear-gradient(to right,#e5e7eb ${start}%,#112211 ${start}%,#112211 ${end}%,#e5e7eb ${end}%)`
})

/** Extra filters */
const selectedStars = ref(0)
const locations = ref<string>('')

function apply() {
  emit('apply', {
    priceMin: priceMin.value,
    priceMax: priceMax.value,
    stars: selectedStars.value,
    locations: locations.value
  })
}
function resetPrice() {
  priceMin.value = min.value
  priceMax.value = max.value
}
</script>

<style scoped>
/* Dual range trick: stack two inputs and hide native tracks */
.range-input {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  appearance: none;
  background: transparent;
  pointer-events: none;
  /* thumbs remain clickable */
  height: 0;
  /* visually hidden track */
}

/* WebKit thumb */
.range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  pointer-events: auto;
  width: 21px;
  height: 21px;
  border-radius: 9999px;
  background: #fb923c;
  /* orange */
  box-shadow: 0 0 0 2px #fb923c;
  cursor: pointer;
}

/* Firefox thumb */
.range-input::-moz-range-thumb {
  pointer-events: auto;
  width: 21px;
  height: 21px;
  border-radius: 9999px;
  background: #fb923c;
  border: 2px solid #fff;
  box-shadow: 0 0 0 2px #fb923c;
  cursor: pointer;
}

/* Hide default tracks */
.range-input::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
}

.range-input::-moz-range-track {
  background: transparent;
}

input[type="radio"] {
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #112211;
  border-radius: 0;
  /* This makes it a rectangle */
}

input[type="radio"]:checked {
  background-color: #fb923c;
  border-color: #fb923c;
}

input[type="radio"]:checked::after {
  content: "";
  position: absolute;
  left: 6px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>