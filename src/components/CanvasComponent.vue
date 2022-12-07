<template>
   <div class="canvas col-10 relative">
      <div class="block mx-auto mt-3">
        <!-- Add images and texts to here -->
        <div v-for="title in props.titleList" :key="title.id" class="overflow-hidden max-w-[800px] inline-block text-[30px]" v-drag>{{title.text}}</div>

      </div>
    </div>
</template>

<script setup>

import { defineProps } from 'vue'
require("v-drag");

const props = defineProps({
    titleList: Array
})

</script>

<style scoped>

</style>