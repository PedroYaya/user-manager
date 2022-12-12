import { createStore } from 'vuex';
import axios from 'axios';
import _ from 'lodash'
import type { User } from '@/types';

export default createStore({
  state: {
    users: []
  },
  getters: {
    getUsers: state => state.users,
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    }
  },
  actions: {
    getUsersFromApi() {
      axios.get("https://reqres.in/api/users").then((response) => {
        this.commit('setUsers',  _.get(response, 'data.data'));
        console.log(this.state.users)
      });
    },
    getUserById(store, id) {
      const users = _.get(store, 'state.users') || [];
      return users.find((elem: User) => elem.id === id );
    },
    editUser(store, user: User) {
      const users: User[] = _.get(store, 'state.users') || [];
      const index = users.findIndex((elem: User) => elem.id === user.id );
      users.splice(index, 1, user);
    },
    deleteUser(store, id) {
      const users = _.get(store, 'state.users') || [];
      const index = store.state.users.findIndex((elem: User) => elem.id === id );
      users.splice(index, 1);
    }
  }
})
