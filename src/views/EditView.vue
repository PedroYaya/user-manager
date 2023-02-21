<template>
  <div class="detail" v-if="!loading && !!user">

    <MainBreadcrumb/>
    <img class="detail-img" :src="user.avatar">

    <div class="input-container">
      <label>First Name</label>
      <input v-model="user.first_name">
    </div>

    <div class="input-container">
      <label>Last Name</label>
      <input v-model="user.last_name">
    </div>

    <div class="input-container">
      <label>Email</label>
      <input v-model="user.email">
    </div>

    <div class="actions">
      <router-link to="/">
        <button class="btn-fligoo btn-secondary">
          Cancel
        </button>
      </router-link>
      <button class="btn-fligoo btn-primary" @click="editUser">
        Save
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainBreadcrumb from '@/components/MainBreadcrumb.vue';


export default defineComponent({
  name: 'EditView',
  
  components: {
    MainBreadcrumb,
  },

  data() {
    return {
      user: null,
      loading: true
    }
  },

  async beforeMount() {
    this.user = await this.$store.dispatch('getUserById', this.$route.params.id);
    this.loading = false;
  },

  methods: {
    editUser() {
      this.$store.dispatch('editUser', this.user);
      this.$router.push('/');
    }
  }
});
</script>



<style lang="scss">

.detail {
  text-align: center;
  padding: 10px;
  border-radius: 5px;

  .detail-img {
    margin: 20px auto;
  }

  .input-container {
    width: fit-content;
    margin: 10px auto;
    text-align: left;

    label {
      display: block;
    }

    input {
      font-size: 16px;
      font-size: 16px;
      margin-top: 5px;
      padding: 6px;
      border-radius: 9px;
      min-width: 240px;
    }

    input:focus {
      outline: none;
    }
  }
}
</style>
