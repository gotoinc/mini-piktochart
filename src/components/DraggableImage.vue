<template>
  <div
    @dblclick="props.editImage(props.image.id)"
    :class="{ 'outline-dashed outline-2 p-[10px]': props.image.isEdit }"
    class="text-[30px] inline-block min-w-[200px] relative text-center"
    v-drag
  >
    <img :src="props.image.url" alt="" />
    <span
      @click="props.deleteImage(props.image.id)"
      class="absolute top-[-20px] right-[-20px] bg-black py-[5px] px-[18px] rounded-[50%] text-white cursor-pointer"
      v-show="props.image.isEdit"
      >X</span
    >
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

require('v-drag')

const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
  imagesListForCanvas: {
    type: Array,
    required: true,
  },
  editImage: {
    type: Function,
    required: true,
  },
  deleteImage: {
    type: Function,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
