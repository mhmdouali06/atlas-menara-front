<template>
  <DetailPackageSection1 v-if="item" :item="item" />
  <DetailPackageSection2 v-if="item" :item="item" />
  <DetailPackageSectionsOther />
</template>
<script lang="ts" setup>
import type { TravelPackage } from '~/types/travel-package';

const loading = ref(false)
const { getPackage } = useTravelPackagesFront();
const slug = useRoute().params.slug

const item = ref<TravelPackage>()

const getData = async () => {
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
    if (error.response.status == 404) {
      navigateTo('/hajj')
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
