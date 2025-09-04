<script setup>
import { ref } from 'vue'

const emit = defineEmits(['display', 'date', 'editEven', 'removeEvent'])
const selectedDay = ref("Monday")

function selectDay(event) {
  selectedDay.value = event.target.innerText
  emit('date', selectedDay.value)
}

const props = defineProps({
  events: {
    type: Array,
  }
})

function removeEven(e, eventObj) {
  e.stopPropagation();
  emit('removeEvent', eventObj);
}

function editEven(e, eventObj) {
  e.stopPropagation();
  emit('editEven', eventObj);
}

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
</script>

<template>
  <div class="calendar-app">
    <div class="header">
      <h1>Calendar App</h1>
      <button class="new-event" @click="emit('display')">+ New Event</button>
    </div>
    <table class="calendar-table">
      <thead>
        <tr>
          <th v-for="day in days" :key="day" @click="selectDay">
            {{ day }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="day in days" :key="day">
            <div v-for="(el, index) in props.events.filter(ev => ev.date === day)" :key="index" class="event">
              {{ el.event }}
              <div class="modif">
                <div @click="(e) => removeEven(e, el)">
                  <img src="../assets/trash-solid-full.svg" alt="">
                </div>
                <div @click="(e) => editEven(e, el)">
                  <img src="../assets/pen-solid-full (1).svg" alt="">
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.calendar-app {
  font-family: 'Inter', sans-serif;
  margin: 40px auto;
  background: #ffffff;
  padding: 24px;
  border-radius: 14px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  max-width: 1200px;
  overflow-x: auto;
}

.modif {
  display: flex;
  width: 100%;
  margin-top: 5px;
  justify-content: space-between;
}

img {
  width: 25px;

}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 24px;
  font-weight: 700;
  color: #0f172a;
}

.new-event {
  background: #22c55e;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  transition: background 0.3s, transform 0.2s;
}

.new-event:hover {
  background: #16a34a;
  transform: translateY(-2px);
}

.calendar-table {
  width: 100%;
  border-collapse: collapse;
}

.calendar-table th,
.calendar-table td {
  border: 1px solid #e5e7eb;
  text-align: center;
  padding: 24px;
  vertical-align: top;
  min-width: 140px;
  cursor: pointer;
}

.calendar-table th {
  background: #f9fafb;
  font-weight: 700;
  font-size: 15px;
  color: #111827;
}

.calendar-table th:hover {
  background: #e5e7eb;
}

.event {
  background: #f0fdf4;
  border: 2px solid #86efac;
  border-radius: 10px;
  text-align: justify;
  padding: 10px;
  margin: 5px 0;
  text-align: center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

.event:hover {
  transform: translateY(-3px);
}
</style>