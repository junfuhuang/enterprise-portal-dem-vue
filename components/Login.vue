<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        @click.self="emit('close')"
      >
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md relative">
          <!-- Header -->
          <div class="flex items-center justify-between p-6 border-b">
            <div>
              <h2 class="text-2xl font-bold text-gray-900">欢迎回来</h2>
              <p class="text-sm text-gray-600 mt-1">登录您的账户继续使用</p>
            </div>
            <button
              @click="emit('close')"
              class="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X class="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleSubmit" class="p-6 space-y-4">
            <!-- Email Input -->
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                邮箱地址
              </label>
              <div class="relative">
                <Mail class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  @input="errors.email = ''"
                  :class="[
                    'w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base',
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  ]"
                  placeholder="your@email.com"
                />
              </div>
              <p v-if="errors.email" class="text-sm text-red-500 mt-1">
                {{ errors.email }}
              </p>
            </div>

            <!-- Password Input -->
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-2">
                密码
              </label>
              <div class="relative">
                <Lock class="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  id="password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  @input="errors.password = ''"
                  :class="[
                    'w-full pl-10 pr-12 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base',
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  ]"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  @click="showPassword = !showPassword"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <EyeOff v-if="showPassword" class="h-5 w-5" />
                  <Eye v-else class="h-5 w-5" />
                </button>
              </div>
              <p v-if="errors.password" class="text-sm text-red-500 mt-1">
                {{ errors.password }}
              </p>
            </div>

            <!-- Remember & Forgot -->
            <div class="flex items-center justify-between">
              <label class="flex items-center">
                <input
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span class="ml-2 text-sm text-gray-700">记住我</span>
              </label>
              <a href="#" class="text-sm text-blue-600 hover:text-blue-700">
                忘记密码？
              </a>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 h-11 px-8 disabled:opacity-50"
            >
              <span v-if="isLoading" class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                登录中...
              </span>
              <span v-else>登录</span>
            </button>

            <!-- Demo Login -->
            <button
              type="button"
              @click="handleDemoLogin"
              class="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-300 bg-white hover:bg-gray-100 h-11 px-8"
            >
              使用演示账户登录
            </button>
          </form>

          <!-- Footer -->
          <div class="px-6 pb-6 text-center">
            <p class="text-sm text-gray-600">
              还没有账户？
              <a href="#" class="text-blue-600 hover:text-blue-700">
                立即注册
              </a>
            </p>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { X, Mail, Lock, Eye, EyeOff } from 'lucide-vue-next'

interface Props {
  isOpen: boolean
}

interface Emits {
  (e: 'close'): void
  (e: 'login', user: { name: string; email: string }): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const isLoading = ref(false)
const errors = reactive({
  email: '',
  password: ''
})

const validateForm = () => {
  errors.email = ''
  errors.password = ''
  
  if (!email.value) {
    errors.email = '请输入邮箱地址'
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    errors.email = '请输入有效的邮箱地址'
  }
  
  if (!password.value) {
    errors.password = '请输入密码'
  } else if (password.value.length < 6) {
    errors.password = '密码至少需要6个字符'
  }
  
  return !errors.email && !errors.password
}

const handleSubmit = async () => {
  if (!validateForm()) return
  
  isLoading.value = true
  
  // 模拟 API 请求
  setTimeout(() => {
    const userName = email.value.split('@')[0]
    emit('login', {
      name: userName.charAt(0).toUpperCase() + userName.slice(1),
      email: email.value
    })
    isLoading.value = false
    emit('close')
    
    // 重置表单
    email.value = ''
    password.value = ''
    errors.email = ''
    errors.password = ''
  }, 1000)
}

const handleDemoLogin = () => {
  email.value = 'demo@example.com'
  password.value = 'demo123'
  setTimeout(() => {
    emit('login', {
      name: 'Demo User',
      email: 'demo@example.com'
    })
    emit('close')
    email.value = ''
    password.value = ''
  }, 500)
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.2s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active > div,
.modal-leave-active > div {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.modal-enter-from > div,
.modal-leave-to > div {
  transform: scale(0.95);
  opacity: 0;
}
</style>
