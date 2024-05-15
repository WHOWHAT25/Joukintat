<template>
  <div class="container">
    <swiper class="slider"
            :autoplay="{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
              loop: true,
            }"
            :modules="modules"
            :pagination="{
              clickable: true,
            }"
            v-show="slideList"
    >
      <swiper-slide v-for="item in slideList" class="slider_slide">
        <div class="slide_img">
          <img :src="item.link">
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

export default {
  name: "StudioSlider",
  data() {
    return {
      slideList: [
        {link: "/img/room1.jpeg"},
        {link: "/img/room2.jpeg"},
        {link: "/img/room3.jpeg"},
      ],
      modules: [EffectFade, Autoplay, Pagination],
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
}
</script>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  padding-bottom: 50px;
}
.slider {
  max-width: 900px;
  max-height: 500px;
  border-radius: 20px;
  border: solid 2px #ff8562;
}
.slider_slide {
  display: flex;
  justify-content: center;
}
.slide_img {
  max-width: 900px;
  max-height: 500px;
}
.slide_img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper {
  :deep(.swiper-pagination-bullets) {
    bottom: 10%;
  }
  :deep(.swiper-pagination-bullet-active) {
    background-color: #ff8562 !important;
  }
  :deep(.swiper-pagination-bullet) {
    background-color: black;
    border: solid 1px #282828;
    height: 15px;
    width: 15px;
    margin: 0 10px;
  }
}
@media screen and (max-width: 1024px) {
  .slider {
    max-width: 600px;
    max-height: 100%;
  }
  .slide_img {
    max-height: 400px;
  }
}
@media screen and (max-width: 768px) {
  .slider {
    max-width: 350px;
    max-height: 100%;
  }
  .slide_img {
    max-height: 100%;
  }
}
</style>
