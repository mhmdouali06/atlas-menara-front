<template>
  <UmrahSection1 v-model:month="month" v-model:duration="duration" v-model:room="room" />
  <UmrahCustomUmrah />
  <UmrahList :items="items" :loading="loading" />
</template>

<script lang="ts" setup>
import type { TravelPackage } from '~/types/travel-package';
import { startDateFilter, toQueryString } from '@/utils/dateBounds';

const route = useRoute();

const month = ref<string | undefined>();
const duration = ref<string | undefined>();
const room = ref<string | undefined>();

const loading = ref(true);
const items = ref<TravelPackage[]>([]);

const { getPackages } = useTravelPackagesFront('umrah');

async function fetchPackages() {
  loading.value = true;
  try {
    const dateParams = startDateFilter(month.value);
    const query = toQueryString(dateParams);
    const data = await getPackages(query);
    if (data?.member) items.value = data.member;
  } finally {
    loading.value = false;
  }
}

watch(
  () => route.query.meses,
  (q) => { month.value = typeof q === 'string' && q.length ? q : undefined; },
  { immediate: true }
);

watch(month, () => { fetchPackages(); });


onMounted(fetchPackages);
</script>
