<template>
  <div class="p-2 small font-poppins " :class="{
    'bg-blue': props.service.bg === 'blue',
    'bg-orange': props.service.bg === 'orange',
  }">
    <div class="justify-center flex">
      <img :src="props.service.icon" alt="icon" />
    </div>
    <h3 class="font-extrabold text-white relative my-4 text-lg md:text-2xl">
      {{ props.service.title }}
    </h3>
    <ul class="my-6 ml-8">
      <li class="list-disc text-white" v-for="item in props.service.list" :key="item">
        <span>{{ item }}</span>
      </li>
    </ul>
    <p class="text-white my-4 relative">{{ props.service.bottom }}</p>
  </div>
</template>
<script setup lang="ts">
interface serviceInterface {
  bg?: string;
  icon?: string;
  title: string;
  list?: string[];
  bottom: string;
}
const props = defineProps<{
  service: serviceInterface;
}>();
</script>
<style scoped>
.small {
  border-radius: 30px;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
}

h3::after,
p::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  border-bottom: 2px dotted #fff;
}

p::after {
  bottom: unset;
  top: -10px;
}
</style>
