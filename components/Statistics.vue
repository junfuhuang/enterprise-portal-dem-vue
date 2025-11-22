<template>
  <section class="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">我们的成就</h2>
        <p class="text-lg text-blue-100 max-w-2xl mx-auto">
          数字见证我们的成长，携手客户共创未来
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all"
        >
          <component :is="stat.icon" class="h-8 w-8 text-white mb-4" />
          <div class="text-3xl font-bold text-white mb-1">{{ stat.value }}</div>
          <div class="text-sm text-blue-100 mb-2">{{ stat.label }}</div>
          <div class="inline-flex items-center text-sm text-green-300">
            <TrendingUp class="h-4 w-4 mr-1" />
            <span>{{ stat.trend }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TrendingUp, Users, Globe, Award } from 'lucide-vue-next'

const stats = [
  {
    icon: Users,
    value: '10,000+',
    label: '企业用户',
    trend: '+25%',
  },
  {
    icon: Globe,
    value: '150+',
    label: '覆盖城市',
    trend: '+18%',
  },
  {
    icon: TrendingUp,
    value: '99.9%',
    label: '系统稳定性',
    trend: '+0.2%',
  },
  {
    icon: Award,
    value: '30+',
    label: '行业奖项',
    trend: '+12',
  },
]
</script>
