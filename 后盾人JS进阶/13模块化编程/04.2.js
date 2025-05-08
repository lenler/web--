class lessos {
    data = [];
    init() {
      this.data = [
        {
          name: "js",
          price: 999,
        },
        {
          name: "vue",
          price: 56,
        },
      ];
    }
    get() {
      return this.data;
    }
  }
  let lesobj = new lessos();
  lesobj.init();
  export { lesobj };