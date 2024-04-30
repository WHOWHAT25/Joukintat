<template>
  <div class="our_masters">
    <div class="about_masters">
      <p class="about_upperTitle">наш коллектив</p>
      <h1 class="about_title">МАСТЕРА</h1>
      <div class="line"></div>
    </div>
    <div class="masters">
      <div class="master" v-for="i in masters">
        <img :src="i.link">
        <div class="info">
          <h1>{{i.name}}</h1>
          <p>{{i.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurMasters",

  data() {
    return {
      masters: [
        {link: "/img/AlexandrJoukin.jpeg", name: "Александр Joukin|Gun", text: "Готика, трайбл, органика"},
        {link: "/img/AlinaGeksly.jpeg", name: "Алина Geksly", text: "Гравюра, орнаментальные узоры"},
      ],
    }
  }
}
</script>

<style scoped>
.our_masters {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 50px;
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 20px;
}
.about_masters {
  padding-bottom: 2%;
}
.about_title {
  font-size: 40px;
  color: white;
}
.about_upperTitle {
  font-size: 14px;
  font-family: Roboto-thin;
  color: white;
}
.line {
  height: 2px;
  width: 100px;
  background: #ff8562;
  margin: 15px auto 0 auto;
}
.masters {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.master {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: white;
  padding: 10px;
  border-radius: 10%;
  border: solid 2px #ff8562;
}
.master img {
  border-radius: 10%;
  max-width: 300px;
  max-height: 300px;
}
.info {
  display: flex;
  flex-direction: column;
  max-width: 280px;
  text-overflow: ellipsis;
}
.master h1{
  font-family: Gothic_2;
  font-size: 24px;
}
.master p{
  font-size: 14px;
  color: grey;
}
</style>