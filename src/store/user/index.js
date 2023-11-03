import { createStore } from "vuex";
import userMutation from "./mutations";


const store = createStore({
    state(){
        return {
            name: '',
            age: 0,
            house_number: ''
        }
    },
    mutations: userMutation,
        actions: ,
        getters: ,
})