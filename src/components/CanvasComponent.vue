<template>
   <div class="canvas col-10 relative">
      <div class="block mx-auto mt-3 overflow-hidden ">
        <!-- Add images and texts to here -->
        <DraggableTitle v-for="title in props.titleList" :key="title.id" :title="title" :editTitle="editTitle" :deleteTitle="deleteTitle" :titleList="props.titleList" />
      </div>
    </div>
</template>

<script setup>
import { defineProps,defineEmits,ref,watch } from 'vue'
import DraggableTitle from './DraggableTitle.vue'

const props = defineProps({
    titleList: {
      type: Array,
      required: true,
    } 
})

const titlesListUpdated = ref([])


const emit = defineEmits(['titlesListUpdated', 'newTitlesLength'])

const editTitle = (id) => {
  const index = titlesListUpdated.value.findIndex(item => item.id === id);
  titlesListUpdated.value[index].isEdit = !titlesListUpdated.value[index].isEdit
}

const deleteTitle = (id) => {
  titlesListUpdated.value = titlesListUpdated.value.filter(title => title.id !== id)

  emit('titlesListUpdated',titlesListUpdated.value)
}

watch(() => props.titleList, (newList) => {
  titlesListUpdated.value = [...newList];
});
</script>

<style scoped>

</style>