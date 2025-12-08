<script setup>
defineProps({
  Image: String,
  ImageMessageAlt: String,
});

const checkSliderImeSRC = (value) => {
  if (value === null) return true;
  const str = String(value).trim();
  return str.length === 0 || str === "none";
};
</script>

<template>
  <div class="image-container">
    <div
      v-if="checkSliderImeSRC(Image)"
      class="stub"
      :style="{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }"
    >
      {{ ImageMessageAlt }}
    </div>
    <img v-else class="slider__image" :src="Image" :alt="ImageMessageAlt" />
  </div>
</template>

<style scoped>
.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stub {
  cursor: pointer;
  border-radius: 10px;
  background-color: gray;
  cursor: default;
  color: white;
  font-weight: bold;
}

.slider__image {
  cursor: pointer;
  object-fit: cover; /* Сохраняет пропорции, заполняет контейнер */
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>
