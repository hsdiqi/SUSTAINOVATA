<template>
  <div>
    <!-- Trigger button (user icon) -->
    <button 
      @click="togglePopup" 
      class="user-icon-button"
      ref="triggerButton"
    >
      <i class="bi bi-person-circle fs-4"></i>
    </button>
    
    <!-- Popup Overlay -->
    <div 
      v-if="isOpen" 
      class="popup-overlay"
      ref="popup"
    >
      <div class="popup-content">
        <!-- Not Logged In State -->
        <div v-if="!isLoggedIn" class="auth-buttons">
          <button @click="login" class="btn-login">Login</button>
          <button @click="register" class="btn-register">Register</button>
        </div>
        
        <!-- Logged In State -->
        <div v-else class="user-profile">
          <div class="user-avatar">
            <i class="bi bi-person-circle"></i>
          </div>
          <div class="user-info">
            <p>{{ user.email }}</p>
            <p>{{ user.username }}</p>
          </div>
          <button @click="logout" class="btn-logout">
            <i class="bi bi-box-arrow-right"></i> Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Props
const props = defineProps({
  isLoggedIn: {
    type: Boolean,
    default: false
  },
  user: {
    type: Object,
    default: () => ({
      email: 'user@example.com',
      username: 'Username'
    })
  }
});

// Emits
const emit = defineEmits(['login', 'register', 'logout']);

// State
const isOpen = ref(false);
const triggerButton = ref(null);
const popup = ref(null);

// Methods
const togglePopup = () => {
  isOpen.value = !isOpen.value;
};

const login = () => {
  emit('login');
  isOpen.value = false;
};

const register = () => {
  emit('register');
  isOpen.value = false;
};

const logout = () => {
  emit('logout');
  isOpen.value = false;
};

// Close popup when clicking outside
const handleClickOutside = (event) => {
  if (
    isOpen.value && 
    popup.value && 
    !popup.value.contains(event.target) && 
    triggerButton.value && 
    !triggerButton.value.contains(event.target)
  ) {
    isOpen.value = false;
  }
};

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<style scoped>
.user-icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.user-icon-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.popup-overlay {
  position: absolute;
  top: 60px;
  right: 20px;
  z-index: 1000;
  width: 220px;
}

.popup-content {
  background-color: #fffff0;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Not Logged In State */
.auth-buttons {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}

.btn-login {
  background-color: #5a8f00;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-login:hover {
  background-color: #4a7800;
}

.btn-register {
  background-color: #f9e94e;
  color: black;
  border: none;
  border-radius: 8px;
  padding: 12px;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-register:hover {
  background-color: #e6d73a;
}

/* Logged In State */
.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.user-avatar {
  font-size: 40px;
  margin-bottom: 10px;
}

.user-info {
  text-align: center;
  margin-bottom: 15px;
  width: 100%;
}

.user-info p {
  margin: 5px 0;
  font-size: 14px;
}

.btn-logout {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: background-color 0.3s;
}

.btn-logout:hover {
  background-color: #c82333;
}
</style>