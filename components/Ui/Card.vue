<script setup lang="ts">
import vol from "@/assets/img/icon/vol.svg";
import ticket from "@/assets/img/icon/ticket.svg";
import hotel from "@/assets/img/icon/hotel.svg";
import visa from "@/assets/img/icon/visa.svg";
interface card {
  id: number;
  image: string;
  price: number;
  title: string;
  date_start: string;
  date_end: string;
}
const props = defineProps<{
  item: card;
}>();
</script>
<template>
  <div class="main">
    <div class="blue-background"></div>
    <img
      :src="props.item.image"
      class="w-full h-full object-cover main-bg"
      :alt="props.item.title"
    />
    <div class="p-4 w-full">
      <p
        class="text-white font-semibold text-2xl font-volkhov w-fit relative title-card"
      >
        {{ props.item.title }} <spa class="text-lg font-normal"> "37 Dias"</spa>
      </p>
      <p class="font-poppins text-white">
        Del {{ props.item.date_start }} al {{ props.item.date_end }}
      </p>
      <div class="flex justify-between">
        <div class="flex gap-2 other">
          <div>
            <img :src="vol" alt="vol" />
          </div>
          <div>
            <img :src="ticket" alt="ticket" />
          </div>
          <div>
            <img :src="hotel" alt="hotel" />
          </div>
          <div>
            <img :src="visa" alt="visa" />
          </div>
        </div>
        <p class="font-volkhov text-2xl text-white">
          ${{ props.item.price }} €
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  position: relative;
  z-index: 1;
}
.main {
  position: relative;
  border-radius: 10px;
  width: 378px;
  height: 294px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
}
.main-bg {
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}
.blue-background {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: rgba(14, 32, 65, 0.69);
}
.other div {
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
}
.other img {
  width: 21px;
  height: 21px;
  margin: 0;
  padding: 0;
}
.title-card::after {
  content: "";
  left: 0;
  width: 100%;
  position: absolute;
  bottom: 0px;
  border: 1px solid white;
}
</style>
