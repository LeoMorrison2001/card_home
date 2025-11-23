<template>
  <div class="card-premium p-0 relative overflow-hidden group min-h-[200px]">
    <!-- 地图背景 -->
    <div class="absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-110">
      <img 
        :src="mapImage" 
        class="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500"
        alt="Map Location"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-transparent"></div>
    </div>

    <!-- 内容 -->
    <div class="relative h-full p-6 flex flex-col justify-between z-10">
      <div class="flex justify-between items-start">
        <div class="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full">
          <div class="flex items-center gap-2">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span class="text-xs font-bold text-white tracking-wider uppercase">{{ location }}</span>
          </div>
        </div>
        <MapPin class="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
      </div>

      <div>
        <p class="text-neutral-400 text-xs font-bold uppercase tracking-widest mb-1">Local Time</p>
        <p class="text-3xl font-mono font-bold text-white">{{ time }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { MapPin } from 'lucide-vue-next'

const props = defineProps({
  location: {
    type: String,
    default: 'Shanghai, CN'
  },
  mapImage: {
    type: String,
    default: 'https://images.unsplash.com/photo-1548345680-f5475ea5df84?q=80&w=800&auto=format&fit=crop'
  }
})

const time = ref('')
let timer

const updateTime = () => {
  const now = new Date()
  time.value = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  })
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
