<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
const emit = defineEmits(['closeForm'])
// Recuperer la nouvelle date clicker depuis le parent
const props = defineProps({
  newDate: String
})
// La valeur de l'input dans v-model
const addEven = ref("")
function submitEvent() {
  if (addEven.value.trim() !== "") {
    emit("addEvent", addEven.value); 
    addEven.value = ""; 
  }
}

</script>

<template>
  <div class="container">
    <div class="content">
      <div class="form">
        <div class="form-header">
          <h1>Add a new <br> event</h1>
          <button class="close"  @click="emit('closeForm')">×</button >
        </div>
        <h2>{{ props.newDate  }}</h2>
        <label>New event</label>
        <input type="text" v-model="addEven">
        <button class="submit" @click="submitEvent">Submit</button>
      </div>

    </div>
  </div>


</template>

<style scoped>

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

