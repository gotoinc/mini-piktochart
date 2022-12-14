<template>
  <div class="sidepane h-100 bg-dark text-white col-2">
    <div class="form mt-5">
      <h3 class="text-[28px] mb-3">Form</h3>
      <hr />
      <FileUpload @image-uploaded="fetchImageList" />
    </div>
    <div class="assets w-100 mt-5 text-[24px]">
      <div class="text">
        <h4>Text</h4>
        <input
          v-model="title"
          id="addTextInput"
          type="text"
          class="form-control"
        />
        <button
          @click="addTitle"
          id="addText"
          class="btn btn-info btn-block mt-2"
        >
          Add Text
        </button>
      </div>
      <div class="image">
        <h4>Images</h4>
        <ul class="list-unstyled">
          <li
            class="w-[50px] h-[50px] ml-[5px] float-left mt-[10px]"
            v-for="imgUrl in images"
            @click="addImageOnCanvas(imgUrl)"
            :key="imgUrl"
          >
            <img class="w-100 h-100 cursor-pointer" :src="imgUrl" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, ref, defineProps } from 'vue'
import { v4 as uuidv4 } from 'uuid'

import FileUpload from './FileUpload.vue'

const title = ref('')
const titleList = ref<Title[]>([])
const imagesList = ref<Image[]>([])

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

interface Props {
  titleList: Title[]
  images: string[]
  imagesListForCanvas: Image[]
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:titles', titleList: Title[]): void
  (e: 'update:imagesList', imagesList: Image[]): void
  (e: 'fetch-image-list'): void
}>()

const addTitle = () => {
  const newTitle = {
    text: title.value,
    id: uuidv4(),
    isEdit: false,
  }
  if (title.value.trim()) {
    titleList.value = [...props.titleList, newTitle]
    title.value = ''
    emit('update:titles', titleList.value)
    localStorage.setItem('titleList', JSON.stringify(titleList.value))
  }
}

const fetchImageList = () => {
  emit('fetch-image-list')
}

const addImageOnCanvas = (imageURL: string) => {
  const newImage = {
    url: imageURL,
    id: uuidv4(),
    isEdit: false,
    coordinates: { X: null, Y: null },
  }

  imagesList.value = [newImage, ...props.imagesListForCanvas]
  emit('update:imagesList', imagesList.value)

  localStorage.setItem('imagesList', JSON.stringify(imagesList.value))
}
</script>
