<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default { name: 'App' }
</script>
<style>

/* App & General */
a, p, h1, h2, h5, ul, body, #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  overflow: visible;
  margin: 0; padding: 0;
}

body { background-color: #151B24; }

/* Top Bar - Mobile */
#navigation { display: none; }

/* Footer */
footer { background-color: #151B24; text-align: center; }
footer p { margin:0; padding: 20px; }

/* Header */
@media only screen and (min-width: 321px) {
  header h1 a { font-size: 1.1em; }
  header p { padding-bottom: 17px; }
}

@media only screen and (min-width: 321px) {
  /* Top Bar - Positioning */
  #navigation { float: left; }
  #search-bar { float: right; }
}
</style>
