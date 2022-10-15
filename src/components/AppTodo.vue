<script setup>
import Head from './AppTodoHead.vue';
import Form from './AppTodoForm.vue';
import List from './AppTodoList.vue';

const todos = [
  {
    id: 1,
    title: 'repellendus sunt dolores architecto voluptatum',
    completed: false
  },
  {
    id: 4,
    title: 'repellendus sunt dolores architecto voluptatum',
    completed: true
  },
  {
    id: 2,
    title: 'repellendus sunt dolores architecto voluptatum',
    completed: false
  },
  {
    id: 3,
    title: 'repellendus sunt dolores architecto voluptatum',
    completed: true
  }
];
</script>

<template>
  <div class="todo">
    <Head />
    <!-- /.todo__head -->

    <Form/>

    <List :todos="todos" />
    <!-- /.todo__list -->
  </div>
</template>
