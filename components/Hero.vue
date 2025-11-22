<template>
  <section id="home" class="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
          <div class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            🚀 欢迎来到企业门户
          </div>
          
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            数字化转型
            <br />
            <span class="text-blue-600">引领未来</span>
          </h1>
          
          <p class="text-lg text-gray-600 max-w-lg">
            我们致力于为企业提供全方位的数字化解决方案，助力业务增长，提升运营效率，打造智能化企业生态系统。
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-11 px-8 group">
              立即开始
              <ArrowRight class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white hover:bg-gray-100 h-11 px-8 group">
              <Play class="mr-2 h-5 w-5" />
              观看演示
            </button>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div>
              <div class="text-2xl font-bold text-blue-600">10K+</div>
              <div class="text-sm text-gray-600 mt-1">活跃用户</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-blue-600">98%</div>
              <div class="text-sm text-gray-600 mt-1">客户满意度</div>
            </div>
            <div>
              <div class="text-2xl font-bold text-blue-600">50+</div>
              <div class="text-sm text-gray-600 mt-1">合作伙伴</div>
            </div>
          </div>
        </div>

        <!-- Right Image -->
        <div class="relative">
          <div class="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
              alt="企业数字化"
              class="w-full h-auto"
            />
          </div>
          <!-- Floating Card -->
          <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span class="text-2xl text-green-600">✓</span>
              </div>
              <div>
                <div class="text-sm font-semibold text-gray-900">项目成功率</div>
                <div class="text-lg font-bold text-green-600">增长 156%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Play } from 'lucide-vue-next'
</script>
