<template>
  <section id="home">
    <div class="page-container" id="name">
      <div class="text">
        <div id="name-container">
          <div class="image-appear link">
            <h1>Hi. I'm <span class="stroke">Coen Mathijssen</span>,</h1>
            <img src="@/assets/img/myself.jpg" class="content__img" alt="photo of me">
          </div>
        </div>
        <h2>A creative frontend developer</h2>
        <h3>with a passion for design</h3>
      </div>
    </div>
    <customCursor />
  </section>
</template>

<script>
import customCursor from '@/components/customCursor.vue'
import { TweenLite } from 'gsap/all'

export default {
  name: 'Home',
  components: {
    customCursor
  },
  mounted () {
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
    font-size: 4em;
    color: $white;
    text-align: center;
    margin: 50px 0;
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
    height: 100vh;
  }

  #name img {
    display: none;
  }
</style>
