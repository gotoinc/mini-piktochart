<template>
  <div class="row h-100 w-100 m-0">
    <SideBar
      @update:imagesList="getImages"
      @update:titles="getTitles"
      @fetch-image-list="getUploadedImages"
      :images="imagesList"
      :titleList="titleList"
      :imagesListForCanvas="imagesListForCanvas"
    />
    <DrawArea
      @titlesListUpdated="getUpdatedTitleList"
      @imagesListUpdated="getUpdatedImageList"
      @clearCanvas="clearCanvas"
      :imagesListForCanvas="imagesListForCanvas"
      :titleList="titleList"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import SideBar from './SideBar.vue'
import DrawArea from './DrawArea.vue'
import { api } from '../api/api'

const imagesListForCanvas = ref([]) // images on canvas
const titleList = ref([])
const imagesList = ref([]) // images in sidebar
const getTitles = (titles) => {
  titleList.value = titles
}

const getUpdatedTitleList = (newTitleList) => {
  titleList.value = newTitleList
}

const getUpdatedImageList = (newImageList) => {
  imagesListForCanvas.value = newImageList
}

const getImages = (images) => {
  imagesListForCanvas.value = images
}

const getUploadedImages = async () => {
  try {
    const { data } = await api.images.getUploadedImages()
    imagesList.value = data
  } catch (e) {
    console.log('error', e)
  }
}

const clearCanvas = () => {
  imagesListForCanvas.value = []
  titleList.value = []
}

onMounted(() => {
  if (localStorage.getItem('titleList')) {
    titleList.value = JSON.parse(localStorage.getItem('titleList'))
  }
  if (localStorage.getItem('imagesList')) {
    imagesListForCanvas.value = JSON.parse(localStorage.getItem('imagesList'))
  }
  getUploadedImages()
})
</script>
