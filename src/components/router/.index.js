import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: () => import('../views/HomePage')
        },
        {
            path: '/contact-us',
            name: 'ContactUs',
            component: () => import('../views/ContactUs')
        }
    ]
})

export default router