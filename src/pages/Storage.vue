<template>
  <div>
    <title-header />
    <navigation-bar />
  </div>
</template>

<script>
import { Auth } from 'aws-amplify'
import TitleHeader from '@/components/TitleHeader'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'
import NavigationBar from '@/components/NavigationBar'
export default {
  name: 'Home',
  components: { TitleHeader, NavigationBar, Testimonials, CallToAction },
  mounted () {
    console.log('fired')
    Auth.currentAuthenticatedUser()
      .then(e => console.log(e))
      .catch(e => console.log(e))

    Auth.currentCredentials()
      .then(e => console.log(e))
      .catch(e => console.log(e))
  }
}
</script>

<style scoped>
</style>
