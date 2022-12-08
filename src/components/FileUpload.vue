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
      <button class="btn btn-info" type="button" id="upload-image">
        Upload
      </button>
    </div>
  </div>
  <!-- Upload Form here -->
</template>

<script setup>
const onFileSelected = (e) => {
  console.log(e);
};
</script>
