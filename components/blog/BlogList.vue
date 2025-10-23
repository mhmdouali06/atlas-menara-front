<script setup lang="ts">
import rightArrow from "@/assets/img/icon/blue-right-arrow.svg";
import { fileUrl } from "~/helpers/functions/imageURl";
import { useCleanExcerpt } from "~/helpers/functions/useTextExcerpt";
import type { BlogPost } from "~/types/Blogs";
import { computed } from "vue";

const { posts } = defineProps<{
  posts: BlogPost[];
}>();

const emit = defineEmits(["update:current-page"]);

const hasPosts = computed(() => Array.isArray(posts) && posts.length > 0);
const topPost = computed(() => (hasPosts.value ? posts[0] : null));
const sidePosts = computed(() => (hasPosts.value ? posts.slice(1, 4) : []));
</script>

<template>
  <section class="">
    <div class="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
      <!-- LEFT: first post -->
      <div v-if="topPost" class="lg:col-span-7 xl:col-span-7 2xl:col-span-8 cursor-pointer"
        @click="navigateTo(`/blogs/${topPost.slug}`)">
        <img class="w-full h-[490px] object-cover rounded-2xl" :src="fileUrl(topPost.thumbnail.filePath, 'blog')"
          :alt="topPost.title" />

        <h3 class="mt-3 inline-flex items-center px-2 py-1 rounded bg-[#EEE] text-black font-semibold text-sm">
          {{ topPost.category.name }}
        </h3>

        <h3 class="mt-3 font-bold text-black font-[Poppins] text-[32px] leading-[1.3]">
          {{ topPost.title }}
        </h3>

        <p class="mt-2 text-black font-[Poppins] text-[16px] leading-[1.6]">
          {{ useCleanExcerpt(topPost.content) }}
        </p>

        <nuxt-link class="mt-4 inline-flex items-center gap-4 text-black" :to="`/blogs/${topPost.slug}`">
          <span class="font-[Poppins] text-base">Leer más</span>
          <img :src="rightArrow" class="w-5 h-5" alt="arrow" />
        </nuxt-link>
      </div>

      <!-- RIGHT: list -->
      <div class="lg:col-span-5 2xl:col-span-4">
        <div v-for="post in sidePosts" :key="post.id" class="flex items-center gap-4 mb-4 cursor-pointer lg:items-start"
          @click="navigateTo(`/blogs/${post.slug}`)">
          <img class="w-[150px] h-[150px] object-cover rounded-xl flex-shrink-0"
            :src="fileUrl(post.thumbnail.filePath, 'blog')" :alt="post.title" />
          <div class="flex-1">
            <h3 class="inline-flex items-center px-2 py-1 rounded bg-[#EEE] text-black font-semibold text-sm">
              {{ post.category.name }}
            </h3>

            <p class="mt-4 font-bold text-black font-[Poppins] text-[18px] leading-[1.3]">
              {{ post.title.slice(0, 30) + '...' }}
            </p>

            <nuxt-link class="mt-3 inline-flex items-center gap-4 text-black" :to="`/blogs/${post.slug}`" @click.stop>
              <span class="font-[Poppins] text-base">Leer más</span>
              <img :src="rightArrow" class="w-5 h-5" alt="arrow" />
            </nuxt-link>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-if="!hasPosts" class="col-span-12">
        <p class="text-center text-gray-500 py-10">No se encontraron blogs </p>
      </div>
    </div>
  </section>
</template>
