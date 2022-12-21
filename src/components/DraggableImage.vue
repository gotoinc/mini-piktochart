<template>
  <div
    @v-drag-end="editImage(image.id, $event)"
    :class="{
      'outline-dashed outline-2': image.isEdit,
    }"
    class="text-[30px] inline-block min-w-[200px] relative text-center"
    v-drag
  >
    <img class="inline-block" :src="image.url" alt="" />
    <span
      @click="$emit('deleteImage', image.id)"
      class="absolute top-[-20px] right-[-20px] bg-black py-[5px] px-[18px] rounded-[50%] text-white cursor-pointer"
      v-show="image.isEdit"
      >X</span
    >
    <!-- <span>{{ image.isEdit ? image.coordinates : '' }}</span> -->
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

import { useCoordinate } from '../composable/coordinates'

type Image = {
  url: string
  id: string
  isEdit: boolean
  coordinates: { X: number; Y: number }
}

interface Props {
  image: Image
  imagesListForCanvas: Image[]
}

defineProps<Props>()

const coordinates = ref(null)

const detectMoving = (event: Event) => {
  coordinates.value = useCoordinate(event)
}

const emit = defineEmits<{
  (e: 'editImage', id: string, event: Event): void
  (e: 'deleteImage', id: string): void
}>()

const editImage = (imageID: string, event: Event) => {
  detectMoving(event)
  emit('editImage', imageID, coordinates)
}
</script>
