<template>
  <div class="w-full max-w-3xl mx-auto px-6 py-12 lg:px-12 lg:py-16 flex-grow flex flex-col justify-center">
    <div class="card-premium p-8 lg:p-12">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-3xl font-black text-white tracking-tight">建立联系</h2>
        <button 
          @click="$emit('navigate', 'home')"
          class="text-neutral-500 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold uppercase tracking-wider"
        >
          <ArrowLeft class="w-4 h-4" />
          返回主页
        </button>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="space-y-2">
            <label class="text-xs font-bold text-neutral-500 uppercase tracking-wider">姓名</label>
            <input 
              v-model="form.name"
              type="text" 
              required
              class="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
              placeholder="您的称呼"
            >
          </div>
          <div class="space-y-2">
            <label class="text-xs font-bold text-neutral-500 uppercase tracking-wider">手机号</label>
            <input 
              v-model="form.phone"
              type="tel" 
              class="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
              placeholder="联系电话"
            >
          </div>
        </div>

        <div class="space-y-2">
          <label class="text-xs font-bold text-neutral-500 uppercase tracking-wider">邮箱</label>
          <input 
            v-model="form.email"
            type="email" 
            required
            class="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors"
            placeholder="example@domain.com"
          >
        </div>

        <div class="space-y-2">
          <label class="text-xs font-bold text-neutral-500 uppercase tracking-wider">内容</label>
          <textarea 
            v-model="form.message"
            required
            rows="5"
            class="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-blue transition-colors resize-none"
            placeholder="请描述您的需求..."
          ></textarea>
        </div>

        <button 
          type="submit"
          :disabled="loading"
          class="w-full bg-brand-blue text-white font-bold py-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="loading">发送中...</span>
          <span v-else>发送消息</span>
          <Send v-if="!loading" class="w-4 h-4" />
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowLeft, Send } from 'lucide-vue-next'

const emit = defineEmits(['navigate', 'submit'])

const loading = ref(false)
const form = ref({
  name: '',
  phone: '',
  email: '',
  message: ''
})

const handleSubmit = async () => {
  loading.value = true
  // 模拟发送请求
  await new Promise(resolve => setTimeout(resolve, 1500))
  loading.value = false
  emit('submit', form.value)
}
</script>
