<template>
  <section class="w-full">
    <div class="mx-auto max-w-md rounded-lg">
      <form class="mt-6 space-y-4" @submit.prevent="onSubmit">
        <div class="bg-[#eeeeee] mt-6 shadow-sm rounded-lg px-6 pt-5 pb-0 flex flex-col h-[80vh] max-h-[80vh]">
          <h2 class="text-center font-volkhov text-[40px] leading-none font-bold text-[#0E2041]">
            Reservar
          </h2>

          <div class="mt-4 space-y-4 flex-1 overflow-y-auto overscroll-contain pr-2 -mr-2">
            <UiInputWithIcon v-model="form.name" :icon="grayUser" icon-alt="user" name="name"
              placeholder="NOMBRE Y APELLIDO*" required />
            <UiInputWithIcon v-model="form.email" :icon="grayMail" icon-alt="email" type="email" name="email"
              placeholder="E-MAIL" autocomplete="email" required />
            <UiInputWithIcon v-model="form.phone" :icon="grayPhone" icon-alt="phone" type="tel" name="phone"
              placeholder="NÚMERO TELÉFONO*" inputmode="tel" autocomplete="tel" required />
            <UiInputWithIcon v-model="form.city" :icon="grayLocation" icon-alt="location" name="city"
              placeholder="Ciudad*" required />

            <!-- Companions -->
            <div v-for="(guest, i) in form.guests" :key="i"
              class="rounded-lg bg-white/70 p-4 space-y-3 border border-[#e4e7ee]">
              <div class="flex items-center justify-between">
                <p class="font-poppins text-[#1c274c] font-semibold">Familiar/Pareja #{{ i + 1 }}</p>
                <button type="button" class="text-sm text-red-600 hover:underline" @click="removeCompanion(i)">
                  Eliminar
                </button>
              </div>

              <UiInputWithIcon v-model="guest.fullName" :icon="grayUser" icon-alt="user" :name="`guest-name-${i}`"
                placeholder="NOMBRE Y APELLIDO*" required />

              <div class="space-y-2">
                <label class="flex items-center gap-3 text-[#1c274c]">
                  <input type="radio" :name="`group-${i}`" value="adults" v-model="guest.group" required
                    class="h-5 w-5 cursor-pointer rounded border-gray-300 text-[#1c274c] focus:ring-[#1c274c]" />
                  <span>Solo adultos</span>
                </label>
                <label class="flex items-center gap-3 text-[#1c274c]">
                  <input type="radio" :name="`group-${i}`" value="adults_kids" v-model="guest.group"
                    class="h-5 w-5 cursor-pointer rounded border-gray-300 text-[#1c274c] focus:ring-[#1c274c]" />
                  <span>Adultos + menores de 12 años</span>
                </label>
              </div>
            </div>

            <button type="button"
              class="flex items-center font-poppins justify-center w-full gap-2 text-[17px] text-[#0E2041] hover:opacity-80"
              @click="addCompanion">
              <span class="inline-flex h-6 w-6 items-center justify-center rounded-full text-white">
                <img :src="blueUser" alt="icon" class="h-5 w-5" />
              </span>
              <span>Adicionar familiar o pareja</span>
            </button>
          </div>

          <!-- STICKY FOOTER -->
          <div
            class="mt-4 flex items-center justify-between sticky bottom-0 bg-[#eeeeee] px-6 py-4 -mx-6 border-t border-[#e4e7ee]">
            <p class="text-[26px] font-bold font-poppins tracking-wide text-[#1c274c]">
              <span class="mr-2">Total :</span>{{ formattedTotal }}
            </p>
            <button type="submit" :disabled="isSubmitting" class="rounded-full bg-[#f5a524] font-poppins px-6 py-3 text-[16px] font-semibold text-white shadow-sm
                     hover:bg-[#e29510] focus:outline-none focus:ring-2 focus:ring-[#f5a524]/50
                     disabled:opacity-60 disabled:cursor-not-allowed">
              <span v-if="!isSubmitting">Reservar</span>
              <span v-else>Enviando…</span>
            </button>
          </div>
        </div>

        <label class="mt-4 w-[90%] mx-auto flex items-start gap-3 text-[15px] leading-6 text-[#1c274c]">
          <input v-model="accepted" type="checkbox"
            class="mt-1 h-5 w-5 cursor-pointer rounded border-gray-300 text-[#1c274c] focus:ring-[#1c274c]" required />
          <span class="select-none">
            Acepto el procesamiento de mis datos personales según
            <NuxtLink :to="privacyHref" class="underline hover:text-[#0e1a35]" target="_blank">
              la política de privacidad
            </NuxtLink>.
          </span>
        </label>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import blueUser from "@/assets/img/icon/bluePerson.svg";
import grayUser from "@/assets/img/icon/grayPerson.svg";
import grayMail from "@/assets/img/icon/grayEmail.svg";
import grayPhone from "@/assets/img/icon/grayPhone.svg";
import grayLocation from "@/assets/img/icon/grayPosition.svg";
import type { TravelPackage } from "~/types/travel-package";

type GuestGroup = "adults" | "adults_kids";
interface Guest { fullName: string; group: GuestGroup; }

const { contactTravel } = useContact();
const toast = useToast();
toast.settings({ position: "topRight" });
const runtime = useRuntimeConfig();
const isSubmitting = ref(false);

const props = withDefaults(defineProps<{
  item: TravelPackage;
  total?: number;
  currency?: string;
  privacyHref?: string;
}>(), { total: 2450, currency: "$", privacyHref: "#" });

const form = reactive({
  name: "",
  email: "",
  phone: "",
  city: "",
  guests: [] as Guest[],
});

const accepted = ref(false);
const formattedTotal = computed(() => `${props.total} ${props.currency}`);

function addCompanion() {
  form.guests.push({ fullName: "", group: "adults" });
}
function removeCompanion(index: number) {
  form.guests.splice(index, 1);
}

function validate() {
  if (!form.name?.trim() || !form.email?.trim() || !form.phone?.trim() || !form.city?.trim()) {
    toast.error({ message: "Completa todos los campos obligatorios." });
    return false;
  }
  if (!/\S+@\S+\.\S+/.test(form.email)) {
    toast.error({ message: "E-mail no válido." });
    return false;
  }
  if (!accepted.value) {
    toast.error({ message: "Debes aceptar la política de privacidad." });
    return false;
  }
  return true;
}

function resetForm() {
  Object.assign(form, { name: "", email: "", phone: "", city: "", guests: [] as Guest[] });
  accepted.value = false;
}

async function onSubmit() {
  if (!validate() || isSubmitting.value) return;
  isSubmitting.value = true;

  try {
    const payload = {
      fullName: form.name,
      email: form.email,
      phone: form.phone,
      city: form.city,
      packageType: props.item.type,        // 'umrah' | 'hajj' | 'travel'
      packageTitle: props.item.title,
      packageSlug: props.item.slug,
      packageId: props.item.id,
      quotedTotal: String(props.total),     // fix: don’t pass the function reference
      currency: props.currency,
      guests: form.guests,
      consent: true,
    };

    await contactTravel(payload);
    toast.success({ message: "Solicitud enviada. Te llamaremos para confirmar." });
    resetForm();
  } catch (e: any) {
    const msg = e?.data?.["hydra:description"] || e?.data?.message || e?.message || "No se pudo enviar la solicitud.";
    toast.error({ message: msg });
  } finally {
    isSubmitting.value = false;
  }
}
</script>
