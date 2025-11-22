<template>
  <div class="min-h-screen bg-gray-50">
    <Header />
    <main>
      <Hero />
      <Features />
      <Statistics />
      <News />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Statistics from './components/Statistics.vue'
import News from './components/News.vue'
import Footer from './components/Footer.vue'
</script>
