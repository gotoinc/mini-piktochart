<template>
  <div
    @dblclick="$emit('editTitle', title.id)"
    :class="{ 'outline-dashed outline-2 p-[10px]': title.isEdit }"
    class="absolute z-10 top-[20px] text-[30px] max-w-[500px] m-auto text-center"
    v-drag
  >
    <p class="max-w-[400px] m-auto text-center">
      {{ title.text }}
    </p>
    <span
      @click="$emit('deleteTitle', title.id)"
      class="absolute top-[-20px] right-[-20px] bg-black py-[5px] px-[18px] rounded-[50%] text-white cursor-pointer"
      v-show="title.isEdit"
      >X</span
    >
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

require('v-drag')

defineProps({
  title: {
    type: Object,
    required: true,
  },
  titleList: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
