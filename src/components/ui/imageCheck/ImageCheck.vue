<script setup>
defineProps({
    Image: String,
    ImageMessageAlt: String
})

const checkSliderImeSRC = (value) => {
    // Booleand value (false or true)
    if (value === null) return true

    const str = String(value).trim()

    return str.length === 0 || str === "none"
}
</script>

<template>
    <div>
        <div
            v-if="checkSliderImeSRC(Image)"
            class="stub"
            style="width: 600px; height: 320px;"
        >
            {{ ImageMessageAlt }}
        </div>
        <img
            v-else 
            :src="Image"
            :alt="ImageMessageAlt"
        >
    </div>
</template>

<style scoped>
    .stub {
        border-radius: 10px;
        background-color: gray;
        cursor: default;
    }
</style>
