<template>
  <CarsSection1 @apply="onApplyFilters" />
  <CarsList v-model:items="items" :loading="loading" @next-page="gotToNextPage" :totalItem="totalItems"
    @onToggleLike="onToggleLike" />
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import type { Car } from "~/types/car";
const totalItems = ref(0);
const page = ref(1);

const { getCars } = useCarsFront();
const loading = ref(true);
const _type = ref<string | undefined>(undefined);
const _city = ref<string | undefined>(undefined);
const items = ref<Car[]>([]);

// --- LocalStorage helpers ---
const STORAGE_KEY = "liked_cars";

function loadLikedCars(): string[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveLikedCars(ids: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

function syncLikedState(cars: Car[]) {
  const likedIds = loadLikedCars();
  return cars.map((car) => ({
    ...car,
    liked: likedIds.includes(String(car.id)),
  }));
}

// --- Pagination ---
const gotToNextPage = () => {
  if (items.value.length >= totalItems.value) return;
  page.value += 1;
  getData();
};

// --- Apply filters ---
const onApplyFilters = (payload: { type: string; city: string }) => {
  page.value = 1;
  items.value = [];
  _type.value = payload.type;
  _city.value = payload.city;
  getData();
};

// --- Fetch data ---
const getData = async () => {
  const query = new URLSearchParams();
  query.set("page", page.value.toString());
  query.set("_per_page", "12");
  loading.value = true;

  try {
    if (_type.value) query.set("category.id", _type.value);
    if (_city.value) query.set("city.id", _city.value);

    const data = await getCars(query);
    const members = data["hydra:member"] ?? data.member ?? [];
    totalItems.value = data.totalItems;

    const newCars = members.map((car: Car) => ({
      ...car,
      liked: false,
    }));

    // apply liked state from storage
    items.value = [...items.value, ...syncLikedState(newCars)];
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
};

// --- Toggle like and persist ---
function onToggleLike(item: Car) {
  const likedIds = new Set(loadLikedCars());
  const isLiked = likedIds.has(String(item.id));

  if (isLiked) likedIds.delete(String(item.id));
  else likedIds.add(String(item.id));

  saveLikedCars([...likedIds]);

  items.value = items.value.map((v) =>
    v.id === item.id ? { ...v, liked: !v.liked } : v
  );
}

onMounted(() => {
  getData();
});
</script>
