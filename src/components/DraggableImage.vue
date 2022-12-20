<template>
  <div
    @v-drag-end="editImage(image.id, $event)"
    :class="{
      'outline-dashed outline-2 p-[10px]': image.isEdit,
    }"
    class="text-[30px] inline-block min-w-[200px] relative text-center"
    v-drag
  >
    <img :src="image.url" alt="" />
    <span
      @click="$emit('deleteImage', image.id)"
      class="absolute top-[-20px] right-[-20px] bg-black py-[5px] px-[18px] rounded-[50%] text-white cursor-pointer"
      v-show="image.isEdit"
      >X</span
    >
    <span>{{ image.coordinates }}</span>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

import { useCoordinate } from '../composable/coordinates.js'
defineProps({
  image: {
    type: Object,
    required: true,
  },
  imagesListForCanvas: {
    type: Array,
    required: true,
  },
})

const coordinates = ref(null)

const detectMoving = (event) => {
  coordinates.value = useCoordinate(event)
}

const emit = defineEmits({
  editImage: null,
})

const editImage = (imageID, event) => {
  detectMoving(event)
  emit('editImage', imageID, coordinates)
}
</script>

<style lang="scss" scoped></style>
