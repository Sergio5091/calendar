<script setup>
import postComponent from '@/components/postComponent.vue'
import SearchComponent from '@/components/searchComponent.vue'
import { ref } from 'vue'

const myData = ref({})
const URL = 'https://dummyjson.com/posts'

// `https://dummyjson.com/posts/${id}`

fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error("Erreur lors du fetch")
    }
    return response.json()
  })
  .then(data => {
    myData.value = data   
    console.log(myData.value)
  })


</script>


<template>
  <div class="greetings">
    <h1>
      This is my Blog
    </h1>
    <SearchComponent />
    <postComponent :infos="myData"/>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-weight: 700;
  font-size: 2.6rem;
}
.greetings{
  height: 80%;
  overflow-y: scroll;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
}
</style>
