<template>
  <div></div>
</template>

<script>
import { Auth, Hub } from 'aws-amplify'
export default {
  name: 'Callback',
  mounted () {
    // Listen for Authentication Hub.
    Hub.listen('auth', (data) => {
      Auth.currentAuthenticatedUser()
        .then(usr => { this.$router.push({ name: 'Home' }) })
        .catch(err => { console.log(err) })
    })
  }
}
</script>
