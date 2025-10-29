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
</script>
