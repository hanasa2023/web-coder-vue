<script setup lang="ts">
import ISideBar from '@/components/ISideBar.vue'
import Xterm from '@/components/Xterm.vue'
import { RouterView } from 'vue-router'
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
  <div class="h-screen">
    <Menubar :model="items"></Menubar>
    <div class="flex h-[calc(100vh-102px)]">
      <ISideBar></ISideBar>
      <div class="flex flex-col items-end h-full w-full">
        <RouterView />
        <Xterm />
      </div>
    </div>
  </div>
</template>
