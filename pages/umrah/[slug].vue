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
</script>
