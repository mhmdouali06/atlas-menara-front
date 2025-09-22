<template>
  <section class="my-10">
    <h1
      class="font-Poppins text-3xl text-center md:text-4xl font-extrabold text-[#0E2041] mb-8"
    >
      Descubre nuestros Paquetes <span class="text-orange-500">Hajj</span>
    </h1>

    <ClientOnly>
      <div class="relative overflow-hidden">
        <Swiper
          :modules="modules"
          :slides-per-view="1.7"
          :space-between="90"
          :initial-slide="1"
          :speed="900"
          :grab-cursor="true"
          :centered-slides="true"
          ref="swiperRef"
          :pagination="{ el: '.hajj-pagination', clickable: true }"
        >
          <SwiperSlide
            class="py-8"
            v-for="(it, idx) in items"
            :key="it.id"
            :style="{ width: slideWidth }"
          >
            <HajjSectionsHajjCard :item="it" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="mt-4">
        <div class="hajj-pagination flex justify-center gap-1.5"></div>
      </div>
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
const modules = [Pagination];

/* Fake data — replace with your API or actual images later */
const items = ref([
  {
    id: 1,
    title: "Paquete Hajj 2025 / 1446 (18 días)",
    duration: "18 días",
    start: "29 de mayo de 2025",
    price: "7.900",
    imagesCount: 9,
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=4",
    rating: "4.2 ★ (Hotel 3 estrellas)",
    hotel: "Hotel 3 estrellas",
    features: ["Comidas", "Traslados"],
    medinaHotel: "Hotel Moein Taiba",
    mecaHotel: "Hotel Dar Al Motakamela",
  },
  {
    id: 2,
    title: "Paquete Hajj Confort (15 días)",
    duration: "15 días",
    start: "05 de junio de 2025",
    price: "9.200",
    imagesCount: 7,
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=4",
    rating: "4.6 ★ (Hotel 4 estrellas)",
    hotel: "Hotel 4 estrellas",
    features: ["Comidas", "Guía", "Traslados"],
    medinaHotel: "Hotel Al Madina",
    mecaHotel: "Hotel Al Noor",
  },
  {
    id: 3,
    title: "Paquete Hajj Económico (12 días)",
    duration: "12 días",
    start: "10 de junio de 2025",
    price: "5.900",
    imagesCount: 5,
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=4",
    rating: "3.9 ★ (Hotel 2 estrellas)",
    hotel: "Hotel 2 estrellas",
    features: ["Traslados"],
    medinaHotel: "Hotel Al-Salam",
    mecaHotel: "Hotel Dar Al Hajar",
  },
  {
    id: 4,
    title: "Paquete Hajj Premium (20 días)",
    duration: "20 días",
    start: "20 de mayo de 2025",
    price: "12.500",
    imagesCount: 12,
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=4",
    rating: "4.9 ★ (Hotel 5 estrellas)",
    hotel: "Hotel 5 estrellas",
    features: ["Comidas", "Traslados", "VIP Lounge"],
    medinaHotel: "Hotel Royale",
    mecaHotel: "Hotel Grand",
  },
  {
    id: 5,
    title: "Paquete Hajj Familiar (16 días)",
    duration: "16 días",
    start: "01 de junio de 2025",
    price: "8.750",
    imagesCount: 8,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=5",
    rating: "4.4 ★ (Hotel 3.5 estrellas)",
    hotel: "Hotel Familiar",
    features: ["Comidas", "Actividades Familiares"],
    medinaHotel: "Hotel Family Medina",
    mecaHotel: "Hotel Family Meca",
  },
]);

/* slide width: control how wide the center card is */
const slideWidth = "720px"; // adjust to taste, or detect via breakpoints

const swiperRef = ref<any>(null);
function next() {
  swiperRef.value?.swiper?.slideNext();
}
function prev() {
  swiperRef.value?.swiper?.slidePrev();
}
</script>

<style scoped>
.swiper {
  padding-bottom: 18px;
}
::v-deep(.swiper-slide-active .hajj-card) {
  transform: scale(1.1);
  height: 245px;
}

::v-deep(.swiper-pagination-bullet) {
  width: 40px;
  height: 9px;
  flex-shrink: 0;
  border-radius: 16px;
  background: #8e8d8d;
  cursor: pointer;
}
::v-deep(.swiper-pagination-bullet-active) {
  background: #0e2041;
}
@media (max-width: 768px) {
  /* small screens: make narrower cards */
  :root {
    --slide-w: 320px;
  }
}
</style>
