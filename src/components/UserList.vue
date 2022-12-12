<template>
  <div class="list-container">
    <div v-for="(user, index) in getUsers" :key="index">
      <UserCard 
        :user="user"
        @open-delete-modal="openDeleteModal"
      ></UserCard>
    </div>

    <DeleteModal 
      v-if="showDeleteModal"
      @close="closeDeleteModal"
      @delete-user="deleteUser"
    />
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

  data() {
    return {
      showDeleteModal: false,
      selectedUserId: null
    }
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
    // this.showDeleteModal = true;
    // this.selectedUserId = user.id;
    },
    closeDeleteModal() {
    // this.showDeleteModal = false;
    // this.selectedUserId = null;
    },
    deleteUser() {
    // this.$store.dispatch('deleteUser', this.selectedUserId);
      this.closeDeleteModal();
    }
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
