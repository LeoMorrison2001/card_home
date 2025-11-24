<template>
  <div
    class="card-premium bg-[#121212] p-4 sm:p-6 flex flex-col justify-between group cursor-pointer hover:bg-white hover:text-black active:bg-neutral-300 active:scale-95 transition-all duration-200"
    @click="handleClick"
  >
    <div class="flex justify-between items-start">
      <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-neutral-700 flex items-center justify-center group-hover:border-black transition-colors">
        <Globe class="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <ArrowUpRight class="w-4 h-4 sm:w-5 sm:h-5 text-neutral-500 group-hover:text-black transition-colors" />
    </div>
    <div class="min-w-0">
      <p class="text-[10px] sm:text-xs text-neutral-500 mb-1 group-hover:text-black/60">{{ label }}</p>
      <p class="text-sm sm:text-base font-bold truncate" :title="url">{{ url }}</p>
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
