<template>
  <div>
    <button
      @click="$emit('clear-canvas')"
      class="absolute top-0 right-0 mr-[20px] bg-black p-[5px] mt-[10px] text-white"
    >
      Clear Canvas
    </button>
  </div>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'clear-canvas'): void
}>()
</script>
