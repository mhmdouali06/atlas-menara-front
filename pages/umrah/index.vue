<template>
  <UmrahSection1 />
  <UmrahCustomUmrah />
  <UmrahList :items="items" :loading="loading" />
</template>

<script lang="ts" setup>
import type { TravelPackage } from '~/types/travel-package';

const loading = ref(true)
const { getPackages } = useTravelPackagesFront('umrah');

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
</script>
