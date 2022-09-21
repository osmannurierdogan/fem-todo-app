const app = Vue.createApp({
  data() {
    return {
      todoText: null,
    };
  },
});
app.component("hello", {
  template: `Osman Nuri Erdogan`,
});
app.mount("#app");
