<template>
  <div
    class="card-premium p-0 relative group cursor-pointer min-h-[160px] overflow-hidden"
    :class="bgColor"
    @click="handleClick"
  >
    <div class="absolute inset-0 flex flex-col items-center justify-center text-white transition-transform duration-500 group-hover:scale-105">
      <component :is="icon" class="w-10 h-10 mb-3" />
      <span class="text-sm font-bold uppercase tracking-widest">{{ label }}</span>
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
