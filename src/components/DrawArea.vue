<template>
   <div class="canvas col-10 relative">
      <div class="block mx-auto mt-3 overflow-hidden ">
        <!-- Add images and texts to here -->
        <DraggableTitle ref="titleRef" @click.stop v-for="title in props.titleList" :key="title.id" :title="title" :editTitle="editTitle" :deleteTitle="deleteTitle" :titleList="props.titleList" />
      </div>
    </div>
</template>

<script setup>
import { defineProps,defineEmits,ref,watch,onMounted,onUnmounted } from 'vue'
import DraggableTitle from './DraggableTitle.vue'

const props = defineProps({
    titleList: {
      type: Array,
      required: true,
    } 
})

const titlesListUpdated = ref([])

const titleRef = ref()


const emit = defineEmits(['titlesListUpdated', 'newTitlesLength'])

const editTitle = (id) => {
  const index = titlesListUpdated.value.findIndex(item => item.id === id);
  titlesListUpdated.value[index].isEdit = !titlesListUpdated.value[index].isEdit
}

const deleteTitle = (id) => {
  titlesListUpdated.value = titlesListUpdated.value.filter(title => title.id !== id)

  emit('titlesListUpdated',titlesListUpdated.value)


  localStorage.setItem('titleList', JSON.stringify(titlesListUpdated.value))
}

watch(() => props.titleList, (newList) => {
  titlesListUpdated.value = [...newList];
});


const stopEditOutside = () => {
  titlesListUpdated.value.map(title => title.isEdit = false)
};

onMounted(() => {
  document.addEventListener("click", stopEditOutside);
});
onUnmounted(() => {
  document.removeEventListener("click", stopEditOutside);
});

</script>

<style scoped>

</style>