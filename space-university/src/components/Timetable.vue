<script setup>
import InputText from "primevue/inputtext";
import {FloatLabel} from "primevue";
import {DatePicker} from "primevue";
import {Select} from "primevue";
import Button from "primevue/button";
import {ref, watch, computed} from "vue";

// Define the days of the week
const days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];

const row = [1, 2, 3, 4, 5, 6, 7];

const times = ["08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];

// Load timetable data from localStorage or initialize an empty object
const courses = ref(JSON.parse(localStorage.getItem("courses")));

const appointments = ref(JSON.parse(localStorage.getItem("appointments")) || {});

// Track the current week (default: 1)
const currentWeek = ref(1);

//Format Time
const getFormattedTime = (date) => {
  if (!date) return "";
  return new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);
};

// Generate an empty timetable structure
const getEmptyWeek = () => {
  return days.reduce((acc, day) => {
    acc[day] = [];
    return acc;
  }, {});
};

// Ensure each week has a timetable
if (!appointments.value[currentWeek.value]) {
  appointments.value[currentWeek.value] = getEmptyWeek();
}

// Reactive form input for new appointments
const newCourse = ref({
  title: "",
  day: "",
  time: "",
  lecturer: "",
  room: "",
  span: ""
});

// Computed property to get the current week's appointments
const currentWeekCourses = computed(() => {
  return appointments.value[currentWeek.value] || getEmptyWeek();
});

// Watch for changes and save to localStorage
watch(appointments, (newVal) => {
  localStorage.setItem("appointments", JSON.stringify(newVal));
}, {deep: true});

// Function to add a course
const addCourse = () => {
  if (!newCourse.value.title || !newCourse.value.time) {
    alert("Please fill in all fields!");
    return;
  }

  let formatTime = getFormattedTime(newCourse.value.time);
  let timeSlice = formatTime.slice(0, 2)

  for (let time in times) {
    console.log(timeSlice < times[time]);
    if (timeSlice < times[time]) {
      newCourse.value.span = times[time];
      break;
    }
  }

  // Add the new course to the correct week and day
  appointments.value[currentWeek.value][newCourse.value.day].push({
    ...newCourse.value,
    time: getFormattedTime(newCourse.value.time)
  });

  appointments.value = Object.assign({}, appointments.value);

  // Reset form fields
  newCourse.value = {title: "", day: "", time: "", lecturer: "", room: ""};


};

// Function to switch weeks
const changeWeek = (direction) => {
  currentWeek.value += direction;

  // Initialize week structure if it doesn't exist
  if (!appointments.value[currentWeek.value]) {
    appointments.value[currentWeek.value] = getEmptyWeek();
  }
};

const clearSlot = (curr) => {
  let clearWeek = appointments.value[currentWeek.value];
  console.log("--------------------------------------------------")
  for (let day in days) {
    let slots = clearWeek[days[day]];
    for (let slot in slots) {
      if (curr === slots[slot].title) {
        console.log(slot);
        let newApp = appointments.value[currentWeek.value][days[day]].toSpliced(slot, 1);
        localStorage.setItem("appointments", JSON.stringify(newApp));
      }
    }
  }
  location.reload();
}
</script>

<template>
  <!-- Timetable Table -->
  <div class="mx-20 mt-10">
    <div class="flex flex-col items-center justify-center">
      <table class="w-full max-w-5xl border-collapse shadow-lg rounded-md overflow-hidden">
        <thead>
        <tr class="text-white">
          <th v-for="day in days" :key="day" class="px-6 py-3 text-lg font-semibold text-center">
            {{ day }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="slot in times.length" :key="slot"
            class="tableblock odd:bg-surface-600 even:bg-surface-700">
          <td v-for="day in days" :key="day" class="px-6 py-4 text-center border border-surface-900">
            <div v-for="curr in currentWeekCourses[day]">
                <div v-if="curr.span === times[slot-1]" class="shadow-md rounded-lg p-4">
                  <p><strong>{{ curr.title }}</strong></p>
                  <p>{{curr.time }}</p>
                  <p>{{ curr.room }}</p>
                  <p v-if="curr.lecturer">{{ curr.lecturer }}</p>
                  <Button icon="pi pi-trash" @click="clearSlot(curr.title)"/>
                </div>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div class="flex flex-col justify-center items-center gap-3">
    <h2 class="text-2xl font-bold my-4">Woche {{ currentWeek }}</h2>

    <!-- Week Navigation -->
    <div class="week-controls">
      <Button @click="changeWeek(-1)" class="nav-btn">Vorige Woche</Button>
      <Button @click="changeWeek(1)" class="nav-btn">Nächste Woche</Button>
    </div>

    <!-- Course Input Form -->
    <div class="flex flex-col items-center justify-center gap-3">
      <FloatLabel variant="in">
        <InputText v-model="newCourse.title" type="text" class=""/>
        <label>Titel</label>
      </FloatLabel>

      <FloatLabel variant="in" class="w-full">
        <Select v-model="newCourse.day" :options="days" class="w-full"/>
        <label>Tag</label>
      </FloatLabel>

      <FloatLabel variant="in">
        <DatePicker v-model="newCourse.time" timeOnly fluid/>
        <label>Time</label>
      </FloatLabel>

      <FloatLabel variant="in">
        <InputText v-model="newCourse.lecturer" type="text"/>
        <label>Lecturer</label>
      </FloatLabel>

      <FloatLabel variant="in">
        <InputText v-model="newCourse.room" type="text"/>
        <label>Room</label>
      </FloatLabel>
      <Button @click="addCourse" class="add-btn">Add Course</Button>
      <!--
      <Button @click="clearTimetable" class="clear-btn">Clear This Week</Button>
      -->
    </div>
  </div>

</template>

<style scoped>
.container {
  text-align: center;
  max-width: 700px;
  margin: auto;
}

.week-controls {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.nav-btn {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.add-btn {
  background-color: #28a745;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.clear-btn {
  background-color: #e63946;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}

.timetable {
  width: 100%;
  border-color: var(--p-contrast-2);
}

.bg-table-odd {
  background-color: var(--p-surface-600);
}

.bg-table-even {
  background-color: var(--p-surface-700);
}

.tableblock {
  height: 100px;
}
</style>
