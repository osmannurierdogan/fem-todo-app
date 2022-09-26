<template lang="pug">
main.container
  div.todo
    TodoHeader
    AddTodo
    TodoList
    TodoResult
    span.text-center Drag and drop to reorder list
</template>

<script setup>
import { ref, provide, computed } from "vue";
import TodoHeader from "@/components/TodoHeader.vue";
import AddTodo from "@/components/AddTodo.vue";
import TodoResult from "@/components/TodoResult.vue";
import TodoList from "@/components/TodoList.vue";
const todoList = ref([
  {
    id: 1,
    title: "Todo Text #1",
    status: "completed",
  },
]);
const addTodoFunction = (todoText) => {
  const newTodo = {
    title: todoText,
    id: new Date().getTime(),
    status: "uncompleted",
  };
  todoList.value.push(newTodo);
  console.log(todoList.value);
};
const removeTodoFunction = (todo) => {
  todoList.value = todoList.value.filter((t) => t.id !== todo.id);
  console.log(todoList.value);
};
const unCompletedCount = computed(() => {
  return todoList.value.filter((t) => t.status == "uncompleted").length;
});
provide("AddTodoFunction", addTodoFunction);
provide("RemoveTodoFunction", removeTodoFunction);
provide("todoList", todoList);
provide("unCompletedCount", unCompletedCount);
</script>

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7% 20%;
  color: variables.$color-light-gray-1;
}
.todo {
  display: flex;
  /* align-items: center;*/
  justify-content: center;
  flex-direction: column;
  gap: 2.4rem;
}
</style>
