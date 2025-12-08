<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { addsListForSlider as SliderItems } from "../../../../../../data/data";
import HeroSliderItem from "./HeroSliderItem.vue";

const swiperInstance = ref(null);

const onSwiperReady = (swiper) => {
  swiperInstance.value = swiper;
};

const slideNext = () => {
  swiperInstance.value?.slideNext();
};

const slidePrev = () => {
  swiperInstance.value?.slidePrev();
};

onMounted(() => {
  if (swiperInstance.value) {
    const middleIndex = Math.floor(SliderItems.length / 2);
    swiperInstance.value.slideTo(middleIndex);
  }
});
</script>

<template>
  <div class="slider__wrapper--grid">
    <Swiper
      @swiper="onSwiperReady"
      :modules="[]"
      :slidesPerView="'auto'"
      :spaceBetween="5"
      :autoplay="false"
      :breakpoints="{
        320: {
          slidesPerView: 'auto',
          spaceBetween: 5,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 'auto',
          spaceBetween: 5,
          centeredSlides: true,
        },
      }"
      :loop="true"
      class="my-swiper"
    >
      <SwiperSlide v-for="(item, index) in SliderItems" :key="index">
        <HeroSliderItem :ImageLink="item.image" :ImageName="item.name" />
      </SwiperSlide>
    </Swiper>

    <div class="custom-prev" @click="slidePrev"></div>
    <div class="custom-next" @click="slideNext"></div>
  </div>
</template>

<style scoped>
.slider__wrapper--grid {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: visible;
  position: relative;
}

.my-swiper {
  width: 100%;
  height: 100%;
}

:deep(.swiper-wrapper) {
  align-items: center;
}

/* Стили для слайдов */
:deep(.swiper-slide) {
  width: auto; /* Автоматическая ширина */
  height: auto !important; /* Убираем фиксированную высоту */
  transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
  opacity: 0.6;
  display: flex;
  justify-content: center;
  align-items: center; /* Добавлено */
}

/* Активный слайд */
:deep(.swiper-slide-active) {
  width: 680px;
  height: auto; /* Автоматическая высота */
  opacity: 1;
  z-index: 2;
}

/* Неактивные слайды - меньшая ширина */
:deep(.swiper-slide):not(.swiper-slide-active) {
  width: 380px; /* Ширина неактивных слайдов */
}

.custom-prev,
.custom-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 25%;
  height: 250px;
  background-color: transparent;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: transparent;
  font-size: 20px;
}

.custom-prev {
  left: 10px;
}

.custom-next {
  right: 10px;
}
</style>
