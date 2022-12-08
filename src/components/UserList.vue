<template>
  <div class="hello">
    <div v-for="(user, index) in getUsers" :key="index">
      <span>{{ user.id }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'UserList',
  async created() {
    await this.$store.dispatch('getUsersFromApi');
  },
  computed: {
    ...mapGetters([
      "getUsers"
    ])
  },
} as any);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
