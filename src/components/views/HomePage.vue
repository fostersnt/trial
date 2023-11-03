<template>
    <h1>HOME PAGE</h1>
    <h2 class="text-success">{{ getName }}</h2>
    <h3 class="text-danger">{{ UPDATE_NAME(name) }}</h3>
    <input type="text" name="" id="" v-model="name">
    <!-- <button @click="UPDATE_NAME(name)">Click Me</button> -->
</template>


<script>
import { mapGetters, mapMutations } from "vuex";
export default {

    data(){
        return {
            name: '',
        }
    },
    computed: {
        ...mapGetters('userMod', ['getName'])
    },
    methods: {
        ...mapMutations('userMod', ['UPDATE_NAME'])
    }
}
</script>