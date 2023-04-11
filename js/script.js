const { createApp } = Vue;
createApp({
  data() {
    return {
      myEmailList: [],
    };
  },
  beforeMount() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((resp) => {
          this.myEmailList.push(resp.data.response);
        });
    }
  },
}).mount("#app");
