<template>
    <section class="relative h-[239px]">
        <div class="bg"></div>
        <img :src="bg" class="img-bg" alt="umrah bg" />
        <div class="h-full w-full flex items-center">
            <h1 class="text-4xl md:text-7xl font-bold text-center font-arefRuqaa text-white w-full">
                وَأَتِمُّوا۟ <span class="text-orange"> ٱلْحَجَّ </span> وَٱلْعُمْرَةَ
                لِلَّهِ
            </h1>
        </div>
    </section>
</template>
<script lang="ts" setup>
import bg from "@/assets/img/global/lhaj-bg.png";
</script>
<style scoped>
.bg {
    background: rgba(14, 32, 65, 0.69);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
}

.img-bg {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -2;
}
</style>
