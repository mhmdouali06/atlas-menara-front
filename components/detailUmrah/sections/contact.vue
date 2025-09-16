<!-- components/ReserveForm.vue -->
<template>
  <section class="w-full">
    <div
      class="mx-auto max-w-md rounded-lg bg-[#eeeeee] px-6 pb-6 pt-5 shadow-sm"
    >
      <!-- Title -->
      <h2
        class="text-center font-serif text-[40px] leading-none text-[#14223b]"
      >
        Reservar
      </h2>

      <!-- Form -->
      <form class="mt-6 space-y-4" @submit.prevent="onSubmit">
        <!-- Name -->
        <div class="relative">
          <span
            class="pointer-events-none absolute inset-y-0 left-4 flex items-center"
          >
            <UserIcon class="h-5 w-5 text-gray-400" />
          </span>
          <input
            v-model="form.name"
            type="text"
            placeholder="NOMBRE Y APELLIDO*"
            class="h-14 w-full rounded-sm border-0 bg-white pl-11 pr-4 text-[15px] tracking-wide placeholder-gray-400 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1c274c]"
            required
          />
        </div>

        <!-- Email -->
        <div class="relative">
          <span
            class="pointer-events-none absolute inset-y-0 left-4 flex items-center"
          >
            <MailIcon class="h-5 w-5 text-gray-400" />
          </span>
          <input
            v-model="form.email"
            type="email"
            placeholder="E-MAIL"
            class="h-14 w-full rounded-sm border-0 bg-white pl-11 pr-4 text-[15px] tracking-wide placeholder-gray-400 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1c274c]"
            required
          />
        </div>

        <!-- Phone -->
        <div class="relative">
          <span
            class="pointer-events-none absolute inset-y-0 left-4 flex items-center"
          >
            <PhoneIcon class="h-5 w-5 text-gray-400" />
          </span>
          <input
            v-model="form.phone"
            type="tel"
            placeholder="NÚMERO TELÉFONO*"
            class="h-14 w-full rounded-sm border-0 bg-white pl-11 pr-4 text-[15px] tracking-wide placeholder-gray-400 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1c274c]"
            required
          />
        </div>

        <!-- City -->
        <div class="relative">
          <span
            class="pointer-events-none absolute inset-y-0 left-4 flex items-center"
          >
            <LocationIcon class="h-5 w-5 text-gray-400" />
          </span>
          <input
            v-model="form.city"
            type="text"
            placeholder="Ciudad*"
            class="h-14 w-full rounded-sm border-0 bg-white pl-11 pr-4 text-[15px] tracking-wide placeholder-gray-400 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#1c274c]"
            required
          />
        </div>

        <!-- Add family/partner -->
        <button
          type="button"
          class="flex items-center gap-2 text-[17px] font-semibold text-[#1c274c] hover:opacity-80"
          @click="addCompanion()"
        >
          <span
            class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#1c274c] text-white"
          >
            <UsersPlusIcon class="h-4 w-4" />
          </span>
          <span>Adicionar familiar o pareja</span>
        </button>

        <!-- Total + CTA -->
        <div class="mt-4 flex items-center justify-between">
          <p class="text-[26px] font-extrabold tracking-wide text-[#1c274c]">
            <span class="mr-2 font-semibold">Total :</span>
            {{ formattedTotal }}
          </p>

          <button
            type="submit"
            class="rounded-full bg-[#f5a524] px-6 py-3 text-[16px] font-semibold text-white shadow-sm hover:bg-[#e29510] focus:outline-none focus:ring-2 focus:ring-[#f5a524]/50"
          >
            Reservar
          </button>
        </div>

        <!-- Checkbox -->
        <label
          class="mt-4 flex items-start gap-3 text-[15px] leading-6 text-[#1c274c]"
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
            >
              la política de privacidad </NuxtLink
            >.
          </span>
        </label>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
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
  // Do your submit logic here (emit, fetch, etc.)
  // Example:
  // await $fetch('/api/reservar', { method: 'POST', body: { ...form, total: props.total } })
  alert("Reserva enviada ✅");
}

const UserIcon = (props: any) =>
  h(
    "svg",
    {
      ...props,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      h("path", {
        d: "M12 12a5 5 0 100-10 5 5 0 000 10Z",
        stroke: "currentColor",
        "stroke-width": "1.6",
      }),
      h("path", {
        d: "M3 21a9 9 0 1118 0",
        stroke: "currentColor",
        "stroke-width": "1.6",
        fill: "none",
      }),
    ]
  );
const MailIcon = (props: any) =>
  h(
    "svg",
    {
      ...props,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      h("path", {
        d: "M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7Z",
        stroke: "currentColor",
        "stroke-width": "1.6",
      }),
      h("path", {
        d: "M21 7l-9 6L3 7",
        stroke: "currentColor",
        "stroke-width": "1.6",
      }),
    ]
  );
const PhoneIcon = (props: any) =>
  h(
    "svg",
    {
      ...props,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      h("path", {
        d: "M6 2h4l1 5-3 1a12 12 0 006 6l1-3 5 1v4c0 1.1-.9 2-2 2A16 16 0 014 8c0-1.1.9-2 2-2Z",
        stroke: "currentColor",
        "stroke-width": "1.6",
      }),
    ]
  );
const LocationIcon = (props: any) =>
  h(
    "svg",
    {
      ...props,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      h("path", {
        d: "M12 22s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12Z",
        stroke: "currentColor",
        "stroke-width": "1.6",
      }),
      h("circle", {
        cx: "12",
        cy: "10",
        r: "2.5",
        stroke: "currentColor",
        "stroke-width": "1.6",
      }),
    ]
  );
const UsersPlusIcon = (props: any) =>
  h(
    "svg",
    {
      ...props,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      h("path", {
        d: "M16 21v-1a4 4 0 00-4-4H7a4 4 0 00-4 4v1",
        stroke: "currentColor",
        "stroke-width": "1.6",
      }),
      h("circle", {
        cx: "9.5",
        cy: "8",
        r: "3.5",
        stroke: "currentColor",
        "stroke-width": "1.6",
      }),
      h("path", {
        d: "M19 8v6M16 11h6",
        stroke: "currentColor",
        "stroke-width": "1.6",
      }),
    ]
  );
</script>
