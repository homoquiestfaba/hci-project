<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import {FloatLabel} from "primevue";
import Password from 'primevue/password';
import Menubar from 'primevue/menubar'
import {RouterLink, RouterView} from 'vue-router'
import ConfirmDialog from "primevue/confirmdialog";
import kurse from "@/assets/data/kurse.js";
import {onMounted, ref} from 'vue';
import {useRouter} from 'vue-router';


const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/'
  },
  {
    label: 'Rolle',
    icon: 'pi pi-user',
    items: [
      {
        label: 'Studierende',
        route: 'student'
      },
      {
        label: 'Dozierende',
        route: 'dozent'
      }
    ]
  },
  {
    label: 'Campus',
    icon: 'pi pi-map',
    route: 'campus'
  }
]);
const router = useRouter();

const logInField = ref(true)

let student
let lecturer

const studentTest = localStorage.getItem('student');
if (!studentTest) {
  student = ref({
    login: false,
    exams: []
  })
  localStorage.setItem('student', JSON.stringify(student.value));
} else {
  student = ref(JSON.parse(localStorage.getItem('student')));
}

const lecturerTest = localStorage.getItem('lecturer');
if (!lecturerTest) {
  lecturer = ref({
    login: false,
  })
  localStorage.setItem('lecturer', JSON.stringify(lecturer.value));
} else {
  lecturer = ref(JSON.parse(localStorage.getItem('lecturer')));
}

if (student.value.login) {
  logInField.value = false;
} else {
  if (lecturer.value.login) {
    logInField.value = false;
  }
}

const loading = ref(false);
const user = ref('')
const pass = ref('')

const load = () => {
  if (user.value === "student") {
    student.value.login = true;
    logInField.value = false;
    router.push("/student");
    localStorage.setItem('student', JSON.stringify(student.value));
    console.log(student.value);
  } else{
    if (user.value === "dozent"){
      lecturer.value.login = true;
      logInField.value = false;
      router.push("/dozent");
      localStorage.setItem('lecturer', JSON.stringify(lecturer.value));
    }
  }
  user.value = '';
  pass.value = '';
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 2000);
};

const signout = () => {
  if (student.value.login){
    student.value.login = false;
    localStorage.setItem('student', JSON.stringify(student.value));
  } else{
  if (lecturer.value.login){
    lecturer.value.login = false;
    localStorage.setItem('lecturer', JSON.stringify(lecturer.value));
  }}
  router.push("/");
  logInField.value = true;
}
</script>

<template>
  <ConfirmDialog group="templating">
    <template #message="slotProps">
      <div class="flex flex-col items-center w-full gap-4 border-b border-surface-200 dark:border-surface-700">
        <i :class="slotProps.message.icon" class="!text-6xl text-primary-500"></i>
        <p>{{ slotProps.message.message }}</p>
      </div>
    </template>
  </ConfirmDialog>

  <header>
    <div data-aos="fade-down" data-aos-duration="5000" class="shadow-2xl grid grid-cols-3 gap-10 items-center">
      <div class="flex flex-row justify-center items-center gap-3">
        <img alt="Vue logo" class="rounded-full" src="@/assets/gate.jpg" width="80" height="50"/>
        <h1 class="text-3xl tracking-wide">Tannhäuser Gate</h1>
      </div>
      <div class="card !rounded-md flex flex-row justify-center items-center">
        <Menubar :model="items" class="">
          <template #item="{ item, props, hasSubmenu }">
            <div class="">
              <RouterLink v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                  <span :class="item.icon"/>
                  <span>{{ item.label }}</span>
                </a>
              </RouterLink>
              <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
                <span :class="item.icon"/>
                <span>{{ item.label }}</span>
                <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down"/>
              </a>
            </div>
          </template>
        </Menubar>
      </div>
      <div v-if="logInField">
        <div class="flex flex-row gap-7 justify-center">
          <div class="flex flex-col gap-3 justify-center">
            <InputText v-model="user" name="username" type="text" placeholder="Username"
                       class="w-full"/>
            <Password v-model="pass" name="password" toggleMask :feedback="false" placeholder="Passwort"
                      class="bg-transparent"/>
          </div>
          <div class="card flex justify-center">
            <Button class="my-10" type="button" label="Einloggen" icon="pi pi-sign-in"
                    :loading="loading" @click="load"/>
          </div>
        </div>
      </div>
      <div v-if="!logInField">
        <div class="flex flex-row gap-7 justify-center">
          <div class="flex flex-col gap-3 justify-center opacity-0 back">
            <InputText type="text" placeholder="..."></InputText>
            <InputText type="text" placeholder="..."></InputText>
          </div>
          <div class="card flex justify-center">
            <Button type="button" label="Abmelden" @click="signout" class="my-10"/>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div>
    <div class="pb-14"></div>
    <RouterView data-aos="fade-down" data-aos-duration="4000" class="write"/>
  </div>
</template>

<script>
</script>

<style scoped>
/*
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}*/
.custom-round {
  @apply rounded-full border-none
}

.write {
  color: var(--p-primary-contrast-color);
}

.back{
  z-index: -1;
}
</style>
