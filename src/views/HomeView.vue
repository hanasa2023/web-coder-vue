<script setup lang="ts">
import ISideBar from '@/components/ISideBar.vue'
import MonacoEditor from '@/components/MonacoEditor.vue'
import { ref } from 'vue'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
  },
  {
    label: 'Feature',
    icon: 'pi pi-star',
  },
])
</script>

<template>
  <Menubar :model="items"></Menubar>
  <div class="flex">
    <ISideBar></ISideBar>
    <main class="w-full">
      <MonacoEditor />
    </main>
  </div>
</template>
