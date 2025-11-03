<template>
  <UmrahSection1 v-model:month="month" v-model:duration="duration" v-model:room="room" :durationItems="durationItems" />
  <UmrahCustomUmrah />
  <UmrahList :items="items" :loading="loading" @next-page="gotToNextPage" :totalItem="totalItems" :prices="prices"
    @apply="onApplyFilters" />
</template>

<script lang="ts" setup>
import type { TravelPackage } from '~/types/travel-package';
import { startDateFilter, toQueryString } from '@/utils/dateBounds';
const page = ref(1)
const route = useRoute();

const month = ref<string | undefined>();
const duration = ref<string | undefined>();
const durationItems = ref<{ option: string, value: string }[]>([])
const starts = ref(0)
const locations = ref<string[]>([])
const prices = ref<{ min: number, max: number }>({ min: 0, max: 0 })
const minPrice = ref(0)
const maxPrice = ref(0)
const room = ref<string | undefined>();
const totalItems = ref(0);
const loading = ref(true);
const items = ref<TravelPackage[]>([]);

const { getPackages, getStates } = useTravelPackagesFront('umrah');

const onApplyFilters = async ({
  priceMin,
  priceMax,
  stars,
  locations
}: { priceMin: number; priceMax: number; stars: number; locations: string[] }) => {
  minPrice.value = Number(priceMin)
  maxPrice.value = Number(priceMax)



  page.value = 1
  items.value = []
  fetchPackages()
}

async function fetchPackages() {
  loading.value = true;
  try {
    const dateParams = startDateFilter(month.value);
    const query = new URLSearchParams(dateParams);

    // add or update params
    query.set('page', String(page.value));
    if (duration.value) {

      query.set('duration', String(duration.value));
    }
    if (minPrice.value > 0 && maxPrice.value > 0) {
      query.set('price[lte]', `${maxPrice.value}`)
      query.set('price[gte]', `${minPrice.value}`)

    }

    const data = await getPackages(`${query.toString()}`);
    if (data?.member) {

      items.value = [...items.value, ...data.member];
      totalItems.value = data.totalItems;
    }
  } finally {
    loading.value = false;
  }
}
const fetchDuration = async () => {
  const data = await getStates('umrah');
  if (data) {
    prices.value = data.price


    data.durations.forEach((item: any) => {
      durationItems.value.push({ option: item + " dias", value: item });
    })

  }
}

const gotToNextPage = () => {
  if (items.value.length >= totalItems.value) return;
  page.value += 1;
  fetchPackages();
};
watch(
  () => route.query.meses,
  (q) => { month.value = typeof q === 'string' && q.length ? q : undefined; },
  { immediate: true }
);

watch([month], () => { fetchPackages(); });
watch([duration], () => { page.value = 1; items.value = []; fetchPackages(); });


onMounted(() => {
  fetchPackages();
  fetchDuration();
}


);
</script>
