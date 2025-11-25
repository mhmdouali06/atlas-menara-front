<template>
  <HajjSection1 />
  <HajjList :items="items" :loading="loading" />
</template>
<script lang="ts" setup>
import type { TravelPackage } from '~/types/travel-package';

const loading = ref(true)
const { getPackages } = useTravelPackagesFront('hajj');

const items = ref<TravelPackage[]>([])

const getData = async () => {
  loading.value = true
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
  title: 'Paquetes de Hajj desde España 2025 | Peregrinación a La Meca | Viajes Atlas Menara',
  description:
    'Organizamos paquetes de Hajj desde España con vuelos, hoteles cerca del Haram, traslados, visado y acompañamiento en español, con agencia acreditada y años de experiencia.',
  ogTitle: 'Hajj desde España | Paquetes completos | Viajes Atlas Menara',
  ogDescription:
    'Elige tu paquete de Hajj desde España con servicios organizados, guías en español y soporte durante toda la peregrinación.',
  ogType: 'website',
  ogUrl: 'https://atlasmenara.com/hajj',
  robots: 'index,follow'
})
</script>