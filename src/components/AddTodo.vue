<template>
  <div>
      <form action="" @submit.prevent="addTodo">
        <input type="text" placeholder="请添加待办事项" v-model="title" name="title">
        <input type="submit" class="btn" value="添加">

      </form>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
        title:''
    };
  },
  methods: {
     addTodo(){
      //  console.log(111)
       const newTodo = {
         id : 6,
         title: this.title,
         completed : this.completed
       }
       this.$emit("AddNewTodo",newTodo)
     }
  },
};
</script>
<style  scoped>
form{
    display: flex;
}

input[type="text"] {
  flex: 12;
  padding: 5px;
}

input[type="submit"] {
  flex: 2;
}
 .btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
} 
</style>