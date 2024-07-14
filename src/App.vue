<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="container">
    <div class="title">
      <h1 class="slide-in">Wedding</h1>
      <h2 class="slide-out">Никита & Анастасия</h2>
    </div>

    <div class="controls">
      <div class="controls__wrapper">
        <el-button type="primary" class="link-btn" @click="router.push('/')">На главную</el-button>
        <el-button type="primary" class="link-btn" @click="router.push('/info')">Инфо</el-button>
      </div>
      <el-button type="primary" class="link-btn link-btn--w100" @click="router.push('/invite')">Получить пригласительное</el-button>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 1rem 0;
}

.controls {
  max-width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 12px;
}

.controls__wrapper {
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.link-btn {
  width: 50%;
  margin: 0 !important;
}

.link-btn--w100 {
  width: 100%;
}

.slide-in {
  transform: translateX(-100%);
  opacity: 0;
  animation: slideAll 1s forwards ease-out;
  animation-delay: 0.5s;
}

.slide-out {
  transform: translateX(100%);
  opacity: 0;
  animation: slideAll 1s forwards ease-out;
  animation-delay: 0.5s;
}

@keyframes slideAll {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
