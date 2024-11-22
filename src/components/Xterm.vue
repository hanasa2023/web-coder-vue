<script setup lang="ts">
import { FitAddon } from '@xterm/addon-fit'
import { Terminal } from '@xterm/xterm'
import { onMounted, ref } from 'vue'

const terminal = ref<HTMLDivElement | null>(null)
const term = new Terminal()

onMounted(() => {
  term.loadAddon(new FitAddon())
  if (terminal.value) {
    terminal.value.style.height = '120px'
    term.open(terminal.value)
  }
})
</script>

<template>
  <div class="w-full">
    <div ref="terminal"></div>
  </div>
</template>
