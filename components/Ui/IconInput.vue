<template>
    <div class="w-full">
        <!-- Field container (white card) -->
        <div class="relative bg-white  border border-[#E4E7EE] h-[50px] flex items-center">

            <div class="absolute left-3 top-0 bottom-0 flex items-center">
                <img v-if="icon" :src="icon" alt="" class="h-4 w-4 opacity-70" />
            </div>

            <label :for="name" v-if="!model"
                class="absolute left-10 top-[45%] text-[10px] font-poppins text-sm leading-[10px] text-[#0E2041]/50">
                {{ label }}
            </label>

            <!-- The real input text sits lower, with left padding for icon and label -->
            <input :id="name" :name="name" :type="type" :placeholder="placeholder" v-model="model" class="w-full h-full rounded-[8px] outline-none text-[13px] text-[#0E2041] placeholder:text-[#0E2041]/30
               pl-10 pr-3 pt-[3px]" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
    modelValue: string | number | null;
    name: string;
    label: string;
    placeholder?: string;
    type?: string;
    icon?: string; // image path
}>();

const emit = defineEmits(["update:modelValue"]);

const model = computed({
    get: () => props.modelValue,
    set: (v) => emit("update:modelValue", v),
});
</script>
<style scoped>
input[type="date"]:in-range::-webkit-datetime-edit-year-field,
input[type="date"]:in-range::-webkit-datetime-edit-month-field,
input[type="date"]:in-range::-webkit-datetime-edit-day-field,
input[type="date"]:in-range::-webkit-datetime-edit-text {
    color: transparent;
}
</style>