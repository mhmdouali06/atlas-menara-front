<template>
  <section>
    <div class="grid grid-cols-12">
      <!-- ------------------------------------- left ----------------------------- -->
      <div
        class="col-span-12 md:col-span-4 lg:col-span-3 relative top-[-15px] z-[-3]"
      >
        <img :src="left" alt="left" class="w-full h-full" />
      </div>
      <!-- -----------------------------right -------------------------------- -->
      <div class="col-span-12 md:col-span-8 lg:col-span-9 py-10 pr-20">
        <p
          class="mb-3 flex items-center gap-2 text-lg text-[#4361EE] font-poppins"
        >
          ¿Quieres viajar con total comodidad y sin complicaciones?
        </p>

        <h1
          class="text-3xl font-extrabold leading-tight text-[#0E2041] md:text-4xl font-poppins"
        >
          Nuestros <span class="text-orange">Servicios</span> exclusivos para tu
          viaje
        </h1>
        <p class="mt-4 text-[15px] leading-relaxed text-[#808080] font-poppins">
          En <span class="font-semibold text-orange">Atlas Menara</span> ponemos
          a tu disposición una
          <span class="font-semibold text-orange"
            >gama completa de servicios </span
          >diseñados para que disfrutes de tu viaje con tranquilidad, seguridad
          y al mejor precio.
          <br />
          Nos ocupamos de cada detalle para que tú solo te concentres en vivir
          la experiencia.
        </p>
        <div
          class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12 w-full md:w-[90%]"
        >
          <ServiceSectionsIconCard
            v-for="item in services"
            :key="item.id"
            :title="item.title"
            :href="item.href"
            :cta="item.cta"
            :icon="item.icon"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import left from "@/assets/img/global/left-service.png";
import ShipIcon from "@/assets/img/icon/shipIcon.svg";
import TicketIcon from "@/assets/img/icon/planeIcon.svg";
import BuildingOfficeIcon from "@/assets/img/icon/building.svg";
import AcademicCapIcon from "@/assets/img/icon/vise.svg";
const services = [
  {
    id: 1,
    title: "Billetes de avión",
    cta: "Descubrir",
    href: "#",
    icon: TicketIcon,
  },
  {
    id: 2,
    title: "Billetes de barco",
    cta: "Descubrir",
    href: "#",
    icon: ShipIcon,
  },
  {
    id: 3,
    title: "Reserva de hotel",
    cta: "Descubrir",
    href: "#",
    icon: BuildingOfficeIcon,
  },
  {
    id: 4,
    title: "Visados",
    cta: "Descubrir",
    href: "#",
    icon: AcademicCapIcon,
  },
];
</script>
