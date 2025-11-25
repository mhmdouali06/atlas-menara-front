<template>
  <DetailPackageSection1 :loading="loading" :item="item" />
  <DetailPackageSection2 :loading="loading" :item="item" />
  <DetailPackageSectionsOther />
</template>
<script lang="ts" setup>
import type { TravelPackage } from '~/types/travel-package';

const loading = ref(false)
const { getPackage } = useTravelPackagesFront("");
const slug = useRoute().params.slug
loading.value = true
const item = ref<TravelPackage>()

const getData = async () => {
  loading.value = true
  try {
    if (!slug) {
      navigateTo('/hajj')
    }
    const data = await getPackage(slug + "")
    if (data) {
      if (data) {
        item.value = data
      }
    }
  } catch (error: any) {
    console.log(error);
    // if (error.response.status == 404) {
    //   navigateTo('/hajj')
    // }

  }
  finally {
    loading.value = false
  }



}

onMounted(() => {
  getData()
})
useSeoMeta({
  title: () =>
    `${item.value?.title ?? 'Paquete de Hajj'} | Hajj desde España | Viajes Atlas Menara`,
  description: () =>
    `Detalles de ${item.value?.title ?? 'este paquete de Hajj'}: vuelos, hoteles, traslados, servicios incluidos y acompañamiento en español para tu peregrinación a La Meca.`,
  ogTitle: () =>
    `${item.value?.title ?? 'Paquete de Hajj'} | Viajes Atlas Menara`,
  ogDescription: () =>
    `Conoce todo sobre ${item.value?.title ?? 'este paquete de Hajj'} y reserva tu peregrinación con una agencia especializada en Hajj y Umrah.`,
  ogType: 'website',
  ogUrl: () => `https://atlasmenara.com/hajj/${item.value?.slug}`,
  robots: 'index,follow'
})
</script>
