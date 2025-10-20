<template>
    <section class="w-[90%] mx-auto my-10">

        <div class="grid grid-cols-12 gap-10 mt-10">
            <div v-for="item in props.items" class="col-span-12 md:col-span-4" :key="item.id">
                <BlogCard :item="item" class="w-full" />
            </div>
        </div>
    </section>
</template>
<script setup lang="tsx">
import type { BlogPost } from '~/types/Blogs';
import BlogCard from '../home/sections/BlogCard.vue';

const props = defineProps<{ items: BlogPost[], loading: boolean }>()
</script>