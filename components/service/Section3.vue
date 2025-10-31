<template>
  <section class="w-[90%] mx-auto my-8">
    <div class="grid grid-cols-12 gap-8">
      <div v-for="service in services" :id="service.link" class="flex flex-col md:flex-row gap-8 mb-2 md:mb-8"
        :key="service.id" :class="service.cat == 'small'
          ? 'col-span-12 md:col-span-4'
          : 'col-span-12 md:col-span-8'
          ">
        <div class="border border-dashed border-[#07113D]" v-if="service.id % 2 == 0"></div>
        <ServiceSectionsBigCard :service="service" v-if="service.cat == 'big'" />

        <ServiceSectionsSmallCard :service="service" v-if="service.cat == 'small'" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import plane from "@/assets/img/icon/whitePlane.svg";
import airpot from "@/assets/img/global/airport.png";
import ship from "@/assets/img/icon/whiteShip.svg";
import steamShip from "@/assets/img/global/steamship.png";
import hotel from "@/assets/img/global/hotel.png";
import building from "@/assets/img/icon/whiteBulding.svg";
import visa from "@/assets/img/icon/whiteVise.svg";
import passport from "@/assets/img/global/visa-passport.png";
const services = [
  {
    id: 1,
    link: "venta-de-billetes-aereos",
    title: "Venta de billetes aéreos",
    img: airpot,
    cat: "big",

    bottom:
      "Nos encargamos de gestionar tus billetes de avión internacionales y nacionales al mejor precio. Contamos con acuerdos con las principales aerolíneas, lo que nos permite ofrecerte tarifas competitivas y un servicio de atención personalizada en todo momento.",
  },
  {
    id: 2,
    link: "billetes-aereos-equipo",

    title: "Nuestro equipo se ocupa de:",
    list: [
      "Buscar las mejores combinaciones de vuelos.",
      "Garantizar cambios o asistencia en caso de incidencias.",
      "Ofrecer opciones adaptadas a tu presupuesto y horarios.",
    ],
    cat: "small",

    bg: "orange",
    icon: plane,
    bottom:
      "Deja en nuestras manos la reserva de tus vuelos y viaja con la seguridad de contar con asistencia antes, durante y después de tu viaje.",
  },
  {
    id: 3,
    link: "te-ofrecemos-ferries",

    cat: "small",
    title: "Te ofrecemos:",
    list: [
      "Horarios flexibles y adaptados a tus necesidades.",
      "Tarifas especiales para familias y grupos.",
      "Travesías rápidas y cómodas para cruzar el Estrecho sin complicaciones.",
    ],
    bg: "blue",
    icon: ship,
    bottom:
      "Tanto si viajas por turismo o negocios , nuestros ferries son la opción ideal para disfrutar de un trayecto seguro y eficiente.",
  },
  {
    id: 4,
    link: "billetes-de-barco-entre-algeciras-tarifa-y-tanger",

    title: "billetes de barco entre Algeciras, Tarifa y Tánger",
    img: steamShip,
    cat: "big",

    bottom:
      "Conectamos España y Marruecos de manera sencilla y económica gracias a nuestro servicio de reserva de billetes de ferry entre los puertos de Algeciras, Tarifa y Tánger.",
  },
  {
    id: 5,
    link: "reserva-de-hoteles",

    title: "Reserva de hoteles",
    img: hotel,
    cat: "big",

    bottom:
      "Haz de tu viaje una experiencia completa con nuestra gestión de reservas en hoteles cuidadosamente seleccionados. Ofrecemos opciones para todos los gustos y presupuestos: desde alojamientos económicos hasta hoteles de lujo de 5 estrellas, siempre en zonas estratégicas y cercanas a los principales puntos de interés.",
  },
  {
    id: 6,
    link: "ventajas-de-reservar",

    cat: "small",
    title: "Ventajas de reservar con nosotros:",
    list: [
      "Tarifas preferenciales negociadas con nuestros partners.",
      "Selección de hoteles de confianza y calidad comprobada.",
      "Atención personalizada para elegir la opción que mejor se adapte a ti.",
    ],
    bg: "blue",
    icon: building,
    bottom:
      "Tanto si viajas por turismo o negocios , nuestros ferries son la opción ideal para disfrutar de un trayecto seguro y eficiente.",
  },
  {
    id: 7,
    link: "visados-equipo",

    cat: "small",
    title: "Nuestro equipo se encarga de todo el proceso:",
    list: [
      "Revisión de la documentación necesaria.",
      "Presentación y seguimiento de la solicitud.",
      "Entrega del visado en los plazos estipulados.",
    ],
    bg: "orange",
    icon: visa,
    bottom:
      "Así podrás enfocarte en preparar tu viaje mientras nosotros nos ocupamos de los detalles burocráticos. Con Atlas Menara, obtendrás tu visado de manera rápida, fiable y sin preocupaciones.",
  },
  {
    id: 8,
    link: "tramitacion-de-visados-umrah-y-turista",

    title: "Tramitación de visados (Umrah y turista)",
    img: passport,
    cat: "big",

    bottom:
      "Sabemos que los trámites administrativos pueden ser un dolor de cabeza. Por eso, ponemos a tu disposición un servicio integral de gestión de visados para Umrah y turismo.",
  },
];
</script>
