<template>
  <div class="animation-container">
    <div class="animation-logo">
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 84.37 84.37" id="logo">
            <g data-name="Layer 2">
              <g data-name="Layer 1">
                <path d="M9.37 8.11h61V26.5h-61z"/>
                <path d="M0 58.11h84.37V76.5H0z"/>
                <path d="M9.19 0h9.19v84.37H9.19z"/>
              </g>
            </g>
          </svg>
        </div>
        <p class="author">Coen Mathijssen</p>
    </div>
    <div class="text-animation">
      <h1 class="first-text">
        <span class="letters">F</span>
        <span class="letters">r</span>
        <span class="letters">o</span>
        <span class="letters">n</span>
        <span class="letters">t</span>
        <span class="letters">e</span>
        <span class="letters">n</span>
        <span class="letters">d</span>
      </h1>
      <h1 class="second-text">Developer</h1>
    </div>
  </div>
</template>

<script>
import { TimelineMax, Power1 } from 'gsap/all'

export default {
name: 'introAnimation',
  mounted () {
    let tl = new TimelineMax()
    tl
      .to('body', { height: '100vh', overflow: 'hidden' })
      .to('.logo', 0.5, { x: '-100px'}, 0.8, 'first')
      .to('.author', 0.5, { x: '100px' }, 0.8, 'first')
      .to('.animation-logo', 0.8, { y: '-40vh' }, 1.5)
      .from('.letters', { duration: 0.1, x: '100px', opacity: 0, stagger: 0.1 }, 2)
      .to('.second-text', { opacity: 1 }, 2.5)
      .to('body', { delay: 4, height: 'auto', overflow: 'auto' })
      .to('.second-text', 6, { x: '-200%' }, 3)
      .to('.animation-container', 1.5, { x: '-100%', ease: Power1.easeIn }, 5.5)
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_main.scss';

.animation-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: $white;
  z-index: 9999;
}

.animation-logo {
  position: absolute;
  width: 250px;
  height: 100px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .logo {
    position: absolute;
    width: 180px;
    display: flex;
    justify-content: flex-end;
    background-color: $white;
    left: 20%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    #logo {
      fill: $black;
      width: 50px;
    }
  }

  p {
    margin: 0;
    position: absolute;
    font-family: 'circular', arial, sans-serif;
    color: $black;
    font-size: 1.2em;
    letter-spacing: 1px;
    left: 20%;
    top: 50%;
    transform: translate(-50%, -50%);
    min-width: 180px;
  }
}

.text-animation {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);

  h1 {
    width: 100%;
    position: absolute;
    text-align: center;
    font-size: 14em;
    letter-spacing: -10px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .letters {
      display: inline-block;
    }

    &:last-of-type {
      color: $white;
      opacity: 0;
      left: 135%;
    }
  }

  @media all and (max-width: 981px) {
    h1 {
      font-size: 10em;
    }
  }

  @media all and (max-width: 650px) {
    h1 {
      font-size: 8em;
    }
  }

  @media all and (max-width: 550px) {
    h1 {
      font-size: 6em;
    }
  }
}
</style>
