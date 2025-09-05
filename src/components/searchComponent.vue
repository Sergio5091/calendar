<script setup>


</script>


<template>
    <input type="search" value="recherche" v-model="seach" placeholder="Recherchez un article" class>
    <p>{{ seach  }}</p>

</template>

<style scoped>
input[type="search"] {
  width: 300px;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px; 
  font-size: 1em;
  margin-right: 5px; 
  box-sizing: border-box; 
  margin-bottom: 20px;
}


</style>

