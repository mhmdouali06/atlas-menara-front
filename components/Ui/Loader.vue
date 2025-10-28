<template>
    <Teleport to="body">
        <transition name="fade" appear>
            <div v-show="isLoading" class="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
                aria-live="polite" aria-busy="true">
                <div class="h-16 w-16 rounded-full border-t-4 border-blue-500 border-opacity-75 animate-spin" />
            </div>
        </transition>
    </Teleport>
</template>

<script setup lang="ts">
const { isLoading } = defineProps<{ isLoading: boolean }>()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
