<template lang="pug">
main.container
  div.todo
    div.todo__header
      h3.todo__title Todo App
      svg.theme-toggle(width="26", height="26", xmlns="http://www.w3.org/2000/svg")
        path(fill="#FFF", fill-rule="evenodd", d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 2 0 011-1z")
    input.todo__text(v-model="todoText")
    ul.todo__list
      li.todo__item(v-for="i in 5", :key ="i")
        img.todo__icon.todo__icon--check(alt="Complete Icon" src="@/assets/images/icon-check.svg")
        h3.todo__item-title Todo title
        img.todo
        <h3 class="todo__item-title">Todo Title</h3>
        img.todo__icon.todo__icon--close(alt="Complete Icon" src="@/assets/images/icon-cross.svg")
    div.todo__result
      span.todo__result--remaining 5 item left.
      ul.todo__result__tags
        li.todo__result__tags__item All
        li.todo__result__tags__item Active
        li.todo__result__tags__item Completed
      button.button.todo__result__clear Clear Completed
    span Drag and drop to reorder list
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 7% 20%;
  color: variables.$color-light-gray-1;
}
.todo {
  display: flex;
  // align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.4rem;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__text {
    background-color: variables.$color-dark-blue-6;
    outline: none;
    border: none;
    font-family: inherit;
    padding: 1rem;
    color: variables.$color-dark-blue-2;
    width: 100%;
  }
  &__list {
    background-color: variables.$color-dark-blue-6;
  }
}
</style>
