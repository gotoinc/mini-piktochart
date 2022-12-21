<template>
  <div class="canvas col-10 relative">
    <div
      class="relative w-[800px] h-[800px] border-[2px] shadow-box-shadow-block mx-auto mt-3 overflow-hidden"
    >
      <DraggableTitle
        v-for="title in props.titleList"
        :key="title.id"
        @click.stop
        @editTitle="editTitle"
        @deleteTitle="deleteTitle"
        :title="title"
        :titleList="props.titleList"
      />
      <DraggableImage
        v-for="image in props.imagesListForCanvas"
        :key="image.id"
        @click.stop
        @editImage="editImage"
        @deleteImage="deleteImage"
        :image="image"
        :imagesListForCanvas="props.imagesListForCanvas"
      />
      <ClearCanvasBtnVue @clearCanvas="clearCanvas" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import DraggableTitle from './DraggableTitle.vue'
import DraggableImage from './DraggableImage.vue'
import ClearCanvasBtnVue from './ClearCanvasBtn.vue'

type Title = { text: string; id: string; isEdit: boolean }
type Image = {
  url: string
  id: string
  isEdit: boolean
  coordinates: { X: number; Y: number }
}

interface Props {
  titleList: Title[]
  imagesListForCanvas: Image[]
}

const props = defineProps<Props>()

const titlesListUpdated = ref<Title[]>([])
const imagesListUpdated = ref<Image[]>([])

const emit = defineEmits<{
  (e: 'imagesListUpdated', imagesListUpdated: Image[]): void
  (e: 'titlesListUpdated', titlesListUpdated: Title[]): void
  (e: 'clear-canvas'): void
}>()

const editTitle = (id: string) => {
  const index = titlesListUpdated.value.findIndex((item) => item.id === id)
  titlesListUpdated.value[index].isEdit = !titlesListUpdated.value[index].isEdit
}

const editImage = (id: string, coordinates) => {
  const index = imagesListUpdated.value.findIndex((item) => item.id === id)
  imagesListUpdated.value[index].isEdit = !imagesListUpdated.value[index].isEdit

  imagesListUpdated.value[index].coordinates = coordinates.value
  localStorage.setItem('imagesList', JSON.stringify(imagesListUpdated.value))
}

const deleteTitle = (id: string) => {
  titlesListUpdated.value = titlesListUpdated.value.filter(
    (title) => title.id !== id
  )

  emit('titlesListUpdated', titlesListUpdated.value)
  localStorage.setItem('titleList', JSON.stringify(titlesListUpdated.value))
}

const deleteImage = (id: string) => {
  imagesListUpdated.value = imagesListUpdated.value.filter(
    (image) => image.id !== id
  )

  emit('imagesListUpdated', imagesListUpdated.value)
  localStorage.setItem('imagesList', JSON.stringify(imagesListUpdated.value))
}

const clearCanvas = () => {
  emit('clear-canvas')
}

watch(
  () => props.titleList,
  (newList) => {
    titlesListUpdated.value = [...newList]
  }
)

watch(
  () => props.imagesListForCanvas,
  (newList) => {
    imagesListUpdated.value = [...newList]
  }
)

const stopEditOutside = () => {
  titlesListUpdated.value.map((title) => (title.isEdit = false))
  imagesListUpdated.value.map((image) => (image.isEdit = false))

  localStorage.setItem('imagesList', JSON.stringify(imagesListUpdated.value))
  localStorage.setItem('titleList', JSON.stringify(titlesListUpdated.value))
}

onMounted(() => {
  document.addEventListener('click', stopEditOutside)
})
onUnmounted(() => {
  document.removeEventListener('click', stopEditOutside)
})
</script>
