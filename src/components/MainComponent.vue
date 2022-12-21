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

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import SideBar from './SideBar.vue'
import DrawArea from './DrawArea.vue'
import { api } from '../api/api'

type Title = {
  text: string
  id: string
  isEdit: boolean
}

type Image = {
  url: string
  id: string
  isEdit: boolean
  coordinates: { X: number; Y: number }
}

const imagesListForCanvas = ref<Image[]>([]) // images on canvas
const titleList = ref<Title[]>([])
const imagesList = ref<string[]>([]) // images in sidebar

const getTitles = (titles: Title[]) => {
  titleList.value = titles
}

const getUpdatedTitleList = (newTitleList: Title[]) => {
  titleList.value = newTitleList
}

const getUpdatedImageList = (newImageList: Image[]) => {
  imagesListForCanvas.value = newImageList
}

const getImages = (images: Image[]) => {
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
