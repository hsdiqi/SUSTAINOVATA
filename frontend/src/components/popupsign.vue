<template>
  <div class="modal-backdrop" v-if="isVisible" @click="closeOnBackdropClick">
    <div class="modal-container" @click.stop>
      <div class="modal-header">
        <h3>Register</h3>
        <button class="close-button" @click="close">×</button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="username">Username</label>
            <input 
              type="text" 
              id="username" 
              v-model="username" 
              placeholder="Choose a username"
              required
            >
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              placeholder="Enter your email"
              required
            >
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input 
              type="password" 
              id="password" 
              v-model="password" 
              placeholder="Create a password"
              required
            >
          </div>
          <div class="form-group">
            <label for="confirmPassword">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              v-model="confirmPassword" 
              placeholder="Confirm your password"
              required
            >
          </div>
          <div class="form-actions">
            <button type="submit" class="btn-register">Register</button>
          </div>
        </form>
        <div class="form-footer">
          <p>Already have an account? <a href="#" @click.prevent="switchToLogin">Login</a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close', 'register', 'switch-to-login']);

const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const handleSubmit = () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match');
    return;
  }
  
  emit('register', { 
    username: username.value,
    email: email.value, 
    password: password.value 
  });
  
  username.value = '';
  email.value = '';
  password.value = '';
  confirmPassword.value = '';
};

const close = () => {
  emit('close');
};

const closeOnBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    close();
  }
};

const switchToLogin = () => {
  emit('switch-to-login');
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.modal-container {
  background-color: white;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #eee;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.25rem;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
}

.modal-body {
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.form-actions {
  margin-top: 20px;
}

.btn-register {
  background-color: #f9e94e;
  color: black;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-register:hover {
  background-color: #e6d73a;
}

.form-footer {
  margin-top: 20px;
  text-align: center;
  font-size: 0.9rem;
}

.form-footer a {
  color: #5a8f00;
  text-decoration: none;
}

.form-footer a:hover {
  text-decoration: underline;
}
</style>