<script setup>
import PlusIcon from './icons/PlusIcon';
const emit = defineEmits(['btnClick']);
const props = defineProps({
  isClosed: Boolean
});

</script>

<template>
  <div class="todo__head">
    <h2 class="todo__head-title">
      Мой день
    </h2>

    <button
      class="btn"
      :class="{'btn--closed': props.isClosed}"
      @click="emit('btnClick')"
    >
      <PlusIcon />
    </button>
  </div>
</template>
