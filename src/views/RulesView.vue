<script lang="ts" setup>
import {ref} from "vue";

const items = ref([
  { id: 1, title: 'Дата и время проведения', desc: 'Дата - 6.09.2024. Сбор гостей - 13:00. Фуршет - 13:00-14:00. Церемония бракосочетания - 14:00. Завершение - 23:00.' },
  { id: 2, title: 'Место проведения', desc: 'Загородный клуб "Fisherix". Москва, ТиНАО, п. Щаповское, ул. Евгения Родионова, вл. 7.', link: 'https://fisherix.ru/' },
  { id: 3, title: 'Дресс код', desc: 'Строгого дресс кода нет. Приходите просто красивые. И захватите удобную обувь, все таки будем на природе.' },
  { id: 4, title: 'Что вас ждет', desc: 'Начинаем в 13:00, у нас будет крутой ведущий и не менее крутой диджей, которые обещают устроить потрясающий день. ' +
        'Отдыхать будем в беседке на 30-40 человек (собственно примерно столько нас и будет), также в нашем распоряжении будет пирс, где ведущий проведет' +
        ' церемонию бракосочетания. Конкурсы, танцы, интерактивы - все это будет, еще раз напоминаем про обувь. Мы снимем себе номер не далеко от беседки, если кто-то захочет переодеться или прилечь - всегда пожалуйста. =)' },
  { id: 5, title: 'Цветы (ВАЖНО)', desc: 'Если вы собираетесь прийти с букетом на свадьбу, мы бы хотели попросить вас не дарить нам цветы, а принять участие в составлении декораций, ' +
        'беседка будет украшена цветами, как и церемониальная арка. Собственно, вы можете сделать вклад в это уже сейчас, по этому вопросу просьба обратиться к Невесте.', tel: 'tel:+79260532803' },
  { id: 6, title: 'Еда', desc: 'У нас будет как фуршет так и банкет, с различными салатами, закусками и тд, но если у вас есть какие-либо предпочтения или аллергия, напишите нам об этом, пожалуйста.' },
  { id: 7, title: 'Музыка', desc: 'День точно не будет со скучной музыкой, но если у вас есть предложения, мы можем передать ваши любимые песни диджею. Напишите нам, если хотите услышать свои любимые композиции.' },
  { id: 8, title: 'Конкурсы и традиции', desc: 'Все по аналогии с музыкой, если у вас есть предложения, может какой-то веселый конкурс или же чтобы мы каравай кушали с порога, просьба написать нам об этом.' }
])
</script>

<template>
  <div class="rules">
    <h2 class="rules__title">
      Информация
    </h2>

    <div class="rules__content">
      <div v-for="item in items" :key="item.id" class="rules__item">
        <div class="rules__item-title">
          {{ item.id }}. {{ item.title }}
        </div>
        <div class="rules__item-desc">
          {{ item.desc }} <a v-if="item.link" :href="item.link">Сайт</a>
          <a v-if="item.tel" :href="item.tel">Позвонить Невесте</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rules {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.rules__content {
  font-family: 'Lora', sans-serif;
  padding: 1rem;
  background: #2f2f2f;
  border-radius: 16px;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.rules__item-title {
  font-size: 18px;
  font-weight: 600;
}
</style>
