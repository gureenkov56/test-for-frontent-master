export default {
  loadTodoApi({ commit, state }) {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => commit('GET_API_TODOS', res))
      .catch((err) => {
        state.status = 'Loading error';
        console.log(err);
      });
  }
};
