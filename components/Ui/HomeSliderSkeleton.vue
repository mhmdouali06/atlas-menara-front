<template>
    <section class=" my-4">
        <!-- Slider wrapper -->
        <div class="relative">
            <!-- Main slide skeleton -->
            <div class="sk-block sk-animate w-full h-56 sm:h-64 md:h-[30rem] rounded-2xl mb-4"></div>

            <!-- Slide content overlay skeleton (title + subtitle + badge) -->
            <div class="absolute left-4 bottom-6 space-y-3 max-w-md">
                <div class="sk-block sk-animate h-7 w-3/4 rounded"></div>
                <div class="sk-block sk-animate h-4 w-2/3 rounded"></div>
                <div class="sk-block sk-animate h-4 w-1/3 rounded"></div>
            </div>

            <!-- Fake arrows -->
            <button type="button"
                class="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-3">
                <span class="sk-block sk-animate h-9 w-9 rounded-full"></span>
            </button>
            <button type="button"
                class="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-3">
                <span class="sk-block sk-animate h-9 w-9 rounded-full"></span>
            </button>
        </div>



        <!-- Pagination bullets -->
        <div class="flex justify-center gap-2 mt-6">
            <span v-for="n in bullets" :key="'b-' + n" class="sk-block sk-animate h-2 w-6 rounded-full"></span>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Optional props if you want to tweak counts from parent
const props = defineProps<{
    thumbs?: number;
    dots?: number;
}>();

const thumbCount = computed(() => props.thumbs ?? 4);
const bullets = computed(() => props.dots ?? 4);
</script>

<style scoped>
.sk-block {
    background-color: #e6e7eb;
    /* light gray */
}

:global(.dark) .sk-block {
    background-color: #2e2f34;
    /* dark gray */
}

@keyframes sk-pulse {

    0%,
    100% {
        opacity: 0.6;
    }

    50% {
        opacity: 1;
    }
}

.sk-animate {
    animation: sk-pulse 1.5s ease-in-out infinite;
}
</style>
