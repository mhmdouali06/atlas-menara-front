<template>
  <DetailPackageSection1 :item="item" :loading="loading" />
  <DetailPackageSection2 :item="item" :loading="loading" />
  <DetailPackageSectionsOther />
</template>
<script lang="ts" setup>
import type { TravelPackage } from '~/types/travel-package';

const loading = ref(true)
const { getPackage } = useTravelPackagesFront("");
const slug = useRoute().params.slug

const item = ref<TravelPackage>()

const getData = async () => {
  loading.value = true
  try {
    if (!slug) {
      navigateTo('/umrah')
    }
    const data = await getPackage(slug + "")

    if (data) {
      item.value = data

    }
  } catch (error: any) {
    console.log(error);
    // if (error.response.status == 404) {
    //   navigateTo('/umrah')
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
    `${item.value?.title ?? 'Paquete de Umrah'} | Umrah desde España | Viajes Atlas Menara`,
  description: () =>
    `Información detallada de ${item.value?.title ?? 'este paquete de Umrah'}: programa, servicios incluidos, categoría de hoteles y traslados para tu viaje a La Meca.`,
  ogTitle: () =>
    `${item.value?.title ?? 'Paquete de Umrah'} | Viajes Atlas Menara`,
  ogDescription: () =>
    `Reserva ${item.value?.title ?? 'tu paquete de Umrah'} con una agencia especializada en Umrah y Hajj para clientes de España.`,
  ogType: 'website',
  ogUrl: () => `https://atlasmenara.com/umrah/${item.value?.slug}`,
  robots: 'index,follow'
})
</script>
