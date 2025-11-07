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
                                        ✨ Personaliza tu Omra a Medida
                                    </h2>
                                </div>

                                <div class="px-5 pb-5">
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
                                        <div class="space-y-5">
                                            <UiIconInput v-model="form.fullName" :icon="icons.user" name="fullName"
                                                label="NOMBRE Y APELLIDO (responsable)*" type="text" />

                                            <div
                                                class="h-[50px] flex justify-center gap-2 items-center bg-white border border-[#E4E7EE]  p-3  text-[13px] text-[#0E2041]/80">
                                                <label class="flex items-center gap-2 cursor-pointer">
                                                    <input type="radio" name="travelerType" value="adults_only"
                                                        v-model="form.travelerType" class="accent-[#0d72ff]" />
                                                    <span>Solo adultos</span>
                                                </label>
                                                <label class="flex items-center gap-2 cursor-pointer">
                                                    <input type="radio" name="travelerType" value="adults_minors"
                                                        v-model="form.travelerType" class="accent-[#0d72ff]" />
                                                    <span>Adultos + menores de 12 años</span>
                                                </label>
                                            </div>

                                            <UiIconInput v-model="form.email" :icon="icons.mail" name="email"
                                                label="E-MAIL*" type="email" />
                                            <UiIconInput v-model="form.departCity" :icon="icons.location"
                                                name="departCity" label="Ciudad de ida*" type="text" />
                                            <UiIconInput v-model="form.returnCity" :icon="icons.location"
                                                name="returnCity" label="Ciudad de Regreso*" type="text" />
                                            <UiIconInput v-model="form.hotelMadinah" :icon="icons.hotel"
                                                name="hotelMadinah" label="Hotel Madinah*" type="text" />

                                            <div
                                                class="flex flex-wrap items-center gap-4 font-poppins text-sm text-[#0E2041]/80">
                                                <label class="inline-flex items-center gap-1">
                                                    <input type="radio" class="accent-[#0d72ff]" name="madinahRoom"
                                                        value="individual" v-model="form.madinahRoom" />
                                                    <span>Individual</span>
                                                </label>
                                                <label class="inline-flex items-center gap-1">
                                                    <input type="radio" class="accent-[#0d72ff]" name="madinahRoom"
                                                        value="doble" v-model="form.madinahRoom" />
                                                    <span>Doble</span>
                                                </label>
                                                <label class="inline-flex items-center gap-1">
                                                    <input type="radio" class="accent-[#0d72ff]" name="madinahRoom"
                                                        value="triple" v-model="form.madinahRoom" />
                                                    <span>Triple</span>
                                                </label>
                                                <label class="inline-flex items-center gap-1">
                                                    <input type="radio" class="accent-[#0d72ff]" name="madinahRoom"
                                                        value="otro" v-model="form.madinahRoom" />
                                                    <span>Otro</span>
                                                </label>
                                            </div>

                                            <UiIconInput v-model="form.hotelMakkah" :icon="icons.hotel"
                                                name="hotelMakkah" label="Hotel Makkah*" type="text" />

                                            <div
                                                class="flex flex-wrap items-center gap-4 font-poppins text-sm text-[#0E2041]/80">
                                                <label class="inline-flex items-center gap-1">
                                                    <input type="radio" class="accent-[#0d72ff]" name="makkahRoom"
                                                        value="individual" v-model="form.makkahRoom" />
                                                    <span>Individual</span>
                                                </label>
                                                <label class="inline-flex items-center gap-1">
                                                    <input type="radio" class="accent-[#0d72ff]" name="makkahRoom"
                                                        value="doble" v-model="form.makkahRoom" />
                                                    <span>Doble</span>
                                                </label>
                                                <label class="inline-flex items-center gap-1">
                                                    <input type="radio" class="accent-[#0d72ff]" name="makkahRoom"
                                                        value="triple" v-model="form.makkahRoom" />
                                                    <span>Triple</span>
                                                </label>
                                                <label class="inline-flex items-center gap-1">
                                                    <input type="radio" class="accent-[#0d72ff]" name="makkahRoom"
                                                        value="otro" v-model="form.makkahRoom" />
                                                    <span>Otro</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div class="space-y-5">
                                            <UiIconInput v-model="form.totalTravelers" :icon="icons.users"
                                                name="totalTravelers" label="Numero total de viajeros*" type="number" />
                                            <UiIconInput v-model="form.minorsUnder12" :icon="icons.users"
                                                name="minorsUnder12" label="Numero total de menores de 12 años"
                                                type="number" />
                                            <UiIconInput v-model="form.phone" :icon="icons.phone" name="phone"
                                                label="NÚMERO TELÉFONO*" type="text" />
                                            <UiIconInput v-model="form.departDate" :icon="icons.calendar"
                                                name="departDate" label="Fecha de ida*" type="date" />
                                            <UiIconInput v-model="form.returnDate" :icon="icons.calendar"
                                                name="returnDate" label="Fecha de Regreso*" type="date" />
                                            <UiIconInput v-model="form.madinahNights" :icon="icons.hotel"
                                                name="madinahNights" label="Numero de dias de estancia*"
                                                type="number" />
                                            <div class="hidden  md:block h-[19px]"></div>


                                            <UiIconInput v-model="form.makkahNights" :icon="icons.hotel"
                                                name="makkahNights" label="Numero de dias de estancia*" type="number" />
                                        </div>
                                    </div>

                                    <div class="my-5">
                                        <UiTextArea v-model="form.comments" name="comments" placeholder="Comentarios" />
                                    </div>

                                    <div
                                        class="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                        <UiCheckBox v-model="form.acceptPolicy" name="acceptPolicy"
                                            :label="`Acepto el procesamiento de mis datos personales según la <a href='#' class='underline'>política de privacidad</a>.`" />
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



// ICON IMAGES (replace these with your real paths)
import iconUser from "@/assets/img/icon/user.svg";
import iconUsers from "@/assets/img/icon/users.svg";
import iconMail from "@/assets/img/icon/mail.svg";
import iconPhone from "@/assets/img/icon/phone.svg";
import iconLocation from "@/assets/img/icon/location.svg";
import iconCalendar from "@/assets/img/icon/calendar.svg";
import iconHotel from "@/assets/img/icon/hotel2.svg";


const icons = {
    user: iconUser,
    users: iconUsers,
    mail: iconMail,
    phone: iconPhone,
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

const form = reactive({
    fullName: "",
    totalTravelers: null as number | null,
    travelerType: "adults_only",
    minorsUnder12: null as number | null,
    email: "",
    phone: "",
    departCity: "",
    departDate: "",
    returnCity: "",
    returnDate: "",
    hotelMadinah: "",
    madinahNights: null as number | null,
    madinahRoom: "individual",
    hotelMakkah: "",
    makkahNights: null as number | null,
    makkahRoom: "individual",
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