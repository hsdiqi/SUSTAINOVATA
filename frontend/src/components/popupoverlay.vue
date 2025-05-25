<template>
  <div class="popup-container">
    <!-- Trigger button (user icon) -->
    <button @click="togglePopup" class="user-icon-button" ref="triggerButton" aria-label="User menu">
      <i v-if="isLoggedIn" class="bi bi-person-circle fs-4 text-success"></i>
      <i v-else class="bi bi-person-circle fs-4"></i>
    </button>

    <!-- Popup Overlay with animation -->
    <Transition name="popup">
      <div v-if="isOpen" class="popup-overlay" ref="popup">
        <div class="popup-content">
          <div class="popup-arrow"></div>
          
          <!-- Not Logged In State -->
          <div v-if="!isLoggedIn" class="auth-buttons">
            <button @click="login" class="btn-login">
              <i class="bi bi-box-arrow-in-right me-2"></i> Login
            </button>
            <button @click="register" class="btn-register">
              <i class="bi bi-person-plus me-2"></i> Register
            </button>
          </div>

          <!-- Logged In State -->
          <div v-else class="user-profile">
            <div class="user-avatar">
              <i class="bi bi-person-circle"></i>
            </div>
            <div class="user-info">
              <p class="user-email">{{ user?.email || 'user@email.com' }}</p>
              <p class="user-name">{{ user?.username || '' }}</p>
            </div>
            <div class="user-actions">
              <!-- <button class="btn-profile" @click="goToProfile">
                <i class="bi bi-person me-2"></i> Profil Saya
              </button> -->
              <button class="btn-dashboard" @click="dashboard" v-if="user?.role === 'admin'|| user?.role === 'dev'">
                <i class="bi bi-speedometer2 me-2"></i> Dashboard Admin
              </button>
              <button @click="logout" class="btn-logout">
                <i class="bi bi-box-arrow-right me-2"></i> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { useRouter } from 'vue-router';
// import { getToken, getUser, logout } from '../utils/auth';

const isAdmin = ref(false);
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
      username: 'Username',
      role: ''
    })
  }
  
});

// Emits
const emit = defineEmits(['login', 'register', 'logout']);

// Router
const router = useRouter();

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

const dashboard = () => {
  if (props.user.role === 'admin' || props.user.role === 'dev') {
    emit('dashboard');
    isOpen.value = false;
  }
}

// const goToProfile = () => {
//   router.push('/profile');
//   isOpen.value = false;
// };

// const goToDashboard = () => {
//   router.push('/dashboard');
//   isOpen.value = false;
// };

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

// Close popup when pressing Escape key
const handleEscKey = (event) => {
  if (isOpen.value && event.key === 'Escape') {
    isOpen.value = false;
  }
};

// Watch for login state changes
watch(() => props.isLoggedIn, (newValue) => {
  // If user logs out while popup is open, close it
  if (!newValue && isOpen.value) {
    isOpen.value = false;
  }
});

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
  document.addEventListener('keydown', handleEscKey);
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
  document.removeEventListener('keydown', handleEscKey);
});
</script>

<style scoped>
.popup-container {
  position: relative;
}

.user-icon-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.user-icon-button:hover {
  background-color: rgba(0, 0, 0, 0.05);
  transform: scale(1.05);
}

.user-icon-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(90, 143, 0, 0.3);
}

.popup-overlay {
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 1000;
  width: 250px;
}

.popup-content {
  background-color: #fffff0;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.popup-arrow {
  position: absolute;
  top: -8px;
  right: 16px;
  width: 16px;
  height: 16px;
  background-color: #fffff0;
  transform: rotate(45deg);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

/* Animation */
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Not Logged In State */
.auth-buttons {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 12px;
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
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-login:hover {
  background-color: #4a7800;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-register:hover {
  background-color: #e6d73a;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Logged In State */
.user-profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.user-avatar {
  font-size: 48px;
  margin-bottom: 10px;
  color: #5a8f00;
}

.user-info {
  text-align: center;
  margin-bottom: 15px;
  width: 100%;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.user-email {
  margin: 5px 0;
  font-size: 14px;
  color: #666;
}

.user-name {
  margin: 5px 0;
  font-size: 16px;
  font-weight: 600;
}

.user-actions {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
}

.btn-profile, .btn-dashboard {
  background-color: #f8f9fa;
  color: #333;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 10px;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.btn-profile:hover, .btn-dashboard:hover {
  background-color: #e9ecef;
  transform: translateY(-2px);
}

.btn-logout {
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px;
  margin-top: 4px;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;
}

.btn-logout:hover {
  background-color: #c82333;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
