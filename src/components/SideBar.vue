<template>
  <div class="sidepane h-100 bg-dark text-white col-2">
    <div class="form mt-5">
      <h3 class="text-[28px] mb-3">Form</h3>
      <hr />
      <FileUpload />
    </div>
    <div class="assets w-100 mt-5 text-[24px]">
      <h3 class="mb-[10px]">Assets</h3>
      <hr />
      <div class="text">
        <h4>Text</h4>
        <input id="addTextInput" type="text" class="form-control" />
        <button id="addText" class="btn btn-info btn-block mt-2">
          Add Text
        </button>
      </div>
      <div class="image">
        <h4>Images</h4>
        <ul class="list-unstyled">
          <!-- List of images here -->
          <li v-for="imgUrl in parsedUrls" :key="imgUrl">
            <img :src="imgUrl"> alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue"

import FileUpload from "./FileUpload.vue";

const props = defineProps({
  images: Array,
})

const parsedUrls = computed(() => {
  const newUrls = props.images.map((imgUrl) => {
    const imgUrlNew = imgUrl.split("assets/").pop()

    return require(`../assets/${imgUrlNew}`)
  })

  return newUrls
})
</script>

<style lang="scss" scoped></style>
