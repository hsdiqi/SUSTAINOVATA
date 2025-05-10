<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white ">
    <div class="container">
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img src="../assets/logo/Logo.png" alt="Logo" height="50">
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
          <li class="nav-item d-flex align-items-center justify-content-center">
            <a class="nav-link " href="/">Beranda</a>
          </li>
          <li class="nav-item d-flex align-items-center justify-content-center">
            <a class="nav-link" href="/about">Tentang Kami</a>
          </li>
          <li class="nav-item d-flex align-items-center justify-content-center">
            <a class="nav-link" href="/programs">Program & Inovasi</a>
          </li>
          <li class="nav-item d-flex align-items-center justify-content-center">
            <a class="nav-link" href="/publications">Publikasi Ilmiah</a>
          </li>
          <li class="nav-item d-flex align-items-center justify-content-center">
            <a class="nav-link" href="/research">Pusat Riset</a>
          </li>
          <li class="nav-item d-flex align-items-center justify-content-center">
            <a class="nav-link" href="/news">Berita</a>
          </li>
          <li class="nav-item d-flex align-items-center justify-content-center">
            <a class="nav-link" href="/kemitraan">Kemitraan</a>
          </li>
          <li class="nav-item d-flex align-items-center justify-content-center">
            <a class="nav-link" href="/contact">Kontak</a>
          </li>
          <li class="nav-item ms-2 position-relative">
            <PopupOverlay 
              :is-logged-in="isLoggedIn" 
              :user="user"
              @login="handleLogin"
              @register="handleRegister"
              @logout="handleLogout"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script setup>
import { ref } from 'vue';
import PopupOverlay from './popupOverlay.vue';

// State
const isLoggedIn = ref(false);
const user = ref({
  email: 'user@example.com',
  username: 'Username'
});

// Methods
const handleLogin = () => {
  // In a real app, you would redirect to login page or show a login modal
  console.log('Login clicked');
  // For demo purposes, let's simulate a successful login
  setTimeout(() => {
    isLoggedIn.value = true;
  }, 1000);
};

const handleRegister = () => {
  // In a real app, you would redirect to registration page or show a registration modal
  console.log('Register clicked');
};

const handleLogout = () => {
  // In a real app, you would call your logout API
  console.log('Logout clicked');
  isLoggedIn.value = false;
};
</script>

<style scoped>
.navbar-nav .nav-link {
  color: #000;
  font-weight: 500;
  /* padding: 0.5rem 1rem; */
}

.navbar-nav .nav-link:hover {
  color: #4CAF50;
}

/* For proper spacing between nav items */
@media (min-width: 992px) {
  .navbar-nav .nav-item {
    margin: 0 0.25rem;
  }
}
</style>