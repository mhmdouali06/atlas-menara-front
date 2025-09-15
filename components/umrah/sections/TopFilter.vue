<template>
  <section class="flex justify-center mt-[-50px]">
    <div class="w-3/4 main p-8 flex gap-8 items-center">
      <div class="grid grid-cols-12 w-full gap-8">
        <UmrahSectionsSelectWidthLabel
          class="col-span-12 md:col-span-4"
          v-for="item in filters"
          :iocn="item.icon"
          :label="item.label"
          :options="item.options"
        />
      </div>
      <div class="">
        <button>
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
const filters = [
  {
    label: "Elige el mes",
    icon: calendarIcon,
    options: [
      { option: "Enero", value: "enero" },
      { option: "Febrero", value: "febrero" },
      { option: "Marzo", value: "marzo" },
      { option: "Abril", value: "abril" },
      { option: "Mayo", value: "mayo" },
      { option: "Junio", value: "junio" },
      { option: "Julio", value: "julio" },
      { option: "Agosto", value: "agosto" },
      { option: "Septiembre", value: "septiembre" },
      { option: "Octubre", value: "octubre" },
      { option: "Noviembre", value: "noviembre" },
      { option: "Diciembre", value: "diciembre" },
    ],
  },
  {
    label: "La duración",
    icon: clockIcon,
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
  width: 50px;
}
</style>
