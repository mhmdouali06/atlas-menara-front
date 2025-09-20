<!-- components/ReserveForm.vue -->
<template>
  <section class="w-full">
    <div class="mx-auto max-w-md rounded-lg">
      <form class="mt-6 space-y-4" @submit.prevent="onSubmit">
        <div class="bg-[#f5f5f5] px-6 pb-6 pt-5 shadow-sm space-y-4">
          <!-- Title -->
          <h2
            class="text-center font-poppins text-3xl font-bold text-[#0E2041]"
          >
            Reservar
          </h2>

          <!-- Inputs -->
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

          <UiInputWithIcon
            v-model="form.pickup"
            :icon="grayCalendar"
            icon-alt="pickup"
            type="datetime-local"
            name="pickup"
            placeholder="Fecha y hora de recogida*"
            required
          />

          <UiInputWithIcon
            v-model="form.dropoff"
            :icon="grayCalendar"
            icon-alt="dropoff"
            type="datetime-local"
            name="dropoff"
            placeholder="Fecha y hora de llegada*"
            required
          />

          <!-- Total + button -->
          <div class="mt-4 flex items-center justify-between font-poppins">
            <p class="text-xl font-bold text-[#1c274c]">
              <span class="mr-2">Total :</span>
              <span class="text-[#F00] font-normal text-[16px]"
                >se informa en llamada*</span
              >
            </p>
            <button
              type="submit"
              class="rounded-full bg-[#f5a524] px-6 py-3 text-[16px] font-semibold text-white shadow-sm hover:bg-[#e29510] focus:outline-none focus:ring-2 focus:ring-[#f5a524]/50"
            >
              Reservar
            </button>
          </div>
        </div>

        <!-- Privacy checkbox -->
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
import grayUser from "@/assets/img/icon/grayPerson.svg";
import grayMail from "@/assets/img/icon/grayEmail.svg";
import grayPhone from "@/assets/img/icon/grayPhone.svg";
import grayLocation from "@/assets/img/icon/grayPosition.svg";
import grayCalendar from "@/assets/img/icon/grayCalendar.svg"; // add this icon in your assets

const props = withDefaults(
  defineProps<{
    privacyHref?: string;
  }>(),
  {
    privacyHref: "#",
  }
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

function onSubmit() {
  if (!accepted.value) return;
  alert("Reserva enviada ✅");
}
</script>
