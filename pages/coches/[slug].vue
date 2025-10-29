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
    console.log(error);
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
</script>
