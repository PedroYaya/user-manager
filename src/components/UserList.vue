<template>
  <div class="list-container">
    <div v-for="(user, index) in getUsers" :key="index">
      <UserCard 
        :user="user"
        @open-delete-modal="openDeleteModal"
      ></UserCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import type { User } from '@/types';
import UserCard from '@/components/UserCard.vue';

export default defineComponent({
  name: 'UserList',

  async created() {
    await this.$store.dispatch('getUsersFromApi');
  },

  components: {
    UserCard
  },

  computed: {
    ...mapGetters([
      "getUsers"
    ])
  },

   methods: {
    openDeleteModal(user: User) {
      //this.showDeleteModal = true;
      //this.selectedUserId = user.id;
    },
  }
} as any);
</script>


<style lang="scss">
    
.list-container {
  display: grid; 

  @media (min-width: 420px) {
    grid-template-columns: 50%  50%;
  }

  @media (min-width: 768px) {
    grid-template-columns: 25%  25% 25% 25%;
  }
}
</style>
