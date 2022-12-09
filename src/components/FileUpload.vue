<template>
  <div class="input-group">
    <div class="custom-file">
      <input
        id="upload-image-input"
        class="custom-file-input"
        name="upload"
        type="file"
        @change="onFileSelected"
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
        @click="onUpload"
      >
        Upload
      </button>
    </div>
  </div>
  <!-- Upload Form here -->
  <div class="uploaded-file">
    {{ loadedFile ? loadedFile.name : null }}
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
import { devUrl } from '../variables/app'

// const props = defineProps({
//   addImageOnCanvas: {
//     type: Function,
//     required: true,
//   },
// })
const emit = defineEmits({ loadImage: null })

// console.log(props)

const loadedFile = ref(null)
const onFileSelected = (e) => {
  loadedFile.value = e.target.files[0]
}

const onUpload = () => {
  const formData = new FormData()

  formData.append('upload', loadedFile.value, loadedFile.value.name)

  try {
    fetch(`${devUrl}/uploads`, {
      method: 'POST',
      body: formData,
    })
      .then((data) => data.json())
      .then((res) => {
        console.log('res', res)
        emit('loadImage', res.file)
      })
  } catch (e) {
    console.log('error', e)
  }
}
</script>
