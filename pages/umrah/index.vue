<template>
  <UmrahSection1 />
  <UmrahCustomUmrah />
  <UmrahList :items="items" :loading="loading" />
</template>

<script lang="ts" setup>
import { useUmrahApi } from '~/components/useUmrahApi';
import type { Umrah } from '~/types/Umrah';
const loading = ref(false)
const { getUmrahs } = useUmrahApi();

const items = ref<Umrah[]>([])

const getData = async () => {
  try {
    const data = await getUmrahs()
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
