<script setup>
import MainScreen from "@/components/MainScreen.vue";
import AboutStudio from "@/components/AboutStudio.vue";
import StudioSlider from "@/components/StudioSlider.vue";
import OurServices from "@/components/OurServices.vue";
import OurMasters from "@/components/OurMasters.vue";
import OurWorks from "@/components/OurWorks.vue";
import Contacts from "@/components/OurContacts.vue";
import {ref} from "vue";

import {useCounterStore} from "@/stores/counter.js";
const store = useCounterStore()

const about = ref()
store.about = about

const works = ref()
store.works = works

const contacts = ref()
store.contacts = contacts

</script>

<template>
  <main class="main">
    <div>
      <MainScreen></MainScreen>
      <AboutStudio ref="about"></AboutStudio>
    </div>
    <StudioSlider></StudioSlider>
    <OurServices></OurServices>
    <Our-masters></Our-masters>
    <OurWorks ref="works"></OurWorks>
    <Contacts ref="contacts"></Contacts>
  </main>
</template>

<style>
.main {
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  background-color: #141414;
}
</style>
