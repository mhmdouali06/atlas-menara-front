<template>
  <div class="left col-span-8 p-8">
    <UiGallery :images="props.item.gallery" id="umrah" />
  </div>


</template>

<script setup lang="ts">
import type { Umrah } from '~/types/Umrah';


const props = defineProps<{ item: Umrah }>();


</script>
