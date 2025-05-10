import { createRouter, createWebHistory } from "vue-router";

import Home from '../page/Home.vue'
import About from '../page/About.vue'
import Programs from '../page/programs.vue'
import Publications from '../page/publication.vue'
import Kemitraan from '../page/kemitraan.vue'
import News from '../page/news.vue'
import Contact from '../page/contact.vue'
import Research from '../page/research.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/programs',
        name: 'programs',
        component: Programs
    },
    {
        path: '/publications',
        name: 'publications',
        component: Publications
    },
    {
        path: '/kemitraan',
        name: 'kemitraan',
        component: Kemitraan
    },{
        path: '/news',
        name: 'news',
        component: News
    },{
        path: '/contact',
        name: 'contact',
        component: Contact
    },{
        path: '/research',
        name: 'research',
        component: Research
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router