<template>
  <div
    class="card-premium bg-[#121212] p-5 sm:p-6 lg:p-10 flex flex-col justify-between group"
    @touchstart="isPressed = true"
    @touchend="isPressed = false"
    @touchcancel="isPressed = false"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="flex justify-between items-start">
      <div>
        <div class="flex items-center gap-2 mb-2 sm:mb-3">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="text-neutral-400 text-[10px] sm:text-xs font-bold tracking-widest uppercase">{{ status }}</span>
        </div>
        <h2 class="text-neutral-500 font-bold text-xs sm:text-sm tracking-wide uppercase">{{ title }}</h2>
      </div>
      <!-- 头像 -->
      <div
        class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden bg-brand-blue transition-all duration-500 shadow-xl"
        :class="isPressed || isHovered ? 'grayscale-0' : 'grayscale'"
      >
        <img :src="avatar" alt="Avatar" class="w-full h-full object-cover">
      </div>
    </div>

    <div class="my-auto py-4 sm:py-6">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white">
        {{ greeting }}
        <span
          class="transition-colors duration-300 cursor-default"
          :class="isPressed || isHovered ? 'text-emerald-400' : ''"
        >{{ name }}</span><br>
        <span class="text-neutral-500 block mt-2 sm:mt-3 lg:mt-4 text-xl sm:text-2xl lg:text-4xl">{{ tagline }}</span>
      </h1>
    </div>

    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-auto">
      <!-- 主按钮 -->
      <button
        @click="handleContact"
        class="bg-brand-blue text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg text-sm sm:text-base font-bold hover:bg-blue-600 active:bg-blue-700 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
      >
        <span>{{ contactText }}</span>
        <ArrowRight class="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform" />
      </button>
      <!-- 次级按钮 -->
      <button class="px-6 py-3 sm:px-8 sm:py-4 rounded-lg border border-neutral-700 text-white text-sm sm:text-base font-bold hover:bg-white hover:text-black active:bg-neutral-300 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2">
        <Download class="w-4 h-4" />
        <span>{{ resumeText }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowRight, Download } from 'lucide-vue-next'

const isPressed = ref(false)
const isHovered = ref(false)

const props = defineProps({
  status: {
    type: String,
    default: 'Available for new challenges'
  },
  title: {
    type: String,
    default: 'Product Strategist & Designer'
  },
  avatar: {
    type: String,
    default: 'https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=transparent'
  },
  greeting: {
    type: String,
    default: '你好，我是'
  },
  name: {
    type: String,
    default: 'Leo'
  },
  tagline: {
    type: String,
    default: '用策略驱动设计。'
  },
  contactText: {
    type: String,
    default: '建立联系'
  },
  resumeText: {
    type: String,
    default: '简历'
  },
  email: {
    type: String,
    default: 'hi@leomorrison.dev'
  }
})

const emit = defineEmits(['navigate'])

const handleContact = () => {
  emit('navigate', 'contact')
}
</script>
