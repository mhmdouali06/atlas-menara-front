<template>
  <section class="relative px-4 py-10 md:py-14 w-[92%] mx-auto">
    <div class="grid gap-10 grid-cols-12">
      <!-- Left: Image card -->
      <div
        class="relative col-span-12 md:col-span-4 lg:col-span-3 rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
      >
        <span
          class="pointer-events-none top absolute left-[-15px] top-[-15px] z-10 rounded-full px-4 py-3 text-xs font-semibold text-slate-700 font-poppins"
        >
          Adaptada a Ti
        </span>

        <figure class="aspect-[3/4] w-full md:aspect-[4/5] h-full">
          <img
            :src="bg"
            alt="Cúpulas y minaretes"
            class="h-full w-full object-cover rounded-2xl"
            loading="lazy"
          />
        </figure>

        <div class="absolute bottom-[-10px] left-1/2 -translate-x-1/2">
          <span
            class="rounded-full bg-white px-6 py-3 text-xs font-bold text-emerald-600 c-shadow"
          >
            100% Gratuita
          </span>
        </div>
      </div>

      <!-- Right: Content -->
      <div
        class="flex flex-col justify-between col-span-12 md:col-span-8 lg:col-span-9"
      >
        <div>
          <p
            class="mb-3 flex items-center gap-2 text-lg text-[#4361EE] font-poppins"
          >
            ✨ ¿Quieres conocer el precio de tu viaje de ensueño?
          </p>

          <h1
            class="text-3xl font-extrabold leading-tight text-[#0E2041] md:text-4xl font-poppins"
          >
            Presupuesto <span class="text-orange-500">gratuito</span> para tu
            viaje
          </h1>

          <p
            class="mt-4 text-[15px] leading-relaxed text-[#808080] font-poppins"
          >
            En
            <span class="font-semibold text-orange">Atlas Menara</span> creemos
            que tus sueños de viajar merecen hacerse realidad.<br />
            Por eso ponemos a tu disposición un
            <span class="font-semibold text-orange"
              >servicio personalizado</span
            >
            para ayudarte a descubrir cuánto puede
            <span class="font-semibold text-orange-500"
              >costar tu viaje soñado</span
            >, sin compromiso y adaptado a tus necesidades.<br />
            Nuestro equipo analiza tus preferencias y diseña una propuesta a
            medida para que disfrutes de la mejor experiencia al mejor precio.
          </p>
          <p class="mt-4 text-lg leading-relaxed font-poppins">
            🗺️ ¿Qué incluye nuestro servicio?
          </p>

          <div class="mt-6 space-y-3 font-poppins">
            <div
              class="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 cc-shadow ring-slate-100"
            >
              <div>
                <p
                  class="text-[16px] font-extrabold font-poppins text-slate-900"
                >
                  1. Inspiración de Destinos
                </p>
                <p
                  class="text-[13.5px] font-poppins leading-relaxed text-slate-600"
                >
                  Te mostramos opciones de viajes en todo el mundo, desde
                  escapadas culturales hasta playas paradisíacas.
                </p>
              </div>
            </div>

            <div
              class="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 cc-shadow ring-slate-100"
            >
              <div>
                <p
                  class="text-[16px] font-extrabold font-poppins text-slate-900"
                >
                  2. Presupuesto a Medida
                </p>
                <p
                  class="text-[13.5px] font-poppins leading-relaxed text-slate-600"
                >
                  Creamos una estimación personalizada según tus fechas,
                  duración, tipo de alojamiento y transporte.
                </p>
              </div>
            </div>

            <div
              class="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 cc-shadow ring-slate-100"
            >
              <div>
                <p
                  class="text-[16px] font-extrabold font-poppins text-slate-900"
                >
                  3. Opciones Flexibles
                </p>
                <p
                  class="text-[13.5px] font-poppins leading-relaxed text-slate-600"
                >
                  Te presentamos varias alternativas para que elijas la que más
                  se adapta a ti, con diferentes precios.
                </p>
              </div>
            </div>

            <div
              class="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 cc-shadow ring-slate-100"
            >
              <div>
                <p
                  class="text-[16px] font-extrabold font-poppins text-slate-900"
                >
                  4. Asesoramiento Personalizado
                </p>
                <p
                  class="text-[13.5px] leading-relaxed font-poppins text-slate-600"
                >
                  Un comercial experto te contactará para resolver dudas y
                  ajustar cada detalle de tu viaje.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-7">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-xl bg-orange px-5 py-3 text-sm font-extrabold font-poppins text-white shadow-sm transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
          >
            Solicitar presupuesto
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import bg from "@/assets/img/global/travel-bg.png";
</script>
<style scoped>
.cc-shadow {
  border-radius: 30px;

  box-shadow: 4px 10px 30px 0 rgba(0, 0, 0, 0.06);
}
.c-shadow {
  border-radius: 32px;
  background: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10.550000190734863px);
}
.top {
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10.550000190734863px);
  background-color: white;
}
</style>
