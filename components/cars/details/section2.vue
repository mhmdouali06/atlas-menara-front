<!-- components/cars/details/CarDetailsWithReservation.vue -->
<template>
  <section
    class="mx-auto px-4 md:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-12 gap-10"
  >
    <!-- LEFT: details -->
    <article class="lg:col-span-8">
      <!-- title -->
      <h1
        class="font-Poppins text-3xl md:text-4xl font-extrabold text-[#0E2041]"
      >
        {{ car.title }}
      </h1>

      <!-- location -->
      <p class="mt-2 text-[15px] font-poppins md:text-base text-[#2b395b]">
        {{ car.location }}
      </p>

      <!-- red note under title -->
      <p
        class="mt-3 text-[18px] md:text-[20px] font-poppins font-semibold text-[#e83333]"
      >
        {{ car.priceNote }}
      </p>

      <!-- sección: descripción -->
      <h2
        class="mt-8 font-poppins text-2xl md:text-[28px] font-extrabold text-[#0E2041]"
      >
        Descripción del servicio
      </h2>
      <p class="mt-3 font-poppins leading-relaxed text-[#1f2a44]">
        {{ car.description }}
      </p>

      <!-- sección: Con Atlas Menara disfrutarás de: -->
      <h3
        class="mt-6 font-poppins text-[18px] md:text-[20px] font-extrabold text-[#f59e0b]"
      >
        Con Atlas Menara disfrutarás de:
      </h3>
      <ul class="mt-3 space-y-2 pl-5 list-disc text-[#1f2a44] font-poppins">
        <li v-for="(b, i) in car.benefits" :key="i">{{ b }}</li>
      </ul>

      <!-- cierre -->
      <p class="mt-6 font-poppins leading-relaxed text-[#1f2a44]">
        {{ car.conclusion }}
      </p>
    </article>

    <!-- RIGHT: reservation box -->
    <aside class="lg:col-span-4">
      <div class="lg:sticky lg:top-6">
        <!-- Use your existing component -->
        <CarsDetailsReserveForm :privacy-href="privacyHref" />
      </div>
    </aside>
  </section>
</template>

<script setup lang="ts">
type CarDetail = {
  title: string;
  location: string;
  priceNote: string;
  description: string;
  benefits: string[];
  conclusion: string;
};

const props = withDefaults(
  defineProps<{
    car?: CarDetail;
    privacyHref?: string;
  }>(),
  {
    privacyHref: "#",
  }
);

// sensible defaults so nothing explodes during integration
const car = computed<CarDetail>(
  () =>
    props.car ?? {
      title: "New MG ZS con conductor",
      location: "Madrid, España",
      priceNote: "precio varía según las condiciones",
      description:
        "Nuestro servicio de alquiler de coche con conductor está pensado para quienes buscan comodidad, seguridad y puntualidad en cada desplazamiento. Ya sea para traslados al aeropuerto, viajes de negocios, turismo o desplazamientos privados, ponemos a tu disposición vehículos modernos y conductores profesionales que se adaptan a tus horarios y necesidades.",
      benefits: [
        "Vehículos confortables y climatizados, perfectos para viajes individuales, en pareja o en grupo.",
        "Conductores experimentados, amables y puntuales, que garantizan un trayecto seguro y sin estrés.",
        "Flexibilidad total: traslados urbanos, interurbanos o a cualquier destino que necesites.",
        "Servicio puerta a puerta, sin esperas ni complicaciones.",
      ],
      conclusion:
        "Este servicio es la mejor opción para quienes desean viajar con tranquilidad y estilo, dejando en nuestras manos toda la logística del trayecto.",
    }
);
</script>
