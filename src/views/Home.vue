<script setup>
import { ref, onMounted } from 'vue'
import {
  profileData,
  skillsData,
  socialData,
  locationData,
  brandData,
  linkData,
  personalityData
} from '../data.js'

import ProfileCard from '../components/ProfileCard.vue'
import PersonalityCard from '../components/PersonalityCard.vue'
import SkillsCard from '../components/SkillsCard.vue'
import SocialCard from '../components/SocialCard.vue'
import LocationCard from '../components/LocationCard.vue'
import BrandCard from '../components/BrandCard.vue'
import LinkCard from '../components/LinkCard.vue'
import FooterBar from '../components/FooterBar.vue'
import Toast from '../components/Toast.vue'

const emit = defineEmits(['navigate'])

// 页面加载状态
const loaded = ref(false)
const cardsVisible = ref([])

// Toast 状态
const toastVisible = ref(false)
const toastMessage = ref('')

// 卡片数量
const cardCount = 7

onMounted(() => {
  // 页面入场动画
  loaded.value = true

  // 依次显示每个卡片
  for (let i = 0; i < cardCount; i++) {
    setTimeout(() => {
      cardsVisible.value[i] = true
    }, i * 100)
  }
})

// 复制到剪贴板
const copyToClipboard = async (text, msg) => {
  try {
    await navigator.clipboard.writeText(text)
    showToast(msg)
  } catch (err) {
    console.error('Failed to copy', err)
  }
}

// 显示 Toast
const showToast = (msg) => {
  toastMessage.value = msg
  toastVisible.value = true
  setTimeout(() => {
    toastVisible.value = false
  }, 2000)
}

const handleNavigate = (page) => {
  emit('navigate', page)
}
</script>

<template>
  <div class="w-full max-w-7xl mx-auto px-3 sm:px-4 lg:px-12 py-8 sm:py-10 lg:py-16 flex-grow flex flex-col">
    <!-- Grid 布局 -->
    <div class="flex-grow flex flex-col justify-center">
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[minmax(180px,auto)]">

        <!-- 1. 主档案卡片 -->
        <Transition name="card-list">
          <ProfileCard
            v-if="cardsVisible[0]"
            class="col-span-2 row-span-2"
            v-bind="profileData"
            @navigate="handleNavigate"
          />
        </Transition>

        <!-- 2. MBTI 人格 -->
        <Transition name="card-list">
          <PersonalityCard
            v-if="cardsVisible[1]"
            class="col-span-1 row-span-2"
            v-bind="personalityData"
          />
        </Transition>

        <!-- 3. 能力数据化 -->
        <Transition name="card-list">
          <SkillsCard
            v-if="cardsVisible[2]"
            class="col-span-1"
            :title="skillsData.title"
            :skills="skillsData.items"
          />
        </Transition>

        <!-- 4. 社交：微信 -->
        <Transition name="card-list">
          <SocialCard
            v-if="cardsVisible[3]"
            class="col-span-1"
            v-bind="socialData"
            @copy="copyToClipboard"
          />
        </Transition>

        <!-- 5. 坐标 & 时间 -->
        <Transition name="card-list">
          <LocationCard
            v-if="cardsVisible[4]"
            class="col-span-2"
            v-bind="locationData"
          />
        </Transition>

        <!-- 6. Dribbble -->
        <Transition name="card-list">
          <BrandCard
            v-if="cardsVisible[5]"
            class="col-span-1"
            v-bind="brandData"
          />
        </Transition>

        <!-- 7. 网站链接 -->
        <Transition name="card-list">
          <LinkCard
            v-if="cardsVisible[6]"
            class="col-span-1"
            v-bind="linkData"
          />
        </Transition>

      </div>
    </div>

    <!-- Footer 独立层级 -->
    <FooterBar />

    <!-- Toast -->
    <Toast :visible="toastVisible" :message="toastMessage" />
  </div>
</template>
