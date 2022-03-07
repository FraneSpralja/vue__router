import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'portada',
        component: Home
    },
    {
        path: '/sobremi',
        name: 'Sobre-mi',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/contacto',
        name: 'Contacto',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Contacto.vue')
    },
    {
        path: '/post/:id',
        name: 'Article',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Article.vue')
    },
    {
        path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/NotFound.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router