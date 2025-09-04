<script setup>
import { ref, onMounted } from 'vue'
import Swal from 'sweetalert2' // ⭐ AJOUTE CETTE LIGNE !
import 'animate.css'
import TableComponent from '@/components/TableComponent.vue'
import FormCoponnent from '@/components/FormCoponnent.vue'

const formDisplay = ref(false)
const dateEven = ref("Monday")
const allEvents = ref([])
const valEdit = ref(null)
const isEditing = ref(false)

onMounted(() => {
  console.log('événements sauvegardés...')
  const savedEvents = localStorage.getItem('calendarEvents')
  if (savedEvents) {
    allEvents.value = JSON.parse(savedEvents)
    console.log('Événements chargés :', allEvents.value)
  } else {
    console.log('❌ Aucun événement sauvegardé')
  }
})

function newEv() {
  formDisplay.value = true
  isEditing.value = false
}

function closeFor() {
  formDisplay.value = false
  isEditing.value = false
  valEdit.value = null
}

function dates(e) {
  dateEven.value = e
}

function addE(eventData) {
  if (isEditing.value) {
    const index = allEvents.value.findIndex(event =>
      event.date === valEdit.value.date &&
      event.event === valEdit.value.event
    )
    if (index !== -1) {
      allEvents.value[index] = eventData
    }
    formDisplay.value = false
    isEditing.value = false

    Swal.fire({
      title: 'Modifié ! ✏️',
      html: `
        <div style="background: #dcfce7; padding: 10px; border-radius: 8px; margin: 10px 0;">
          <p style="margin: 0; color: #166534; font-size: 14px; font-weight: 500;">
            "${eventData.event}" 
          </p>
          <p style="margin: 3px 0 0 0; color: #4ade80; font-size: 12px;">
            Le ${eventData.date}
          </p>
        </div>
      `,
      icon: 'success',
      width: 350,
      padding: '1rem',
      customClass: {
        icon: 'xsmall-icon',
        popup: 'mini-popup'
      },
      showConfirmButton: false,
      timer: 3000,
      background: '#f0fdf4',
      color: '#166534'
    })

  } else {
    allEvents.value.push(eventData)

    // Notification ajout
    Swal.fire({
      title: 'Ajouté ! 🎯',
      html: `
        <div style="background: #dcfce7; padding: 10px; border-radius: 8px; margin: 10px 0;">
          <p style="margin: 0; color: #166534; font-size: 14px; font-weight: 500;">
            "${eventData.event}" 
          </p>
          <p style="margin: 3px 0 0 0; color: #4ade80; font-size: 12px;">
            Le ${eventData.date}
          </p>
        </div>
      `,
      icon: 'success',
      width: 350,
      padding: '1rem',
      customClass: {
        icon: 'xsmall-icon',
        popup: 'mini-popup'
      },
      showConfirmButton: false,
      timer: 3000,
      background: '#f0fdf4',
      color: '#166534'
    })
  }
  saveToLocalStorage()
}


function removeEvent(eventToRemove) {
  allEvents.value = allEvents.value.filter(event =>
    event.date !== eventToRemove.date ||
    event.event !== eventToRemove.event
  )
  saveToLocalStorage()
}

function rempText(eventObj) {
  valEdit.value = eventObj
  dateEven.value = eventObj.date
  formDisplay.value = true
  isEditing.value = true
  console.log("Édition de :", eventObj)
}

function saveToLocalStorage() {
  console.log('sauvegarder les événements...')
  localStorage.setItem('calendarEvents', JSON.stringify(allEvents.value))
  console.log('Sauvegarde réussie !')
}
</script>

<template>
  <div class="container">
    <div class="content">
      <div>
        <img src="@/assets/undraw_online-calendar_zaoc.png" alt="person" class="person">
      </div>
      <FormCoponnent v-if="formDisplay" @closeForm="closeFor" :newDate="dateEven" @addEvent="addE"
        :valModif="valEdit" />
    </div>
  </div>
  <TableComponent @display="newEv" @date="dates" :events="allEvents" @editEven="rempText" @removeEvent="removeEvent" />
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

.xsmall-icon {
  width: 10px !important;
  height: 10px !important;
  font-size: 6px !important;
}

.mini-popup {
  padding: 0.8rem !important;
  border-radius: 12px !important;
}
</style>
