<template>
  <div class="card-premium bg-[#121212] p-6 flex flex-col justify-center">
    <div class="flex items-center justify-between mb-6">
      <span class="text-xs font-bold text-neutral-500 uppercase tracking-wider">{{ title }}</span>
      <BarChart2 class="w-4 h-4 text-neutral-500" />
    </div>
    <div class="space-y-4">
      <div v-for="(skill, index) in skills" :key="index">
        <div class="flex justify-between text-xs font-bold text-white mb-2">
          <span>{{ skill.name }}</span>
          <span class="text-brand-blue">{{ skill.level }}</span>
        </div>
        <div class="h-1 w-full bg-neutral-800 rounded-full">
          <div
            class="h-full rounded-full transition-all duration-700"
            :class="skill.color || 'bg-brand-blue'"
            :style="{ width: skill.percent + '%' }"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { BarChart2 } from 'lucide-vue-next'

defineProps({
  title: {
    type: String,
    default: 'Expertise'
  },
  skills: {
    type: Array,
    default: () => [
      { name: 'Strategy', level: 'High', percent: 95, color: 'bg-brand-blue' },
      { name: 'UI/UX Design', level: 'Expert', percent: 90, color: 'bg-emerald-500' },
      { name: 'Leadership', level: 'Native', percent: 85, color: 'bg-neutral-500' }
    ]
  }
})
</script>
