<template>
  <div></div>
</template>

<script>
import { Auth } from 'aws-amplify'
export default {
  name: 'Logout',
  mounted () {
    Auth.currentAuthenticatedUser()
      .then(Auth.signOut())
      .catch(err => { if (err) this.$router.push({ name: 'Home' }) })
  }
}
</script>
