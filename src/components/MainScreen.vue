<template>
  <div class="intro">
    <div class="image">
      <img class="image_media" src="/img/TatooBack.jpg" alt="Фон">
    </div>
    <div class="intro_content">
      <div class="container">
        <h1 class="intro_title_1">joukintat</h1>
        <h2 class="intro_title_2">Студия энтузиастов с уникальными,
          качественными и оригинальными работами</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainScreen"
}
</script>

<style scoped>
/* Секция с адаптивными картинкой и текстом */
.intro {
  max-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.intro:after {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.intro_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
}
.intro_title_1 {
  font-size: 150px;
  font-family: Gothic_2;
}
.intro_title_2 {
  font-size: 28px;
  font-family: Puchka;
}
.container {
  width: 100%;
  margin: 0 auto;
}
.container h1, h2 {
  color: white;
  text-align: center;
}
.image {
  position: relative;
  padding-bottom: 56.25%;
  z-index: 1;
}
.image_media {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
}
@media screen and (max-width: 1024px) {
  .intro_title_1 {
    font-size: 100px;
    padding-top: 40px;
  }
  .intro_title_2 {
    font-size: 24px;
  }
}
@media screen and (max-width: 768px) {
  .intro_title_1 {
    font-size: 45px;
    padding-top: 40px;
  }
  .intro_title_2 {
    font-size: 14px;
  }
}
</style>
