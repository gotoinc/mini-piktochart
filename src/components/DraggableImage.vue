<template>
  <div
    @dblclick="editImage(image.id, $event)"
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
    <span>{{ image.isEdit ? image.coordinates : '' }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

import { useCoordinate } from '../composable/coordinates'
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

const detectMoving = (event: Event) => {
  coordinates.value = useCoordinate(event)
}

const emit = defineEmits({
  editImage: null,
})

const editImage = (imageID: number, event: Event) => {
  detectMoving(event)
  emit('editImage', imageID, coordinates)
}
</script>

<style lang="scss" scoped></style>
