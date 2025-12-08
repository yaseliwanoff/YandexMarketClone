<script setup>
import ImageCheck from "../../../../imageCheck/ImageCheck.vue";

defineProps({
  ImageLink: String,
  ImageName: String,
});
</script>

<template>
  <div class="slider__block">
    <ImageCheck :-image="ImageLink" :-image-message-alt="ImageName" />
  </div>
</template>

<style scoped>
.slider__block {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Важно для правильного отображения */
}

/* Убедитесь, что изображения растягиваются */
.slider__block img {
  width: 100%;
  height: 100%; /* Занимает всю высоту блока */
  object-fit: cover; /* Сохраняет пропорции, заполняет контейнер */
  display: block;
  border-radius: 6px;
}

/* Для активного слайда - высота больше */
:deep(.swiper-slide-active) .slider__block {
  height: 320px; /* Высота активного слайда */
}

/* Для неактивных слайдов - меньшая высота */
:deep(.swiper-slide:not(.swiper-slide-active)) .slider__block {
  height: 250px; /* Высота неактивных слайдов */
}
</style>
