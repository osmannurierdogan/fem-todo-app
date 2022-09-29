<template lang="pug">
ul.todo__list(v-if="todoList.length > 0")
  TodoItem(v-for="todoItem in todoList", :key ="todoItem.id", :todoItem="todoItem")
span.alert(v-else) There is no item found.
</template>
<script setup>
import TodoItem from "@/components/TodoItem.vue";
import { inject } from "vue";
const todoList = inject("todoList");
</script>
<style lang="scss">
.todo {
  &__list {
    //background-color: variables.$color-dark-blue-6;
    background-color: var(--color-dark-blue-6);
    border-radius: 1rem;
    overflow: hidden;
  }
}
.alert {
  width: 100%;
  padding: 2rem;
  text-align: center;
  border-radius: 1rem;
  //font-weight: variables.$font-weight-bold;
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  background-color: var(--color-primary-accent-2);
  //color: variables.$color-light-gray-1;
  color: var(--color-light-gray-1);
  letter-spacing: 2px;
  //font-family: variables.$font-family-secondary;
  font-family: var(--font-family-secondary);
}
</style>

