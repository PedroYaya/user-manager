import { createStore } from 'vuex';
import { toRaw } from 'vue'
import axios from 'axios';
import _ from 'lodash'
import type { User } from '@/types';

export default createStore({
  state: {
    users: [],
    loading: true
  },
  getters: {
    getUsers: state => state.users,
    loading: state => state.loading
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    }
  },
  actions: {
    getUsersFromApi() {
      axios.get("https://reqres.in/api/users").then((response) => {
        this.commit('setUsers',  _.get(response, 'data.data'));
        this.commit('setLoading',  false);
      });
    },
    getUserById(store, id) {
      const users = toRaw(_.get(store, 'state.users')) || [];
      return users.find(elem => elem.id == id );
    },
    editUser(store, user: User) {
      const users = toRaw(_.get(store, 'state.users')) || [];
      const index = users.findIndex(elem => elem.id === user.id );
      users.splice(index, 1, user);
    },
    deleteUser(store, id) {
      const users = toRaw(_.get(store, 'state.users')) || [];
      const index = store.state.users.findIndex(elem => elem.id === id );
      users.splice(index, 1);
    }
  }
})