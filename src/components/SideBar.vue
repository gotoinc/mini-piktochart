<template>
    <div class="sidepane h-100 bg-dark text-white col-2">
      <div class="form mt-5">
        <h3 class="text-[28px] mb-3">Form</h3>
        <hr />
        <div class="input-group">
          <div class="custom-file">
            <input id="upload-image-input" class="custom-file-input" name="upload" type="file" />
            <label class="custom-file-label" for="upload-image-input">Choose Image</label>
          </div>
          <div class="input-group-append">
            <button class="btn btn-info" type="button" id="upload-image">
              Upload
            </button>
          </div>
        </div>
        <!-- Upload Form here -->
      </div>
      <div class="assets w-100 mt-5 text-[24px]">
        <h3 class="mb-[10px]">Assets</h3>
        <hr />
        <div class="text">
          <h4>Text</h4>
          <input v-model="title" id="addTextInput" type="text" class="form-control" />
          <button @click="addTitle" id="addText" class="btn btn-info btn-block mt-2">
            Add Text
          </button>
        </div>
        <div class="image">
          <h4>Images</h4>
          <ul class="list-unstyled">
            <!-- List of images here -->
          </ul>
        </div>
      </div>
    </div>
</template>

<script setup>
import { defineEmits,ref } from 'vue'
const title = ref('')
const titleList = ref([])

const emit = defineEmits(['titles'])
const addTitle = () => {
  const newTitle = {
    text: title.value,
    id: titleList.value.length
  }
  if(title.value.trim()) {
    titleList.value.push(newTitle)
    title.value = ''

    emit('titles',titleList.value)
  } 
}

</script>

<style>
#title {
    position: absolute;
    top: 0;
    left: 0;
}

</style>