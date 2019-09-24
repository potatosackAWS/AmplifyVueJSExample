<template>
  <div>
    <title-header />
    <navigation-bar />
  </div>
</template>

<script>
import TitleHeader from '@/components/TitleHeader'
import Testimonials from '@/components/Testimonials'
import CallToAction from '@/components/CallToAction'
import NavigationBar from '@/components/NavigationBar'
export default {
  name: 'Home',
  components: { TitleHeader, NavigationBar, Testimonials, CallToAction }
}
</script>

<style scoped>
</style>
