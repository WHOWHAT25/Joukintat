<template>
  <div class="our_masters">
    <div class="about_masters">
      <p class="about_upperTitle">наши творцы</p>
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
        {link: "/img/AlexandrJoukin.jpeg", name: "Александр Joukin|Gun", text: "готика, трайбл, органика"},
        {link: "/img/AlinaGeksly.jpeg", name: "Алина Geksly", text: "гравюра, орнаментальные узоры"},
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
  font-size: 50px;
  color: white;
}
.about_upperTitle {
  font-size: 18px;
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
  border-radius: 20px;
  border: solid 2px #ff8562;
}
.master img {
  border-radius: 20px;
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
  font-size: 28px;
}
.master p{
  font-size: 16px;
  color: grey;
}
@media screen and (max-width: 1024px) {
  .about_title {
    font-size: 35px;
  }
  .about_upperTitle {
    font-size: 16px;
  }
  .line {
    height: 1px;
    width: 90px;
    margin: 10px auto 0 auto;
  }
}
@media screen and (max-width: 768px) {
  .about_title {
    font-size: 25px;
  }
  .about_upperTitle {
    font-size: 12px;
  }
  .line {
    height: 1px;
    width: 80px;
    margin: 5px auto 0 auto;
  }
  .our_masters {
    max-width: 768px;
  }
  .masters {
    gap: 10px;
  }
  .master {
    flex-direction: row;
  }
  .master img {
    max-width: 300px;
    max-height: 150px;
  }
  .info {
    justify-content: center;
    max-width: 150px;
  }
  .master h1{
    font-size: 25px;
  }
  .master p{
    font-size: 12px;
  }
}
</style>