<template>
  <header class="bg-white shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold">P</span>
          </div>
          <span class="ml-2 text-gray-900 font-semibold text-lg">企业门户</span>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <a
            v-for="item in navItems"
            :key="item.name"
            :href="item.href"
            class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
          >
            {{ item.name }}
          </a>
        </nav>

        <!-- Right Actions -->
        <div class="hidden md:flex items-center space-x-4">
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-100 h-10 w-10">
            <Search class="h-5 w-5" />
          </button>
          
          <div v-if="user" class="relative">
            <button
              @click="isUserMenuOpen = !isUserMenuOpen"
              class="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <div class="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-medium">{{ user.name.charAt(0) }}</span>
              </div>
              <span class="text-sm font-medium text-gray-700">{{ user.name }}</span>
            </button>
            
            <Transition name="dropdown">
              <div
                v-if="isUserMenuOpen"
                class="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
              >
                <div class="px-4 py-3 border-b border-gray-200">
                  <p class="text-sm font-semibold text-gray-900">{{ user.name }}</p>
                  <p class="text-xs text-gray-500 truncate">{{ user.email }}</p>
                </div>
                <a
                  href="#profile"
                  class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <User class="h-4 w-4 mr-3" />
                  个人中心
                </a>
                <a
                  href="#settings"
                  class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <Settings class="h-4 w-4 mr-3" />
                  设置
                </a>
                <div class="border-t border-gray-200 mt-2 pt-2">
                  <button
                    @click="emit('logout')"
                    class="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    <LogOut class="h-4 w-4 mr-3" />
                    退出登录
                  </button>
                </div>
              </div>
            </Transition>
          </div>
          
          <template v-else>
            <button
              @click="emit('loginClick')"
              class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-100 h-10 px-4 py-2"
            >
              登录
            </button>
            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
              注册
            </button>
          </template>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2"
          @click="isMenuOpen = !isMenuOpen"
        >
          <X v-if="isMenuOpen" class="h-6 w-6" />
          <Menu v-else class="h-6 w-6" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <Transition name="slide">
        <div v-if="isMenuOpen" class="md:hidden py-4 border-t">
          <nav class="flex flex-col space-y-4">
            <a
              v-for="item in navItems"
              :key="item.name"
              :href="item.href"
              class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {{ item.name }}
            </a>
            <div class="flex flex-col space-y-2 pt-4 border-t">
              <template v-if="user">
                <div class="px-4 py-3 bg-gray-50 rounded-lg">
                  <p class="text-sm font-semibold text-gray-900">{{ user.name }}</p>
                  <p class="text-xs text-gray-500 truncate">{{ user.email }}</p>
                </div>
                <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-300 bg-white hover:bg-gray-100 h-10 px-4 py-2 justify-start">
                  <User class="h-4 w-4 mr-2" />
                  个人中心
                </button>
                <button
                  @click="emit('logout')"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-300 bg-white hover:bg-gray-100 h-10 px-4 py-2 justify-start text-red-600"
                >
                  <LogOut class="h-4 w-4 mr-2" />
                  退出登录
                </button>
              </template>
              <template v-else>
                <button
                  @click="emit('loginClick')"
                  class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-300 bg-white hover:bg-gray-100 h-10 px-4 py-2"
                >
                  登录
                </button>
                <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
                  注册
                </button>
              </template>
            </div>
          </nav>
        </div>
      </Transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, Search, User, LogOut, Settings } from 'lucide-vue-next'

interface Props {
  user: { name: string; email: string } | null
}

interface Emits {
  (e: 'loginClick'): void
  (e: 'logout'): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const isMenuOpen = ref(false)
const isUserMenuOpen = ref(false)

const navItems = [
  { name: '首页', href: '#home' },
  { name: '产品服务', href: '#products' },
  { name: '解决方案', href: '#solutions' },
  { name: '新闻资讯', href: '#news' },
  { name: '关于我们', href: '#about' },
]
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  max-height: 0;
}
</style>
