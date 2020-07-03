<template>
  <section class="work-overview-container">
    <div class="page-container">
      <div id="work-container">
        <div>
          <div class="work image-appear" v-bind:key="work.id" v-for="(work, index) in works.slice(0, 4)" @mouseover="hideMouse" @mouseleave="showMouse">
            <workItem v-bind:work="work" v-bind:index="index" />
            <div class="line"></div>
          </div>
        </div>
        <div>
          <div class="work image-appear"  v-bind:key="work.id" v-for="(work, index) in works.slice(4, 8)" @mouseover="hideMouse" @mouseleave="showMouse">
            <workItem v-bind:work="work" v-bind:index="(index + 4)" />
            <div class="line"></div>
          </div>
        </div>
      </div>
    </div>
    <customCursor />
  </section>
</template>

<script>
import customCursor from '@/components/customCursor.vue'
import workItem from './WorkOverviewItem.vue'
import { TimelineMax } from 'gsap/all'
// import animation from '@/js/imageAppear'

export default {
  name: 'WorksOverview',
  components: {
    workItem,
    customCursor
  },
  props: ['works'],
  mounted () {
    const tl = new TimelineMax()

    tl
      .from('.line', { duration: 0.5, width: 0, stagger: 0.3 }, 'first')
      .from('.work-overview', { duration: 0.5, rotate: '20deg', y: 60, transformOrigin: 'bottom left', stagger: 0.3 }, 0.5, 'first')

    // animation.imageAppear()
  }, 
  methods: {
    hideMouse: function() {
      document.getElementsByClassName('cursor')[0].style.visibility = 'hidden'
      document.getElementsByClassName('cursor-follower')[0].style.visibility = 'hidden'
    },
    showMouse: function() {
      document.getElementsByClassName('cursor')[0].style.visibility = 'visible'
      document.getElementsByClassName('cursor-follower')[0].style.visibility = 'visible'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';
// @import '../styles/global.scss';

.cursor {
    opacity: 1;
    transition: all .3s ease-in-out;

    &.hidden {
        opacity: 0;
        transition: all .3s ease-in-out;
    }
}

.cursor-follower {
    opacity: 1;
    transition: all .3s ease-in-out;
    
    &.hidden {
        opacity: 0;
        transition: all .3s ease-in-out;
    }
}

#work-container {
  display: flex;

  & > div {
    width: calc(50% - 3em);
  
    &:first-of-type {
      padding-right: 3em;
    }

    &:last-of-type {
      padding-left: 3em;
    }
  }
}

canvas {
  display: block;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: -1;
  pointer-events: none;
}

.work {
  position: relative;
  padding: 3.5em 0 0 0.5em;

  .line {
    position: absolute;
    bottom: 11px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgba(240, 240, 240, 0.5);
  }

  .container {
    transform-origin: bottom left;
  }
}

</style>