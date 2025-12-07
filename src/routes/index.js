import { createMemoryHistory, createRouter } from "vue-router";

import Home from "../pages/Home.vue";

const routesList = [
    { path: "/", component: Home },
];

export const router = createRouter({
    routes: routesList,
    history: createMemoryHistory(),
});
