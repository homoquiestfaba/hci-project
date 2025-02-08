<template>
  <div class="grid grid-cols-2 gap-8 mt-10">
    <div class="intro-box zoom" data-aos="fade-up" data-aos-delay="100">
      <h2 class="text-2xl">
        Kurse
      </h2>
      <hr>
    </div>
    <RouterLink to="/stundenplan">
    <div class="intro-box zoom" data-aos="fade-up" data-aos-delay="100">
      <h2 class="text-2xl">
        Stundenplan
      </h2>
      <hr>
    </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.zoom {
  transition: transform .2s;
}

.zoom:hover {
  transform: scale(1.05);
}

.intro-box {
  @apply flex flex-col items-center gap-4 border border-2 border-orange-700 rounded-md shadow-xl m-10 p-10
}
</style>
<script setup lang="ts">
</script>