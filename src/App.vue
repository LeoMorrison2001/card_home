<script setup>
import { ref, shallowRef, computed } from 'vue'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import Toast from './components/Toast.vue'

const currentView = shallowRef(Home)
const toastVisible = ref(false)
const toastMessage = ref('')

const handleNavigate = (page) => {
  if (page === 'contact') {
    currentView.value = Contact
  } else {
    currentView.value = Home
  }
}

const handleContactSubmit = (formData) => {
  console.log('Form Submitted:', formData)
  showToast('消息已发送，我会尽快联系您！')
  setTimeout(() => {
    currentView.value = Home
  }, 2000)
}

// 显示 Toast
const showToast = (msg) => {
  toastMessage.value = msg
  toastVisible.value = true
  setTimeout(() => {
    toastVisible.value = false
  }, 2000)
}
</script>

<template>
  <div class="bg-neutral-950 min-h-screen text-white font-sans selection:bg-brand-blue selection:text-white flex flex-col antialiased">
    <!-- 极简背景 -->
    <div class="fixed inset-0 pointer-events-none -z-10 bg-gradient-custom"></div>

    <Transition name="fade" mode="out-in">
      <component 
        :is="currentView" 
        @navigate="handleNavigate"
        @submit="handleContactSubmit"
      />
    </Transition>

    <!-- Toast -->
    <Toast :visible="toastVisible" :message="toastMessage" />
  </div>
</template>

