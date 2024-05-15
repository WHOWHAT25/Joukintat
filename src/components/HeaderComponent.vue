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

    <div class="container_2">
      <div class="logo">joukintat</div>
      <div class="nav">
        <ul>
          <li>
            <button @click="scrollToAbout">
              <img src="/img/IconHeadAbout.png">
            </button>
          </li>
          <li>
            <button @click="scrollToWorks">
              <img src="/img/IconHeadWorks.png">
            </button>
          </li>
          <li>
            <button @click="scrollToContacts">
              <img src="/img/IconHeadContacts.png">
            </button>
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
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.container_2 {
  display: none;
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
  font-size: 1.8em;
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
.nav button {
  font-size: 1.5em;
}

@media screen and (max-width: 1024px) {
  .container {
    display: none;
  }
  .container_2 {
    display: flex;
    width: 100%;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  }
  .logo {
    margin: 2%;
    font-family: Gothic_2;
    font-size: 1.8em;
  }
  .nav ul {
    gap: 25px;
  }
  .nav button {
    display: flex;
    justify-content: center;
  }
  img {
    max-width: 35px;
  }
}
@media screen and (max-width: 768px) {
  .container_2 {
    display: flex;
    width: 100%;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
  .logo {
    margin: 2%;
    font-family: Gothic_2;
    font-size: 1.5em;
  }
  .nav ul {
    gap: 25px;
  }
  .nav button {
    display: flex;
    justify-content: center;
  }
  img {
    max-width: 25px;
  }
}
</style>