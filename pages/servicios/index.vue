<script setup lang="ts">
const modalOpen = ref(false)
const selectedServiceKey = ref<'plane' | 'boat' | 'hotel' | 'visa'>('plane')

function openService(key: 'plane' | 'boat' | 'hotel' | 'visa') {
  selectedServiceKey.value = key
  modalOpen.value = true
}
</script>
<template>
  <ServiceSection1 @open="openService" />
  <ServiceSection2 />
  <ServiceSection3 @open="openService" />
  <ServiceSection4 />
  <HomeBlog />
  <ServiceSectionsServiceContactModal :open="modalOpen" :serviceKey="selectedServiceKey" @close="modalOpen = false" />
</template>
