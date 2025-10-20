<template>
    <BlogSectionsSection1 />
    <BlogList :items="items" :loading="loading" />
</template>
<script lang="ts" setup>
import type { BlogPost } from '~/types/Blogs';


const loading = ref(false)
const { getBlogs } = useBlogsApi();

const items = ref<BlogPost[]>([])

const getData = async () => {
    try {
        const data = await getBlogs()
        if (data) {
            if (data.member) {
                items.value = data.member
            }
        }
    } catch (error) {
        console.log(error);

    }
    finally {
        loading.value = false
    }



}

onMounted(() => {
    getData()
})
</script>