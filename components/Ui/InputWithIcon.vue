<template>
  <div class="relative">
    <span
      class="pointer-events-none absolute inset-y-0 left-4 flex items-center"
    >
      <img :src="icon" :alt="iconAlt" class="h-5 w-5" />
    </span>

    <input
      :id="id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :required="required"
      :autocomplete="autocomplete"
      :inputmode="inputmode"
      :maxlength="maxlength"
      :pattern="pattern"
      :disabled="disabled"
      :readonly="readonly"
      class="h-14 w-full rounded-sm border-0 bg-white pl-11 pr-4 text-[15px] tracking-wide placeholder-gray-400 outline-none placeholder-font-poppins"
      :class="inputClass"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue: string | number | null;
    icon: string;
    iconAlt?: string;
    id?: string;
    name?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    autocomplete?: string;
    inputmode?: any;
    maxlength?: number;
    pattern?: string;
    disabled?: boolean;
    readonly?: boolean;
    inputClass?: string | string[] | Record<string, boolean>;
  }>(),
  {
    iconAlt: "icon",
    type: "text",
    placeholder: "",
    required: false,
    autocomplete: "off",
    inputmode: undefined,
    maxlength: undefined,
    pattern: undefined,
    disabled: false,
    readonly: false,
    inputClass: "",
  }
);
defineEmits<{
  (e: "update:modelValue", v: string): void;
}>();
</script>
