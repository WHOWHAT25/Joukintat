<template>
  <div class="about_us tint">
    <div class="about_container">
      <div class="about_text">
        <p class="about_upperTitle">наши способности</p>
        <h1 class="about_title">УСЛУГИ</h1>
        <div class="line"></div>
      </div>
    </div>
    <div class="service-container">
      <div class="service" v-for="i in services">
        <div class="icon">
          <img :src="i.link">
        </div>
        <h2>{{i.name}}</h2>
      </div>
    </div>
    <div class="service-container_2">
      <div class="service" v-for="i in services_2">
        <div class="icon">
          <img :src="i.link">
        </div>
        <h2>{{i.name}}</h2>
      </div>
    </div>
    <div class="service-container_3">
      <div class="service" v-for="i in services_3">
        <div class="icon">
          <img :src="i.link">
        </div>
        <h2>{{i.name}}</h2>
      </div>
    </div>
    <div class="price">
      <div class="desc" :key="i" v-for="i in texts">
        <ul>
          <li>{{i.txt}}</li>
          <li>{{i.desc}}</li>
        </ul>
        <p>{{i.pri}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurServices",

  data() {
    return {
      services: [
        {link: "/img/TatooIcon.png", name: "ТАТУИРОВКА"},
        {link: "/img/SpeakIcon.png", name: "КОНСУЛЬТАЦИЯ"},
        {link: "/img/OverlapIcon.png", name: "ПЕРЕКРЫТИЕ"},
        {link: "/img/GamesIcon.png", name: "GAME-BREAK"},
      ],
      services_2: [
        {link: "/img/TatooIcon.png", name: "ТАТУИРОВКА"},
        {link: "/img/SpeakIcon.png", name: "КОНСУЛЬТАЦИЯ"},
      ],
      services_3: [
        {link: "/img/OverlapIcon.png", name: "ПЕРЕКРЫТИЕ"},
        {link: "/img/GamesIcon.png", name: "GAME-BREAK"},
      ],
      texts: [
        {txt: "Консультация мастера", desc: "", pri: "Бесплатно"},
        {txt: "Разработка индиидуального эскиза", desc: "при выполнении татуировки в нашей студии", pri: "Бесплатно"},
        {txt: "Game-break", desc: "игровой перерыв во время отдыха/ожидания", pri: "Бесплатно"},
        {txt: "Татуировка", desc: "в зависимости от сложности и места нанесения", pri: "от 5000₽"},
        {txt: "Перекрытие", desc: "в зависимости от сложности и места нанесения", pri: "от 5000₽"},
        {txt: "Коррекция нашей работы (после 2-х месяцев)", desc: "при правильном уходе с вашей стороны", pri: "от 3000₽"},
      ],
    }
  }
}

</script>

<style scoped>
.about_us {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
  padding-top: 30px;
  padding-bottom: 20px;
  background-image: url("../../public/img/TatooBack.jpg");
  background-position: center ;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  max-width: 100%;
  padding-inline: 50px;
}
.tint {
  background-color: rgba(0, 0, 0, 0.6);
  background-blend-mode: multiply;
}
.about_container {
  display: flex;
  flex-direction: column;
}
.about_text {
  padding-bottom: 2%;
}
.about_title {
  font-size: 50px;
}
.about_upperTitle {
  font-size: 18px;
  font-family: Roboto-thin;
}
.line {
  height: 2px;
  width: 100px;
  background: #ff8562;
  margin: 15px auto 0 auto;
}
.service-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  margin-inline: auto;
}
.service-container_2 {
  display: none;
}
.service-container_3 {
  display: none;
}
.service {
  display: flex;
  flex-direction: column;
  text-align: center;
  max-height: 300px;
  max-width: 300px;
  font-family: Roboto-thin;
  font-size: 18px;
  color: white;
  justify-content: center;
}
.icon {
  display: flex;
  justify-content: center;
  max-height: 200px;
  max-width: 200px;
  border: solid 2px #ff8562;
  border-radius: 100%;
  margin: 20px;
  padding: 25px;
}
.icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.price {
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  width: 100%;
  margin-inline: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-inline: 20px;
  background-color: #141414;
  border-radius: 20px;
  border: solid 2px #ff8562;
}
.desc {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  color: white;
  font-size: 18px;
}
.desc ul {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  text-align: left;
}
.desc ul li:nth-child(2) {
  font-size: 14px;
  color: #ff8562;
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
  .service-container {
    display: none;
  }
  .service-container_2 {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1024px;
  }
  .service-container_3 {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1024px;
  }
  .service {
    max-height: 220px;
    max-width: 220px;
    font-size: 16px;
  }
  .icon {
    max-height: 160px;
    max-width: 160px;
    margin: 15px;
    padding: 20px;
  }
  .price {
    max-width: 1024px;
  }
  .desc {
    font-size: 16px;
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
  .service-container {
    display: none;
  }
  .service-container_2 {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 768px;
  }
  .service-container_3 {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 768px;
  }
  .service {
    max-height: 180px;
    max-width: 180px;
    font-size: 12px;
  }
  .icon {
    max-height: 130px;
    max-width: 130px;
    margin: 10px;
    padding: 15px;
  }
  .price {
    max-width: 768px;
  }
  .desc {
    flex-direction: column;
    font-size: 14px;
    text-align: left;
  }
  .desc ul li:nth-child(2) {
    font-size: 12px;
  }
}
</style>