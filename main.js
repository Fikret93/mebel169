const { createApp } = Vue;

createApp({
  data() {
    return {
      newTodo: '',
      todos: []
    };
  },
  computed: {
    completedCount() {
      return this.todos.filter((todo) => todo.done).length;
    }
  },
  methods: {
    addTodo() {
      if (!this.newTodo) {
        return;
      }

      this.todos.unshift({
        id: crypto.randomUUID(),
        text: this.newTodo,
        done: false
      });
      this.newTodo = '';
    },
    removeTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    }
  }
}).mount('#app');
