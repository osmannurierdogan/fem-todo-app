<template lang="pug">
li.todo__result__tags__item {{ props.title }}
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
<style lang="scss">
.todo {
  &__result__tags__item {
  }
}
</style>
