<script setup>
import PlusIcon from './icons/PlusIcon';
import { ref } from 'vue';

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

const isClosed = ref(false);
</script>

<template>
  <div class="todo">
    <div class="todo__head">
      <h2 class="todo__head-title">
        Мой день
      </h2>

      <button
        class="btn"
        :class="{'btn--closed': isClosed}"
        @click="isClosed = !isClosed"
      >
        <PlusIcon />
      </button>
    </div>
    <!-- /.todo__head -->

    <form
      v-show="false"
      class="todo__form"
    >
      <input
        type="text"
        class="form-control"
        placeholder="Текст задания..."
      >
    </form>

    <div class="todo__list">
      <div
        v-for="todo in todos"
        :key="todo.id"
        class="todo__list-item"
        :class="{'todo__list-item_completed': todo.completed}"
      >
        <div class="todo__list-item-info">
          <h4 class="todo__list-item-info-title">
            {{ todo.title }}
          </h4>
          <h6 class="todo__list-item-info-description">
            {{ todo.title }}
          </h6>
        </div>
        <!-- /.todo__list-item-info -->
      </div>
      <!-- /.todo__list-item -->
    </div>
    <!-- /.todo__list -->
  </div>
</template>
