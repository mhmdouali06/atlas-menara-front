<template>
  <CarsDetailsSection1 v-if="gallery.length > 0" :images="gallery" />
  <CarsDetailsSection2 v-if="item" :car="item" privacy-href="/politica-de-privacidad" />
</template>
<script lang="ts" setup>
import type { MediaLite, Car } from '~/types/car';


const loading = ref(false)
const { getCar } = useCarsFront();
const slug = useRoute().params.slug
const gallery = ref<MediaLite[]>([])
const item = ref<Car>()

const getData = async () => {
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
    console.log(error);
    if (error.response.status == 404) {
      navigateTo('/coches')
    }

  }
  finally {
    loading.value = false
  }



}

onMounted(() => {
  getData()
})
</script>
