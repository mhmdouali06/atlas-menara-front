<template>
  <div class="left col-span-8 mt-4 pd:p-4 md:p-8">
    <UiGallery :images="props.item.gallery" :id="firstSegment" />
  </div>


</template>

<script setup lang="ts">
import type { TravelPackage } from '~/types/travel-package';

import { useRequestURL } from '#app'

const url = useRequestURL()
const firstSegment = url.pathname.split('/')[1] || ''

const props = defineProps<{ item: TravelPackage }>();


</script>
