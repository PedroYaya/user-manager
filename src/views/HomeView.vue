<template>
  <div class="home">
    <UserList/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserList from '@/components/UserList.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    UserList,
  },
} as any);
</script>