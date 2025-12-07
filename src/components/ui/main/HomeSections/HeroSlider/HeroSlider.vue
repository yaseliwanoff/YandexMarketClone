<script setup>
import { ref } from "vue";
import "./HeroSlider.css"
import HeroSliderWrapper from "./components/HeroSliderWrapper.vue";

const currentSlideIndex = ref(0);

const setCurrentSlideIndex = (value) => {
    currentSlideIndex(value)
}

</script>

<template>
    <div>hero slider</div>
    <div>
        <HeroSliderWrapper :current-index="currentSlideIndex" />
    </div>
</template>
