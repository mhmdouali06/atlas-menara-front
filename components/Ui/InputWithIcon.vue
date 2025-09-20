<template>
  <div class="relative">
    <!-- left icon -->
    <span
      class="pointer-events-none absolute inset-y-0 left-4 flex items-center"
    >
      <img :src="icon" :alt="iconAlt" class="h-5 w-5" />
    </span>

    <!-- input -->
    <input
      :id="id"
      :type="type"
      :name="name"
      :required="required"
      :autocomplete="autocomplete"
      :inputmode="inputmode"
      :maxlength="maxlength"
      :pattern="pattern"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="!isNativeDateType ? placeholder : undefined"
      class="h-14 w-full rounded-sm border-0 bg-white pl-11 pr-12 text-[15px] tracking-wide outline-none placeholder-gray-400 font-poppins"
      :class="[
        inputClass,
        isNativeDateType && isEmpty && !focused ? 'ui-native-date-empty' : '',
      ]"
      :value="stringValue"
      @focus="focused = true"
      @blur="focused = false"
      @input="
        $emit('update:modelValue', ($event.target as HTMLInputElement).value)
      "
    />

    <!-- fake placeholder for native date/time, styled EXACTLY like the normal one -->
    <span
      v-if="showFakePlaceholder"
      class="pointer-events-none absolute left-11 right-12 top-1/2 -translate-y-1/2 text-[15px] tracking-wide text-[#9CA3AF] font-poppins whitespace-nowrap overflow-hidden text-ellipsis"
      aria-hidden="true"
    >
      {{ placeholder }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

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
    fakePlaceholderForNativeDate?: boolean;
  }>(),
  {
    iconAlt: "icon",
    type: "text",
    placeholder: "",
    required: false,
    autocomplete: "off",
    disabled: false,
    readonly: false,
    inputClass: "",
    fakePlaceholderForNativeDate: true,
  }
);

defineEmits<{ (e: "update:modelValue", v: string): void }>();

const focused = ref(false);
const stringValue = computed(() => (props.modelValue ?? "") as string);

const isNativeDateType = computed(() =>
  ["date", "datetime-local", "time", "month", "week"].includes(
    props.type ?? "text"
  )
);

const isEmpty = computed(
  () =>
    stringValue.value === "" ||
    stringValue.value === null ||
    stringValue.value === undefined
);

const showFakePlaceholder = computed(
  () =>
    props.fakePlaceholderForNativeDate &&
    isNativeDateType.value &&
    isEmpty.value &&
    !focused.value
);
</script>

<style scoped>
/* Hide Chrome/WebKit's built-in skeleton when empty so it doesn't fight the fake placeholder */
.ui-native-date-empty:not(:focus)::-webkit-datetime-edit {
  color: transparent;
}
.ui-native-date-empty:not(:focus)::-webkit-datetime-edit-ampm-field,
.ui-native-date-empty:not(:focus)::-webkit-datetime-edit-day-field,
.ui-native-date-empty:not(:focus)::-webkit-datetime-edit-month-field,
.ui-native-date-empty:not(:focus)::-webkit-datetime-edit-year-field,
.ui-native-date-empty:not(:focus)::-webkit-datetime-edit-hour-field,
.ui-native-date-empty:not(:focus)::-webkit-datetime-edit-minute-field {
  color: transparent;
}
/* Make sure the calendar icon on the right doesn’t overlap text (native control) */
input[type="date"],
input[type="datetime-local"],
input[type="time"],
input[type="month"],
input[type="week"] {
  padding-right: 3rem; /* matches pr-12 in the input class */
}
</style>
