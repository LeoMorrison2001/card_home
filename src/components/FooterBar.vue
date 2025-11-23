<template>
  <footer class="mt-16 flex justify-between items-center text-neutral-600 text-xs font-bold uppercase tracking-widest border-t border-neutral-900 pt-8">
    <p>&copy; {{ year }} {{ name }}.</p>
    <div class="flex gap-6">
      <a
        v-for="(link, index) in links"
        :key="index"
        :href="link.url"
        class="hover:text-white transition-colors"
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
      { name: 'X', url: '#' },
      { name: 'Notion', url: '#' },
      { name: 'Youtube', url: '#' }
    ]
  }
})
</script>
