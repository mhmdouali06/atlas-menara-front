<script setup lang="ts">
useSeoMeta({
  title: "Selectalent – Formación Ejecutiva con Impacto",
  description:
    "Impulsa el potencial de tu equipo con programas formativos personalizados en IA, ventas y liderazgo. Formación práctica, estratégica y a medida.",
  ogTitle: "Selectalent – Formación Ejecutiva con Impacto",
  ogDescription:
    "Descubre cursos que se adaptan a tus necesidades. Formación en inteligencia artificial, liderazgo y ventas con impacto real.",
  ogUrl: "https://selectalent.es/",
  twitterCard: "summary_large_image",
});

useHead({
  meta: [
    {
      name: "keywords",
      content:
        "formación ejecutiva, cursos IA, cursos ventas, talleres liderazgo, Selectalent, formación empresarial, cursos personalizados, capacitación",
    },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Selectalent" },
  ],
});
</script>

<template>
  <HomeSection1 />
  <HomeWhoAreWe />
  <HomeContact />
</template>
