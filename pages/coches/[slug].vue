<template>
  <CarsDetailsSection1 v-if="gallery.length > 0" :images="gallery" />
  <CarsDetailsSection2 :car="item" :loading="loading" />
</template>
<script lang="ts" setup>
import type { MediaLite, Car } from '~/types/car';


const loading = ref(true)
const { getCar } = useCarsFront();
const slug = useRoute().params.slug
const gallery = ref<MediaLite[]>([])
const item = ref<Car>()

const getData = async () => {
  loading.value = true
  try {
    if (!slug) {
      navigateTo('/coches')
    }
    const data = await getCar(slug + "")
    if (data) {
      item.value = data
      gallery.value = data.gallery || []
      gallery.value.unshift(data.thumbnail as MediaLite)

    }
  } catch (error: any) {
    // if (error.response.status == 404) {
    //   navigateTo('/coches')
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
    `Alquiler ${item.value?.brand ?? ''} ${item.value?.model ?? ''} en Marruecos | Viajes Atlas Menara`,
  description: () =>
    `Reserva el coche ${item.value?.brand ?? ''} ${item.value?.model ?? ''} para tus viajes por Marruecos, transfers de Umrah, Hajj o turismo, con servicio en español.`,
  ogTitle: () =>
    `Alquiler ${item.value?.brand ?? ''} ${item.value?.model ?? ''} en Marruecos`,
  ogDescription: () =>
    `Coche disponible para alquiler en Marruecos con condiciones claras, asistencia y gestión desde España.`,
  ogType: 'website',
  ogUrl: () => `https://atlasmenara.com/coches/${item.value?.slug}`,
  robots: 'index,follow'
})
</script>
