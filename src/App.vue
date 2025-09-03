<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/blog">Blog</router-link> |
      <router-link to="/projects">My App</router-link> |
      <router-link to="/about">Connexion</router-link>
    </nav>
    
  </div>
  <router-view />
  

</template>

<style>
nav {
  padding: 1rem;
  background: #333;
}
nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>

