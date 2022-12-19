<template>
  <div
    @dblclick="$emit('editImage', image.id)"
    :class="{ 'outline-dashed outline-2 p-[10px]': image.isEdit }"
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
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
// TODO use import statement https://vuejs.org/guide/reusability/custom-directives.html#introduction

require('v-drag')

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
</script>

<style lang="scss" scoped></style>
