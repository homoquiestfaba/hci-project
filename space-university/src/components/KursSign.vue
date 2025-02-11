<script setup>
import {ref, watch} from "vue";
import KursBox from "@/components/KursBox.vue";
import kurse from "@/assets/data/kurse.js";

// Reactive variable to store the courses
const data = ref([]);

// Load courses from localStorage or use default data
let storedKurse = localStorage.getItem("courses");
if (storedKurse) {
  data.value = JSON.parse(storedKurse);
  console.log(JSON.parse(storedKurse));
} else {
  data.value = kurse.value;
  console.log("In else");
  console.log(data.value);
  localStorage.setItem("courses", JSON.stringify(kurse.value));
}
// Watch for updates and sync them to localStorage
watch(data, (newData) => {
  localStorage.setItem("courses", JSON.stringify(newData));
}, { deep: true });

</script>

<template>
  <div class="grid grid-cols-2 gap-8 mt-10">
    <div v-for="kurs in data" :key="kurs.title">
      <KursBox
          :title="kurs.title"
          :description="kurs.description"
          :lecturer="kurs.lecturer"
          :room="kurs.room"
          :day="kurs.day"
          :time="kurs.time"
          :exam="kurs.exam"/>
    </div>
  </div>
</template>
