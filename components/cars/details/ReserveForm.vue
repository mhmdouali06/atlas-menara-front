<!-- components/ReserveForm.vue -->
<template>
  <section class="w-full">
    <div class="mx-auto max-w-md rounded-lg">
      <form class="mt-6 space-y-4" @submit.prevent="onSubmit">
        <div class="bg-[#f5f5f5] px-6 pb-6 pt-5 shadow-sm space-y-4">
          <h2 class="text-center font-poppins text-3xl font-bold text-[#0E2041]">
            Reservar
          </h2>

          <UiInputWithIcon v-model="form.name" :icon="grayUser" icon-alt="user" name="name"
            placeholder="NOMBRE Y APELLIDO*" required />
          <UiInputWithIcon v-model="form.email" :icon="grayMail" icon-alt="email" type="email" name="email"
            placeholder="E-MAIL" autocomplete="email" required />
          <UiInputWithIcon v-model="form.phone" :icon="grayPhone" icon-alt="phone" type="tel" name="phone"
            placeholder="NÚMERO TELÉFONO*" inputmode="tel" autocomplete="tel" required />
          <UiInputWithIcon v-model="form.city" :icon="grayLocation" icon-alt="location" name="city"
            placeholder="Ciudad*" required />
          <UiInputWithIcon v-model="form.pickup" :icon="grayCalendar" icon-alt="pickup" type="datetime-local"
            name="pickup" placeholder="Fecha y hora de recogida*" required />
          <UiInputWithIcon v-model="form.dropoff" :icon="grayCalendar" icon-alt="dropoff" type="datetime-local"
            name="dropoff" placeholder="Fecha y hora de llegada*" required />

          <div class="mt-4 flex flex-col md:flex-row items-center justify-between font-poppins">
            <p class="text-xl font-bold text-[#1c274c]">
              <span class="mr-2">Total :</span>
              <span class="text-[#F00] font-normal text-[16px]">se informa en llamada*</span>
            </p>
            <button type="submit" :disabled="isSubmitting"
              class="rounded-full bg-[#f5a524] px-6 py-3 text-[16px] font-semibold text-white shadow-sm hover:bg-[#e29510] focus:outline-none focus:ring-2 focus:ring-[#f5a524]/50 disabled:opacity-60 disabled:cursor-not-allowed">
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
            <NuxtLink to="/politica-de-privacidad" class="underline hover:text-[#0e1a35]" target="_blank">
              la política de privacidad
            </NuxtLink>.
          </span>
        </label>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import grayUser from "@/assets/img/icon/grayPerson.svg";
import grayMail from "@/assets/img/icon/grayEmail.svg";
import grayPhone from "@/assets/img/icon/grayPhone.svg";
import grayLocation from "@/assets/img/icon/grayPosition.svg";
import grayCalendar from "@/assets/img/icon/grayCalendar.svg";

const props = withDefaults(
  defineProps<{
    privacyHref?: string;
    endpoint?: string; // e.g. '/contact_cars'
  }>(),
  { privacyHref: "#", endpoint: "/contact_cars" }
);

const form = reactive({
  name: "",
  email: "",
  phone: "",
  city: "",
  pickup: "",
  dropoff: "",
});

const accepted = ref(false);
const isSubmitting = ref(false);
const toast = useToast();
toast.settings({ position: "topRight" });
const runtime = useRuntimeConfig();

// Tiny wrapper so we can still pass strings but keep types happy
const notify = {
  success(message: string) {
    toast.success({ message });
  },
  error(message: string) {
    toast.error({ message });
  },
  show(message: string) {
    toast.show({ message });
  }
};

function validate() {
  if (!form.name || !form.email || !form.phone || !form.city || !form.pickup || !form.dropoff) {
    notify.error("Por favor, completa todos los campos obligatorios.");
    return false;
  }
  const emailOk = /\S+@\S+\.\S+/.test(form.email);
  if (!emailOk) {
    notify.error("E-mail no válido.");
    return false;
  }
  const start = new Date(form.pickup).getTime();
  const end = new Date(form.dropoff).getTime();
  if (isNaN(start) || isNaN(end)) {
    notify.error("Fechas inválidas.");
    return false;
  }
  if (end <= start) {
    notify.error("La llegada debe ser posterior a la recogida.");
    return false;
  }
  if (!accepted.value) {
    notify.error("Debes aceptar la política de privacidad.");
    return false;
  }
  return true;
}

function resetForm() {
  Object.assign(form, {
    name: "",
    email: "",
    phone: "",
    city: "",
    pickup: "",
    dropoff: "",
  });
  accepted.value = false;
}

async function onSubmit() {
  if (!validate()) return;
  if (isSubmitting.value) return;

  isSubmitting.value = true;
  try {
    const payload = {
      fullName: form.name,
      email: form.email,
      phone: form.phone,
      city: form.city,
      pickupAt: form.pickup,
      dropoffAt: form.dropoff,
      consent: accepted.value,
      source: "car-contact-form",
    };

    const base = runtime.public.apiBase || "";
    const url = `${base}${props.endpoint}`;

    await $fetch(url, {
      method: "POST",
      body: payload,
      headers: { "Content-Type": "application/json" },
    });

    notify.success("Solicitud enviada. Te contactaremos por teléfono.");
    resetForm();
  } catch (e: any) {
    const msg =
      e?.data?.["hydra:description"] ||
      e?.data?.message ||
      e?.message ||
      "No se pudo enviar la solicitud.";
    notify.error(String(msg));
  } finally {
    isSubmitting.value = false;
  }
}
</script>
