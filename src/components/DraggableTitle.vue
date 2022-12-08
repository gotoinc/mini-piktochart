<template>
  <div
    @dblclick="props.editTitle(props.title.id)"
    :class="{ 'outline-dashed outline-2 p-[10px]': props.title.isEdit }"
    class="text-[30px] inline-block min-w-[200px] relative text-center"
    v-drag
  >
    {{ props.title.text
    }}<span
      @click="props.deleteTitle(props.title.id)"
      class="absolute top-[-20px] right-[-20px] bg-black py-[5px] px-[18px] rounded-[50%] text-white cursor-pointer"
      v-show="props.title.isEdit"
      >X</span
    >
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

require('v-drag')

const props = defineProps({
  title: {
    type: Object,
    required: true,
  },
  titleList: {
    type: Array,
    required: true,
  },
  editTitle: {
    type: Function,
    required: true,
  },
  deleteTitle: {
    type: Function,
    required: true,
  },
})
</script>

<style lang="scss" scoped></style>
