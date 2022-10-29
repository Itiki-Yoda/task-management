<template>
  <div class="container">
    <form @submit.prevent="addTodoFromPage" class="row">
      <div class="form-group col-6 offset-3">
        <h1 for="inputTodo" class="title-center">TODO Task-list</h1>
        <ul>
          <li v-for="(todo, index) in getTodos" :key="index">
            {{ todo }}
            <button @click="deleteTodo(index)">
           削除する
         </button>
          </li>
        </ul>
        <input
          v-model="todoInput"
          type="text"
          class="form-control"
          id="inputTodo"
          placeholder="please input TODO task..."
        />
      </div>
      <button type="submit" class=" col-6 offset-3 btn btn-primary btn-block">Add TODO</button>

    </form>
  </div>
</template>
   
<script>
export default {
  data(){
    return {
      todoInput: ''
    }
  },
  methods: {
    addTodoFromPage(){
      this.$store.dispatch("addTodoFromActions", this.todoInput);
      this.todoInput = "";
    },
    deleteTodo(index) {
      this.$store.dispatch("deleteTodo", index);
    }
  },
  computed: {
    getTodos() {
      return this.$store.getters.getTodos;
    }
  }
}
</script>

<style scoped>
  .title-center{
    padding-left: 15%;
  }
  .form-control{
    margin-top: 3rem;
  }
</style>
