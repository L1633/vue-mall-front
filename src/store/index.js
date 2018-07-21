import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        token:''
    },
    mutations: {
        // 设置 token
        set_token(state, token){
            state.token = token;
            sessionStorage.token = token;  //sessionStorage 保存
        },
        // 删除 token
        del_token(state) {
            state.token = '';
            sessionStorage.removeItem('token');
        }
    },
})

export default store


