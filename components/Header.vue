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
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-100 h-10 px-4 py-2">
            登录
          </button>
          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
            注册
          </button>
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
            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-300 bg-white hover:bg-gray-100 h-10 px-4 py-2">
              登录
            </button>
            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2">
              注册
            </button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, Search } from 'lucide-vue-next'

const isMenuOpen = ref(false)

const navItems = [
  { name: '首页', href: '#home' },
  { name: '产品服务', href: '#products' },
  { name: '解决方案', href: '#solutions' },
  { name: '新闻资讯', href: '#news' },
  { name: '关于我们', href: '#about' },
]
</script>
