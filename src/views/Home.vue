<template>
  <div class="home">
    <app-header></app-header>
    <app-addTodo @AddNewTodo="AddNewTodo"></app-addTodo>
    <app-todos :todos="todos" @deleteItem="onDelete"></app-todos>
  </div>
</template>

<script>
  import Header from "../components/Header";
  import AddTodo from "../components/AddTodo";
  import Todos from "../components/Todos";
export default {
  components: {
    "app-header": Header,
    "app-addTodo": AddTodo,
    "app-todos": Todos
  },
  name: "home",

  data() {
    return {
      todos: [
       
      ]
    };
  },
  created() {
    this.http.get("/todos").then(res=>{
      console.log(res.data)
      this.todos = res.data
    })
  },
   methods: {
      onDelete(id){
        console.log(id)
        this.todos = this.todos.filter(todos =>todos.id !== id)
        
      },
      AddNewTodo(newTodo){
        console.log(1111)
        this.todos = [...this.todos,newTodo]
        // this.todos.push(newTodo)
      }
    },
};
</script>

<style scoped>

</style>>
