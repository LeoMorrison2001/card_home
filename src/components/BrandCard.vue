<template>
  <div
    class="card-premium p-0 relative group cursor-pointer min-h-[160px] overflow-hidden transition-all duration-200 hover:brightness-110 active:scale-95 active:brightness-90"
    :class="bgColor"
    @click="handleClick"
  >
    <div class="absolute inset-0 flex flex-col items-center justify-center text-white transition-transform duration-500 group-hover:scale-105">
      <component :is="icon" class="w-8 h-8 sm:w-10 sm:h-10 mb-2 sm:mb-3" />
      <span class="text-xs sm:text-sm font-bold uppercase tracking-widest">{{ label }}</span>
    </div>
  </div>
</template>

<script setup>
import { Dribbble } from 'lucide-vue-next'

const props = defineProps({
  icon: {
    type: Object,
    default: () => Dribbble
  },
  label: {
    type: String,
    default: 'Portfolio'
  },
  bgColor: {
    type: String,
    default: 'bg-[#ea4c89]'
  },
  link: {
    type: String,
    default: 'https://dribbble.com'
  }
})

const handleClick = () => {
  if (props.link) {
    window.open(props.link, '_blank')
  }
}
</script>
