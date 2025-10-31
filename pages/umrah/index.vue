<template>
  <UmrahSection1 v-model:month="month" v-model:duration="duration" v-model:room="room" />
  <UmrahCustomUmrah />
  <UmrahList :items="items" :loading="loading" @next-page="gotToNextPage" :totalItem="totalItems" />
</template>

<script lang="ts" setup>
import type { TravelPackage } from '~/types/travel-package';
import { startDateFilter, toQueryString } from '@/utils/dateBounds';
const page = ref(1)
const route = useRoute();

const month = ref<string | undefined>();
const duration = ref<string | undefined>();
const room = ref<string | undefined>();
const totalItems = ref(0);
const loading = ref(true);
const items = ref<TravelPackage[]>([]);

const { getPackages } = useTravelPackagesFront('umrah');

async function fetchPackages() {
  loading.value = true;
  try {
    const dateParams = startDateFilter(month.value);
    const query = new URLSearchParams(dateParams);

    // add or update params
    query.set('page', String(page.value));

    const data = await getPackages(`${query.toString()}`);
    if (data?.member) {

      items.value = [...items.value, ...data.member];
      totalItems.value = data.totalItems;
    }
  } finally {
    loading.value = false;
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

watch(month, () => { fetchPackages(); });


onMounted(fetchPackages);
</script>
