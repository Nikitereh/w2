<script lang="ts" setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';

const modules = [Pagination, EffectCoverflow];
</script>

<template>
  <div class="home">
    <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :loop="true"
        :centeredSlides="true"
        :slidesPerView="1.2"
        :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
        :pagination="true"
        :modules="modules"
        class=""
    >
      <swiper-slide><img src="../assets/images/3.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/images/4.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/images/6.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/images/7.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/images/2.jpg" alt=""></swiper-slide>
      <swiper-slide><img src="../assets/images/8.jpg" alt=""></swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
:deep(.swiper) {
  padding: 2rem 0;
}

:deep(.swiper-slide) {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f4f4;

  img {
    width: 100%;
    max-height: 70vh;
    height: 100%;
    aspect-ratio: 9/12;
    object-fit: contain;
  }
}
</style>
