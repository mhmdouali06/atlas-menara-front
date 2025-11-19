<!-- components/ServiceContactModal.vue -->
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

                                <!-- Título según servicio (solo texto, sin campos dinámicos) -->
                                <div class="px-5 pt-4 pb-3 text-center">
                                    <h2 class="text-[#0E2041] text-[24px] md:text-[26px] font-semibold">
                                        {{ config.title }}
                                    </h2>
                                    <p class="mt-1 text-[13px] text-[#0E2041]/70">
                                        {{ config.subtitle }}
                                    </p>
                                </div>

                                <div class="px-5 pb-5">
                                    <!-- Datos de contacto -->
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5">
                                        <div class="space-y-5">
                                            <UiIconInput v-model="form.fullName" :icon="icons.user" name="fullName"
                                                label="Nombre y apellido *" type="text" />
                                            <UiIconInput v-model="form.email" :icon="icons.mail" name="email"
                                                label="E-mail" type="email" />
                                        </div>

                                        <div class="space-y-5">
                                            <UiIconInput v-model="form.phone" :icon="icons.phone" name="phone"
                                                label="Número de teléfono *" type="text" />
                                            <UiIconInput v-model="form.totalTravelers" :icon="icons.users"
                                                name="totalTravelers" label="Número de viajeros (opcional)"
                                                type="number" />
                                        </div>
                                    </div>

                                    <!-- Detalles libres, sin campos específicos -->
                                    <div class="mt-6">
                                        <UiTextArea v-model="form.details" name="details"
                                            placeholder="Cuéntanos qué servicio necesitas: ruta, fechas aproximadas, ciudad, tipo de alojamiento, visado…" />
                                    </div>

                                    <!-- Comentarios extra opcionales -->
                                    <div class="mt-4">
                                        <UiTextArea v-model="form.comments" name="comments"
                                            placeholder="Comentarios adicionales (opcional)" />
                                    </div>

                                    <div
                                        class="mt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                                        <UiCheckBox v-model="form.acceptPolicy" name="acceptPolicy"
                                            :label="`Acepto el tratamiento de mis datos personales según la <a href='/politica-de-privacidad' class='underline'>política de privacidad</a>.`" />
                                        <button type="submit" :disabled="isLoading || !form.acceptPolicy"
                                            class="h-[45px] rounded-lg px-6 bg-[#FF9F1C] text-white text-[13px] font-semibold hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed">
                                            <span v-if="!isLoading">Enviar solicitud</span>
                                            <span v-else>Enviando…</span>
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
import { ref, reactive, computed } from 'vue'
import {
    Dialog,
    DialogPanel,
    DialogOverlay,
    TransitionRoot,
    TransitionChild,
} from '@headlessui/vue'
import iconUser from '@/assets/img/icon/user.svg'
import iconUsers from '@/assets/img/icon/users.svg'
import iconMail from '@/assets/img/icon/mail.svg'
import iconPhone from '@/assets/img/icon/phone.svg'

const props = defineProps<{
    open: boolean
    serviceKey: 'plane' | 'boat' | 'hotel' | 'visa'
    endpoint?: string
    autoClose?: boolean
}>()

const emit = defineEmits<{ (e: 'close'): void }>()
const close = () => emit('close')

const icons = { user: iconUser, users: iconUsers, mail: iconMail, phone: iconPhone }
const runtime = useRuntimeConfig()
const toast = useToast()
const isLoading = ref(false)

const endpoint = props.endpoint ?? '/service_contacts'

// Solo textos por servicio, nada de campos condicionales
const CONFIG_MAP = {
    plane: {
        title: 'Solicitud de billetes de avión',
        subtitle: 'Indícanos tu ruta, fechas aproximadas y cualquier detalle importante.',
    },
    boat: {
        title: 'Solicitud de billetes de barco',
        subtitle: 'Cuéntanos tu trayecto, fechas y si viajas con vehículo.',
    },
    hotel: {
        title: 'Solicitud de reserva de hotel',
        subtitle: 'Dinos ciudad, fechas aproximadas y tipo de alojamiento que buscas.',
    },
    visa: {
        title: 'Solicitud de tramitación de visado',
        subtitle: 'Indica país de destino, tipo de visado y fechas aproximadas de viaje.',
    },
} as const

const config = computed(() => CONFIG_MAP[props.serviceKey])

const form = reactive({
    fullName: '',
    email: '',
    phone: '',
    totalTravelers: null as number | null,
    details: '',
    comments: '',
    acceptPolicy: false,
})

function validate() {
    if (!form.fullName?.trim()) {
        toast.error({ message: 'El nombre es obligatorio.' })
        return false
    }
    if (!form.phone?.trim()) {
        toast.error({ message: 'El número de teléfono es obligatorio.' })
        return false
    }
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
        toast.error({ message: 'El e-mail no es válido.' })
        return false
    }
    if (!form.acceptPolicy) {
        toast.error({ message: 'Debes aceptar la política de privacidad.' })
        return false
    }
    return true
}

function resetForm() {
    Object.assign(form, {
        fullName: '',
        email: '',
        phone: '',
        totalTravelers: null,
        details: '',
        comments: '',
        acceptPolicy: false,
    })
}

async function onSubmit() {
    if (!validate() || isLoading.value) return
    isLoading.value = true
    try {
        const url = `${runtime.public.apiBase || ''}${endpoint}`

        const payload = {
            serviceKey: props.serviceKey,
            fullName: form.fullName,
            email: form.email,
            phone: form.phone,
            totalTravelers: form.totalTravelers,
            details: form.details,
            comments: form.comments,
            consent: form.acceptPolicy,
        }

        await $fetch(url, { method: 'POST', body: payload })
        toast.success({ message: 'Solicitud enviada. Te contactaremos pronto.' })
        resetForm()
        if (props.autoClose) close()
    } catch (e: any) {
        const msg =
            e?.data?.['hydra:description'] || e?.message || 'Error al enviar solicitud.'
        toast.error({ message: msg })
    } finally {
        isLoading.value = false
    }
}
</script>
