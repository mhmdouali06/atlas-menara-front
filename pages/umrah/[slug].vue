<template>
  <DetailUmrahSection1 v-if="item" :item="item" />
  <DetailUmrahSection2 v-if="item" :item="item" />
  <DetailUmrahSectionsOther />
</template>
<script lang="ts" setup>
import { useUmrahApi } from '~/components/useUmrahApi';
import type { Umrah } from '~/types/Umrah';
const loading = ref(false)
const { getUmrah } = useUmrahApi();
const slug = useRoute().params.slug

const item = ref<Umrah>()

const getData = async () => {
  try {
    if (!slug) {
      navigateTo('/umrah')
    }
    const data = await getUmrah(slug + "")
    if (data) {
      if (data) {
        item.value = data
      }
    }
  } catch (error: any) {
    console.log(error);
    if (error.response.status == 404) {
      navigateTo('/umrah')
    }

  }
  finally {
    loading.value = false
  }



}

onMounted(() => {
  getData()
})
</script>
