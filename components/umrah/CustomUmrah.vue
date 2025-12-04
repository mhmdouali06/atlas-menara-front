<template>
  <section class="mt-[20rem] md:mt-[10rem]">
    <div class="main w-[90%] md:w-[85%] mx-auto p-1 md:p-0">
      <div
        class="center relative flex-wrap md:grid md:grid-cols-12  flex justify-center   gap-4 md:gap-0 items-center pr-4">
        <div class="hidden lg:block relative lg:col-span-2 w-full h-full">

          <img :src="left" class=" md:absolute object-fill  left-0 bottom-0 w-full  md:h-[111%] lg:h-[150%]"
            alt="couples" />
        </div>
        <div class="col-span-8 flex flex-col items-center justify-start p-4 md:p-2">
          <h2 class="font-poppins text-white  lg:text-3xl md:text-2xl  text-center md:text-start">
            ✨ Personaliza tu Omra a Medida
          </h2>
          <p class="font-poppins text-white text-sm  lg:text-lg text-center md:text-start">
            Elige fechas, vuelos, hoteles, duración y servicios extra.<br />
            Nosotros organizamos todo para ti.
          </p>
        </div>
        <div class="col-span-4  lg:col-span-2 flex justify-center box-border lg:me-12">
          <button @click="emit('open-modal')" class=" lg:text-nowrap md:text-sm lg:text-lg  mb-6 md:mb-0">Personalizar
            Omra <img :src="icon" alt="icon" /></button>
        </div>

        <div class="bg"></div>
        <img :src="bg" alt="background" class="img-bg object-cover " />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import icon from "@/assets/img/icon/WhiteStart.svg";
import bg from "@/assets/img/global/bg-cutom-umrah.png";
import left from "@/assets/img/global/left-bg-umrah.png";
const emit = defineEmits(['open-modal', 'close-modal'])
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

@media screen and (max-width: 768px) {
  h2 {
    line-height: 42px;
    font-size: larger;
  }

  button {
    margin-right: 0;
  }
}
</style>
