<template>
  <div class="input-group">
    <div class="custom-file">
      <input
        id="upload-image-input"
        class="custom-file-input"
        name="upload"
        type="file"
        @change="fileSelect"
      />
      <label class="custom-file-label" for="upload-image-input"
        >Choose Image</label
      >
    </div>
    <div class="input-group-append">
      <button
        class="btn btn-info"
        type="button"
        id="upload-image"
        @click="uploadFile"
      >
        Upload
      </button>
    </div>
  </div>
  <div class="uploaded-file">
    {{ loadedFile ? loadedFile.name : null }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { api } from '../api/api'

const loadedFile = ref(null)

const emit = defineEmits({
  'image-uploaded': null,
})

const fileSelect = (e) => {
  loadedFile.value = e.target.files[0]
}

const uploadFile = async () => {
  const formData = new FormData()

  formData.append('upload', loadedFile.value, loadedFile.value.name)

  try {
    await api.uploads.uploadImages(formData)

    emit('image-uploaded')
  } catch (e) {
    // TODO Add toast messages instead of console logs
    console.log('error', e)
  }
}
</script>
