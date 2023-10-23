import {createRouter, createWebHistory} from 'vue-router'

import Home from "../views/Home.vue"
import About from "../views/About.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: {
            title: "HomePage"
        }
    },
    {
        path: "/about",
        name: "About",
        component: About,
        meta: {
            title: "AboutPage"
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
 });
export default router