import userMutation from "./mutations";
import userGetters from "./getters";

const userModule = {
    namespaced: true,
  state() {
    return {
      name: "Amponsah",
      age: 0,
      house_number: "",
    };
  },
  mutations: userMutation,
  // actions: ,
  getters: userGetters,
}

export default userModule