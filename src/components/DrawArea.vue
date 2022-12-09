<template>
  <div class="canvas col-10 relative">
    <div class="block mx-auto mt-3 overflow-hidden">
      <!-- Add images and texts to here -->
      <DraggableTitle
        v-for="title in props.titleList"
        :key="title.id"
        @click.stop
        @editTitle="editTitle"
        @deleteTitle="deleteTitle"
        :title="title"
        :titleList="props.titleList"
      />
      <DraggableImage
        v-for="image in props.imagesListForCanvas"
        :key="image.id"
        @click.stop
        @editImage="editImage"
        @deleteImage="deleteImage"
        :image="image"
        :imagesListForCanvas="props.imagesListForCanvas"
      />
    </div>
  </div>
</template>

<script setup>
import {
  defineProps,
  defineEmits,
  ref,
  watch,
  onMounted,
  onUnmounted,
} from 'vue'
import DraggableTitle from './DraggableTitle.vue'
import DraggableImage from './DraggableImage.vue'
require('v-drag')
const props = defineProps({
  titleList: {
    type: Array,
    required: true,
  },
  imagesListForCanvas: {
    type: Array,
    required: true,
  },
})

const titlesListUpdated = ref([])
const imagesListUpdated = ref([])

const emit = defineEmits({ titlesListUpdated: null }, { newTitlesLength: null })

const editTitle = (id) => {
  const index = titlesListUpdated.value.findIndex((item) => item.id === id)
  titlesListUpdated.value[index].isEdit = !titlesListUpdated.value[index].isEdit
}

const editImage = (id) => {
  const index = imagesListUpdated.value.findIndex((item) => item.id === id)
  imagesListUpdated.value[index].isEdit = !imagesListUpdated.value[index].isEdit
}

const deleteTitle = (id) => {
  titlesListUpdated.value = titlesListUpdated.value.filter(
    (title) => title.id !== id
  )

  emit('titlesListUpdated', titlesListUpdated.value)
  localStorage.setItem('titleList', JSON.stringify(titlesListUpdated.value))
}

const deleteImage = (id) => {
  imagesListUpdated.value = imagesListUpdated.value.filter(
    (image) => image.id !== id
  )

  emit('imagesListUpdated', imagesListUpdated.value)
  localStorage.setItem('imagesList', JSON.stringify(imagesListUpdated.value))
}

watch(
  () => props.titleList,
  (newList) => {
    titlesListUpdated.value = [...newList]
  }
)

watch(
  () => props.imagesListForCanvas,
  (newList) => {
    imagesListUpdated.value = [...newList]
  }
)

const stopEditOutside = () => {
  titlesListUpdated.value.map((title) => (title.isEdit = false))
  imagesListUpdated.value.map((title) => (title.isEdit = false))
}

onMounted(() => {
  document.addEventListener('click', stopEditOutside)
})
onUnmounted(() => {
  document.removeEventListener('click', stopEditOutside)
})
</script>
