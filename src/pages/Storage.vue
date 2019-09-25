<template>
  <div>
    <title-header />
    <navigation-bar />
    <div>
        <p>S3 Storage Example, check the console log.</p>
        <img id="test" />
    </div>
  </div>
</template>

<script>
import { Auth, Storage } from 'aws-amplify'
import TitleHeader from '@/components/TitleHeader'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'
import NavigationBar from '@/components/NavigationBar'
export default {
  name: 'Home',
  components: { TitleHeader, NavigationBar, Testimonials, CallToAction },
  mounted () {
    Auth.currentAuthenticatedUser()
      .then(e => console.log(e))
      .catch(e => console.log(e))

    Auth.currentCredentials()
      .then(e => console.log(e))
      .catch(e => console.log(e))

    // Storage.configure({ level: 'public' })
    Storage.get('welcome.png')
      .then(e => { document.getElementById('test').src = e })
      .catch(e => console.log(e))
  }
}
</script>

<style scoped>
</style>
