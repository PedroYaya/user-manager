import { createStore } from 'vuex';
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
      const users = _.get(store, 'state.users');
      for (const item in users) {
        if (users[item].id == id) {
          return users[item];
        }
      }
      return null;
    },
    editUser(store, user: User) {
      const users = _.get(store, 'state.users');
      for (const item in users) {
        if (users[item].id == user.id) {
          users[item] = user;
        }
      }
    },
    deleteUser(store, id: number) {
      const users = _.get(store, 'state.users') || [];
      const index = store.state.users.findIndex((elem: User) => elem.id === id );
      users.splice(index, 1);
    }
  }
})
