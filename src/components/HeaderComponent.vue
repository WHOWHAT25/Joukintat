<template>
  <header class="header">
    <div class="container">
      <div class="logo">joukintat</div>
      <div class="nav">
        <ul>
          <li>
            <button @click="scrollToAbout">О НАС</button>
          </li>
          <li>
            <button @click="scrollToWorks">НАШИ РАБОТЫ</button>
          </li>
          <li>
            <button @click="scrollToContacts">КОНТАКТЫ</button>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import {useCounterStore} from "@/stores/counter.js";
const store = useCounterStore()
const {scrollToAbout, scrollToWorks, scrollToContacts} = store

const navList = [
  {name: "О НАС", link: "scrollToAbout"},
  {name: "НАШИ РАБОТЫ", link: "scrollToWorks"},
  {name: "КОНТАКТЫ", link: "scrollToContacts"}
]
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
header {
  background-color: #111111;
  color: white;
  position: fixed;
  z-index: 100;
  width: 100%;
  padding-inline: 30px;
}
.logo {
  margin: 2%;
  font-family: Gothic_2;
  font-size: 22px;
}
.nav ul {
  display: flex;
  justify-content: center;
  gap: 50px;
}
.nav ul li {
  list-style-type: none;
  font-family: Gothic;
}
</style>