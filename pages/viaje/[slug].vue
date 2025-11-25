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

const item = ref<TravelPackage>()

const getData = async () => {
  loading.value = true
  try {
    if (!slug) {
      navigateTo('/viaje')
    }
    const data = await getPackage(slug + "")

    if (data) {
      item.value = data

    }
  } catch (error: any) {
    console.log(error);
    // if (error.response.status == 404) {
    //   navigateTo('/viaje')
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
    `${item.value?.title ?? 'Viaje a Marruecos'} | Viajes Atlas Menara`,
  description: () =>
    `Detalles de ${item.value?.title ?? 'este viaje a Marruecos'}: itinerario día a día, servicios incluidos, alojamientos y extras opcionales para viajar desde España.`,
  ogTitle: () =>
    `${item.value?.title ?? 'Viaje a Marruecos'} | Viajes Atlas Menara`,
  ogDescription: () =>
    `Organiza tu viaje a Marruecos con una agencia especializada en rutas, desierto y circuitos culturales.`,
  ogType: 'website',
  ogUrl: () => `https://atlasmenara.com/viaje/${item.value?.slug}`,
  robots: 'index,follow'
})
</script>
