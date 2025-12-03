<script setup lang="ts">
import { formatDateEsBlog } from '~/helpers/functions/formatDuration';
import { fileUrl } from '~/helpers/functions/imageURl';
import type { BlogPost } from '~/types/Blogs';


const props = defineProps<{
  item: BlogPost;
}>();
</script>
<template>
  <div>
    <div class="h-[277px] w-full relative">

      <span class="absolute font-poppins z-[2] top-0 left-14 text-[#2B2B2B] bg-white py-1 px-4"
        v-html="formatDateEsBlog(props.item.createdAt)"></span>

      <img :src="fileUrl(props?.item?.thumbnail?.filePath, 'blog')" :alt="props.item.title"
        class="rounded-3xl object-cover w-full h-full absolute z-0" />
    </div>
    <p class="text-[#07123D] font-poppins mt-2 text-xl font-bold">
      {{ props.item.title }}
    </p>
    <div class="flex justify-end">
      <button @click="navigateTo('/blogs/' + props.item.slug)"
        class="flex items-center gap-2 border h-10 w-10 justify-center rounded-full mt-2 hover:bg-[#07123D] delay-100 duration-300 my-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
          <path
            d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM21.7071 8.70711C22.0976 8.31658 22.0976 7.68342 21.7071 7.29289L15.3431 0.928932C14.9526 0.538408 14.3195 0.538408 13.9289 0.928932C13.5384 1.31946 13.5384 1.95262 13.9289 2.34315L19.5858 8L13.9289 13.6569C13.5384 14.0474 13.5384 14.6805 13.9289 15.0711C14.3195 15.4616 14.9526 15.4616 15.3431 15.0711L21.7071 8.70711ZM1 9H21V7H1V9Z"
            fill="#07123D" />
        </svg>
      </button>
    </div>
  </div>
</template>
<style scoped>
span {
  border-radius: 0 0 10px 10px;
}

button svg path {
  transition: all 0.3s ease;
}

button:hover svg path {
  fill: #fff;
}
</style>
