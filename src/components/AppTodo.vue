<script setup>
import Head from './AppTodoHead.vue';
import Form from './AppTodoForm.vue';
import List from './AppTodoList.vue';
import { useStore } from 'vuex';
import { onMounted } from 'vue';

const store = useStore();

onMounted(() => {
  store.dispatch('loadTodoApi');
});
</script>

<template>
  <div class="todo">
    <Head />
    <!-- /.todo__head -->

    <Form/>

    <p v-if="store.state.todos.length < 1" >
      {{ store.state.status }}
    </p>
    <List :todos="store.state.todos" />
    <!-- /.todo__list -->
  </div>
</template>
