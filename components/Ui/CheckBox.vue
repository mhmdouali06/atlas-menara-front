<script setup lang="ts">
defineProps<{
  modelValue: boolean;
  name: string;
  label: string;
}>();
const emit = defineEmits(["update:modelValue"]);
</script>

<template>
  <label :for="name" class="checkbox-wrapper">
    <input
      type="checkbox"
      :id="name"
      :name="name"
      :checked="modelValue"
      @change="
        emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
    />
    <span class="label-text custom-label-check-box" v-html="label"></span>
  </label>
</template>

<style scoped>
.checkbox-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-family: "Open Sans", sans-serif;
  font-size: 17px;
  line-height: 27px;
  color: #091638;
}

.checkbox-wrapper input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: #0d72ff; /* blue style */
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
}

.label-text {
  font-weight: 400;
  opacity: 0.9;
}
</style>
