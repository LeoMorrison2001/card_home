<template>
  <Transition name="toast">
    <div
      v-if="visible"
      class="fixed top-8 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded shadow-2xl text-sm font-bold flex items-center gap-3 z-50"
    >
      <Check class="w-4 h-4 text-brand-blue" />
      <span>{{ message }}</span>
    </div>
  </Transition>
</template>

<script setup>
import { Check } from 'lucide-vue-next'

defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: 'Copied to clipboard'
  }
})
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}

.toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px);
}
</style>
