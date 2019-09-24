<template>
  <div id="navigation-bar">
    <ul>
      <li><router-link to="/auth/">Authenticate</router-link></li>
      <li><router-link to="/payment/">Payment</router-link></li>
      <li><router-link to="/logout/">Logout</router-link></li>
      <li><router-link to="/storage/">S3 Storage</router-link></li>
    </ul>
  </div>
</template>

<script>
export default { name: 'NavigationBar' }
</script>

<style scoped>
</style>
