<template>
  <div class="container">
    <swiper class="slider"
            :space-between="50"
            :effect="'fade'"
            :autoplay=" {
              delay: 2500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
              loop: true,
            }"
            :modules="modules"
            :pagination="{
              clickable: true,
            }"
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
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

export default {
  name: "StudioSlider",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slideList: [
        {link: "/img/room1.jpeg"},
        {link: "/img/room2.jpeg"},
        {link: "/img/room3.jpeg"},
      ],
      modules: [EffectFade, Autoplay, Pagination],
    }
  }
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
    background-color: #ff8562;
  }
}
</style>
