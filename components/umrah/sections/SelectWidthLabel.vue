<template>
  <div class="mai">
    <p class="label font-montserrat text-[#1C1B1F]">{{ props.label }}</p>
    <div class="flex gap-2">
      <img :src="props.iocn" alt="icon" />
      <select name="" id="" class="w-full">
        <option v-for="(item, index) in props.options" :key="index" :value="item.value"
          class="font-montserrat text-[#1C1B1F] text-lg w-full">
          {{ item.option }}
        </option>
      </select>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{
  label: string;
  iocn: string;
  options: { option: string; value: string }[];
}>();
</script>
<style scoped>
.mai {
  border-radius: 4px;
  border: 1px solid #79747e;
  background: #fff;
  padding: 1rem;
  position: relative;

}

.label {
  position: absolute;
  top: -0.8rem;
  left: 0.5rem;
  background: #fff;
  padding: 0 0.5rem;
}
</style>
