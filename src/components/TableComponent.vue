<script setup>
import { reactive, ref } from 'vue'

const emit = defineEmits(['display', 'date'])
const selectedDay = ref("Monday")

function selectDay(event) {
  selectedDay.value = event.target.innerText;
  emit('date', selectedDay.value)
}
// const tab = ref([
//   {
//     title: "Monday",
//     data: ["text1","text2"]
//   }
// ])
const props = defineProps({
  addEvent: Object
})
let obj = ref({})
obj = props.addEvent


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
          <th @click="selectDay">Monday</th>
          <th @click="selectDay">Tuesday</th>
          <th @click="selectDay">Wednesday</th>
          <th @click="selectDay">Thursday</th>
          <th @click="selectDay">Friday</th>
          <th @click="selectDay">Saturday</th>
          <th @click="selectDay">Sunday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
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
}

.calendar-table th {
  background: #f9fafb;
  font-weight: 700;
  font-size: 15px;
  color: #111827;
}

.event {
  background: #f0fdf4;
  border: 2px solid #86efac;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease;
}

.event:hover {
  transform: translateY(-3px);
}

.event span {
  display: block;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #065f46;
}

.event .icons {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
}

.event .icon {
  cursor: pointer;
  transition: transform 0.2s, color 0.2s;
}

.event .icon:hover {
  transform: scale(1.2);
  color: #22c55e;
}
</style>
