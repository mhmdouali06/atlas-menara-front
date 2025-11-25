<template>
  <UmrahSection1 v-model:month="month" :loading="loading" v-model:duration="duration" v-model:room="room"
    :durationItems="durationItems" @apply="topFilter" />
  <UmrahCustomUmrah @open-modal="openModal" @close-modal="closeModal" />
  <UmrahList :items="items" :loading="loading" @next-page="gotToNextPage" :totalItem="totalItems" :prices="prices"
    @apply="onApplyFilters" @open="openModal" />
  <UmrahSectionsModalCustomUmrah :open="isOpen" @close="closeModal" />

</template>

<script lang="ts" setup>
import type { TravelPackage } from '~/types/travel-package';
import { startDateFilter, toQueryString } from '@/utils/dateBounds';
const page = ref(1)
const isOpen = ref(false)
const openModal = () => {
  isOpen.value = true
}
const closeModal = () => {
  isOpen.value = false
}
const route = useRoute();

const month = ref<string | undefined>();
const duration = ref<string | undefined>();
const durationItems = ref<{ option: string, value: string }[]>([])
const _starts = ref(0)
const _locations = ref<string | undefined>()
const prices = ref<{ min: number, max: number }>({ min: 0, max: 0 })
const minPrice = ref(0)
const maxPrice = ref(0)
const room = ref<string | undefined>();
const totalItems = ref(0);
const loading = ref(true);
const items = ref<TravelPackage[]>([]);

const { getPackages, getStates } = useTravelPackagesFront('umrah');
const topFilter = async () => {
  page.value = 1
  items.value = []

  fetchPackages()

}

const onApplyFilters = async ({
  priceMin,
  priceMax,
  stars,
  locations
}: { priceMin: number; priceMax: number; stars: number; locations: string }) => {
  minPrice.value = Number(priceMin)
  maxPrice.value = Number(priceMax)

  _locations.value = locations
  _starts.value = stars
  page.value = 1
  items.value = []
  fetchPackages()
}

async function fetchPackages() {
  loading.value = true;
  try {
    let query = new URLSearchParams();
    if (month.value) {
      const dateParams = startDateFilter(month.value);
      query = new URLSearchParams(dateParams);
    }

    // add or update params
    query.set('page', String(page.value));
    if (duration.value) {

      query.set('duration', String(duration.value));
    }
    if (room.value) {
      query.set('habitation', String(room.value));
    }
    if (minPrice.value > 0 && maxPrice.value > 0) {
      query.set('price[lte]', `${maxPrice.value}`)
      query.set('price[gte]', `${minPrice.value}`)

    }
    if (_locations.value && _locations.value != 'all') {
      query.set('position', _locations.value)
    }


    if (_starts.value > 0) {
      query.set('averageRating', String(_starts.value))

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
  (q) => {
    month.value = typeof q === 'string' && q.length ? q : undefined;
    topFilter()
  },
  { immediate: true }
);

// watch([month], () => { fetchPackages(); });
// watch([duration], () => { page.value = 1; items.value = []; fetchPackages(); });


onMounted(() => {
  if (route.query.meses) {
    fetchPackages();
  }
  fetchDuration();
}


);
useSeoMeta({
  title: 'Paquetes de Umrah desde España 2025 | Viajes Atlas Menara',
  description:
    'Paquetes de Umrah desde España con vuelos, hoteles cerca del Haram, traslados, visado y guía en español. Viaja a La Meca con una agencia especializada en Umrah y Hajj.',
  ogTitle: 'Umrah desde España | Paquetes completos | Viajes Atlas Menara',
  ogDescription:
    'Elige tu paquete de Umrah desde España con organización profesional, hoteles seleccionados y asistencia en español 24/7.',
  ogType: 'website',
  ogUrl: 'https://atlasmenara.com/umrah',
  robots: 'index,follow'
})
</script>
