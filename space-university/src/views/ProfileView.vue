<script setup>
import Box from '@/components/Box.vue'

const content = "<ul>" +
    "<li>Name: Professor Dozent</li>" +
    "<li>Email: professor@space-uni.all</li>" +
    "<li>Raum: BSG75</li>" +
    "<li>Sprechstunde: 11:00 - 12:30</li>" +
    "</ul>"
</script>

<template>
  <Box title="Dozent Profil" :content="content" />
</template>

<style scoped>

</style>