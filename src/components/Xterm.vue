<script setup lang="ts">
import { FitAddon } from '@xterm/addon-fit'
import { Terminal } from '@xterm/xterm'
import { onMounted, ref } from 'vue'

const terminal = ref<HTMLDivElement | null>(null)
const term = new Terminal({
  rows: 12,
  fontSize: 14,
  theme: {
    background: '#181d28',
  },
})

onMounted(() => {
  term.loadAddon(new FitAddon())
  if (terminal.value) {
    term.open(terminal.value)
  }
})
</script>

<template>
  <div class="w-full">
    <div ref="terminal"></div>
  </div>
</template>
