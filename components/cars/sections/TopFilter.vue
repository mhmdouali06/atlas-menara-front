<template>
  <section class="flex justify-center mt-[-50px]">
    <div class="main w-[90%] max-w-6xl md:w-3/4 p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
      <div class="grid grid-cols-1 md:grid-cols-12 w-full gap-4 md:gap-8 min-w-0">
        <UmrahSectionsSelectWidthLabel v-for="(item, i) in filters" :key="i" class="col-span-1 md:col-span-6"
          :iocn="item.icon" :label="item.label" :options="item.options" :model-value="item.modelValue.value"
          @update:modelValue="val => (item.modelValue.value = val)" />
      </div>

      <!-- Button sits below on mobile, right side on md+; size unchanged -->
      <div class="flex md:block justify-center w-full md:w-auto">
        <button @click="emit('apply', { type: type, city: city })" aria-label="Buscar">
          <img :src="search" alt="search" />
        </button>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import car from "@/assets/img/icon/car.svg";
import position from "@/assets/img/icon/emptyPostion.svg";
import wallet from "@/assets/img/icon/wallet.svg";
import search from "@/assets/img/icon/SearchIcon.svg";
const type = ref<string | undefined>(undefined);
const categoryOpions = ref<Option[]>([]);
const cityOpions = ref<Option[]>([]);
const city = ref<string | undefined>(undefined);
type Option = { option: string; value: string };

const emit = defineEmits(["apply"]);
const { getCategories, getCities } = useCategories();
const getCategoryOptions = async () => {
  const data = await getCategories("type=cars&pagination=false");
  if (data.member) {
    data.member.forEach((item: any) => {
      categoryOpions.value.push({ option: item.name, value: item.id });
    })
  }
}
const getCitiesptions = async () => {
  const data = await getCities("pagination=false");
  if (data.member) {
    data.member.forEach((item: any) => {
      cityOpions.value.push({ option: item.title, value: item.id });
    })
  }
}
const filters = [
  {
    label: "Coche",
    icon: car,
    modelValue: type,
    options: categoryOpions.value,
  },
  {
    label: "Ciudad",
    icon: position,
    modelValue: city,
    options: cityOpions.value,
  },
];
onMounted(() => {
  getCategoryOptions();
  getCitiesptions();
})
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
