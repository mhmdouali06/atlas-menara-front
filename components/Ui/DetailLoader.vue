<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 my-8 w-[90%] mx-auto">
        <!-- Left side: text content skeleton -->
        <div class="space-y-5">
            <div class="sk-block sk-animate h-6 w-1/3 rounded"></div>
            <div class="sk-block sk-animate h-5 w-1/2 rounded"></div>
            <div class="sk-block sk-animate h-4 w-2/3 rounded"></div>
            <div class="sk-block sk-animate h-4 w-2/3 rounded"></div>
            <div class="sk-block sk-animate h-4 w-2/3 rounded"></div>
            <div class="sk-block sk-animate h-4 w-2/3 rounded"></div>
            <div class="sk-block sk-animate h-4 w-2/3 rounded"></div>
            <div class="sk-block sk-animate h-4 w-2/3 rounded"></div>
            <div class="sk-block sk-animate h-4 w-3/5 rounded"></div>
            <div class="sk-block sk-animate h-4 w-2/4 rounded"></div>
            <div class="sk-block sk-animate h-4 w-1/3 rounded"></div>
        </div>

        <!-- Right side: reservation box skeleton -->
        <div class="space-y-6  rounded-xl  shadow-sm">
            <div class="sk-block sk-animate h-7 w-1/3 rounded"></div>
            <div class="sk-block sk-animate h-12 w-full rounded"></div>
            <div class="sk-block sk-animate h-12 w-full rounded"></div>
            <div class="sk-block sk-animate h-12 w-full rounded"></div>
            <div class="sk-block sk-animate h-12 w-full rounded"></div>
            <div class="sk-block sk-animate h-10 w-1/3 mx-auto rounded"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
// static detail skeleton; no props needed
</script>

<style scoped>
/* neutral skeleton background that doesn’t rely on Tailwind colors */
.sk-block {
    background-color: #e6e7eb;
    /* light gray */
}

/* dark mode override without Tailwind */
:global(.dark) .sk-block {
    background-color: #2e2f34;
    /* dark gray */
}

/* simple pulse animation, again no Tailwind dependency */
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
