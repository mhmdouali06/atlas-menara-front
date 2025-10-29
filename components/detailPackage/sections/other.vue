<template>
  <section>
    <div v-if="!loading" class="w-[90%] mx-auto my-10 grid grid-cols-12 gap-4 md:gap-10">
      <div v-for="item in items.slice(0, 3)" class="col-span-12 md:col-span-4" :key="item.id">
        <UiCard :item="item" class="w-full" />
      </div>
    </div>
    <UiGridLoading v-else :items="3" class="w-[90%] mx-auto my-10" />
  </section>
</template>
<script lang="ts" setup>
import type { TravelPackage } from '~/types/travel-package';
const url = useRequestURL()
const loading = ref<boolean>(true)
const firstSegment = url.pathname.split('/')[1] || ''
const { getPackages } = useTravelPackagesFront(firstSegment + "");

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
  } finally {
    loading.value = false
  }


}

onMounted(() => {
  getData()
})
</script>
<style scoped>
::v-deep(.main) {
  width: 100%;
}
</style>
