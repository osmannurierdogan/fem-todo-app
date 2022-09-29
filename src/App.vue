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
import TodoList from "@/components/TodoList.vue";
import TodoResult from "@/components/TodoResult.vue";
import TodoHeader from "@/components/TodoHeader.vue";
import AddTodo from "@/components/AddTodo.vue";
import { ref, provide, computed, onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();

// const todoList = computed(() => store.getters._getTodoList);
const todoList = ref(store.getters._getTodoList || []);
const unCompletedCount = computed(() => store.getters._getUnCompletedItemCount);

const addTodoFunction = (todoText) => {
  const newTodo = {
    title: todoText,
    id: new Date().getTime(),
    status: "uncompleted",
  };
  store.commit("addTodoItem", newTodo);
};
const removeTodoFunction = (todo) => {
  // store.commit("removeTodoItem", todo);
  todoList.value = todoList.value.filter((t) => t.id !== todo.id);
  store.commit("setTodoList", todoList.value);
};
const filterTodoListByStatus = (status) => {
  todoList.value = store.getters._getTodoList;
  if (status === "Active") {
    let temp = store.getters._getTodoList.filter(
      (t) => t.status === "uncompleted",
    );
    todoList.value = temp;
    return temp;
  } else if (status === "Completed") {
    let temp = store.getters._getTodoList.filter(
      (t) => t.status === "completed",
    );
    todoList.value = temp;
    return temp;
  } else {
    let temp = store.getters._getTodoList;
    todoList.value = store.getters._getTodoList;
    return temp;
  }
};

const clearCompleted = () => {
  todoList.value = todoList.value.filter((t) => t.status !== "completed");
  store.commit("setTodoList", todoList.value);
};
provide("AddTodoFunction", addTodoFunction);
provide("RemoveTodoFunction", removeTodoFunction);
provide("FilterTodoListByStatus", filterTodoListByStatus);
provide("todoList", todoList);
provide("unCompletedCount", unCompletedCount);
provide("ClearCompleted", clearCompleted);
onMounted(() => {
  console.log(todoList.value);
});
</script>

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7% 20%;
  //color: variables.$color-light-gray-1;
  color: var(--color-light-gray-1);
}
.todo {
  display: flex;
  /* align-items: center;*/
  justify-content: center;
  flex-direction: column;
  gap: 2.4rem;
}
</style>

