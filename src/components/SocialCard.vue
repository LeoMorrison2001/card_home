<template>
  <div
    class="card-premium bg-[#121212] p-4 sm:p-6 flex flex-col justify-between group cursor-pointer active:scale-95 transition-all duration-200"
    :class="isPressed ? 'bg-emerald-500' : hoverBgClass"
    @click="handleClick"
    @touchstart="isPressed = true"
    @touchend="isPressed = false"
    @touchcancel="isPressed = false"
  >
    <div class="flex justify-between items-start">
      <div
        class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-colors"
        :class="isPressed ? 'bg-white text-emerald-500' : 'bg-neutral-800 text-white ' + iconHoverClass"
      >
        <component :is="icon" class="w-4 h-4 sm:w-5 sm:h-5" />
      </div>
      <Plus
        class="w-4 h-4 sm:w-5 sm:h-5 transition-colors"
        :class="isPressed ? 'text-white/80' : actionIconClass"
      />
    </div>
    <div>
      <p
        class="text-[10px] sm:text-xs mb-1 font-medium transition-colors"
        :class="isPressed ? 'text-white/80' : textClass"
      >{{ label }}</p>
      <p class="text-base sm:text-lg font-bold text-white tracking-wide">{{ name }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Plus, MessageCircle } from 'lucide-vue-next'

const isPressed = ref(false)

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
    default: 'hover:bg-emerald-500'
  },
  iconHoverClass: {
    type: String,
    default: 'group-hover:bg-white group-hover:text-emerald-500'
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
    emit('copy', props.copyText, '已复制')
  } else if (props.link) {
    window.open(props.link, '_blank')
  }
}
</script>
