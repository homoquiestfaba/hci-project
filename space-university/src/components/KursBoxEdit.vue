<script setup>
import Button from "primevue/button";
import Dialog from 'primevue/dialog';
import {ref} from "vue";
import InputText from "primevue/inputtext";
import {FloatLabel} from "primevue";
import {DatePicker} from "primevue";

const props = defineProps({
  title: String,
  description: String,
  lecturer: String,
  room: String,
  day: String,
  time: String,
})

const courses = ref(JSON.parse(localStorage.getItem("courses")))

const visible = ref(false)
const loading = ref(false);
const deleting = ref(false);
const adding = ref(false);

const examDate = ref("");
const examTime = ref("")

const load = () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const getFormattedTime = (date) => {
  if (!date) return "";
  return new Intl.DateTimeFormat("de-DE", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  }).format(date);
};

const getFormattedDate = (date) => {
  if (!date) return "";
  return new Intl.DateTimeFormat("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  }).format(date);
};

const add = async () => {
  adding.value = true;

  const out = ref({
    examDate: getFormattedDate(examDate.value),
    examTime: getFormattedTime(examTime.value)
  })

  for (let course in courses.value) {
    if (courses.value[course].title === props.title) {
      courses.value[course]["exam"] = out;
      console.log(courses.value[course]);
    }
  }

  await new Promise(resolve => setTimeout(resolve, 2000));

  adding.value = false;
  visible.value = false;
};

const del = () => {
  deleting.value = true;
  for (let course in courses.value) {
    if (courses.value[course].title === props.title) {
      console.log(course);
      let newCoursesList = courses.value.toSpliced(course, 1);
      console.log(newCoursesList);
      localStorage.setItem("courses", JSON.stringify(newCoursesList));
    }
  }

  setTimeout(() => {
    deleting.value = false;
  }, 2000);

  location.reload();
}
</script>

<template>
  <div class="">
    <div class="intro-box" data-aos="fade-up"
         data-aos-delay="100">
      <h2 class="text-2xl">
        {{ title }}
      </h2>
      <hr>
      <ul>
        <li>Beschreibung: {{ description }}</li>
        <li>Dozierender: {{ lecturer }}</li>
        <li>Raum: {{ room }}</li>
        <li>Tag: {{ day }}</li>
        <li>Uhrzeit: {{ time }}</li>
      </ul>
      <Button type="button"
              label="Bearbeiten"
              icon="pi pi-pencil"
              :loading="loading"
              @click="load"/>

      <Button type="button"
              label="Prüfung"
              icon="pi pi-plus-circle"
              @click="visible = true"/>
      <Dialog v-model:visible="visible" modal header="Prüfung hinzufügen" :style="{ width: '25rem' }">
        <span class="text-surface-500 dark:text-surface-400 block mb-8">
          Fügen Sie der Prüfung für den Kurs <strong>{{ title }}</strong> einen Termin hinzu
        </span>
          <div class="flex flex-col items-center w-full gap-4 mb-4">
            <FloatLabel variant="in">
              <DatePicker id="date" class="flex-auto" v-model="examDate" dateFormat="dd/mm/yy"/>
              <label>Datum</label>
            </FloatLabel>
            <FloatLabel variant="in">
              <DatePicker id="email" class="flex-auto" v-model="examTime" timeOnly/>
              <label>Uhrzeit</label>
            </FloatLabel>
          </div>
        <div class="flex justify-end gap-2">
          <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
          <Button type="button" label="Save" :loading="adding" @click="add"></Button>
        </div>
      </Dialog>

      <Button type="button"
              label="Löschen"
              icon="pi pi-trash"
              :loading="deleting"
              @click="del"/>
    </div>
  </div>
</template>

<style scoped>
.intro-box {
  @apply flex flex-col items-center gap-4 border-2 rounded-md shadow-xl m-10 p-10;
  border-color: var(--p-contrast-2);
}

ul {
  list-style: none;
}
</style>