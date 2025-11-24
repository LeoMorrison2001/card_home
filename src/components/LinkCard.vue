<template>
  <div
    class="card-premium bg-[#121212] p-6 flex flex-col justify-between group cursor-pointer hover:bg-white hover:text-black transition-colors"
    @click="handleClick"
  >
    <div class="flex justify-between items-start">
      <div class="w-10 h-10 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-black transition-colors">
        <Globe class="w-5 h-5" />
      </div>
      <ArrowUpRight class="w-5 h-5 text-neutral-500 group-hover:text-black transition-colors" />
    </div>
    <div>
      <p class="text-xs text-neutral-500 mb-1 group-hover:text-black/60">{{ label }}</p>
      <p class="text-base font-bold">{{ url }}</p>
    </div>
  </div>
</template>

<script setup>
import { Globe, ArrowUpRight } from 'lucide-vue-next'

const props = defineProps({
  label: {
    type: String,
    default: 'Official Site'
  },
  url: {
    type: String,
    default: 'leomorrison.dev'
  },
  link: {
    type: String,
    default: 'https://example.com'
  }
})

const handleClick = () => {
  window.open(props.link, '_blank')
}
</script>
