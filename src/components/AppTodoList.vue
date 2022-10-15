<script setup>
const props = defineProps({
  todos: Array
});
</script>

<template>
  <div class="todo__list">
    <div
      v-for="todo in props.todos"
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
</template>
