<script setup>
import { RouterLink, RouterView } from 'vue-router'
import img from '@/assets/undraw_online-calendar_zaoc.png'
import TableComponent from '@/components/TableComponent.vue';
import FormCoponnent from '@/components/FormCoponnent.vue';
import { ref,reactive } from 'vue'
// pour afficher le formulaire au click du bouton +New Even

const formDisplay = ref(false)
function newEv() {
  formDisplay.value = true;
}
//fonction pour fermer le formulaire au click du croix
function closeFor() {
  formDisplay.value = false;
}
// les variable pour afficher le jour dans le formulaire
const dateEven = ref("Monday")
function dates(e) {
  dateEven.value = e
  console.log("parent", dateEven.value);
  return dateEven
}
  const addEvent = ref();


function addE(newEvent) {
  addEvent.value = newEvent;

  return addEvent
  
}
const events = reactive({
  even:  addEvent,
  date: dateEven
})


</script>


<template>

   
    <div class="container">
      <div class="content">
        <div>
          <img src="@/assets/undraw_online-calendar_zaoc.png" alt="person" class="person">
        </div>
        
        <FormCoponnent v-if="formDisplay" @closeForm="closeFor" :newDate="dateEven" @addEvent="addE" />
      </div>
    </div>
    <TableComponent @display="newEv" @date="dates" :newDate="dateEven"  :addEvent="events"/>
    

</template>

<style scoped>
.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 40px auto;
  max-width: 1100px;
  padding: 0 20px;
}


.person {
  width: 100%;
  max-width: 380px;
  animation: float 1.5s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
}

.form {
  background: #ffffff;
  padding: 28px;
  border-radius: 14px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 420px;
  transition: transform 0.3s ease;
}

.form:hover {
  transform: translateY(-4px);
}

.form-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.form-header h1 {
  font-family: sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
  line-height: 1.3;
}

.close {
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
  background: #fee2e2;
  color: #dc2626;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.close:hover {
  background: #fecaca;
}

.form h2 {
  font-family: sans-serif;

  color: #9b3f00;
  margin: 16px 0 8px;
  font-size: 22px;
  font-weight: 600;
}

.form label {
  font-family: sans-serif;

  display: block;
  margin-top: 14px;
  font-size: 14px;
  font-weight: 500;
  color: #6b7280;
}

.form input {
  border: none;
  border-bottom: 2px solid #d1d5db;
  width: 100%;
  margin-top: 6px;
  padding: 6px 0;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s;
}

.form input:focus {
  border-color: #22c55e;
}

.submit {
  margin-top: 20px;
  background: #22c55e;
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}

.submit:hover {
  background: #16a34a;
  transform: translateY(-2px);
}
</style>
