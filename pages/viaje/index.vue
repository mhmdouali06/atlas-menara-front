<template>
  <TravelsSection1 />
  <TravelsSection2 />
  <TravelsList :items="items" :loading="loading" />
</template>
<script lang="ts" setup>
import type { TravelPackage } from '~/types/travel-package';

const loading = ref(false)
const { getPackages } = useTravelPackagesFront('viaje');

const items = ref<TravelPackage[]>([])

const getData = async () => {
  try {
    const data = await getPackages()
    if (data) {
      if (data.member) {
        items.value = data.member
      }
    }
  } catch (error) {
    console.log(error);

  }
  finally {
    loading.value = false
  }



}

onMounted(() => {
  getData()
})
useSeoMeta({
  title: 'Viajes y circuitos a Marruecos desde España | Viajes Atlas Menara',
  description:
    'Descubre circuitos, escapadas y viajes organizados a Marruecos desde España: desierto del Sahara, ciudades imperiales, costa atlántica y experiencias auténticas con agencia especializada.',
  ogTitle: 'Viajes a Marruecos desde España | Viajes Atlas Menara',
  ogDescription:
    'Reserva tu viaje a Marruecos con itinerarios organizados, guías locales y asistencia en español.',
  ogType: 'website',
  ogUrl: 'https://atlasmenara.com/viaje',
  robots: 'index,follow'
})

</script>