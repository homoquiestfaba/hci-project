<script setup>
const props = defineProps({
  title: String,
  content: Array | String,
  click: Boolean
})
</script>

<template>
  <div :class="{zoom:click}">
    <div class="intro-box" :class="{clickable:click, 'border-orange-700':!click}" data-aos="fade-up"
         data-aos-delay="100">
      <h2 class="text-2xl">
        {{ title }}
      </h2>
      <hr>
      <div v-if="content">
        <div v-html="content">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro-box {
  @apply flex flex-col items-center gap-4 border border-2 rounded-md shadow-xl m-10 p-10
}
</style>