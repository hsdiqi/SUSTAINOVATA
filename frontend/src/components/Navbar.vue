<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo/Logo.png" alt="Logo" height="50">
      </a>
      
      <!-- Hamburger button for mobile -->
      <button 
        class="navbar-toggler" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarContent" 
        aria-controls="navbarContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <!-- Navigation items -->
      <div class="collapse navbar-collapse" id="navbarContent">
        <ul class="navbar-nav ms-auto mb-0 mb-lg-0">
          <li v-for="(item, index) in navItems" :key="index" class="nav-item d-flex align-items-center justify-content-center">
            <router-link class="nav-link" :to="item.path" active-class="active">
              {{ item.name }}
            </router-link>
          </li>
          <li class="nav-item ms-2 position-relative">
            <PopupOverlay 
              :is-logged-in="isLoggedIn" 
              :user="user"
              @login="handleLogin"
              @register="handleRegister"
              @dashboard="handleDashboard"
              @logout="handleLogout"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import PopupOverlay from './PopupOverlay.vue';
import { getToken, getUser, logout } from '../utils/auth';
import axios from 'axios';

const router = useRouter();
const isLoggedIn = ref(false);
const user = ref({});

// Navigation items
const navItems = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang Kami', path: '/about' },
  { name: 'Program & Inovasi', path: '/programs' },
  { name: 'Publikasi Ilmiah', path: '/publications' },
  { name: 'Pusat Riset', path: '/research' },
  { name: 'Berita', path: '/news' },
  { name: 'Kemitraan', path: '/kemitraan' },
  { name: 'Kontak', path: '/contact' }
];

onMounted(() => {
  const token = getToken();
  const userData = getUser();

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    isLoggedIn.value = true;
    console.log('Token found:', token);
    console.log('User found:', userData);
    user.value = userData;
  } else {
    console.log('No token found');
  }
});

// Methods
const handleLogin = () => {
  router.push('/login');
  // console.log('Login clicked');
};

const handleRegister = () => {
  router.push('/register');
  // console.log('Register clicked');
};

const handleLogout = () => {
  console.log('Logout clicked');
  logout();
  isLoggedIn.value = false;
  user.value = {};
};

const handleDashboard = () => {
  if (user.value.role === 'admin') {
    router.push('/admin/dashboard');
  } else {
    router.push('/dashboard');
  }
};
</script>

<style scoped>
.navbar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.navbar-nav .nav-link {
  color: #000;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #4CAF50;
}

.navbar-nav .nav-link.active {
  color: #4CAF50;
  font-weight: 600;
}

/* For proper spacing between nav items */
@media (min-width: 992px) {
  .navbar-nav .nav-item {
    margin: 0 0.25rem;
  }
}

/* Improved mobile menu */
@media (max-width: 991.98px) {
  .navbar-collapse {
    padding: 1rem 0;
  }
  
  .navbar-nav .nav-item {
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
  }
}
</style>
