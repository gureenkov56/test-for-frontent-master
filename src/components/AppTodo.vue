<script setup>
import Head from './AppTodoHead.vue';
import Form from './AppTodoForm.vue';
import List from './AppTodoList.vue';
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';

const store = useStore();
const isClosed = ref(false);

function toggleForm() {
  isClosed.value = !isClosed.value;
}

onMounted(() => {
  store.dispatch('loadTodoApi');

  window.addEventListener('keyup', e => {
    if (e.keyCode === 46) store.commit('REMOVE_COMPLETED_ITEM');
  });
});
</script>

<template>
  <div class="todo">
    <Head @btnClick="toggleForm"
          :isClosed="isClosed"
    />
    <!-- /.todo__head -->

    <Transition>
      <Form v-if="isClosed" />
    </Transition>

    <p v-if="store.state.todos.length < 1" >
      {{ store.state.status }}
    </p>
    <List :todos="store.state.todos" />
    <!-- /.todo__list -->
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
  max-height: 200px;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  max-height: 0;
  margin-bottom: 0;
}
</style>
