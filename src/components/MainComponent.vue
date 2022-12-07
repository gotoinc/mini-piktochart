<template>
  <div class="row h-100 w-100 m-0">
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
          <input id="addTextInput" type="text" class="form-control" />
          <button id="addText" class="btn btn-info btn-block mt-2">
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
    <div class="canvas col-10">
      <div class="block mx-auto mt-3">
        <!-- Add images and texts to here -->
      </div>
    </div>
  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.css'

</script>

