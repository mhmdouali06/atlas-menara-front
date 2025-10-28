<template>
  <div class="bg-white rounded-2xl shadow-md p-6 space-y-6 h-full">
    <!-- Header -->
    <h3 class="text-gray-900 font-bold text-lg">Filters</h3>

    <!-- Precio (dual slider) -->
    <div>
      <div class="flex items-center justify-between">
        <span class="font-semibold text-gray-800">Precio</span>
        <button class="text-sm text-gray-500 hover:text-gray-700" @click="resetPrice" type="button">
          Reset
        </button>
      </div>

      <div class="mt-4">
        <!-- scale labels -->
        <div class="flex justify-between text-xs text-gray-500 mb-2">
          <span>€{{ minLabel }}</span>
          <span>€{{ maxLabel }}</span>
        </div>

        <!-- slider wrap -->
        <div class="relative h-8">
          <!-- Track background (with selected range highlight) -->
          <div class="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1.5 rounded-full"
            :style="{ background: trackGradient }"></div>

          <!-- Left (min) thumb -->
          <input type="range" :min="PRICE_MIN" :max="PRICE_MAX" :step="PRICE_STEP" v-model.number="priceMin"
            @input="onMinInput" class="range-input pointer-events-auto" />

          <!-- Right (max) thumb -->
          <input type="range" :min="PRICE_MIN" :max="PRICE_MAX" :step="PRICE_STEP" v-model.number="priceMax"
            @input="onMaxInput" class="range-input pointer-events-auto" />
        </div>

        <!-- current values -->
        <div class="mt-3 flex items-center justify-between text-sm">
          <span class="inline-flex items-center gap-1 text-gray-700">
            Min:
            <strong class="text-gray-900">€{{ priceMin }}</strong>
          </span>
          <span class="inline-flex items-center gap-1 text-gray-700">
            Max:
            <strong class="text-gray-900">€{{ priceMax }}</strong>
          </span>
        </div>
      </div>
    </div>

    <!-- Estrellas del Hotel -->
    <div>
      <div class="flex items-center justify-between">
        <span class="font-semibold text-gray-800">Estrellas del Hotel</span>
        <button class="text-sm text-gray-500 hover:text-gray-700" @click="selectedStars = 0" type="button">
          Reset
        </button>
      </div>
      <div class="mt-4 flex flex-wrap gap-2 justify-between">
        <button v-for="star in [0, 1, 2, 3, 4, 5]" :key="star" type="button" @click="selectedStars = star"
          class="px-3 py-1 border rounded-lg text-sm font-medium transition border-orange" :class="selectedStars === star ? 'bg-orange text-white ' : 'text-gray-600'
            ">
          {{ star }}+
        </button>
      </div>
    </div>

    <!-- Ubicación -->
    <div>
      <div class="font-semibold text-gray-800">Ubicación</div>
      <div class="mt-3 space-y-2 text-sm text-gray-700">
        <label class="flex items-center gap-2">
          <input type="checkbox" v-model="locations" value="todo" class="accent-orange-500" />
          todo
        </label>
        <label class="flex items-center gap-2">
          <input type="checkbox" v-model="locations" value="cerca del HARA" class="accent-orange-500" />
          cerca del HARA
        </label>
        <label class="flex items-center gap-2">
          <input type="checkbox" v-model="locations" value="cerca del" class="accent-orange-500" />
          cerca del
        </label>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex flex-col gap-3">
      <button type="button"
        class="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition"
        @click="apply">
        Filtrar
      </button>
      <button type="button"
        class="w-full py-3 border border-orange-500 text-orange-500 font-semibold rounded-xl hover:bg-orange-50 transition">
        Solicitar omra personalizada
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";

/** Price slider constants (match your screenshot scale) */
const PRICE_MIN = 1000;
const PRICE_MAX = 3000;
const PRICE_STEP = 50;

const priceMin = ref(1400);
const priceMax = ref(2600);

const selectedStars = ref(0);
const locations = ref<string[]>([]);

/** Keep handles from crossing */
function onMinInput() {
  if (priceMin.value > priceMax.value - PRICE_STEP) {
    priceMin.value = priceMax.value - PRICE_STEP;
  }
}
function onMaxInput() {
  if (priceMax.value < priceMin.value + PRICE_STEP) {
    priceMax.value = priceMin.value + PRICE_STEP;
  }
}

/** Nice labels */
const minLabel = computed(() => PRICE_MIN.toString());
const maxLabel = computed(() => PRICE_MAX.toString());

/** Highlight selected range on the track using a gradient */
const trackGradient = computed(() => {
  const range = PRICE_MAX - PRICE_MIN;
  const start = ((priceMin.value - PRICE_MIN) / range) * 100;
  const end = ((priceMax.value - PRICE_MIN) / range) * 100;
  // light gray -> orange -> light gray
  return `linear-gradient(
    to right,
    #e5e7eb ${start}%,
    #fb923c ${start}%,
    #fb923c ${end}%,
    #e5e7eb ${end}%
  )`;
});

/** Emit selected values so the parent can actually filter */
const emit = defineEmits<{
  (
    e: "update:filters",
    payload: {
      priceMin: number;
      priceMax: number;
      stars: number;
      locations: string[];
    }
  ): void;
  (
    e: "apply",
    payload: {
      priceMin: number;
      priceMax: number;
      stars: number;
      locations: string[];
    }
  ): void;
}>();

watch(
  [priceMin, priceMax, selectedStars, locations],
  () => {
    emit("update:filters", {
      priceMin: priceMin.value,
      priceMax: priceMax.value,
      stars: selectedStars.value,
      locations: locations.value,
    });
  },
  { immediate: true }
);

function apply() {
  emit("apply", {
    priceMin: priceMin.value,
    priceMax: priceMax.value,
    stars: selectedStars.value,
    locations: locations.value,
  });
}

function resetPrice() {
  priceMin.value = PRICE_MIN + 400;
  priceMax.value = PRICE_MAX - 400;
}
</script>

<style scoped>
/* Dual range trick: stack two inputs and hide native tracks */
.range-input {
  @apply absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full appearance-none bg-transparent pointer-events-none;
  height: 0;
  /* visually hidden, thumbs still clickable */
}

/* WebKit thumb */
.range-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  pointer-events: auto;
  width: 18px;
  height: 18px;
  border-radius: 9999px;
  background: #fb923c;
  /* orange */
  border: 2px solid white;
  box-shadow: 0 0 0 2px #fb923c;
  cursor: pointer;
}

/* Firefox thumb */
.range-input::-moz-range-thumb {
  pointer-events: auto;
  width: 18px;
  height: 18px;
  border-radius: 9999px;
  background: #fb923c;
  border: 2px solid white;
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
</style>
