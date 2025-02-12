<script setup>
import Button from "primevue/button";
import {ref, watch} from "vue";

import ConfirmDialog from 'primevue/confirmdialog';
import {useConfirm} from "primevue/useconfirm";
import {useToast} from "primevue/usetoast";
import {DatePicker, FloatLabel} from "primevue";
import Dialog from "primevue/dialog";
import {Textarea} from "primevue";

const confirm = useConfirm();
const toast = useToast();

// Confirming Dialog

const showTemplate = () => {
  return new Promise((resolve, reject) => {
    confirm.require({
      group: 'templating',
      header: 'Bestätigung',
      message: 'Bitte bestätigen sie ihre An-/Abmeldung',
      icon: 'pi pi-exclamation-circle',
      rejectProps: {
        label: 'Cancel',
        icon: 'pi pi-times',
        outlined: true,
        size: 'small'
      },
      acceptProps: {
        label: 'Save',
        icon: 'pi pi-check',
        size: 'small'
      },
      accept: () => {
        toast.add({severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000});
        resolve(true);
      },
      reject: () => {
        toast.add({severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000});
        reject(true);
      }
    });
  })
};

const props = defineProps({
  title: String,
  description: String,
  lecturer: String,
  room: String,
  day: String,
  time: String,
  exam: Object,
  grade: String
})

let signDict
let sign
let examSign

const visible = ref(false);

if (!localStorage.getItem("sign")) {
  signDict = ref({})
  sign = ref(true)
  examSign = ref(true)
} else {
  console.log("--------------------------------------------------")
  console.log(localStorage.getItem("sign"));
  signDict = ref(JSON.parse(localStorage.getItem("sign")))
  let title = props.title
  console.log(signDict.value[title])
  sign = ref(!signDict.value[title])
  examSign = ref(!signDict.value[title + "Exam"])
}

watch(signDict, (newSign) => {
  localStorage.setItem("sign", JSON.stringify(newSign));
}, {deep: true});

const loading = ref(false);
const examLoading = ref(false);

const load = () => {
  console.log("Triggered load");

  loading.value = true;
  const out = ref({
    title: sign.value,
  })

  signDict.value[props.title] = sign.value;
  sign.value = !sign.value;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};
const examFunc = async () => {
  console.log("Triggered load");

  try {
    await showTemplate();

    examLoading.value = true;
    const out = ref({
      title: sign.value,
    })

    let title = props.title + "Exam"
    console.log(title)

    signDict.value[title] = examSign.value;
    examSign.value = !examSign.value;
    setTimeout(() => {
      examLoading.value = false;
    }, 2000);
  } catch (error) {
    console.log("Action was cancelled.");
  }
};
</script>

<template>

  <Dialog v-model:visible="visible" modal header="Feedback hinzufügen" :style="{ width: '25rem' }">
        <span class="text-surface-500 dark:text-surface-400 block mb-8">
          Fügen Sie Feedback für den Kurs <strong>{{ title }}</strong> hinzu
        </span>
    <div class="flex flex-col items-center w-full mb-4">
      <Textarea rows="10" cols="35"/>
    </div>
    <div class="flex justify-end gap-2">
      <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button>
      <Button type="button" label="Save" :loading="adding" @click="visible = false"></Button>
    </div>
  </Dialog>

  <div class="">
    <div class="intro-box" data-aos="fade-up"
         data-aos-delay="100">
      <div class="flex items-center justify-between w-full">
        <Button type="button" label="Feedback" outlined class="opacity-0 back"/>
        <h2 class="text-2xl flex-1 text-center">
          {{ title }}
        </h2>
        <Button type="button" label="Feedback" outlined @click="visible = true" />
      </div>
      <div class="flex flex-row gap-5 justify-center items-center">
        <div>
          <ul>
            <li>Beschreibung: {{ description }}</li>
            <li>Dozierender:
              <RouterLink to="profil">{{ lecturer }}</RouterLink>
            </li>
            <li>Raum: {{ room }}</li>
            <li>Tag: {{ day }}</li>
            <li>Uhrzeit: {{ time }}</li>
          </ul>
          <div v-if="sign">
            <Button type="button"
                    label="Anmelden"
                    icon="pi pi-pen-to-square"
                    :loading="loading"
                    @click="load"/>
          </div>
          <div v-else>
            <Button type="button"
                    label="Abmelden"
                    icon="pi pi-times-circle"
                    :loading="loading"
                    @click="load"/>
          </div>
        </div>
        <div>
          <div v-if="exam">
            <ul>
              <li>Prüfungsdatum: {{ exam.examDate }}</li>
              <li>Prüfungsuhrzeit: {{ exam.examTime }}</li>
              <li>Note: {{ grade }}</li>
            </ul>
            <Button v-if="examSign" type="button" label="Prüfungsanmeldung" :loading="examLoading" @click="examFunc"/>
            <Button v-else type="button" label="Prüfungsabmeldung" :loading="examLoading" @click="examFunc"></Button>
          </div>
        </div>
      </div>
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

.back{
  z-index: -15;
}
</style>