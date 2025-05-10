<template>
  <Navbar />
  <router-view />
  <Footer />

  <LoginModal 
    :is-visible="showLoginModal" 
    @close="showLoginModal = false"
    @login="handleLogin"
    @switch-to-register="switchToRegister"
  />
  
  <RegisterModal 
    :is-visible="showRegisterModal" 
    @close="showRegisterModal = false"
    @register="handleRegister"
    @switch-to-login="switchToLogin"
  />
</template>

<script setup>
import { ref, provide } from 'vue';

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import LoginModal from './components/popupunsign.vue';
import RegisterModal from './components/popupsign.vue';

// State for modals
const showLoginModal = ref(false);
const showRegisterModal = ref(false);

// User authentication state
const isLoggedIn = ref(false);
const user = ref({
  email: '',
  username: ''
});

// Methods
const handleLogin = (credentials) => {
  console.log('Login with:', credentials);
  isLoggedIn.value = true;
  user.value = {
    email: credentials.email,
    username: credentials.email.split('@')[0]
  };
  showLoginModal.value = false;
};

const handleRegister = (userData) => {
  console.log('Register with:', userData);
  isLoggedIn.value = true;
  user.value = {
    email: userData.email,
    username: userData.username
  };
  showRegisterModal.value = false;
};

const handleLogout = () => {
  isLoggedIn.value = false;
  user.value = {
    email: '',
    username: ''
  };
};

const switchToLogin = () => {
  showRegisterModal.value = false;
  showLoginModal.value = true;
};

const switchToRegister = () => {
  showLoginModal.value = false;
  showRegisterModal.value = true;
};

// Provide authentication context to child components
provide('auth', {
  isLoggedIn,
  user,
  login: () => { showLoginModal.value = true },
  register: () => { showRegisterModal.value = true },
  logout: handleLogout
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
