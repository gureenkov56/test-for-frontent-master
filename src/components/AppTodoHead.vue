<script setup>
import PlusIcon from './icons/PlusIcon';
import { ref } from 'vue';

const isClosed = ref(false);
</script>

<template>
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
</template>
