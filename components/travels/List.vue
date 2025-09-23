<template>
  <section class="my-12 w-[90%] mx-auto">
    <p class="text-center text-[#0E6FF0] font-poppins">Explora</p>
    <h3
      class="text-center text-3xl md:text-4xl font-extrabold text-[#0E2041] font-poppins"
    >
      🗺️ Nuestros viajes destacados
    </h3>
    <div class="grid gap-12 md:grid-cols-2 mt-12 md:px-12">
      <TravelsSectionsTravelCard
        v-for="item in items"
        :key="item.id"
        :title="item.title"
        :description="item.description"
        :cta="item.cta"
        :href="item.href"
        :image="item.image"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { TravelsSectionsTravelCard } from "#components";

const items = [
  {
    id: 1,
    title: "Maldivas",
    description:
      "Ya sea en familia o para una luna de miel, un paraíso inolvidable.",
    cta: "Más Detalles",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Umrah Youth Camp",
    description:
      "Una experiencia espiritual única diseñada para los más jóvenes.",
    cta: "Service Details",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Bali",
    description: "Playas mágicas y cultura vibrante en cada rincón.",
    cta: "Más Detalles",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Hajj Special",
    description: "Un viaje espiritual con organización completa.",
    cta: "Service Details",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Turquía",
    description: "Entre Oriente y Occidente, una mezcla fascinante.",
    cta: "Más Detalles",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Marruecos",
    description: "Descubre desiertos, montañas y ciudades imperiales.",
    cta: "Service Details",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1600&auto=format&fit=crop",
  },
];
</script>
