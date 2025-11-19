<template>
  <section>
    <div class="main w-[95%]  md:w-[90%] top-[-50px] relative mx-auto">
      <nav>
        <ul class="flex gap-0 justify-between flex-nowrap overflow-x-auto md:overflow-visible md:flex-nowrap">
          <li @click="active = 1" :class="active == 1 ? 'active' : ''">
            <button><img :src="info" alt="icon" /> información</button>
          </li>
          <li @click="active = 2" :class="active == 2 ? 'active' : ''">
            <button><img :src="plan" alt="icon" /> Plan</button>
          </li>
          <li @click="active = 3" :class="active == 3 ? 'active' : ''">
            <button><img :src="position" alt="icon" /> Ubicación</button>
          </li>
          <li @click="active = 4" :class="active == 4 ? 'active' : ''">
            <button><img :src="hotel" alt="icon" /> Hotel</button>
          </li>
        </ul>
      </nav>

      <div v-if="!loading && item" class="p-4 md:p-8 gap-4 md:gap-8 grid grid-cols-12">
        <div class="left col-span-12 md:col-span-8 ">
          <div v-show="active == 1">
            <DetailPackageSectionsInfo :item="item" />
          </div>
          <div v-show="active == 2">
            <DetailPackageSectionsPlan :item="item" />
          </div>
          <div v-show="active == 3">
            <DetailPackageSectionsPosition :hotels="item.hotels" />
          </div>
          <div v-show="active == 4">
            <DetailPackageSectionsHotel :item="item" />
          </div>
        </div>

        <div class="right col-span-12 md:col-span-4">
          <DetailPackageSectionsContact :item="item" />
        </div>
      </div>

      <UiDetailLoader v-else />
    </div>
  </section>
</template>

<script setup lang="ts">
import info from "@/assets/img/icon/info.svg";
import plan from "@/assets/img/icon/plan.svg";
import position from "@/assets/img/icon/position.svg";
import hotel from "@/assets/img/icon/blackHotel.svg";
import type { TravelPackage } from "~/types/travel-package";
const active = ref(1);
const props = defineProps<{
  item?: TravelPackage;
  loading: boolean;
}>();
</script>
<style scoped>
.main {
  background: #fff;
  box-shadow: 0 4px 48px 12px rgba(0, 0, 0, 0.09);
}

li {
  background: #f8f8f8;
  width: 100%;
  height: 100%;
  padding: 3rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

li button {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #343434;
  font-family: "Poppins";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2px;
  text-transform: capitalize;
  background-color: transparent;
}

.active {
  background-color: #fff;
}

/* ------- MOBILE ONLY (no changes on desktop) ------- */
@media (max-width: 767px) {
  nav ul {
    /* horizontal scroll for tabs */
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  li {
    /* no full width, act as pills */
    width: auto;
    padding: 0.9rem 1.2rem;
    flex: 0 0 auto;
  }

  li button {
    font-size: 14px;
    letter-spacing: 1px;
    white-space: nowrap;
  }

  .main {
    top: 0;
    /* evita que se “meta” demasiado hacia arriba en móvil */
  }
}
</style>
