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
        <input
          v-model="title"
          id="addTextInput"
          type="text"
          class="form-control"
        />
        <button
          @click="addTitle"
          id="addText"
          class="btn btn-info btn-block mt-2"
        >
          Add Text
        </button>
      </div>
      <div class="image">
        <h4>Images</h4>
        <ul class="list-unstyled">
          <!-- List of images here -->
          <li v-for="imgUrl in parsedUrls" :key="imgUrl">
            <img :src="imgUrl" /> alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref, defineProps, computed } from 'vue'
import { v4 as uuidv4 } from 'uuid'

import FileUpload from './FileUpload.vue'

const title = ref('')
const titleList = ref([])

const props = defineProps({
  titleList: {
    type: Array,
    required: true,
  },
  images: {
    type: Array,
  },
})

const emit = defineEmits(['titles'])
const addTitle = () => {
  const newTitle = {
    text: title.value,
    id: uuidv4(),
    isEdit: false,
  }
  if (title.value.trim()) {
    titleList.value = [...props.titleList, newTitle]
    title.value = ''
    emit('titles', titleList.value)
    localStorage.setItem('titleList', JSON.stringify(titleList.value))
  }
}

const parsedUrls = computed(() => {
  const newUrls = props.images.map((imgUrl) => {
    const imgUrlNew = imgUrl.split('assets/').pop()

    return require(`../assets/${imgUrlNew}`)
  })

  return newUrls
})
</script>
