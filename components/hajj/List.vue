<script setup lang="ts">
import { Carousel, Slide, Pagination } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import type { TravelPackage } from "~/types/travel-package";

const props = defineProps<{
  items: TravelPackage[];
  loading: boolean;
}>();
</script>

<template>
  <section class="mt-10 mb-20">
    <h1 class="font-Poppins text-3xl text-center md:text-4xl font-extrabold text-[#0E2041] mb-8">
      Descubre nuestros Paquetes <span class="text-orange-500">Hajj</span>
    </h1>

    <div v-if="!props.loading" class="mb-8">
      <ClientOnly>
        <div class="relative">
          <Carousel class="mt-4 px-4 md:px-0" breakpointMode="carousel" :transition="650" :pauseAutoplayOnHover="true"
            :wrap-around="props.items.length > 1" snap-align="center" :gap="60" :items-to-show="1.1" :breakpoints="{
              0: { itemsToShow: 1.05 },
              640: { itemsToShow: 1.1 },
              768: { itemsToShow: 1.25 },
              1024: { itemsToShow: 1.55 },
              1280: { itemsToShow: 1.7 }
            }">
            <Slide v-for="item in props.items" :key="item.id" class="py-6">
              <HajjSectionsHajjCard :item="item" />
            </Slide>
            <template #addons>
              <Pagination />
            </template>
          </Carousel>
        </div>
      </ClientOnly>
    </div>

    <UiGridLoading v-else :items="3" />
  </section>
</template>

<style scoped>
/* Space the dots a bit */
:deep(.carousel__pagination) {
  gap: 10px;
  margin-top: 3rem;
}

/* Make bullets responsive, not railway sleepers */
:deep(.carousel__pagination-button) {
  width: clamp(18px, 8vw, 74px);
  height: clamp(4px, 0.9vw, 6px);
  border-radius: 9999px;
  background: #e5e7eb;
  border: none;
  padding: 0;
  bottom: 20px;

  position: relative;
  top: clamp(16px, 4vw, 45px);
  transition: all 0.25s ease;
}

/* Active state */
:deep(.carousel__pagination-button[aria-current="true"]),
:deep(.carousel__pagination-button--active) {
  background: #0e2041;
}



/* Hide default SVG dot */
:deep(.carousel__pagination-button .carousel__icon) {
  display: none;
}

:deep(.carousel__slide--active) {
  transform: scale(1.1);
}

/* Slightly tighter on very small screens */
@media (max-width: 768px) {

  :deep(.carousel__slide--active) {
    transform: scale(1);
  }
}

@media (max-width: 420px) {
  :deep(.carousel__pagination) {
    gap: 6px;
  }
}
</style>
