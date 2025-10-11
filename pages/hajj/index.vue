<template>
  <HajjSection1 />
  <HajjList :items="items" :loading="loading" />
</template>
<script lang="ts" setup>
import type { TravelPackage } from '~/types/travel-package';

const loading = ref(false)
const { getPackages } = useTravelPackagesFront('hajj');

const items = ref<TravelPackage[]>([])

const getData = async () => {
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