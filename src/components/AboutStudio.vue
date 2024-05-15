<template>
  <div class="about_us">
    <div class="about_text_1">
      <p class="about_upperTitle">кто мы такие</p>
      <h1 class="about_title">О СТУДИИ</h1>
      <div class="line"></div>
    </div>
    <div class="about_text_2">
      <ul :key="i" v-for="i in texts">
        <li>{{i.link}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutStudio",

  data() {
    return {
      texts: [
        {link: "В ходе работы используются сертифицированное оборудование лучшие пигменты и стерильные одноразовые расходные материалы, что гарантирует качество и безопасность наших услуг."},
        {link: "Мы подготовим индивидуальный эскиз с учетом ваших пожеланий. Дадим совет как сделать татуировку лучше и гармонично её расположить под ваше тело. Любой масштаб татуировки для нас не проблема."},
        {link: "Всегда на связи! Готовы подробно вас проконсультировать до и после сеанса. Гарантируем сервис и комфорт с момента консультации до полного заживления татуировки."},
        {link: "У нас за спиной более 400 реальных работ! Мы знаем как придти к отличным результатам"},
      ],
    }
  }
}
</script>

<style scoped>
/* Секция - О студии */
.about_us {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 30px;
  max-width: 900px;
  margin-inline: auto;
  padding-inline: 20px;
  color: white;
}
.about_text_1 {
  padding-bottom: 2%;
}
.about_text_2 ul {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding-bottom: 10px;
}
.about_text_2 ul li {
  padding: 10px;
  font-size: 18px;
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
@media screen and (max-width: 1024px) {
  .about_us {
    max-width: 1024px;
    padding-inline: 30px;
  }
  .about_text_2 ul li {
    font-size: 16px;
  }
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
  .about_us {
    max-width: 768px;
    padding-inline: 50px;
  }
  .about_text_2 ul li {
    font-size: 12px;
  }
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
}
</style>