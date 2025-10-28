<template>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="space-y-4 " v-for="(index) in items" :key="index">
            <div class="bg-gray   animate-pulse h-48 rounded-lg"></div>
            <div class="bg-gray animate-pulse h-6 w-3/4 rounded"></div>
            <div class="bg-gray animate-pulse h-4 w-1/2 rounded"></div>
        </div>

    </div>
</template>
<script setup lang="ts">
const { items = 4 } = defineProps<{ items?: number }>()
</script>