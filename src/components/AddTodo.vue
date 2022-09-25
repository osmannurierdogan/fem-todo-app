<template lang="pug">
input.todo__text(v-model="todoText", @keydown.enter="AddTodo(todoText)")
// input.todo__text(v-model="todoText", @keydown.enter="AddTodo(todoText)")
</template>
<script setup>
import { ref, inject } from "vue";
const todoText = ref("");
const AddTodoFunction = inject("AddTodoFunction");

const AddTodo = (todo) => {
  AddTodoFunction(todo);
  todoText.value = "";
};
</script>
<style lang="scss">
.todo {
  &__text {
    background-color: variables.$color-dark-blue-6;
    outline: none;
    border: none;
    font-family: inherit;
    padding: 1rem;
    color: variables.$color-dark-blue-2;
    width: 100%;
    border-radius: 1rem;
  }
}
</style>
