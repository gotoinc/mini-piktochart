<template>
  <div class="row h-100 w-100 m-0">
    <SideBar
      @imagesList="getImages"
      :images="imagesList"
      @titles="getTitles"
      :titleList="titleList"
      :imagesListForCanvas="imagesListForCanvas"
      @updatedImages="getUpdatedImages"
      @loadImage="getLoadedImage"
    />
    <DrawArea
      :imagesListForCanvas="imagesListForCanvas"
      :titleList="titleList"
      @titlesListUpdated="getUpdatedTitleList"
      @imagesListUpdated="getUpdatedImageList"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import SideBar from './SideBar.vue'
import DrawArea from './DrawArea.vue'

import { devUrl } from '../variables/app'

const imagesListForCanvas = ref([])
const titleList = ref([])
const imagesList = ref([])
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

const getUpdatedImages = (updatedImages) => {
  imagesList.value = updatedImages
}

const getLoadedImage = (loadedImage) => {
  imagesList.value.push(loadedImage)
}

const getUploadedImages = () => {
  try {
    fetch(`${devUrl}/images`)
      .then((data) => data.json())
      .then((res) => (imagesList.value = res))
  } catch (e) {
    console.log('error', e)
  }
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
