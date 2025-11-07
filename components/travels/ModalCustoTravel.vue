<template>
    <div>
        <client-only>
            <TransitionRoot appear :show="open" as="template">
                <Dialog as="div" @close="close" class="relative z-[10000] font-poppins">
                    <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0"
                        enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100"
                        leave-to="opacity-0">
                        <DialogOverlay class="fixed inset-0 bg-black/60" />
                    </TransitionChild>

                    <div class="fixed inset-0 overflow-y-auto">
                        <form @submit.prevent="onSubmit" class="flex min-h-full items-start justify-center px-2 py-6">
                            <DialogPanel class="w-[95%] max-w-3xl rounded-[10px] shadow-xl bg-[#EDEDED] relative">
                                <button type="button" @click="close"
                                    class="absolute right-3 top-3 text-[#0E2041]/60 hover:text-[#0E2041] text-2xl"
                                    aria-label="Cerrar">
                                    ×
                                </button>

                                <div class="px-5 pt-4 pb-3 text-center">
                                    <h2 class="text-[#0E2041] text-[24px] md:text-[26px] font-semibold">
                                        Presupuesto gratuito para tu viaje
                                    </h2>
                                </div>

                                <div class="px-5 pb-5">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
                                        <div class="space-y-5">
                                            <UiIconInput v-model="form.fullName" :icon="icons.user" name="fullName"
                                                label="NOMBRE Y APELLIDO (responsable) *" type="text" />
                                            <UiIconInput v-model="form.email" :icon="icons.mail" name="email"
                                                label="E-MAIL" type="email" />
                                        </div>

                                        <div class="space-y-5">
                                            <UiIconInput v-model="form.totalTravelers" :icon="icons.users"
                                                name="totalTravelers" label="Numero total de viajeros*" type="number" />
                                            <UiIconInput v-model="form.phone" :icon="icons.phone" name="phone"
                                                label="NÚMERO TELÉFONO*" type="text" />
                                        </div>
                                    </div>

                                    <div class="my-5">
                                        <UiTextArea v-model="form.comments" name="comments"
                                            placeholder="Cuéntanos tu viaje ideal y nosotros lo hacemos realidad" />
                                    </div>

                                    <div
                                        class="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                        <UiCheckBox v-model="form.acceptPolicy" name="acceptPolicy"
                                            label="Acepto el procesamiento de mis datos personales según la política de privacidad." />
                                        <button type="submit" :disabled="isLoading || !form.acceptPolicy"
                                            class="h-[45px] rounded-lg px-6 bg-[#FF9F1C] text-white text-[13px] font-semibold hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed">
                                            Enviar solicitud
                                        </button>
                                    </div>
                                </div>
                            </DialogPanel>
                        </form>
                    </div>
                </Dialog>
            </TransitionRoot>
        </client-only>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import {
    Dialog,
    DialogPanel,
    DialogOverlay,
    TransitionRoot,
    TransitionChild,
} from "@headlessui/vue";

// ICON IMAGES (Assuming paths are correct)
import iconUser from "@/assets/img/icon/user.svg";
import iconUsers from "@/assets/img/icon/users.svg";
import iconMail from "@/assets/img/icon/mail.svg";
import iconPhone from "@/assets/img/icon/phone.svg";
// Keep other icons if needed elsewhere, removed from this form
import iconLocation from "@/assets/img/icon/location.svg";
import iconCalendar from "@/assets/img/icon/calendar.svg";
import iconHotel from "@/assets/img/icon/hotel2.svg";

const icons = {
    user: iconUser,
    users: iconUsers,
    mail: iconMail,
    phone: iconPhone,
    // Keep other icons if needed by UiIconInput
    location: iconLocation,
    calendar: iconCalendar,
    hotel: iconHotel,
};

const props = defineProps<{ open: boolean }>();
const emit = defineEmits<{
    (e: "close"): void;
    (e: "submit-form", v: any): void;
}>();

const isLoading = ref(false);

// MOD: Simplified form state to match the image
const form = reactive({
    fullName: "",
    totalTravelers: null as number | null,
    email: "",
    phone: "",
    comments: "",
    acceptPolicy: false,
});

async function onSubmit() {
    if (!form.acceptPolicy) return;
    isLoading.value = true;
    try {
        emit("submit-form", JSON.parse(JSON.stringify(form)));
    } finally {
        isLoading.value = false;
    }
}

function close() {
    emit("close");
}
</script>