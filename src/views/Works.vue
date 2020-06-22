<template>
  <div class="works">
    <WorksOverview v-bind:works="works"/>
  </div>
</template>

<script>
import WorksOverview from '@/components/WorksOverview.vue'

export default {
  name: 'Works',
  components: {
    WorksOverview
  },
  data () {
    return {
      works: [
        {
          title: 'Spotify Song Roulette',
          keywords: [
            'Realtime data',
            'Websockets'
          ]
        },
        {
          title: 'KNMI Air Pollution',
          keywords: [
            'D3 data visualization',
            'Express server'
          ]
        },
        {
          title: 'ApenkooiGym',
          keywords: [
            'Website'
          ]
        },
        {
          title: 'RECESS logo & poster',
          keywords: [
            'Graphic Design'
          ]
        },
        {
          title: 'Company logo designs',
          keywords: [
            'Graphic Design',
            `Logo's`
          ]
        },
        {
          title: 'Progressive Web App',
          keywords: [
            'Offline functionallity',
            'Installable Web App'
          ]
        },
        {
          title: 'Popcorn Stories',
          keywords: [
            'Website'
          ]
        },
        {
          title: 'Blyde',
          keywords: [
            'Website'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>