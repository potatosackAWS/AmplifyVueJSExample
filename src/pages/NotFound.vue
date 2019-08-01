<template>
  <div>
    <title-header />
    <div id="not-found">
        <p>404 - Page Not Found</p>
    </div>
  </div>
</template>

<script>
import TitleHeader from '@/components/TitleHeader'
export default {
  name: 'NotFound',
  components: { TitleHeader }
}
</script>

<style scoped>
#not-found { padding: 7rem 0 0 7rem; background-color: #151B24; }
#not-found p { color: #fff; }
</style>
