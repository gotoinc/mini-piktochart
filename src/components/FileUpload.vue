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

<script setup lang="ts">
import { ref } from 'vue'
import { api } from '../api/api'
import { useToast, PluginOptions, POSITION } from 'vue-toastification'

const toast = useToast()

const loadedFile = ref<File>(null)

const emit = defineEmits<{
  (e: 'image-uploaded'): void
}>()

const fileSelect = (event: Event) => {
  loadedFile.value = (event.target as HTMLInputElement).files[0]
}

const uploadFile = async () => {
  const formData = new FormData()

  formData.append('upload', loadedFile.value, loadedFile.value.name)

  try {
    await api.uploads.uploadImages(formData)

    emit('image-uploaded')
  } catch (error) {
    toast.error('Bad format! Please, upload png or jpg', toastOptions)
  }
}

const toastOptions: PluginOptions = {
  position: POSITION.TOP_CENTER,
  timeout: 2000,
  pauseOnHover: false,
  closeOnClick: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false,
}
</script>
