<template>
  <section>
    <div class="main w-[90%] top-[-50px] relative mx-auto">
      <nav>
        <ul class="flex gap-0 justify-between">
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
      <div class="p-8 gap-8 grid grid-cols-12">

        <div class="left col-span-12 md:col-span-8 ">
          <div v-show="active == 1">
            <DetailUmrahSectionsInfo :item="item" />
          </div>
          <div v-show="active == 2">
            <DetailUmrahSectionsPlan :item="item" />
          </div>
          <div v-show="active == 3">
            <DetailUmrahSectionsPosition :item="item" />
          </div>
          <div v-show="active == 4">
            <DetailUmrahSectionsHotel :item="item" />
          </div>

        </div>
        <div class="right col-span-12 md:col-span-4">
          <DetailUmrahSectionsContact :item="item" />
        </div>
      </div>


    </div>
  </section>
</template>
<script setup lang="ts">
import info from "@/assets/img/icon/info.svg";
import plan from "@/assets/img/icon/plan.svg";
import position from "@/assets/img/icon/position.svg";
import hotel from "@/assets/img/icon/blackHotel.svg";
import type { Umrah } from "~/types/Umrah";
const active = ref(1);
const props = defineProps<{
  item: Umrah;
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
</style>
