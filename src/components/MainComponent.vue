<template>
  <div class="h-100 w-100">
    <div class="row h-100 w-100 m-0">
      <div class="sidepane h-100 bg-dark text-white col-2">
        <div class="form mt-5">
          <h3>Form</h3>
          <hr />
          <div class="input-group">
            <div class="custom-file">
              <input
                id="upload-image-input"
                class="custom-file-input"
                name="upload"
                type="file"
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
        </div>
        <div class="assets w-100 mt-5">
          <h3>Assets</h3>
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
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(async () => {
  try {
    await fetch('http://localhost:8000/images').then(res => console.log(res))
  } catch(e) {
    console.log('error', e)
  }
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
}

.editor {
  height: 100vh;
  width: 100vw;
}

#assetText {
  font-size: 24px;
}

.assets .text,
.assets .image {
  margin: 10px 0;
}

.assets .image ul li {
  width: 50px;
  height: 50px;
  margin-right: 5px;
  float: left;
  overflow: hidden;
}

.assets .image ul li img {
  width: 100%;
  height: 100%;
}

.canvas .block {
  position: relative;
  width: 800px;
  height: 800px;
  border: 1px solid;
  box-shadow: 0px 0px 30px -15px var(--gray-dark);
}

.item {
  border: 1px solid transparent;
  position: absolute;
}

.item.selected {
  border-color: var(--cyan);
}
</style>
