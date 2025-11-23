<template>
  <div class="card-premium col-span-1 row-span-2 p-8 flex flex-col justify-between group relative overflow-hidden bg-neutral-900">
    <!-- 背景装饰 -->
    <div class="absolute top-0 right-0 p-4 lg:p-6 opacity-10 group-hover:opacity-100 transition-all duration-500 text-white group-hover:text-[#FFD700] group-hover:rotate-12">
      <component :is="icon" class="w-12 h-12 lg:w-24 lg:h-24" />
    </div>
    
    <div class="relative z-10">
      <div class="flex items-center gap-2 mb-4">
        <span class="px-2 py-1 rounded bg-white/10 text-xs font-bold text-white/80 uppercase tracking-wider">MBTI</span>
      </div>
      <h2 class="text-5xl font-black text-white tracking-tighter mb-2">{{ type }}</h2>
      <p class="text-brand-blue font-bold tracking-wide uppercase text-sm">{{ label }}</p>
    </div>

    <div class="relative z-10 mt-auto">
      <p class="text-neutral-400 text-sm leading-relaxed font-medium">
        {{ description }}
      </p>
      
      <div class="mt-6 flex gap-2">
        <span v-for="tag in tags" :key="tag" class="text-xs font-bold text-neutral-500 border border-neutral-800 px-2 py-1 rounded">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Crown } from 'lucide-vue-next'

defineProps({
  type: {
    type: String,
    default: 'ENTJ'
  },
  label: {
    type: String,
    default: 'The Commander'
  },
  description: {
    type: String,
    default: 'Bold, imaginative and strong-willed leaders, always finding a way - or making one.'
  },
  tags: {
    type: Array,
    default: () => ['Strategic', 'Rational', 'Driven']
  },
  icon: {
    type: Object,
    default: () => Crown
  }
})
</script>
