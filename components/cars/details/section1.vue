<!-- components/CarGallery.vue -->
<template>
  <section class="grid grid-cols-1 md:grid-cols-12 gap-8 px-8">
    <!-- Left: big image with fixed aspect and button -->
    <div class="relative md:col-span-8 rounded-xl overflow-hidden shadow">
      <div class="w-full aspect-[16/9] bg-gray-100">
        <img
          :src="mainImage"
          alt="Main car photo"
          class="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>

      <!-- See all photos button -->
      <button
        type="button"
        class="absolute bottom-4 left-4 flex items-center gap-2 rounded-2xl px-4 py-2 text-white bg-[#0E2041] hover:bg-blue-700 shadow"
        @click="openAll = true"
      >
        <!-- eye icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="12"
          viewBox="0 0 22 12"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.12566 5.53711C8.12566 4.34078 9.31799 3.37097 10.7888 3.37097C12.2596 3.37097 13.452 4.34078 13.452 5.53711C13.452 6.73343 12.2596 7.70325 10.7888 7.70325C9.31799 7.70325 8.12566 6.73343 8.12566 5.53711ZM9.8625 5.53711C9.8625 5.95322 10.2772 6.29055 10.7888 6.29055C11.3004 6.29055 11.7151 5.95322 11.7151 5.53711C11.7151 5.12099 11.3004 4.78367 10.7888 4.78367C10.2772 4.78367 9.8625 5.12099 9.8625 5.53711Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.2425 1.5533L21.0825 4.69891C21.3955 4.90266 21.5776 5.21105 21.5776 5.53711C21.5776 5.86316 21.3955 6.17155 21.0825 6.37531L16.2425 9.52092C13.0525 11.592 8.52511 11.592 5.33513 9.52092L0.495127 6.37531C0.182166 6.17155 0 5.86316 0 5.53711C0 5.21105 0.182166 4.90266 0.495127 4.69891L5.33513 1.5533C8.52511 -0.517766 13.0525 -0.517766 16.2425 1.5533ZM6.41197 8.4661C8.9737 10.1245 12.6039 10.1245 15.1657 8.4661L19.5888 5.53711L15.1657 2.6552C12.6039 0.996844 8.9737 0.996844 6.41197 2.6552L1.98881 5.53711L6.41197 8.4661Z"
            fill="white"
          />
        </svg>
        <span class="font-poppins">Ver todas las fotos</span>
      </button>
    </div>

    <!-- Right: 2x2 thumbs, fixed aspect so they never collapse -->
    <div class="md:col-span-4 grid grid-cols-2 gap-4">
      <div
        v-for="(src, i) in thumbs"
        :key="i"
        class="rounded-xl overflow-hidden shadow bg-gray-100"
      >
        <div class="aspect-[4/3] h-full">
          <img
            :src="src"
            :alt="`Car detail ${i + 1}`"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <!-- Modal: all photos -->
    <transition name="fade">
      <div
        v-if="openAll"
        class="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex"
        @click.self="openAll = false"
      >
        <div class="m-auto w-[95vw] max-w-6xl bg-white rounded-2xl p-4 md:p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold">Todas las fotos</h3>
            <button
              class="p-2 rounded hover:bg-gray-100"
              @click="openAll = false"
              aria-label="Cerrar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M6.225 4.811 4.811 6.225 9.586 11l-4.775 4.775 1.414 1.414L11 12.414l4.775 4.775 1.414-1.414L12.414 11l4.775-4.775-1.414-1.414L11 9.586z"
                />
              </svg>
            </button>
          </div>

          <div
            class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4"
          >
            <a
              v-for="(src, i) in allImages"
              :key="`all-${i}`"
              :href="src"
              target="_blank"
              rel="noopener"
              class="block rounded-lg overflow-hidden bg-gray-100"
            >
              <div class="aspect-[4/3]">
                <img
                  :src="src"
                  :alt="`Foto ${i + 1}`"
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from "vue";

type Props = { images?: string[] };

const defaultImages = [
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1549921296-3b4a1f9a7f74?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80",
];

const props = defineProps<Props>();

const allImages = computed(() =>
  props.images?.length ? props.images : defaultImages
);
const mainImage = computed(() => allImages.value[0]);
const thumbs = computed(() => allImages.value.slice(1, 5));
const openAll = ref(false);

function onKey(e: KeyboardEvent) {
  if (e.key === "Escape") openAll.value = false;
}
onMounted(() => window.addEventListener("keydown", onKey));
onBeforeUnmount(() => window.removeEventListener("keydown", onKey));
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
