import { createRouter, createWebHistory } from 'vue-router';
import HomeView from "../views/HomeView.vue";

const routes = [
    {
        path: '/',
        name: 'default',
        children: [
            {
                path: '',
                name: 'home',
                component: HomeView
            },
            {
                path: 'info',
                name: 'info',
                component: () => import('../views/RulesView.vue')
            },
            {
                path: 'invite',
                name: 'invite',
                component: () => import('../views/InviteView.vue')
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;