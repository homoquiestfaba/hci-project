<script setup>
import HelloWorld from '../components/HelloWorld.vue'
import Intro from '../components/Intro.vue'
import kurse from "@/assets/data/kurse.js";

const test = localStorage.getItem('courses');
if(!test) {
  localStorage.setItem('courses', JSON.stringify(kurse));
}
</script>

<template>
  <main>
    <Intro></Intro>
  </main>
</template>
