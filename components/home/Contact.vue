<template>
  <section class="mx-auto my-12" id="contact">
    <div class="main mx-auto p-6 grid grid-cols-12 relative">
      <img :src="bg" alt="background" class="absolute h-full w-full left-0 top-0 z-[-1] object-cover" />

      <div class="col-span-12 md:col-span-5 relative">
        <img :src="man" class="relative h-full object-contain md:absolute bottom-[-4vw] md:bottom-[-1.63vw]"
          alt="man" />
      </div>

      <div class="col-span-12 md:col-span-7 mt-8">
        <h3 class="main-title">Solicitar informacion</h3>
        <p class="main-text">
          Rellena tus datos y nuestro equipo te contactará para ofrecerte la solución adecuada.
        </p>

        <form @submit.prevent="onSubmit">
          <div class="grid grid-cols-12 gap-4 my-4">
            <UiInput type="text" name="name" label="Nombre" placeholder="Nombre" v-model="form.first_name"
              class="col-span-12 md:col-span-6" />
            <UiInput type="text" name="last_name" label="Apellido" placeholder="Apellido" v-model="form.last_name"
              class="col-span-12 md:col-span-6" />
          </div>

          <div class="grid grid-cols-12 gap-4 mb-4">
            <UiInput type="email" name="email" label="Correo Electrónico" placeholder="Correo Electrónico"
              v-model="form.email" class="col-span-12 md:col-span-6" />
            <UiInput type="tel" name="phone" placeholder="Numero de teléfono" label="Numero de teléfono"
              v-model="form.phone" class="col-span-12 md:col-span-6" />
          </div>

          <div class="mb-8">
            <UiTextArea name="message" placeholder="Mensaje" label="Mensaje" v-model="form.message" />
          </div>

          <div class="flex justify-between items-center mb-8 flex-wrap">
            <div>
              <UiCheckBox v-model="form.accept" name="accept" class="text-white "
                label="Acepto el procesamiento de mis datos personales según la política de privacidad." />
            </div>
            <div>
              <button type="submit" :disabled="isSubmitting">
                <span v-if="!isSubmitting">Enviar solicitud</span>
                <span v-else>Enviando…</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import bg from "@/assets/img/global/BgContact.png";
import man from "@/assets/img/global/man.png";

const runtime = useRuntimeConfig();
const toast = useToast();
toast.settings({ position: "topRight" });

const isSubmitting = ref(false);
const form = ref({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  message: "",
  accept: false,
});

function resetForm() {
  form.value = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    accept: false,
  };
}

function validate() {
  if (!form.value.first_name?.trim() || !form.value.last_name?.trim()
    || !form.value.email?.trim() || !form.value.phone?.trim()) {
    toast.error({ message: "Completa nombre, apellido, email y teléfono." });
    return false;
  }
  if (!/\S+@\S+\.\S+/.test(form.value.email)) {
    toast.error({ message: "Correo electrónico no válido." });
    return false;
  }
  if (!form.value.accept) {
    toast.error({ message: "Debes aceptar la política de privacidad." });
    return false;
  }
  return true;
}

async function onSubmit() {
  if (!validate() || isSubmitting.value) return;
  isSubmitting.value = true;
  try {
    const base = runtime.public.apiBase || "";
    await $fetch(`${base}/contact_requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        firstName: form.value.first_name,
        lastName: form.value.last_name,
        email: form.value.email,
        phone: form.value.phone,
        message: form.value.message || null,
        consent: form.value.accept,
      },
    });
    toast.success({ message: "Solicitud enviada. Te contactaremos pronto." });
    resetForm();
  } catch (e: any) {
    const msg = e?.data?.["hydra:description"] || e?.data?.message || e?.message || "No se pudo enviar la solicitud.";
    toast.error({ message: msg });
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<style scoped>
::v-deep(.custom-label-check-box) {
  color: white;
}

::v-deep(label) {
  color: white;
}

::v-deep(textarea) {
  @apply rounded-2xl
}

button {
  border-radius: 40px;
  background: var(--vt-c-orange);
  box-shadow: 0 1px 9.1px 4px rgba(26, 122, 255, .3);
  display: flex;
  height: 60px;
  width: fit-content;
  padding: 15px 30px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  color: #f3f4f8;
  text-align: center;
  font-family: "Montserrat";
  font-size: 16px;
  font-weight: 700;
  letter-spacing: .2px;
  text-transform: capitalize;
  transition: all .3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
}

button:hover {
  background: #052f84;
  box-shadow: 0 1px 9.1px 4px rgba(26, 122, 255, .3);
}

button:disabled {
  opacity: .6;
  cursor: not-allowed;
}
</style>
