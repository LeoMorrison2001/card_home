<template>
  <div class="card-premium bg-[#121212] p-8 lg:p-10 flex flex-col justify-between group">
    <div class="flex justify-between items-start">
      <div>
        <div class="flex items-center gap-2 mb-3">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="text-neutral-400 text-xs font-bold tracking-widest uppercase">{{ status }}</span>
        </div>
        <h2 class="text-neutral-500 font-bold text-sm tracking-wide uppercase">{{ title }}</h2>
      </div>
      <!-- 头像 -->
      <div class="w-16 h-16 lg:w-20 lg:h-20 rounded-xl overflow-hidden bg-brand-blue grayscale group-hover:grayscale-0 transition-all duration-500 shadow-xl">
        <img :src="avatar" alt="Avatar" class="w-full h-full object-cover">
      </div>
    </div>

    <div class="my-auto py-6">
      <h1 class="text-4xl lg:text-6xl font-black leading-[1.05] tracking-tight text-white">
        {{ greeting }} 
        <span class="transition-colors duration-300 group-hover:text-emerald-400 cursor-default">{{ name }}</span><br>
        <span class="text-neutral-500 block mt-4 text-2xl lg:text-4xl">{{ tagline }}</span>
      </h1>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 mt-auto">
      <!-- 主按钮 -->
      <button
        @click="handleContact"
        class="bg-brand-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 group/btn"
      >
        <span>{{ contactText }}</span>
        <ArrowRight class="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
      </button>
      <!-- 次级按钮 -->
      <button class="px-8 py-4 rounded-lg border border-neutral-700 text-white font-bold hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2">
        <Download class="w-4 h-4" />
        <span>{{ resumeText }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ArrowRight, Download } from 'lucide-vue-next'

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
