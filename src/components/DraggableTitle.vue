<template>
  <div
    @dblclick="$emit('editTitle', title.id)"
    :class="{
      'outline-dashed outline-2': title.isEdit,
    }"
    class="absolute z-10 top-[20px] text-[30px] inline-block m-auto text-center"
    v-drag
  >
    <p class="max-w-[400px] m-auto text-center">
      {{ title.text }}
    </p>
    <span
      @click="$emit('deleteTitle', title.id)"
      class="absolute top-[-15px] right-[-20px] bg-black py-[2px] px-[10px] rounded-[50%] text-[20px] text-white cursor-pointer"
      v-show="title.isEdit"
      >X</span
    >
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

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
