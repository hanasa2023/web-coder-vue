<script setup lang="ts">
import Explorer from './Explorer.vue'
import { ref } from 'vue'

const tools = ref([
  {
    ariaLabel: 'File',
    icon: 'pi pi-file',
  },
  {
    ariaLabel: 'Search',
    icon: 'pi pi-search',
  },
])
const bottomTools = ref([
  {
    ariaLabel: 'Settings',
    icon: 'pi pi-cog',
  },
])
</script>

<template>
  <div class="flex">
    <div class="flex flex-col w-12 items-center justify-between h-full bg-pink-700">
      <div class="flex flex-col items-center">
        <Button v-for="tool in tools" :icon="tool.icon" variant="text" rounded />
      </div>
      <div class="flex flex-col items-center">
        <Button v-for="btT in bottomTools" :icon="btT.icon" variant="text" rounded />
      </div>
    </div>
    <div class="w-60 h-full bg-pink-400 relative">
      <Explorer />
      <div class="absolute inset-y-0 right-0 w-1 bg-blue-700"></div>
    </div>
  </div>
</template>
