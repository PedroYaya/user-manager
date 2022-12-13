<template>
  <div class="card">
    <img class="avatar" :src="user.avatar">

    <div class="actions">
      <button @click="goToEditView">
        <img src="@/assets/icons/edit.png">
      </button>
      <button @click="openDeleteUserModal">
        <img src="@/assets/icons/delete.png">
      </button>
    </div>
    
    <h3 class="name"> 
      {{ name }} 
    </h3>
    <span class="email"> 
      {{ user.email }} 
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import type { PropType } from 'vue';
import type { User } from '@/types';

export default defineComponent({
  name: 'UserCard',

  props: {
    user: {
      type: Object as PropType<User>,
      required: true
    }
  },
  
  computed: {
    name(): string {      
      return `${this.user.first_name} ${this.user.last_name}`;
    }
  },
  
  methods: {
    goToEditView() {
      this.$router.push({
        name: 'Edit', 
        params : { 
          id: this.user.id
        }
      });
    },
    openDeleteUserModal() {
      this.$emit('open-delete-modal', this.user);
    }
  }
} as any);
</script>


<style lang="scss">

.card {
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid white;
  margin: 20px auto;
  width: fit-content;
  cursor: pointer;
  transition: transform .2s;
  width: 150px;
  height: 250px;
  overflow: hidden;
  
  .avatar {
    width: 128px;
    height: 128px;
    margin-top: 10px;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    width: 128px;
    margin: 5px auto;

    button {
      border-radius: 70px;
      padding: 5px;
      height: 40px;
      width: 40px;
      background: white;
      cursor: pointer;
      margin: 5px;

      img {
        width: 22px;
        height: 22px;
      }
    }
  }

  .name {
    margin: 0 auto;
  }

  .name, .email {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .email {
    margin-top: 5px;
  }
}

.card:hover {
  transform: scale(1.04);
}

</style>