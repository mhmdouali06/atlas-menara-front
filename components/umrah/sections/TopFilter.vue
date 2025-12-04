<template>
  <section class="flex justify-center mt-[-50px]">
    <div class="w-3/4 md:w-[70%] main p-8 flex flex-col md:flex-row gap-4 md:gap-8 items-center">
      <div class="grid grid-cols-12 w-full gap-4 md:gap-8">
        <UmrahSectionsSelectWidthLabel class="col-span-12 md:col-span-4" v-for="item in filters" :key="item.key"
          :iocn="item.icon" :label="item.label" :options="item.options" :modelValue="getValue(item.key)"
          @update:modelValue="setValue(item.key, $event)" />
      </div>
      <div class="w-full md:w-auto">
        <button class="w-full md:w-[50px]" @click="onApply" :disabled="loading">
          <!-- Normal icon -->
          <img v-if="!loading" :src="search" alt="search" />

          <!-- Loader -->
          <span v-else class="inline-flex items-center justify-center">
            <span class="loader-circle"></span>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import calendarIcon from "@/assets/img/icon/BlackCalendar.svg";
import clockIcon from "@/assets/img/icon/Clock.svg";
import bed from "@/assets/img/icon/Bed.svg";
import search from "@/assets/img/icon/SearchIcon.svg";
import { monthOptions, optionHabitation } from "~/constants/options";

const props = defineProps<{
  month?: string;
  duration?: string;
  room?: string;
  durationItems?: { option: string; value: string }[];
  loading?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:month", v?: string): void;
  (e: "update:duration", v?: string): void;
  (e: "update:room", v?: string): void;
  (e: "apply"): void;
}>();

const monthModel = computed({
  get: () => props.month,
  set: (v?: string) => emit("update:month", v),
});

const durationModel = computed({
  get: () => props.duration,
  set: (v?: string) => emit("update:duration", v),
});

const roomModel = computed({
  get: () => props.room,
  set: (v?: string) => emit("update:room", v),
});

// Just in case you still want local-only state (currently unused):
const duration = ref<string | undefined>(undefined);
const room = ref<string | undefined>(undefined);

type Key = "meses" | "duracion" | "habitacion";

const getValue = (key: Key) =>
  key === "meses"
    ? monthModel.value
    : key === "duracion"
      ? durationModel.value
      : roomModel.value;

const setValue = (key: Key, v?: string) => {
  if (key === "meses") monthModel.value = v;
  else if (key === "duracion") durationModel.value = v;
  else roomModel.value = v;
};

const filters: Array<{
  key: Key;
  label: string;
  icon: string;
  options: Array<{ option: string; value: string }>;
}> = [
    {
      key: "meses",
      label: "Elige el mes",
      icon: calendarIcon,
      options: monthOptions,
    },
    {
      label: "La duración",
      icon: clockIcon,
      key: "duracion",
      options: props.durationItems || [],
    },
    {
      label: "Tipo de habitación",
      icon: bed,
      key: "habitacion",
      options: optionHabitation,
    },
  ];

const onApply = () => {
  if (!props.loading) {
    emit("apply");
  }
};
</script>

<style scoped>
.main {
  box-sizing: content-box;
  border-radius: 16px;
  background: var(--Neutrals, #fff);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25),
    0 4px 16px 0 rgba(17, 34, 17, 0.05);
}

button {
  border-radius: 4px;
  background: #0e2041;
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  align-self: stretch;
  height: 50px;
}

/* Simple loader circle */
.loader-circle {
  width: 20px;
  height: 20px;
  border-radius: 999px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: #ffffff;
  animation: spin 0.7s linear infinite;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
