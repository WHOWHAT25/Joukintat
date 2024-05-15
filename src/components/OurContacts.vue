<template>
  <div class="our_contacts">
    <div class="about_contacts">
      <p class="about_upperTitle">связь с нами</p>
      <h1 class="about_title">КОНТАКТЫ</h1>
      <div class="line"></div>
    </div>
    <div class="road_map">
      <div class="map_text">
        <h1>joukintat</h1>
        <p>+ 7 (952) 882-06-01</p>
        <p>ул.Сергея лазо 17</p>
        <div class="nav">
          <div v-for="i in foot">
            <a :href="i.link" target="_blank">
              <img :src="i.img">
            </a>
          </div>
        </div>
      </div>
      <div class="map">
        <YandexMap
            :settings="{
              location: {
                center,
                zoom: 16,
              },
            }"

            >
          <YandexMapDefaultSchemeLayer :settings="{ theme: 'dark' }" />
          <YandexMapDefaultFeaturesLayer />
          <YandexMapControls :settings="{ position: 'right' }">
            <YandexMapZoomControl />
          </YandexMapControls>
          <YandexMapMarker
              :settings="{
            coordinates: center,
             }"
              position="top left-center"
          >
            <img class="pin" src="/img/map-pin.png">
          </YandexMapMarker>
        </YandexMap>
      </div>
    </div>
  </div>
</template>

<script>
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapControls,
  YandexMapZoomControl,
  YandexMapMarker
} from "vue-yandex-maps";

export default {
  data() {
    return {
      center: ["85.038154", "56.517331"],
      foot: [
        {img: "/img/IconInst.png", link: "https://www.instagram.com/joukkin?igsh=Y25jdjAzZXRzMnVt"},
        {img: "/img/IconTelegram.png", link: "https://t.me/jouukin"},
        {img: "/img/IconVK.png", link: "https://vk.com/rampforever"},
      ],
    }
  },

  components: {
    YandexMap,
    YandexMapDefaultSchemeLayer,
    YandexMapDefaultFeaturesLayer,
    YandexMapControls,
    YandexMapZoomControl,
    YandexMapMarker
  }
}
// const center = ["85.038154", "56.517331"]
</script>

<style scoped>
.our_contacts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 50px;
}
.about_contacts {
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
.pin {
  display: block;
  margin: auto;
}
.road_map {
  display: flex;
  justify-content: center;
}
.map_text {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  background-color: white;
  border-radius: 25px 0 0 25px;
  border: solid 2px #ff8562;
  border-right: none;
}
.map_text h1 {
  font-family: Gothic_2;
  font-size: 50px;
}
.map_text p {
  font-family: Roboto;
  font-size: 18px;
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: black;
  border-radius: 20px;
  padding: 5px;
}
.nav img {
  max-height: 35px;
  max-width: 35px;
  margin: 5px;
}
.map {
  display: flex;
  justify-content: center;
  height: 400px;
  width: 700px;
  border: solid 2px #ff8562;
}
@media screen and (max-width: 1024px) {
  .our_contacts {
    padding-top: 0;
    padding-bottom: 0;
    max-width: 1024px
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
  .road_map {
    display: flex;
    justify-content: center;
  }
  .map_text {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    border-radius: 25px 0 0 25px;
    border: solid 2px #ff8562;
  }
  .map_text h1 {
    font-family: Gothic_2;
    font-size: 35px;
  }
  .map_text p {
    font-family: Roboto;
    font-size: 16px;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: black;
    border-radius: 20px;
    padding: 5px;
  }
  .nav img {
    max-height: 35px;
    max-width: 35px;
    margin: 5px;
  }
  .map {
    display: flex;
    justify-content: center;
    height: 300px;
    width: 500px;
    border: solid 2px #ff8562;
  }
}
@media screen and (max-width: 768px) {
  .our_contacts {
    padding-top: 0;
    padding-bottom: 0;
    max-width: 768px
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
  .road_map {
    flex-direction: column;
    align-items: center;
  }
  .map_text {
    align-items: center;
    border-radius: 25px 25px 0 0;
    border: solid 2px #ff8562;
    width: 350px;
  }
  .map_text h1 {
    font-size: 25px;
  }
  .map_text p {
    font-size: 12px;
  }
  .nav img {
    max-height: 25px;
    max-width: 25px;
    margin: 5px;
  }
  .map {
    height: 250px;
    width: 350px;
    border-top: none;
  }
}
</style>