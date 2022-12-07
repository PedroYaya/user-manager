<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :filterText="filterText" :items="restaurantList"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import type { DataShape } from '@/types';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
  data: (): DataShape => ({
    filterText: 'filter text',
    restaurantList: [
      {
        name: 'test1'
      }
    ],
    showNewForm: false
  })
} as any);
</script>