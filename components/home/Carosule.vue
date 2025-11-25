<script setup lang="ts">
import { ref } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import leftButton from "@/assets/img/icon/left-arrow.svg";
import type { TravelPackage } from '~/types/travel-package';
import rightButton from "@/assets/img/icon/right-arrow.svg";
import type { Category } from "~/types/Categories";

const loading = ref(true)
const { getPackages } = useTravelPackagesFront('umrah');
const { getCategories } = useCategories();
const items = ref<TravelPackage[]>([])
const categoriesList = ref<Category[]>([]);

const swiperRef = ref<any>(null);

const activeItem = computed(() => carouselIndex.value + 1);
const carouselIndex = ref(0);
const totlaItem = ref(4);

const prev = () => {
  if (swiperRef.value) {
    swiperRef.value.prev();
  }
};

const next = () => {
  if (swiperRef.value) {
    swiperRef.value.next();
  }
};







const getCategoriesList = async () => {
  loading.value = true
  const firstitem = { "@id": "", "@type": "", "@context": "", id: "", name: "Todo", slug: "", blogPosts: [] };
  try {
    const data = await getCategories("type=umrah");
    if (data) {
      if (data.member) {
        categoriesList.value = data.member
        categoriesList.value.unshift(firstitem);

      }
    }
  } catch (error) {
    console.log(error);

  }
  finally {

    loading.value = false
  }



}
const getData = async (query?: string) => {
  loading.value = true
  try {
    const data = await getPackages(query)
    if (data) {
      if (data.member) {
        items.value = data.member
        totlaItem.value = data.member.length
      }
    }
  } catch (error) {
    console.log(error);

  }
  finally {
    loading.value = false
  }



}


const activeCategory = ref('');
watch(activeCategory, (newVal) => {
  if (newVal === "") {
    getData();
  } else {
    getData(`category.slug=${newVal}`);
  }
});

onMounted(() => {
  getCategoriesList()
  getData()

  carouselIndex.value = activeItem.value - 1;
});
</script>

<template>
  <section class="mt-24 px-4 md:px-12">
    <div class="flex flex-col md:flex-row items-center justify-between">
      <div>
        <p class="font-volkhov text-orange text-xl">Explora</p>
        <h3 class="font-volkhov text-2xl md:text-3xl mb-8 font-semibold">
          Nuestras <span class="text-orange font-semibold">ofertas</span> mas
          destacadas
        </h3>
      </div>
      <div class="overflow-auto mb-8 md:my-0 w-full md:w-auto">
        <div class="flex gap-2 overflow-x-auto">
          <button v-for="category in categoriesList" :key="category.id" @click="activeCategory = category.slug" :class="[
            activeCategory === category.slug
              ? 'bg-orange text-white'
              : 'bg-white text-orange',
            'category-button text-nowrap rounded-full px-4 py-2 text-lg font-semibold border border-orange  hover:bg-orange hover:text-white transition duration-300 easy',
          ]">
            {{ category.name }}
          </button>
        </div>
      </div>
    </div>
    <div>
      <Carousel v-if="!loading" breakpointMode="carousel" ref="swiperRef" :breakpoints="{
        0: { itemsToShow: 1 },
        640: { itemsToShow: 2 },
        768: { itemsToShow: 3 },
        1024: { itemsToShow: 4 },
      }" :wrap-around="true" snap-align="start" :gap="20">
        <Slide v-for="(item, index) in items" :key="index">
          <UiCard :item="item" />
        </Slide>

      </Carousel>
      <UiGridLoading :items="3" v-else />
    </div>

    <div class="flex justify-end gap-4 mt-8">
      <button @click="prev" class="rounded-full left hover:shadow-sm">
        <img :src="leftButton" alt="left" /></button><button @click="next" class="right hover:shadow-sm rounded-full">
        <img :src="rightButton" alt="right" />
      </button>
    </div>
  </section>
</template>
<style scoped>
button:not(.category-button) {
  width: 56px;
  height: 56px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: 1px solid #07123d;
  box-sizing: border-box;
}

button img {
  margin: 0;
  padding: 0;
  width: 20px;
  height: 20px;
}

button:not(.category-button):hover {
  background: var(--vt-c-orange);
  box-shadow: 0 1px 9.1px 4px rgba(255, 209, 26, 0.3);
  border-color: var(--vt-c-orange);
}
</style>
