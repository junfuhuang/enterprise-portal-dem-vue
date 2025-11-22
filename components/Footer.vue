<template>
  <footer class="bg-gray-900 text-gray-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Top Section -->
      <div class="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
        <!-- Company Info -->
        <div class="lg:col-span-2">
          <div class="flex items-center mb-4">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold">P</span>
            </div>
            <span class="ml-2 text-white font-semibold text-lg">企业门户</span>
          </div>
          <p class="text-gray-400 mb-6 text-sm">
            致力于为企业提供全方位的数字化解决方案，助力业务增长和数字化转型。
          </p>
          <div class="space-y-2 text-sm">
            <div class="flex items-center">
              <Mail class="h-4 w-4 mr-2" />
              <span>contact@example.com</span>
            </div>
            <div class="flex items-center">
              <Phone class="h-4 w-4 mr-2" />
              <span>+86 400-123-4567</span>
            </div>
            <div class="flex items-center">
              <MapPin class="h-4 w-4 mr-2" />
              <span>北京市朝阳区某某大厦</span>
            </div>
          </div>
        </div>

        <!-- Links Columns -->
        <div>
          <h3 class="text-white font-semibold mb-4">产品</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="link in footerLinks.product" :key="link.name">
              <a :href="link.href" class="hover:text-white transition-colors">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">公司</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="link in footerLinks.company" :key="link.name">
              <a :href="link.href" class="hover:text-white transition-colors">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">支持</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="link in footerLinks.support" :key="link.name">
              <a :href="link.href" class="hover:text-white transition-colors">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-white font-semibold mb-4">法律</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="link in footerLinks.legal" :key="link.name">
              <a :href="link.href" class="hover:text-white transition-colors">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="pt-8 border-t border-gray-800">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 mb-4 md:mb-0 text-sm">
            © 2024 企业门户. 保留所有权利.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="hover:text-white transition-colors">
              <Github class="h-5 w-5" />
            </a>
            <a href="#" class="hover:text-white transition-colors">
              <Twitter class="h-5 w-5" />
            </a>
            <a href="#" class="hover:text-white transition-colors">
              <Linkedin class="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-vue-next'

const footerLinks = {
  product: [
    { name: '产品特性', href: '#' },
    { name: '价格方案', href: '#' },
    { name: '客户案例', href: '#' },
    { name: '更新日志', href: '#' },
  ],
  company: [
    { name: '关于我们', href: '#' },
    { name: '加入我们', href: '#' },
    { name: '新闻中心', href: '#' },
    { name: '联系我们', href: '#' },
  ],
  support: [
    { name: '帮助中心', href: '#' },
    { name: '开发文档', href: '#' },
    { name: 'API 参考', href: '#' },
    { name: '服务状态', href: '#' },
  ],
  legal: [
    { name: '隐私政策', href: '#' },
    { name: '服务条款', href: '#' },
    { name: 'Cookie 政策', href: '#' },
    { name: '许可协议', href: '#' },
  ],
}
</script>
