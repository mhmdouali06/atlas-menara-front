<template>
  <section>
    <div class="w-[90%] mx-auto my-10 grid grid-cols-12 gap-10">
      <div v-for="item in items.slice(0, 3)" class="col-span-12 md:col-span-4" :key="item.id">
        <UiCard :item="item" class="w-full" />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import type { TravelPackage } from '~/types/travel-package';

const { getPackages } = useTravelPackagesFront("umrah");

const items = ref<TravelPackage[]>([])

const getData = async () => {
  const data = await getPackages()
  if (data) {
    if (data.member) {
      items.value = data.member
    }
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
