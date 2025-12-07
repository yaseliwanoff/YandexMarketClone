<script setup>
import Header from '../ui/header/Header.vue';
import Footer from '../ui/footer/Footer.vue';

import Home from '../../pages/Home.vue';
</script>

<template>
    <Header />
    <main class="container">
        <Home />
    </main>
    <Footer />
</template>

<style scoped>
    .container {
        max-width: 1148px;
        width: 100%;
        padding: 0px 40px;
        margin: 0 auto;
    }
</style>
