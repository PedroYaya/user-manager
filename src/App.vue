<template>
  <div>
    <MainHeader/>
    <router-view/>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';

export default {
  name: 'App',
  components: { 
    MainHeader 
  },
}
</script>



<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
$primary: #c6538c;

html, body {
  font-family: 'Roboto', sans-serif;
  background: black;
  color: white;
}

#app {
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  text-align: center;
}

.btn-fligoo {
  margin: 10px;
  border-radius: 6px;
  padding: 6px 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}

.btn-primary {
  background: $primary;
  color: white;
  border: 1px solid white;
}

.btn-secondary {
  background: white;
  color: $primary;
  border: 1px solid $primary;
}

.color-primary {
  color: $primary;
}
</style>