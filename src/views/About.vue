<template>
  <div class="about">
    <div class="page-container">
      <section class="intro-text">
        <div class="text-container">
          <p>
            Hi, I’m Coen Mathijssen. A 22 year old Creative Front-end Developer based in Amsterdam. I like to combine design and development to create a complete digital experience. Currently I’m in my last year of my study Communication and Multimedia Design on the Hogeschool van Amsterdam.
          </p>
        </div>
      </section>
      <section class="marquee-container">
        <div class="photo">
          <div class="marquee">
            <p class="link">
              <span>
                I want to create websites with code - interaction - UX - design - motion.
              </span>
            </p>
            <p class="link">
              <span>
                I want to create websites with code - interaction - UX - design - motion.
              </span>
            </p>
          </div>
        </div>
        <div class="marquee marquee-outer">
          <p class="link">
            <span>
              I want to create websites with code - interaction - UX - design - motion.
            </span>
          </p>
           <p class="link">
            <span>
              I want to create websites with code - interaction - UX - design - motion.
            </span>
          </p>
        </div>
      </section>
      <section class="second-text">
        <div class="text-container">
          <p>
            I’m an enthusiastic and social dude who loves to drink beer, while still maintaining the reputation of being a lowkey nerd. For starters, I’m an absolute news junky. Secondly, I like to constantly find out new techniques to implement into a unique experience, both as an entrepreneur and in my free time.
          </p>
          <p>   
             Now I know you’re thinking: <span class="italic"> ‘then where is the big typography like I see on every Awwwards website?' </span> Sorry to keep you waiting..
          </p>
        </div>
      </section>
      <section class="spinning-text-container">
        <div id="circle-container">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve" id='circle-outer'>
              <defs>
                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
              </defs>
              <circle cx="150" cy="100" r="75" fill="none"/>
              <g>
                <use xlink:href="#circlePath" fill="none"/>
                <text>
                  <textPath xlink:href="#circlePath">Check out my <a href="#" class="link">Currilum Vitae</a> - <a href="#" class="link">GitHub</a> - <a href="#" class="link">Linkedin</a></textPath>
                </text>
              </g>
          </svg>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve" id='circle-inner'>
              <defs>
                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
              </defs>
              <circle cx="150" cy="100" r="75" fill="none"/>
              <g>
                <use xlink:href="#circlePath" fill="none"/>
                <text>
                  <textPath xlink:href="#circlePath">Or just <a href="#" class="link">send</a> me an <a href="#" class="link">Email</a></textPath>
                </text>
              </g>
          </svg>
        </div>
      </section>
      <section class="email-container">
        <p>Coffee is my fuel. Want to drink one together?</p>
        <h1><a href="#" class="link">mathijssen.coen@gmail.com</a></h1>
      </section>
    </div>
    <customCursor />
  </div>
</template>

<script>
import customCursor from '@/components/customCursor.vue'
import { TimelineMax, TweenMax } from 'gsap/all'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'
import "../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"
import ScrollMagic from 'scrollmagic'

export default {
  name: 'About',
  components: {
    customCursor
  },
  mounted() {
    const circleTextController = new ScrollMagic.Controller({})

    const tl = new TimelineMax({})

    tl
      .fromTo('#circle-outer', { rotate: -40 }, { rotate: 20 }, 'first')
      .fromTo('#circle-inner', { rotate: 20 }, { rotate: -40 }, 'first')

    const sceneCircleText = new ScrollMagic.Scene({
      triggerElement: '.spinning-text-container',
      duration: '200%',
      offset: -100
    }) 
    .setTween(tl)
    .addTo(circleTextController)
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/_main.scss';

#container { 
  margin: 0; 
}

.text-container {
  padding: 20vh 15vh;
  max-width: 600px;

  p {
    color: $white;
    font-family: karla, arial, sans-serif;
    font-size: 1.2em;
    line-height: 1.8em;
    font-weight: 300;
  }
}

.marquee-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: auto;

  .marquee {
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    p {
      margin: 0 auto;
      white-space: nowrap;
      position: absolute;
      font-family: lora, serif;
      font-weight: 600;
      letter-spacing: 2px;
      color: $white;
      font-family: 'circular', arial, sans-serif;
      font-size: 4em;

      span {
        display: inline-block;
        padding-left: 84%;
        opacity: 0.4;
        z-index: 99;
        pointer-events: none;
        color: $white;
      }
    }

    p span {
      // animation: infinite-moving-text 25s linear infinite;
      z-index: 1;
    }

    p:nth-of-type(2) span {
      animation-delay: 12.5s;
    }
  }

  .marquee-outer {
    color: $black;
    text-shadow:
    -0.5px -0.5px 0 $white,  
      0.5px -0.5px 0 $white,
      -0.5px 0.5px 0 $white,
      0.5px 0.5px 0 $white;
  }

  @supports (-webkit-text-stroke: 1px black) {
    .marquee-outer {
      text-shadow: none;
      -webkit-text-stroke: 1px $white;
      -webkit-text-fill-color: rgba(0,0,0,0);
    }
  }

  .photo {
    z-index: 9;
    position: relative;
    min-height: 500px;
    margin: auto;
    background-image: url('../assets/img/myself-third.jpg'); 
    background-position: center;
    background-size: cover;
    overflow: hidden;

    .marquee {
      color: $white;
      z-index: 10;

      & span {
        color: $white;
        opacity: 1;
      }

      & a {
        color: $white;
        opacity: 1;
      }
    }
  }
}

.outline {
    color: $black;
    text-shadow:
    -0.5px -0.5px 0 $white,  
      0.5px -0.5px 0 $white,
      -0.5px 0.5px 0 $white,
      0.5px 0.5px 0 $white;
  }

  @supports (-webkit-text-stroke: 1px black) {
    .outline {
      text-shadow: none;
      -webkit-text-stroke: 1px $white;
      -webkit-text-fill-color: rgba(0,0,0,0);
    }
  }

.second-text {
  display: flex;
  justify-content: flex-end;

  .text-container {
    padding: 20vh 15vh;
    max-width: 500px;
  }

  p {
    color: $white;
    font-family: karla, arial, sans-serif;
    font-size: 1em;
    line-height: 1.6em;
    font-weight: 300;
    
    & span.italic {
      font-style: italic;
    }

    &:last-of-type {
      margin-top: 1em;
    }
  }
}

#circle-container { 
  position: relative; 
  width: 100%; 
  height: 100vh;
  overflow: hidden; 

  & text {
    font-family: circular, arial, sans-serif; 
    font-size: 1em; 
    font-weight: bold; 
    stroke: $white; 
    stroke-width: .3px;
  }

  & svg {
    position: absolute; 
    left: 0; 
    top: 0; 
    width: 100%; 
    height: 100vh;
    pointer-events: none;

    & a {
      pointer-events: auto;
    }

    &:first-of-type {
      transform: scale(2);
    }

    &:last-of-type {
      transform: scale(1.2);

      text {
        font-size: 1.8em;
        stroke-width: 0.5px; 
      }

      a, a:nth-of-type(even) {
        fill: $white;
        stroke: $black;
        stroke-width: 0; 
      }
    }

    & a {
      fill: $white;
      stroke: $black;
      stroke-width: 0; 
      
      &:nth-of-type(even) {
        fill: $black;
        stroke: $white; 
        stroke-width: .5px;
      }
    }
  }
}


@keyframes infinite-moving-text {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-110%, 0, 0);
  }
}

.email-container {
  padding: 50vh 0 20vh;

  h1 {
    font-size: 4em;
    text-align: center;
    z-index: -1;

    a {
      position: relative;
      text-decoration: none;
      color: $white;

      &::before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 2px;
        width: 100%;
        height: 6px;
        background-color: $red;
        z-index: -1;
      }

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 2px;
        width: 0%;
        height: 6px;
        background-color: $red;
        z-index: -1;
      }

      &:hover {
        &::before {
          width: 0;
          transition: all 0.5s ease;
      }

        &::after {
          width: 100%;
          transition: all 0.5s ease 0.3s;
        }
      }
    }
  }

  p {
    font-family: karla, arial, sans-serif;
    font-size: 1.5em;
    color: $white;
    text-align: center;
    margin-bottom: 1em;
  }
}
</style>
