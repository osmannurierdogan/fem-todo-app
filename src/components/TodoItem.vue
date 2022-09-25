<template lang="pug">
li.todo__item
  div.todo__item__content(:class="addCompleteTextDecoration")
    button.button.button--check(@click="toggleComplete", :class="addCompleteBg")
      img.todo__icon(alt="Complete Icon" src="@/assets/images/icon-check.svg", :hidden="props.todoItem.status !== 'completed'")
    h3.todo__item-title {{ props.todoItem.title }}
  button.button.button--remove(@click="removeTodo(props.todoItem)")
    img.todo__icon(alt="Close Icon", src="@/assets/images/icon-cross.svg")
</template>
<script setup>
import { inject, computed, ref } from "vue";
const props = defineProps({
  todoItem: {
    type: Object,
    required: true,
  },
});
const RemoveTodoFunction = inject("RemoveTodoFunction");
const removeTodo = (todo) => {
  RemoveTodoFunction(todo);
};
const addCompleteBg = computed(() => {
  return props.todoItem.status == "completed" ? "addCompleteBg" : "";
});
const addCompleteTextDecoration = computed(() => {
  return props.todoItem.status == "completed"
    ? "addCompleteTextDecoration"
    : "";
});
const toggleComplete = () => {
  if (props.todoItem.status == "completed") {
    props.todoItem.status = "uncompleted";
  } else {
    props.todoItem.status = "completed";
  }
};
</script>
<style lang="scss">
.todo {
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.6rem;
    border-bottom: 1px solid variables.$color-light-gray-2;
    line-height: normal;
    &-title {
      font-size: variables.$font-size-paragraph;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin: 0;
    }
    &__content {
      justify-content: space-between;
      align-items: center;
      display: flex;
      gap: 2.4rem;
      vertical-align: middle;
    }
    &:last-child {
      border: none;
    }
  }
}
</style>
