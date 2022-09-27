import { createStore } from "vuex";

export default createStore({
  state: {
    // user: {},
    todoList: [
      {
        id: 1,
        title: "Todo Text #1",
        status: "uncompleted",
      },
      {
        id: 2,
        title: "Todo Text #2",
        status: "completed",
      },
      {
        id: 3,
        title: "Todo Text #3",
        status: "uncompleted",
      },
      {
        id: 4,
        title: "Todo Text #4",
        status: "completed",
      },
    ],
  },
  mutations: {
    setTodoList(state, todoList) {
      state.todoList = todoList;
    },
    addTodoItem(state, todo) {
      state.todoList.push(todo);
    },
    removeTodoItem(state, todo) {
      state.todoList = state.todoList.filter((t) => t.id !== todo.id);
    },
  },
  getters: {
    _getTodoList(state) {
      return state?.todoList || [];
    },
    _getUnCompletedItemCount(state) {
      return (
        state?.todoList.filter((t) => t.status == "uncompleted").length || 0
      );
    },
  },
});
