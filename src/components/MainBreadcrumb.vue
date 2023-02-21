<template>
  <div class="breadcrumb">
      <router-link to="/">
        <span class="parent color-primary" href="/"> User list </span>
      </router-link>
      <span>Edit User</span>
    </div>
</template> 

<style lang="scss">

.breadcrumb {
  span {
    margin: 10px;
  }
  .parent {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>