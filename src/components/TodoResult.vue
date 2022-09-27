<template lang="pug">
div.todo__result
  span.todo__result--remaining {{ unCompletedCount }} item left.
  ul.todo__result__tags
    TodoResultItem(v-for="tag in resultTags", :key="tag.id", :title="tag.title")
  button.button.todo__result__clear(@click="clear") Clear Completed
</template>
<script setup>
import { inject } from "vue";
import TodoResultItem from "@/components/TodoResultItem.vue";
const resultTags = [
  { id: 1, title: "All" },
  { id: 2, title: "Active" },
  { id: 3, title: "Completed" },
];
const unCompletedCount = inject("unCompletedCount");
const ClearCompleted = inject("ClearCompleted");
const clear = () => {
  ClearCompleted();
};
</script>
<style lang="scss">
.todo {
  &__result {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.2rem;
    /* border: 1px solid aqua; */
    &__tags {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2.4rem;
      /* border: 1px solid blue; */
    }
  }
}
</style>
