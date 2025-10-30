<template>
  <section class="flex justify-center mt-[-50px]">
    <div class="w-3/4 main p-8 flex flex-col md:flex-row gap-4 md:gap-8 items-center">
      <div class="grid grid-cols-12 w-full gap-4 md:gap-8">
        <UmrahSectionsSelectWidthLabel class="col-span-12 md:col-span-4 " v-for="item in filters" :iocn="item.icon"
          :label="item.label" :options="item.options" :modelValue="getValue(item.key)"
          @update:modelValue="setValue(item.key, $event)" />
      </div>
      <div class="w-full md:w-auto">
        <button class="w-full md:w-[50px]">
          <img :src="search" alt="search" />
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
import { monthOptions } from "~/constants/options";
const props = defineProps<{
  month?: string;
  duration?: string;
  room?: string;
}>();
const emit = defineEmits<{
  (e: 'update:month', v?: string): void;
  (e: 'update:duration', v?: string): void;
  (e: 'update:room', v?: string): void;
}>();
// Only this one syncs with parent/URL
const monthModel = computed({
  get: () => props.month,
  set: (v?: string) => emit('update:month', v)
});
const durationModel = computed({
  get: () => props.duration,
  set: (v?: string) => emit('update:duration', v),
});
const roomModel = computed({
  get: () => props.room,
  set: (v?: string) => emit('update:room', v),
});

// Local-only state for the other two filters
const duration = ref<string | undefined>(undefined);
const room = ref<string | undefined>(undefined);

// Unified getters/setters for v-for wiring
type Key = 'meses' | 'duracion' | 'habitacion';

const getValue = (key: Key) =>
  key === 'meses' ? monthModel.value :
    key === 'duracion' ? durationModel.value :
      roomModel.value;

const setValue = (key: Key, v?: string) => {
  if (key === 'meses') monthModel.value = v;
  else if (key === 'duracion') durationModel.value = v;
  else roomModel.value = v;
};


const filters: Array<{
  key: Key;
  label: string;
  icon: string;
  options: Array<{ option: string; value: string }>;
}> = [
    {
      key: 'meses',
      label: "Elige el mes",
      icon: calendarIcon,
      options: monthOptions
    },
    {
      label: "La duración",
      icon: clockIcon,
      key: 'duracion',

      options: [
        { option: "1 dia", value: "1" },
        { option: "2 dias", value: "2" },
        { option: "3 dias", value: "3" },
        { option: "4 dias", value: "4" },
        { option: "5 dias", value: "5" },
        { option: "6 dias", value: "6" },
        { option: "7 dias", value: "7" },
        { option: "8 dias", value: "8" },
        { option: "9 dias", value: "9" },
        { option: "10 dias", value: "10" },
        { option: "11 dias", value: "11" },
        { option: "12 dias", value: "12" },
      ],
    },
    {
      label: "Tipo de habitación",
      icon: bed,
      key: 'habitacion',

      options: [
        {
          option: "Triple ",
          value: "triple",
        },
        {
          option: "Doble",
          value: "doble",
        },
        {
          option: "Simple",
          value: "simple",
        },
      ],
    },
  ];
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
</style>
