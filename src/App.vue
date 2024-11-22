<script setup lang="ts">
import ISideBar from '@/components/ISideBar.vue'
import Xterm from '@/components/Xterm.vue'
import { ref } from 'vue'
import { RouterView } from 'vue-router'

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
    <Menubar id="menubar" :model="items"></Menubar>
    <div :class="`flex h-[calc(100vh-50px)]`">
      <ISideBar></ISideBar>
      <div class="flex flex-col items-end h-full w-full">
        <RouterView />
        <Xterm />
      </div>
    </div>
  </div>
</template>
