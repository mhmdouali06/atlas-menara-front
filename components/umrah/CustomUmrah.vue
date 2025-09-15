<template>
  <section class="mt-[10rem]">
    <div class="main w-[90%] mx-auto">
      <div class="center relative flex justify-end gap-8 items-center">
        <div class="flex flex-col items-center justify-start p-8">
          <h2 class="font-poppins text-white text-3xl md:text-4xl">
            ✨ Personaliza tu Omra a Medida
          </h2>
          <p class="font-poppins text-white text-lg">
            Elige fechas, vuelos, hoteles, duración y servicios extra.<br />
            Nosotros organizamos todo para ti.
          </p>
        </div>
        <div>
          <button>Personalizar Omra <img :src="icon" alt="icon" /></button>
        </div>
        <img
          :src="left"
          class="absolute left-0 bottom-0 h-[140%] w-100%"
          alt="couples"
        />
        <div class="bg"></div>
        <img :src="bg" alt="background" class="img-bg" />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import icon from "@/assets/img/icon/WhiteStart.svg";
import bg from "@/assets/img/global/bg-cutom-umrah.png";
import left from "@/assets/img/global/left-bg-umrah.png";
</script>
<style scoped>
button {
  color: #fff;
  border-radius: 30px;
  border: 1px solid #fff;
  background: rgba(255, 255, 255, 0);
  display: flex;
  width: 231px;
  height: 42px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-right: 4rem;
}
.bg {
  border-radius: 30px;
  background: rgba(14, 32, 65, 0.69);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -1;
}
.main {
  border-radius: 30px;
}
h2 {
  line-height: 62.4px;
}
p {
  line-height: 24px;
}
.img-bg {
  border-radius: 30px;

  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  z-index: -2;
}
</style>
