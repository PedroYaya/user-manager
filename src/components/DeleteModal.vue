<template>
 <div class="delete-modal">
    <span> Are you sure you want to delete this user? </span>
    <div class="actions">
      <button class="btn-fligoo btn-secondary" @click="$emit('close')">Cancel</button>
      <button class="btn-fligoo btn-primary" @click="$emit('delete-user')">Delete</button>
    </div>
  </div>
</template>

<style lang="scss">

.delete-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  padding: 12px;
  border-radius: 10px;
  border: 2px solid white;
  min-width: 270px;

  .actions, span {
    display: block;
    margin-top: 20px;
  }

  span {
    font-size: 18px;
  }
}
</style>