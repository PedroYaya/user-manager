<template>
  <div class="hello">
    <h1>{{ filterText }}</h1>
    <div v-for="(item, index) in items" :key="index">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { Restaurant } from '@/types';


export default defineComponent({
  name: 'HelloWorld',
  props: {
    items: {
      type: Array,
      default: () => []
    },

  },
});
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
