<template>
  <div class="card-premium p-0 relative group min-h-[300px] cursor-pointer">
    <img
      :src="image"
      class="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
    >
    <div class="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90"></div>
    <div class="absolute bottom-6 left-6 pr-6">
      <div class="w-10 h-1 bg-brand-blue mb-4"></div>
      <h3 class="text-2xl font-bold text-white mb-1">{{ title }}</h3>
      <p class="text-xs text-neutral-400 uppercase tracking-widest font-medium">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop'
  },
  title: {
    type: String,
    default: 'Perspective'
  },
  subtitle: {
    type: String,
    default: 'Photography Series'
  }
})
</script>
