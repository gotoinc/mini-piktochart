<template>
  <div class="row h-100 w-100 m-0">
    <SideBar :images="imagesList" />
    <DrawArea />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import SideBar from './SideBar.vue'
import DrawArea from './DrawArea.vue'

import { devUrl } from '../variables/app'

const imagesList = ref([])

onMounted(async () => {
  try {
    await fetch(`${devUrl}/images`)
      .then((data) => data.json())
      .then((res) => (imagesList.value = res))
  } catch (e) {
    console.log('error', e)
  }
})
</script>
