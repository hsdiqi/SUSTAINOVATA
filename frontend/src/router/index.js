import { createRouter, createWebHistory } from "vue-router";

import Home from "@pages/home.vue";
import About from "@pages/about.vue";
import Programs from "@pages/programs.vue";
import Publications from "@pages/publication.vue";
import Kemitraan from "@pages/kemitraan.vue";
import News from "@pages/news.vue";
import Contact from "@pages/contact.vue";
import Research from "@pages/research.vue";

import Login from "@pages/auth/login.vue";
import Register from "@pages/auth/register.vue";
import ForgotPass from "@pages/auth/forgotPass.vue";

import NotFound from "@pages/notFound/notFound.vue";

import Dashboard from "@adminPage/dashboard.vue";
import Program from "@kelola/program.vue";
import Publikasi from "@kelola/publikasi.vue";
import Berita from "@kelola/berita.vue";
import TambahProgram from "@tambah/program.vue";
import TambahPublikasi from "@tambah/publikasi.vue";
import TambahBerita from "@tambah/berita.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/programs",
    name: "programs",
    component: Programs,
  },
  {
    path: "/publications",
    name: "publications",
    component: Publications,
  },
  {
    path: "/kemitraan",
    name: "kemitraan",
    component: Kemitraan,
  },
  {
    path: "/news",
    name: "news",
    component: News,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  {
    path: "/research",
    name: "research",
    component: Research,
  },
  // auth routes
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/forgotPass",
    name: "forgotPass",
    component: ForgotPass,
  },

  // Admin Routes
  {
    path: "/admin/dashboard",
    name: "dashboardAdmin",
    component: Dashboard,
  },
  {
    path: "/admin/kelola/program",
    name: "programAdmin",
    component: Program,
  },
  {
    path: "/admin/kelola/publikasi",
    name: "publikasiAdmin",
    component: Publikasi,
  },
  {
    path: "/admin/kelola/berita",
    name: "beritaAdmin",
    component: Berita,
  },
  {
    path: "/admin/tambah/program",
    name: "tambahProgramAdmin",
    component: TambahProgram,
  },
  {
    path: "/admin/tambah/publikasi",
    name: "tambahPublikasiAdmin",
    component: TambahPublikasi,
  },
  {
    path: "/admin/tambah/berita",
    name: "tambahBeritaAdmin",
    component: TambahBerita,
  },
  // not found
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
