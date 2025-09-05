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
  background: #18803e;
  display: flex;
  justify-content: end;
  gap: 30px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 18px;
  font-weight: 600;
  border-bottom-left-radius:  30px;
  border-bottom-right-radius: 30px;
}


nav a {
  color: white;
  margin: 0 10px;
   position: relative;
  color: #f8f4f4;
  text-decoration: none;
  padding: 8px 12px;
  transition: color 0.3s ease;
}

nav a.router-link-active {
  font-weight: bold;
}

nav a:hover {
  color: #00ffb3;
}

</style>
