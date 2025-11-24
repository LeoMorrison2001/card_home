<template>
  <footer class="mt-20 pt-10 border-t border-white/5 flex flex-row items-center justify-between gap-8 text-sm text-neutral-600">
    <div class="font-mono">
      &copy; {{ year }} {{ name }}.
    </div>
    <div class="flex gap-8">
      <a
        v-for="(link, index) in links"
        :key="index"
        :href="link.url"
        target="_blank"
        class="hover:text-emerald-400 transition-colors"
      >
        {{ link.name }}
      </a>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  year: {
    type: Number,
    default: 2025
  },
  name: {
    type: String,
    default: '任宇恒'
  },
  links: {
    type: Array,
    default: () => [
      { name: 'X', url: 'https://x.com/LeoMorrison2001' },
      { name: 'NOTION', url: 'https://leomorrison.notion.site/NOTION-TO-LIFE-MANAGER-2b536e24b8e4800d8c93d0fe6119e9fb' },
      { name: 'YOUTUBE', url: '#' }
    ]
  }
})
</script>
