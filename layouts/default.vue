<script setup lang="ts">
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "Viajes Atlas Menara",
        "url": "https://atlasmenara.com",
        "telephone": "+34 657 373 150",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "C. de Parvillas Altas, 15",
          "addressLocality": "Madrid",
          "addressCountry": "ES"
        },
        "description": "Agencia de viajes especializada en Umrah, Hajj y viajes a Marruecos desde España.",
        "sameAs": [
          "https://www.facebook.com",
          "https://www.instagram.com"
        ]
      }) as any
    }
  ]
})
</script>

<template>
  <LayoutTopSection />
  <LayoutHeader />
  <slot></slot>
  <LayoutFooter />
</template>
