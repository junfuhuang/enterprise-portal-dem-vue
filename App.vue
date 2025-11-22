<template>
  <div class="min-h-screen bg-gray-50">
    <Header 
      :user="user" 
      @login-click="isLoginOpen = true" 
      @logout="handleLogout"
    />
    <main>
      <Hero />
      <Features />
      <Statistics />
      <News />
    </main>
    <Footer />
    
    <Login 
      :is-open="isLoginOpen" 
      @close="isLoginOpen = false" 
      @login="handleLogin"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Statistics from './components/Statistics.vue'
import News from './components/News.vue'
import Footer from './components/Footer.vue'
import Login from './components/Login.vue'

const user = ref<{ name: string; email: string } | null>(null)
const isLoginOpen = ref(false)

// 从 localStorage 恢复用户状态
onMounted(() => {
  const savedUser = localStorage.getItem('user')
  if (savedUser) {
    user.value = JSON.parse(savedUser)
  }
})

const handleLogin = (userData: { name: string; email: string }) => {
  user.value = userData
  localStorage.setItem('user', JSON.stringify(userData))
}

const handleLogout = () => {
  user.value = null
  localStorage.removeItem('user')
}
</script>
