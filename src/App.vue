<template>
  <div id="app">
    <navigation v-bind:navigationItems="navigationItems"/>
    <router-view/>
    <noise />
    <introAnimation />
    <customCursor />
  </div>
</template>

<script>
import introAnimation from '@/components/introAnimation.vue'
import customCursor from '@/components/customCursor.vue'
import noise from '@/components/noise.vue'
import navigation from '@/components/navigation.vue'

export default {
  name: 'App',
  components: {
    navigation,
    introAnimation,
    noise,
    customCursor
  },
  data () {
    return {
      navigationItems: [
        {
          id: 1,
          name: 'Home', 
          link: '/'
        },
        {
          id: 2,
          name: 'Works', 
          link: '/works'
        },
        {
          id: 3,
          name: 'About', 
          link: '/about'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import './styles/_colors.scss';

#app {
  position: relative;
  overflow: hidden;
  min-height: 100vh;
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
  min-height: 80vh;

   @media all and (max-width: 500px) {
     padding: 0 1em;
     min-height: 60vh;
   }
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