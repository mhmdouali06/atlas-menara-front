<template>
  <CarsSection1 />
  <CarsList v-model:items="items" />
</template>
<script lang="ts" setup>
import type { Car } from '~/types/car';

const { getCars } = useCarsFront();
const loading = ref(false)

const items = ref<Car[]>([])

const getData = async () => {
  loading.value = true
  try {
    const data = await getCars()
    const members = data['hydra:member'] ?? data.member ?? []
    items.value = members.map((car: Car) => ({
      ...car,
      liked: false,
    }))
  } catch (error) {
    console.error(error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  getData()
})
</script>
