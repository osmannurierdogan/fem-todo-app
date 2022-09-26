<template lang="pug">
ul.todo__list
  TodoItem(v-for="todoItem in todoList", :key ="todoItem.id", :todoItem="todoItem")
</template>
<script setup>
import TodoItem from "@/components/TodoItem.vue";
import { inject } from "vue";
const todoList = inject("todoList");
</script>
<style lang="scss">
.todo {
  &__list {
    background-color: pink;
    background-color: variables.$color-dark-blue-6;
    border-radius: 1rem;
    overflow: hidden;
  }
}
</style>
