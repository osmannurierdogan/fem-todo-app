<template lang="pug">
li.todo__item(@mouseover="isVisible = true", @mouseleave="isVisible = false")
  div.todo__item__content(:class="addCompleteTextDecoration")
    CompleteTodoComponent(:todoItem="props.todoItem")
    h3.todo__item-title {{ props.todoItem.title }}
  button.button.button--remove(@click="removeTodo(props.todoItem)")
    img.todo__icon(alt="Close Icon", src="@/assets/images/icon-cross.svg", v-show="isVisible")
</template>
<script setup>
import CompleteTodoComponent from "@/components/CompleteTodoComponent.vue";
import { inject, computed, ref, provide } from "vue";
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
const isVisible = ref(false);
const showCloseIcon = computed(() => {
  isVisible = !isVisible;
});
provide("toggleComplete", toggleComplete);
provide("addCompleteBg", addCompleteBg);
</script>
<style lang="scss">
.todo {
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.6rem;
    //border-bottom: 1px solid variables.$color-light-gray-5;
    border-bottom: 1px solid var(--color-light-gray-5);
    line-height: normal;
    &-title {
      //font-size: variables.$font-size-paragraph;
      font-size: var(--font-size-paragraph);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin-top: 0.5rem;
      //color: variables.$color-light-gray-3;
      color: var(--color-light-gray-3);
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

