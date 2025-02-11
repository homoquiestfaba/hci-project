<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import Intro from '../components/Intro.vue'
import kurse from "@/assets/data/kurse.js";
import StudentView from "@/views/StudentView.vue";
import DozentView from "@/views/DozentView.vue";
import {ref, onMounted} from "vue";
import {useRouter} from "vue-router";

const test = localStorage.getItem('courses');
if (!test) {
  localStorage.setItem('courses', JSON.stringify(kurse.value));
}


const loginTest = ref(null)
const userStudent = ref(JSON.parse(localStorage.getItem("student")))
const userLecturer = ref(JSON.parse(localStorage.getItem("lecturer")))

/*
const studentLoggedIn = computed(() => userStudent.value.login);

console.log(userStudent.value.login)
*/

</script>

<template>
  <main>
    <Intro></Intro>
  </main>
</template>
