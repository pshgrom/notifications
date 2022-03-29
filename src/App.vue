<template>
  <div class="wrapper">
    <router-link to="/">Home</router-link>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    padding: 15px;
    max-width: 400px;
    width: 100%;
    box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, .2);
    border-radius: 10px;
    position: fixed;
    left: 50%;
    top: 45%;
    transform: translate(-50%, -50%);
    min-height: 660px;
    font-family: 'Open Sans', sans-serif;
  }
</style>
