<script setup>
import { ref } from 'vue'
const props = defineProps({
    infos: {
        type: Object,
    }
})
console.log(props.infos);
const  myData =ref(0)


function seeMore(e) {
    const URL = `https://dummyjson.com/posts/${e}`
    console.log(URL);
    

    fetch(URL)
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors du fetch")
            }
            return response.json()
        })
        .then(data => {
            myData.value = data
            console.log("oik",myData.value)
       })
       

}




</script>
<template>
    <div class="container">
        <div v-for="(el, index) in props.infos.posts" class="arct" :key="index" @click="seeMore(el.id)">
            <h1>Arcticle {{ index }}</h1>
            <h2>{{ el.title }}</h2>     
            <div v-if="el.id == myData.id" class="text">  
                <p class="body">{{ myData.body }}</p>
            </div>

        </div>
    </div>

</template>

<style scoped>
.arct {
    background-color: rgb(216, 216, 215);
    padding: 20px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 2px 0px 5px
        /* inset 5px  5px 15px  ; */

}

.container {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    margin-inline: 25px;
    overflow-y: scroll;
    position: relative;

}

h1 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 2.2rem;
    color: rgb(47, 47, 231);

}

h2 {
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1.7rem;
    color: rgba(0, 0, 0, 0.849);


}
.body{
    background-color: black;
    font-size: 1.2rem;
    line-height: 30px;
    color: aliceblue;
    width: 500px;
    padding: 30px;
    font-family: sans-serif;
    
}

.text {
    font-family: sans-serif;
    text-align: justify;
    line-height: 20px;
    color: rgba(0, 0, 0, 0.849);
    position: fixed;
    top:0 ;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.452);
    width: 100%;

}
</style>
