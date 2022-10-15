import * as types from './mutation_types';

export default {
  [types.INCREMENT_COUNT](state) {
    state.count += 1;
  },
  GET_API_TODOS: (state, todosFromApi) => {
    state.todos = todosFromApi.reverse();
  },
  ADD_TODOS: (state, title) => {
    state.todos.unshift({
      id: state.todos[0].id + 1,
      title: title,
      completed: false,
      userId: 10
    });
  },
  REMOVE_COMPLETED_ITEM: state => {
    state.todos = state.todos.filter(el => !el.completed);
  }
};
