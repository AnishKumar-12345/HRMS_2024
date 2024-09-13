<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="logo-container">
    <RouterLink to="/" class="logo-link">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/my-portfolio-app-web.appspot.com/o/companyLogos%2Fdizitive.png?alt=media&token=a5573cdb-d9d2-4d70-b27e-b528264afa9a"
        alt="Dizitive IT Logo"
        class="logo-image"
      />
    </RouterLink>
    <h1 class="company-name">
      DIZITIVE IT
      <span class="company-slogan">PASSION TO INNOVATE</span>
    </h1>
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo-link {
  display: inline-block;
}

.logo-image {
  height: 35px;
  width: 35px;
  transition: transform 0.3s ease;
}

.logo-image:hover {
  transform: scale(1.1);
}

.company-name {
  font-weight: 600;
  font-size: 1.25rem;
  text-transform: uppercase;
  /* color: #1518a4; */
  line-height: 1.2;
}

.company-slogan {
  display: block;
  font-size: 0.75rem;
  font-weight: normal;
  color: #666;
  margin-top: 0.25rem;
}
</style>