<script setup lang="ts">
defineProps<{
  modelValue: string;
  name: string;
  label?: string;
  placeholder?: string;
  rows?: number; // optional: default below
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <div class="flex flex-col w-full">
    <label
      v-if="label"
      :for="name"
      class="text-[#091638] text-[17px] leading-[27px] font-normal font-opensans mb-1 ml-2"
    >
      {{ label }}
    </label>

    <textarea
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :rows="rows ?? 5"
      :value="modelValue"
      @input="
        emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)
      "
      class="w-full min-h-[140px] px-5 py-4 text-[17px] font-opensans rounded-2xl bg-[#F3F4F8] border border-[#04162F33] placeholder:text-[#141B2D]/50 shadow-inner focus:outline-none resize-none"
    ></textarea>
  </div>
</template>
