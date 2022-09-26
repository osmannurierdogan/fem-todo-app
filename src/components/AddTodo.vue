<template lang="pug">
div.todo__text
  // CompleteTodoComponent(:todoItem="{}")
  input.todo__input(v-model="todoText", @keydown.enter="AddTodo(todoText)", placeholder="Create a new todo...")
// input.todo__text(v-model="todoText", @keydown.enter="AddTodo(todoText)")
</template>
<script setup>
import CompleteTodoComponent from "@/components/CompleteTodoComponent.vue";
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
    display: flex;
    border-radius: 1rem;
    overflow: hidden;
  }
  &__input {
    background-color: variables.$color-dark-blue-6;
    outline: none;
    border: none;
    font-family: inherit;
    padding: 1rem;
    font-size: variables.$font-size-paragraph;
    color: variables.$color-dark-blue-2;
    width: 100%;
  }
}
</style>
