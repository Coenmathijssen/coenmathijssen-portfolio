<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="link">Home</router-link>
      <router-link to="/about" class="link">about</router-link>
      <router-link to="/works" class="link">works</router-link>
    </div>
    <router-view/>
    <noise />
    <!-- <introAnimation /> -->
  </div>
</template>

<script>
// import introAnimation from '@/components/introAnimation.vue'
import noise from '@/components/noise.vue'


export default {
  name: 'App',
  components: {
    // introAnimation,
    noise
  }
}
</script>

<style lang="scss">
@import './styles/_colors.scss';

#app {
  position: relative;
  overflow: hidden;
}

body {
  margin: 0;
  padding: 0;
  background-color: $black;
  height: auto;
  overflow: visible;

  &.disable-scroll {
    height: 100vh;
    overflow: hidden;
  }
}

.page-container {
  padding: 0 2em;
  max-width: 1280px;
  margin: 0 auto;
  min-height: 100vh;
}

canvas {
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  pointer-events: none;
  overflow: visible;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}

body, * {
	cursor: none;
}

::selection {
  color: $white;
  background: $red;
}
</style>