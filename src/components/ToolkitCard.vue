<template>
  <div class="card-premium p-6 flex flex-col justify-center">
    <p class="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">{{ title }}</p>
    <div class="flex flex-wrap gap-x-2 gap-y-2">
      <span
        v-for="(tool, index) in tools"
        :key="index"
        class="px-4 py-2 bg-neutral-800 border border-neutral-700 rounded text-sm font-semibold text-neutral-300 hover:bg-white hover:text-black hover:border-white transition-colors cursor-default"
      >
        {{ tool }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Toolkit'
  },
  tools: {
    type: Array,
    default: () => ['Figma', 'React.js', 'TypeScript', 'Next.js', 'Vercel']
  }
})
</script>
