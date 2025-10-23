<template>
  <article class="hajj-card relative rounded-2xl bg-white shadow-lg overflow-hidden w-full">
    <div class="grid grid-cols-12 gap-4 p-4 md:p-6 items-center">
      <!-- Left image -->
      <div class="col-span-12 md:col-span-5">
        <div class="relative rounded-lg overflow-hidden h-40 md:h-48">
          <img :src="fileUrl(item?.thumbnail?.filePath, 'hajj')" :alt="item.title"
            class="w-full h-full object-cover transform transition-transform duration-400 hover:scale-105" />
          <div class="absolute top-3 right-3 bg text-xs px-2 py-2 rounded-md font-semibold">
            {{ props.item.gallery.length }} imágenes
          </div>
        </div>
      </div>

      <!-- Right content -->
      <div class="col-span-12 md:col-span-7">
        <div>
          <div class="flex justify-between items-start gap-3">
            <div>
              <h3 class="text-[#0E2041] font-poppins text-lg font-extrabold leading-tight">
                {{ item.title }}
              </h3>
              <p class="text-sm mt-1 font-poppins text[#112211] ">
                {{ formatDuration(props.item.startsAt, props.item.endsAt) }}" · Inicio: {{
                  formatDateTextEs(props.item.endsAt) }}
              </p>
            </div>

            <div class="text-right font-poppins">
              <p class="text-sm text-gray-400">Paquete estándar</p>
              <p class="text-2xl font-extrabold text-orange">
                {{ item.price }} €
              </p>
              <p class="text-xs text-gray-400">Precio real aproximado</p>
            </div>
          </div>

          <ul class="mt-3 text-sm text-gray-600 space-y-1">
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.385 2.46c-.783.57-1.838-.197-1.538-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.614 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
              </svg>
              <span>{{ item.reviewCount }} · {{ item.hotels[0].name }}</span>
            </li>
            <li class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13.5 2H3C2.86739 2 2.74021 2.05268 2.64645 2.14645C2.55268 2.24021 2.5 2.36739 2.5 2.5V8.5C2.50091 9.29537 2.81727 10.0579 3.37968 10.6203C3.9421 11.1827 4.70463 11.4991 5.5 11.5H9C9.79537 11.4991 10.5579 11.1827 11.1203 10.6203C11.6827 10.0579 11.9991 9.29537 12 8.5V6H12.5625C13.0762 5.99942 13.5687 5.79511 13.9319 5.43188C14.2951 5.06865 14.4994 4.57618 14.5 4.0625V3C14.5 2.73478 14.3946 2.48043 14.2071 2.29289C14.0196 2.10536 13.7652 2 13.5 2ZM13.5 4.0625C13.5 4.31114 13.4012 4.5496 13.2254 4.72541C13.0496 4.90123 12.8111 5 12.5625 5H12V3H13.5V4.0625ZM12.5 12.5H2C1.86739 12.5 1.74021 12.5527 1.64645 12.6464C1.55268 12.7402 1.5 12.8674 1.5 13C1.5 13.1326 1.55268 13.2598 1.64645 13.3536C1.74021 13.4473 1.86739 13.5 2 13.5H12.5C12.6326 13.5 12.7598 13.4473 12.8536 13.3536C12.9473 13.2598 13 13.1326 13 13C13 12.8674 12.9473 12.7402 12.8536 12.6464C12.7598 12.5527 12.6326 12.5 12.5 12.5Z"
                  fill="#112211" />
              </svg>
              <span v-html="item.includes"></span>
            </li>
            <li class="text-xs text-gray-400 mt-2 flex gap-2 items-center">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
                  <path
                    d="M13.5 13.3333H15.3V6.66667H9.9V13.3333H11.7V8.33333H13.5V13.3333ZM0.9 13.3333V0.833333C0.9 0.61232 0.994821 0.400358 1.1636 0.244078C1.33239 0.0877973 1.56131 0 1.8 0H14.4C14.6387 0 14.8676 0.0877973 15.0364 0.244078C15.2052 0.400358 15.3 0.61232 15.3 0.833333V5H17.1V13.3333H18V15H0V13.3333H0.9ZM4.5 6.66667V8.33333H6.3V6.66667H4.5ZM4.5 10V11.6667H6.3V10H4.5ZM4.5 3.33333V5H6.3V3.33333H4.5Z"
                    fill="#0E2041" />
                </svg>
              </span>
              <span class="font-bold text-[#0E2041]">En Medina:</span>
              {{ item.hotels[0].name }} ·
              <span class="font-bold text-[#0E2041]">En Meca:</span>
              {{ item.hotels[0].name2 }}
            </li>
          </ul>
        </div>
        <div class="mt-4 flex items-center justify-between">
          <button @click="navigateTo(`/hajj/${item.slug}`)"
            class="px-6 py-2 w-full rounded-lg bg-[#0E2041] text-white font-semibold shadow hover:opacity-95">
            Ver
          </button>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { formatDateEs, formatDateTextEs, formatDuration } from '~/helpers/functions/formatDuration';
import { fileUrl } from '~/helpers/functions/imageURl';
import type { TravelPackage } from '~/types/travel-package';



const props = defineProps<{ item: TravelPackage }>();
</script>

<style scoped>
.bg {
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
  color: #112211;
}

.hajj-card {
  height: 100%;
  transform: scale(1);
  transition: all 0.5s ease;
}

.text-orange-500 {
  color: #f59e0b;
}
</style>
