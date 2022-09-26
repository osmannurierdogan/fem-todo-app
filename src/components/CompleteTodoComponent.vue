<template lang="pug">
button.button.button--check(@click="toggleItem", :class="addCompleteBg")
  img.todo__icon(alt="Complete Icon" src="@/assets/images/icon-check.svg", :hidden="props.todoItem.status !== 'completed'")
</template>
<script setup>
import { computed, inject } from "vue";
const props = defineProps({
  todoItem: {
    type: Object,
    required: true,
  },
});
const toggleItem = inject("toggleComplete");
const addCompleteBg = inject("addCompleteBg");
</script>
<style lang="scss"></style>
