<script setup>
import KursBox from "@/components/KursBox.vue";
import kurse from "@/assets/data/kurse.js"

const data = kurse

</script>

<template>
  <div class="grid grid-cols-2 gap-8 mt-10">
    <div v-for="kurs in data">
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

<style scoped>

</style>