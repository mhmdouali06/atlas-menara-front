<script setup lang="ts">
defineProps<{
  modelValue: string;
  type: string;
  name: string;
  label?: string;
  placeholder?: string;
}>();
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="flex flex-col w-full">
    <label v-if="label" :for="name"
      class="text-[#091638] text-[17px] leading-[27px] font-normal font-opensans mb-1 ml-2">
      {{ label }}
    </label>
    <input :type="type" :id="name" :name="name" :placeholder="placeholder" :value="modelValue" @input="
      emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
      class="w-full h-[60px] px-5 text-[17px] font-opensans rounded-full bg-[#F3F4F8] border border-[#04162F33] placeholder:text-[#141B2D]/50 shadow-inner focus:outline-none" />
  </div>
</template>
