<template>
  <section class="mx-auto my-12" id="contact">
    <div class="main mx-auto p-6 grid grid-cols-12 relative">
      <div class="col-span-12 md:col-span-5 relative">
        <img
          :src="man"
          class="relative h-full object-contain md:absolute bottom-[-4vw] md:bottom-[-1.63vw]"
          alt="man"
        />
      </div>
      <div class="col-span-12 md:col-span-7 mt-8">
        <h3 class="main-title">Solicitar informacion</h3>
        <p class="main-text">
          Rellena tus datos y nuestro equipo te contactará para ofrecerte la
          solución adecuada.
        </p>
        <form class="">
          <div class="grid grid-cols-12 gap-4 my-4">
            <UiInput
              type="text"
              name="name"
              label="Nombre"
              placeholder="Nombre"
              v-model="form.first_name"
              class="col-span-12 md:col-span-6"
            />
            <UiInput
              type="text"
              name="last_name"
              label="Apellido"
              placeholder="Apellido"
              v-model="form.last_name"
              class="col-span-12 md:col-span-6"
            />
          </div>

          <div class="grid grid-cols-12 gap-4 mb-4">
            <UiInput
              type="email"
              name="email"
              label="Correo Electrónico"
              placeholder="Correo Electrónico"
              v-model="form.email"
              class="col-span-12 md:col-span-6"
            />
            <UiInput
              type="tel"
              name="phone"
              placeholder="Numero de teléfono"
              label="Numero de teléfono"
              v-model="form.phone"
              class="col-span-12 md:col-span-6"
            />
          </div>
          <div class="mb-8">
            <UiTextArea
              name="message"
              placeholder="Mensaje"
              label="Mensaje"
              v-model="form.phone"
            />
          </div>
          <div class="flex justify-between items-center mb-8 flex-wrap">
            <div>
              <UiCheckBox
                v-model="form.accept"
                name="accept"
                class="text-white"
                label="Acepto el procesamiento de mis datos personales según la política de privacidad."
              />
            </div>
            <div>
              <button>Enviar solicitud</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import man from "@/assets/img/global/man.png";
const form = ref({
  first_name: "",
  last_name: "",
  company: "",
  post: "",
  email: "",
  phone: "",
  accept: false,
});
</script>
<style scoped>
.main {
  background-image: url("~/assets/img/global/bgContact.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
::v-deep(.custom-label-check-box) {
  color: white;
}
::v-deep(label) {
  color: white;
}
button {
  border-radius: 40px;
  background: var(--vt-c-orange);
  box-shadow: 0 1px 9.1px 4px rgba(26, 122, 255, 0.3);
  display: flex;
  height: 60px;
  width: fit-content;
  padding: 18px 60px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  color: #f3f4f8;
  text-align: center;
  font-family: "Montserrat";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.2px;
  text-transform: capitalize;
  transition: all 0.3s ease;
}
button:hover {
  background: #052f84;
  box-shadow: 0 1px 9.1px 4px rgba(26, 122, 255, 0.3);
}
</style>
