<script setup>
import {ref, onMounted} from "vue";
import KursBox from "@/components/KursBox.vue";
import kurse from "@/assets/data/kurse.js";

// Reactive variable to store the courses
const data = ref([]);

// Load courses from localStorage or use default data
const storedKurse = localStorage.getItem("courses");
if (storedKurse) {
  data.value = JSON.parse(storedKurse);
} else {
  data.value = defaultKurse;
  localStorage.setItem("courses", JSON.stringify(kurse));
}
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
          :time="kurs.time"/>
    </div>
  </div>
</template>
