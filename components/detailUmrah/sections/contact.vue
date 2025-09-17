<!-- components/ReserveForm.vue -->
<template>
  <section class="w-full">
    <div class="mx-auto max-w-md rounded-lg">
      <form class="mt-6 space-y-4" @submit.prevent="onSubmit">
        <div class="bg-[#eeeeee] px-6 pb-6 pt-5 shadow-sm mt-6 space-y-4">
          <h2
            class="text-center font-volkhov text-[40px] leading-none font-bold text-[#0E2041]"
          >
            Reservar
          </h2>

          <UiInputWithIcon
            v-model="form.name"
            :icon="grayUser"
            icon-alt="user"
            name="name"
            placeholder="NOMBRE Y APELLIDO*"
            required
          />

          <UiInputWithIcon
            v-model="form.email"
            :icon="grayMail"
            icon-alt="email"
            type="email"
            name="email"
            placeholder="E-MAIL"
            autocomplete="email"
            required
          />

          <UiInputWithIcon
            v-model="form.phone"
            :icon="grayPhone"
            icon-alt="phone"
            type="tel"
            name="phone"
            placeholder="NÚMERO TELÉFONO*"
            inputmode="tel"
            autocomplete="tel"
            required
          />

          <UiInputWithIcon
            v-model="form.city"
            :icon="grayLocation"
            icon-alt="location"
            name="city"
            placeholder="Ciudad*"
            required
          />

          <button
            type="button"
            class="flex items-center font-poppins justify-center w-full gap-2 text-[17px] text-[#0E2041] hover:opacity-80"
            @click="addCompanion()"
          >
            <span
              class="inline-flex h-6 w-6 items-center justify-center rounded-full text-white"
            >
              <img :src="blueUser" alt="icon" class="h-5 w-5" />
            </span>
            <span>Adicionar familiar o pareja</span>
          </button>

          <div class="mt-4 flex items-center justify-between">
            <p
              class="text-[26px] font-bold font-poppins tracking-wide text-[#1c274c]"
            >
              <span class="mr-2">Total :</span>{{ formattedTotal }}
            </p>
            <button
              type="submit"
              class="rounded-full bg-[#f5a524] font-poppins px-6 py-3 text-[16px] font-semibold text-white shadow-sm hover:bg-[#e29510] focus:outline-none focus:ring-2 focus:ring-[#f5a524]/50"
            >
              Reservar
            </button>
          </div>
        </div>

        <label
          class="mt-4 w-[90%] mx-auto flex items-start gap-3 text-[15px] leading-6 text-[#1c274c]"
        >
          <input
            v-model="accepted"
            type="checkbox"
            class="mt-1 h-5 w-5 cursor-pointer rounded border-gray-300 text-[#1c274c] focus:ring-[#1c274c]"
            required
          />
          <span class="select-none">
            Acepto el procesamiento de mis datos personales según
            <NuxtLink
              :to="privacyHref"
              class="underline hover:text-[#0e1a35]"
              target="_blank"
              >la política de privacidad</NuxtLink
            >.
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

const props = withDefaults(
  defineProps<{
    total?: number;
    currency?: string;
    privacyHref?: string;
  }>(),
  {
    total: 2450,
    currency: "$",
    privacyHref: "#",
  }
);

const form = reactive({
  name: "",
  email: "",
  phone: "",
  city: "",
  companions: 0,
});

const accepted = ref(false);
const formattedTotal = computed(() => `${props.total} ${props.currency}`);

function addCompanion() {
  form.companions++;
}

function onSubmit() {
  if (!accepted.value) return;
  alert("Reserva enviada ✅");
}
</script>
