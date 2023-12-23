<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/navigation/NavBar.vue';
import Footer from './components/footer/Footer.vue';
</script>

<template>
  <NavBar/>
  <RouterView />
  <Footer/>
</template>

