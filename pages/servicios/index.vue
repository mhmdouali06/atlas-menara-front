<script setup lang="ts">
const modalOpen = ref(false)
const selectedServiceKey = ref<'plane' | 'boat' | 'hotel' | 'visa'>('plane')

function openService(key: 'plane' | 'boat' | 'hotel' | 'visa') {
  selectedServiceKey.value = key
  modalOpen.value = true
}
useSeoMeta({
  title: 'Servicios de Viajes Atlas Menara | Umrah, Hajj y viajes a Marruecos',
  description:
    'Conoce todos los servicios de Viajes Atlas Menara: organización de Umrah y Hajj, viajes a Marruecos, alquiler de coches, transfers privados y atención personalizada en español.',
  ogTitle: 'Servicios de Viajes Atlas Menara',
  ogDescription:
    'Servicios integrales para tu Umrah, Hajj o viaje a Marruecos: paquetes completos, gestión de reservas y asistencia antes, durante y después del viaje.',
  ogType: 'website',
  ogUrl: 'https://atlasmenara.com/servicios',
  robots: 'index,follow'
})
</script>
<template>
  <ServiceSection1 @open="openService" />
  <ServiceSection2 />
  <ServiceSection3 @open="openService" />
  <ServiceSection4 />
  <HomeBlog />
  <ServiceSectionsServiceContactModal :open="modalOpen" :serviceKey="selectedServiceKey" @close="modalOpen = false" />
</template>
