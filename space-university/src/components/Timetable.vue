<script setup>
import InputText from "primevue/inputtext";
import {FloatLabel} from "primevue";
import {DatePicker} from "primevue";
import {Select} from "primevue";
import Button from "primevue/button";
import {ref, watch, computed} from "vue";

// Define the days of the week
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

// Load timetable data from localStorage or initialize an empty object
const courses = ref(JSON.parse(localStorage.getItem("courses")) || {});

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
if (!courses.value[currentWeek.value]) {
  courses.value[currentWeek.value] = getEmptyWeek();
}

// Reactive form input for new courses
const newCourse = ref({
  title: "",
  day: "",
  time: "",
  lecturer: "",
  room: "",
});

// Computed property to get the current week's courses
const currentWeekCourses = computed(() => {
  return courses.value[currentWeek.value] || getEmptyWeek();
});

// Watch for changes and save to localStorage
watch(courses, (newVal) => {
  localStorage.setItem("courses", JSON.stringify(newVal));
}, {deep: true});

// Function to add a course
const addCourse = () => {
  if (!newCourse.value.title || !newCourse.value.time) {
    alert("Please fill in all fields!");
    return;
  }

  // Add the new course to the correct week and day
  courses.value[currentWeek.value][newCourse.value.day].push({
    ...newCourse.value,
    time: getFormattedTime(newCourse.value.time)
  });

  courses.value = Object.assign({}, courses.value);

  // Reset form fields
  newCourse.value = {title: "", day: "", time: "", lecturer: "", room: ""};
};

// Function to switch weeks
const changeWeek = (direction) => {
  currentWeek.value += direction;

  // Initialize week structure if it doesn't exist
  if (!courses.value[currentWeek.value]) {
    courses.value[currentWeek.value] = getEmptyWeek();
  }
};

// Function to clear the timetable for the current week
const clearTimetable = () => {
  courses.value[currentWeek.value] = getEmptyWeek();
};
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-3">
    <h2 class="text-2xl font-bold my-4">Timetable - Week {{ currentWeek }}</h2>

    <!-- Week Navigation -->
    <div class="week-controls">
      <Button @click="changeWeek(-1)" class="nav-btn">Previous Week</Button>
      <Button @click="changeWeek(1)" class="nav-btn">Next Week</Button>
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
        <DatePicker v-model="newCourse.time" timeOnly fluid />
        <label>Time</label>
      </FloatLabel>

      <FloatLabel variant="in">
        <InputText v-model="newCourse.lecturer" type="text" />
        <label>Lecturer</label>
      </FloatLabel>

      <FloatLabel variant="in">
        <InputText v-model="newCourse.room" type="text" />
        <label>Room</label>
      </FloatLabel>
      <Button @click="addCourse" class="add-btn">Add Course</Button>
      <!--
      <Button @click="clearTimetable" class="clear-btn">Clear This Week</Button>
      -->
    </div>
  </div>

    <!-- Timetable Table -->
  <div class="mx-20 mt-10">
    <div class="flex flex-col items-center justify-center">
      <table class="w-full max-w-5xl border-collapse shadow-lg rounded-2xl overflow-hidden">
        <thead>
        <tr class="text-white">
          <th v-for="day in days" :key="day" class="px-6 py-3 text-lg font-semibold text-center">
            {{ day }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="slot in Math.max(...Object.values(currentWeekCourses).map(c => c.length), 1)" :key="slot"
            class="odd:bg-surface-600 even:bg-surface-700">
          <td v-for="day in days" :key="day" class="px-6 py-4 text-center border border-surface-900">
            <div v-if="currentWeekCourses[day][slot]" class="shadow-md rounded-lg p-4">
              <strong class="block text-lg text-blue-700">{{ currentWeekCourses[day][slot].title }}</strong>
              <span class="text-gray-700">{{ currentWeekCourses[day][slot].time }}</span><br>
              <span class="text-gray-600">{{ currentWeekCourses[day][slot].lecturer }}</span><br>
              <span class="text-gray-500">{{ currentWeekCourses[day][slot].room }}</span>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
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

.bg-table-odd{
  background-color: var(--p-surface-600);
}

.bg-table-even{
  background-color: var(--p-surface-700);
}

</style>
