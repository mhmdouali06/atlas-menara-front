<template>
  <div class="left col-span-8 p-8">
    <UiGallery :images="galleryImages" />
  </div>


</template>

<script setup lang="ts">
import type { Umrah } from '~/types/Umrah';


const props = defineProps<{ item: Umrah }>();
const I = (id: string) => `https://images.unsplash.com/${id}`;

const galleryImages = [
  {
    src: I("photo-1526772662000-3f88f10405ff"),
    alt: "Medina courtyard",
  },
  {
    src: I("photo-1500530855697-b586d89ba3ee"),
    alt: "Desert sunrise",
  },
  {
    src: I("photo-1507525428034-b723cf961d3e"),
    alt: "Sea and rocks",
  },
  {
    src: I("photo-1512453979798-5ea266f8880c"),
    alt: "Minaret sunset",
  }, // tall
  {
    src: I("photo-1491553895911-0055eca6402d"),
    alt: "Mosque panorama",
  }, // wide
  {
    src: I("photo-1501785888041-af3ef285b470"),
    alt: "Mountain ridges",
  },
];
</script>
