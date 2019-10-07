<template>
  <div class="todos">
    <div v-for= "(todo,index) in todos" :key="index">
      
      <!-- <app-TodoItem :todo="todo" @setDeleteItem="deleteItem"></app-TodoItem> -->
      <app-TodoItem :todo="todo" @setDeleteItem="$emit('deleteItem',todo.id)"></app-TodoItem>
      </div>

  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
   components: {
    "app-TodoItem": TodoItem,
  },

  props: {
    todos: {
      type: Array
    }
  },
  data() {
    return {};
  },

  methods: {
    // deleteItem(){
    //   this.$emit("deleteItem",this.todos.id)
    // }
  },
  created() {}
};
</script>
