<template>
  <div class="row h-100 w-100 m-0">
    <SideBar @titles="getTitles" :titleList="titleList" />
    <CanvasComponent :titleList="titleList" @titlesListUpdated="getUpdatedTitleList"/>
  </div>
</template>

<script setup>
import { onMounted,ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import SideBar from './SideBar.vue'
import CanvasComponent from './CanvasComponent.vue'



const titleList = ref([])

const getTitles = (titles) => {
  titleList.value = titles
}

const getUpdatedTitleList = (newTitleList) => {
  titleList.value = newTitleList
}

onMounted(async () => {
  try {
    await fetch('http://localhost:8000/images').then(data => data.json()).then(res => console.log(res))
  } catch(e) {
    console.log('error', e)
  }
})

</script>

