<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}" >
    <p>
      <input type="checkbox" placeholder="请添加待办事项" @click="marCheckbox">
      {{todo.title}}
      <button class="del" @click="setDeleteItem">x</button>
      
    </p>
   
  </div>
</template>

<script>
export default {

 props: ["todo"],

  data() {
    return {
    //  completed:false
    };
  },
  components: {},
  methods: {
    marCheckbox(){
      // console.log(1111)
      this.todo.completed = ! this.todo.completed;

    },
    setDeleteItem(){
        this.$emit("setDeleteItem",this.todo.id)
    }
  },
  
};

</script>

<style  scoped>
.todo-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}

.del {
  background: #ff0000;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}

</style>

