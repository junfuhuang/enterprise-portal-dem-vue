<template>
  <section id="news" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-end mb-12">
        <div>
          <div class="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4 text-sm font-medium">
            最新动态
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold text-gray-900">新闻资讯</h2>
        </div>
        <button class="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-300 bg-white hover:bg-gray-100 h-10 px-4 py-2">
          查看全部
          <ArrowRight class="ml-2 h-4 w-4" />
        </button>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="news in newsItems"
          :key="news.id"
          class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group cursor-pointer"
        >
          <div class="relative overflow-hidden">
            <img
              :src="news.image"
              :alt="news.title"
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div class="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium">
              {{ news.category }}
            </div>
          </div>
          
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 mb-3">
              <Calendar class="h-4 w-4 mr-2" />
              <span>{{ news.date }}</span>
            </div>
            
            <h3 class="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {{ news.title }}
            </h3>
            
            <p class="text-gray-600 mb-4 text-sm">
              {{ news.excerpt }}
            </p>
            
            <button class="text-blue-600 hover:text-blue-700 flex items-center text-sm font-medium group">
              阅读更多
              <ArrowRight class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </article>
      </div>

      <div class="mt-8 text-center sm:hidden">
        <button class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border border-gray-300 bg-white hover:bg-gray-100 h-10 px-4 py-2">
          查看全部
          <ArrowRight class="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Calendar, ArrowRight } from 'lucide-vue-next'

const newsItems = [
  {
    id: 1,
    title: '企业数字化转型白皮书发布',
    excerpt: '深度解析数字化转型趋势，为企业提供实践指南和最佳案例分享。',
    date: '2024-11-15',
    category: '行业报告',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: '新产品发布会圆满成功',
    excerpt: '全新一代云服务平台正式发布，为企业带来更强大的技术支持。',
    date: '2024-11-10',
    category: '产品动态',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: '荣获年度最佳创新企业奖',
    excerpt: '凭借卓越的技术创新和优质服务，荣获行业权威机构颁发的创新大奖。',
    date: '2024-11-05',
    category: '公司新闻',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  },
]
</script>
