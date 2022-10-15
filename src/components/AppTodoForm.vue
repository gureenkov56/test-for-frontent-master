<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
let inputValue = ref('');

function formSubmit() {
  store.commit('ADD_TODOS', inputValue.value);
  inputValue.value = '';
}
</script>

<template>
  <form
      v-show="true"
      class="todo__form"
      @submit.prevent="formSubmit($event)"
  >
    <input
        type="text"
        class="form-control"
        placeholder="Текст задания..."
        v-model="inputValue"
    >
  </form>
</template>
