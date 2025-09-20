<template>
  <CarsDetailsSection1 />
  <CarsDetailsSection2 :car="car" privacy-href="/politica-de-privacidad" />
</template>
<script setup lang="tsx">
const car = ref({
  title: "New MG ZS con conductor",
  location: "Madrid, España",
  priceNote: "precio varía según las condiciones",
  description:
    "Nuestro servicio de alquiler de coche con conductor está pensado para quienes buscan comodidad, seguridad y puntualidad en cada desplazamiento. Ya sea para traslados al aeropuerto, viajes de negocios, turismo o desplazamientos privados, ponemos a tu disposición vehículos modernos y conductores profesionales que se adaptan a tus horarios y necesidades.",
  benefits: [
    "Vehículos confortables y climatizados…",
    "Conductores experimentados…",
    "Flexibilidad total…",
    "Servicio puerta a puerta…",
  ],
  conclusion:
    "Este servicio es la mejor opción para quienes desean viajar con tranquilidad y estilo, dejando en nuestras manos toda la logística del trayecto.",
});
</script>
