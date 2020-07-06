<template>
  <section id="home">
    <div class="page-container" id="name">
      <div class="text">
        <h1 id="first-text">Hi. I'm <span class="stroke">Coen Mathijssen</span>,</h1>
        <h2 id="second-text">A creative frontend developer</h2>
        <h3 id="third-text">with a passion for design</h3>
      </div>
    </div>
    <!-- <customCursor /> -->
  </section>
</template>

<script>
// import customCursor from '@/components/customCursor.vue'
import { TimelineMax } from 'gsap/all'

export default {
  name: 'Home',
  components: {
    // customCursor
  },
  mounted () {
    const tl = new TimelineMax()

    tl
      .from('#first-text', 0.8, { x: -50, opacity: 0 }, 'first')
      .from('#second-text', 0.8, { x: 50, opacity: 0 }, 'first')
      .from('#third-text', 0.8, { x: -50, opacity: 0 }, 'first')
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/_main.scss';

  .page-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    color: $white;
    text-align: center;
    margin: auto;
  }

  h1, h2, h3 {
    margin: 50px 0;
    font-size: 4em;
    color: $white;
    text-align: center;
    opacity: 1;
  }

  @media all and (max-width: 981px) {
    h1, h2, h3 {
      font-size: 3em;
    }
  }

  @media all and (max-width: 620px) {
    h1, h2, h3 {
      margin: 30px 0;
      font-size: 2em;
    }
  }

  .stroke {
    color: $black;
    text-shadow:
    -0.5px -0.5px 0 $white,  
      0.5px -0.5px 0 $white,
      -0.5px 0.5px 0 $white,
      0.5px 0.5px 0 $white;
  }

  @supports (-webkit-text-stroke: 1px black) {
    .stroke {
      text-shadow: none;
      -webkit-text-stroke: 1px $white;
      -webkit-text-fill-color: rgba(0,0,0,0);
    }
  }

  #home {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
  }

  #name img {
    display: none;
  }
</style>
