<script lang="ts" setup>
import {ref} from "vue";
import {ElNotification} from "element-plus";

interface People {
  id: number,
  gender: string,
  alone: boolean,
  first: string,
  second: string,
  code: number,
}

const code = ref('');
const extraCodeNumbers = ref('72')
const isVisibleInvitation = ref(false);
const currentPeople = ref<People | null>(null);

const people = ref([
  {"id": 1, gender: '', "alone": false, "first": "Елена Павловна", "second": "Валерий Васильевич", "code": 12345},
  {"id": 2, gender: 'female', "alone": true, "first": "Ольга Иванова", "second": "", "code": 23456},
  {"id": 3, gender: '', "alone": false, "first": "Юлия", "second": "Даниил", "code": 34567},
  {"id": 4, gender: '', "alone": false, "first": "Ольга", "second": "Андрей", "code": 45678},
  {"id": 5, gender: '', "alone": false, "first": "Валерия", "second": "Кирилл", "code": 56789},
  {"id": 6, gender: 'male', "alone": true, "first": "Денис", "second": "", "code": 67890},
  {"id": 7, gender: 'male', "alone": true, "first": "Павел", "second": "", "code": 78901},
  {"id": 8, gender: 'female', "alone": true, "first": "София", "second": "", "code": 89012},
  {"id": 9, gender: '', "alone": false, "first": "Александра", "second": "Егор", "code": 90123},
  {"id": 10, gender: 'male', "alone": true, "first": "Захар", "second": "", "code": 12346},
  {"id": 11, gender: 'female', "alone": true, "first": "Лиза", "second": "", "code": 23457},
  {"id": 12, gender: '', "alone": false, "first": "Марина", "second": "Матвей", "code": 34568},
  {"id": 13, gender: '', "alone": false, "first": "Юлия", "second": "Константин", "code": 45679},
  {"id": 14, gender: '', "alone": false, "first": "Валерия", "second": "Дмитрий", "code": 56780},
  {"id": 15, gender: '', "alone": false, "first": "Светлана", "second": "Иван", "code": 67891},
  {"id": 16, gender: '', "alone": false, "first": "Анна", "second": "Максим", "code": 78902},
  {"id": 17, gender: 'female', "alone": true, "first": "Катя Шевченко", "second": "", "code": 89013},
  {"id": 18, gender: '', "alone": false, "first": "Юлия", "second": "Юрий", "code": 90124},
  {"id": 19, gender: 'female', "alone": true, "first": "Ольга Шевченко", "second": "", "code": 12347},
  {"id": 20, gender: '', "alone": true, "first": "", "second": "", "code": 23458}
]);

const submitHandle = () => {
  const item = people.value.find((e) => `${e.code}${extraCodeNumbers.value}` === `${code.value}`);
  if (item) {
    isVisibleInvitation.value = true;
    currentPeople.value = item;
  } else {
    isVisibleInvitation.value = false;
    code.value = '';
    ElNotification({
      message: 'К сожалению такого кода нет, попробуйте еще раз!'
    })
  }
};

const getText = (item: People | null) => {
  if (!item?.alone) {
    return `Дорогие ${item?.first} и ${item?.second}!`;
  } else {
    return item.gender === 'female' ? `Дорогая ${item?.first}!` : `Дорогой ${item?.first}!`;
  }
};

const getNoun = (item: People | null) => {
  if (!item?.alone) {
    return 'вас';
  } else {
    return 'тебя';
  }
};
</script>

<template>
  <div class="invite">
    <h2 v-if="!isVisibleInvitation" class="invite__title">
      Чтобы получить пригласительное на нашу свадьбу, нужно пройти небольшое задание!
    </h2>

    <h2 v-else class="invite__title">
      Ураааааа! Вы прошли испытание!
    </h2>

    <div v-if="!isVisibleInvitation" class="invite__content">
      <span>
        Итак! У каждого из вас, есть уникальный код. Осталось только добавить к этому коду два числа в конец. Первое - день рождения Никиты, а второе - день рождения Насти.
        Например: у вас есть код "548", и если бы дни рождения были 9 и 21 числа соответственно, то итоговый ответ бы выглядел так "548921".
      </span>

      <div class="invite__controls">
        <el-input v-model="code" placeholder="Ваш ответ"></el-input>
        <el-button type="primary" :disabled="!code.trim()" @click="submitHandle">Отправить</el-button>
      </div>
    </div>

    <div v-else class="invite__content">
      {{ getText(currentPeople)}}
      Мы приглашаем {{ getNoun(currentPeople) }} на нашу свадьбу!
      Мы будем безмерно рады видеть {{ getNoun(currentPeople) }}, ведь в этот день для нас очень важно, чтобы рядом были самые близкие нам люди! Наши родные и наши друзья!
      Именно вы делаете нашу жизнь такой насыщенной, именно с вами нам всегда хорошо и именно благодаря вам это свадьба будет легендарной!
      Дополнитульную информацию вы можете найти во вкладке "Инфо".
      До встречи! 06.09.2024
    </div>
  </div>
</template>

<style scoped>
.invite {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.invite__content {
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Lora', sans-serif;
  padding: 1rem;
  background: #2f2f2f;
  border-radius: 16px;
  text-align: start;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.invite__controls {
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
