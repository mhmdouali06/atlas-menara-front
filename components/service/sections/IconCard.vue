<template>
  <article class="flex h-full w-full flex-col items-start p-6 min-h-[230px]">
    <!-- Icon tile -->
    <div class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl icon p-2">
      <img :src="icon" :alt="title" class="h-8 w-8" />
    </div>

    <!-- Title -->
    <h3 class="mb-6 text-xl font-extrabold tracking-tight text-[#07113D] font-poppins">
      {{ title }}
    </h3>

    <!-- CTA -->
    <button @click="navigateTo(href)"
      class="mt-auto inline-flex items-center text-orange gap-2 rounded-full border border-[#ffb43b] px-5 py-2 text-sm font-semibold shadow-sm hover:opacity-95 focus:outline-none">
      {{ cta || 'Descubrir' }}
      <span class="relative inline-flex h-5 w-5 items-center justify-center rounded-full">
        <img :src="start" alt="icon" class="fill-orange" />
      </span>
    </button>
  </article>
</template>

<script setup lang="ts">
import start from '@/assets/img/icon/start-orange.svg';
defineProps<{
  title: string;
  cta?: string;
  icon?: string;
  href: string;
}>();
</script>

<style scoped>
article {
  border-radius: 30px;
  background: #fff;
  box-shadow: 4px 10px 30px 0 rgba(0, 0, 0, 0.06);
}

.icon {
  border-radius: 16px;
  background: #fff;
  box-shadow: 4px 10px 30px 0 rgba(0, 0, 0, 0.06);
}
</style>
