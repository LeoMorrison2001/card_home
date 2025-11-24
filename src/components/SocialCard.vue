<template>
  <div
    class="card-premium bg-[#121212] p-6 flex flex-col justify-between group cursor-pointer transition-colors duration-300"
    :class="hoverBgClass"
    @click="handleClick"
  >
    <div class="flex justify-between items-start">
      <div
        class="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-white transition-colors"
        :class="iconHoverClass"
      >
        <component :is="icon" class="w-5 h-5" />
      </div>
      <Plus class="w-5 h-5 transition-colors" :class="actionIconClass" />
    </div>
    <div>
    <p class="text-xs mb-1 font-medium" :class="textClass">{{ label }}</p>
      <p class="text-lg font-bold text-white tracking-wide">{{ name }}</p>
    </div>
  </div>
</template>

<script setup>
import { Plus, MessageCircle } from 'lucide-vue-next'

const props = defineProps({
  icon: {
    type: Object,
    default: () => MessageCircle
  },
  label: {
    type: String,
    default: 'Connect via'
  },
  name: {
    type: String,
    default: 'WeChat'
  },
  hoverBgClass: {
    type: String,
    default: 'hover:bg-[#07c160]'
  },
  iconHoverClass: {
    type: String,
    default: 'group-hover:bg-white group-hover:text-[#07c160]'
  },
  textClass: {
    type: String,
    default: 'text-neutral-500 group-hover:text-white/80'
  },
  actionIconClass: {
    type: String,
    default: 'text-neutral-600 group-hover:text-white/80'
  },
  copyText: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['copy'])

const handleClick = () => {
  if (props.copyText) {
    emit('copy', props.copyText, `${props.name} ID Copied`)
  } else if (props.link) {
    window.open(props.link, '_blank')
  }
}
</script>
