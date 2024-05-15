<template>
  <footer>
    <div class="logo">joukintat</div>
    <div class="phone">
      <img src="/img/IconPhone.png">
      <p>+ 7 (952) 882-06-01</p>
    </div>
    <div class="nav">
      <div v-for="i in foot">
        <a :href="i.link" target="_blank">
          <img :src="i.img">
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      foot: [
        {img: "/img/IconInst.png", link: "https://www.instagram.com/joukkin?igsh=Y25jdjAzZXRzMnVt"},
        {img: "/img/IconTelegram.png", link: "https://t.me/jouukin"},
        {img: "/img/IconVK.png", link: "https://vk.com/rampforever"},
      ],
    }
  }
}
</script>

<style scoped>
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #0a0a0a;
  color: white;
  width: 100%;
  padding-inline: 30px;
}
footer img {
  max-height: 50px;
  max-width: 50px;
  margin: 5px;
}
.logo {
  margin: 2%;
  font-family: Gothic_2;
  font-size: 1.8em;
}
.phone {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5em;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (max-width: 1024px) {
  footer img {
    max-height: 35px;
    max-width: 35px;
    margin: 10px;
  }
  .logo {
    margin: 2%;
    font-size: 1.8em;
  }

}
@media screen and (max-width: 768px) {
  footer img {
    max-height: 25px;
    max-width: 25px;
    margin: 5px;
  }
  .logo {
    margin: 2%;
    font-size: 1.5em;
  }
  .phone {
    display: none;
  }
}
</style>