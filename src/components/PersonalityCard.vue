<template>
  <div
    class="card-premium col-span-1 row-span-2 p-4 sm:p-6 lg:p-8 flex flex-col justify-between group relative overflow-hidden bg-neutral-900 transition-transform duration-200"
    :class="{ 'scale-98': isPressed }"
    @touchstart="isPressed = true"
    @touchend="isPressed = false"
    @touchcancel="isPressed = false"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- 背景装饰 -->
    <div
      class="absolute top-0 right-0 p-3 sm:p-4 lg:p-6 transition-all duration-500"
      :class="isPressed || isHovered ? 'opacity-100 text-[#FFD700] rotate-12' : 'opacity-10 text-white'"
    >
      <component :is="icon" class="w-10 h-10 sm:w-12 sm:h-12 lg:w-24 lg:h-24" />
    </div>

    <div class="relative z-10">
      <div class="flex items-center gap-2 mb-3 sm:mb-4">
        <span class="px-2 py-1 rounded bg-white/10 text-[10px] sm:text-xs font-bold text-white/80 uppercase tracking-wider">MBTI</span>
      </div>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-1 sm:mb-2">{{ type }}</h2>
      <p class="text-brand-blue font-bold tracking-wide uppercase text-xs sm:text-sm">{{ label }}</p>
    </div>

    <div class="relative z-10 mt-auto">
      <p class="text-neutral-400 text-xs sm:text-sm leading-relaxed font-medium">
        {{ description }}
      </p>

      <div class="mt-4 sm:mt-6 flex flex-wrap gap-2">
        <span v-for="tag in tags" :key="tag" class="text-[10px] sm:text-xs font-bold text-neutral-500 border border-neutral-800 px-2 py-1 rounded">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Crown } from 'lucide-vue-next'

const isPressed = ref(false)
const isHovered = ref(false)

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

<style scoped>
.scale-98 {
  transform: scale(0.98);
}
</style>
