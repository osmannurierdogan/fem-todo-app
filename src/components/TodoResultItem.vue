<template lang="pug">
li.todo__result__tags__item(@click="filterList(props.title)") {{ props.title }}
</template>
<script setup>
import { inject } from "vue";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
const emit = defineEmits(["update-todo-list"]);
const FilterTodoListByStatus = inject("FilterTodoListByStatus");
const filterList = (tag) => {
  //FilterTodoListByStatus(tag);
  // console.log("FilterTodoListByStatus(tag) :>> ", FilterTodoListByStatus(tag));
  emit("update-todo-list", FilterTodoListByStatus(tag));
};
</script>
<style lang="scss">
.todo {
  &__result__tags__item {
    cursor: pointer;
  }
}
</style>
