<script lang="ts" setup></script>
<template>
  <section class="mt-4 mb-24">
    <p class="top-text sub-header text-center text-[#2B2B2B]">DESCUBRE</p>
    <h2 class="custom-header text-center">¿Cómo Solicitar tu Servicio?</h2>
    <div class="srvices flex justify-center flex-wrap">
      <div class="item item-1">
        <img
          src="@/assets/img/global/bg-item-1.png"
          class="bg-img"
          alt="background"
        />
        <img src="@/assets/img/global/n-1.png" class="n-img" alt="background" />
        <p class="sub-header font-bold">Selección del Servicio</p>
        <p class="sub-text">
          Elige el servicio de viaje que más se adapte a tus necesidades
        </p>
      </div>
      <div class="item item-2">
        <img
          src="@/assets/img/global/bg-item-2.png"
          class="bg-img"
          alt="background"
        />
        <img src="@/assets/img/global/n-2.png" class="n-img" alt="background" />
        <p class="sub-header font-bold">Rellenar la Información</p>
        <p class="sub-text">
          Completa el formulario con tus datos para que podamos atenderte de
          manera personalizada.
        </p>
      </div>
      <div class="item item-3">
        <img
          src="@/assets/img/global/bg-item-3.png"
          class="bg-img"
          alt="background"
        />
        <img src="@/assets/img/global/n-3.png" class="n-img" alt="background" />
        <p class="sub-header font-bold">Contacto con un Comercial</p>
        <p class="sub-text">
          Uno de nuestros asesores se pondrá en contacto contigo para confirmar
          la reserva.
        </p>
      </div>
      <div class="item item-4">
        <img
          src="@/assets/img/global/bg-item-4.png"
          class="bg-img"
          alt="background"
        />
        <img src="@/assets/img/global/n-4.png" class="n-img" alt="background" />
        <p class="sub-header font-bold">Disfruta tu Viaje</p>
        <p class="sub-text">
          Ya está todo listo. Relájate y disfruta del servicio elegido con la
          garantía y confianza de Atlas Menara.
        </p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.sub-header {
  color: #0e2041;
  font-size: 26px;
  padding-left: 2rem;
  padding-right: 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
}
.sub-text {
  color: #595959;
  font-family: "Poppins", sans-serif;
}
.custom-header {
  color: #0e2041;
  font-weight: 600;
  line-height: normal;
  font-size: 40px;
  font-family: "Poppins", sans-serif;
}
img {
  user-select: none;
  pointer-events: none;
}
.item p {
  text-align: center;
}
.item {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  width: 300px;
  height: 300px;
  position: relative;
}
.item-2 .bg-img {
  left: -3px;
}
.item-3 .bg-img {
  left: -6px;
}
.item-4 .bg-img {
  left: -10px;
}
.item-1 .n-img {
  top: 60px;
  left: -50px;
}
.item-2 .n-img {
  top: -35px;
  left: 31px;
}
.item-3 .n-img {
  bottom: -44px;
  left: 18px;
}
.item-4 .n-img {
  top: -42px;
  left: 22px;
}
.bg-img,
.n-img {
  position: absolute;
}
.n-img {
  z-index: -1;
}
.srvices {
  margin-top: 4rem;
}
@media screen and (max-width: 1391px) {
  .item-4 {
    margin-top: 4rem;
  }
}
@media screen and (max-width: 1091px) {
  .item-3 {
    margin-top: 4rem;
  }
}
@media screen and (max-width: 768px) {
  .item-2 {
    margin-top: 4rem;
  }
  .item-4 {
    margin-top: 8rem;
  }
  .srvices {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
