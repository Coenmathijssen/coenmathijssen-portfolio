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
            'Websockets',
          ],
          image: require('../assets/img/overview/spotify-roulette.jpg'),
          link: 'https://spotifysongroulette.herokuapp.com/'    
        },
        {
          title: 'Glory Days',
          keywords: [
            'Alzheimer memory webapp',
            'Spotify integration'
          ],
          image: require('../assets/img/overview/glory-days.jpg'),
          link: 'https://glory-days.herokuapp.com/'
        },
        {
          title: 'KNMI Air Pollution',
          keywords: [
            'D3 data visualization',
            'Express server',
          ],
          image: require('../assets/img/overview/knmi-air-pollution.jpg'),
          link: 'https://luchtvervuiling-knmi.netlify.app/'
        },
        {
          title: 'ApenkooiGym',
          keywords: [
            'Website'
          ],
          image: require('../assets/img/overview/apenkooigym.jpg'),
          link: 'http://apenkooigym.nl/'
        },
        {
          title: 'RECESS logo & poster',
          keywords: [
            'Graphic Design'
          ],
          image: require('../assets/img/overview/recess-poster.jpg'),
          link: require('../assets/img/recess-poster.jpg')
        },
        {
          title: 'Company logo designs',
          keywords: [
            'Graphic Design',
            `Logo's`
          ],
          image: require('../assets/img/overview/company-logo-designs.jpg'),
           link: require('../assets/img/company-logos.jpg')
        },
        {
          title: 'Popcorn Stories',
          keywords: [
            'Website'
          ],
          image: require('../assets/img/overview/popcornstories.jpg'),
          link: 'https://popcornstories.nl/'  
        },
        {
          title: 'Blyde',
          keywords: [
            'Website'
          ],
          image: require('../assets/img/overview/blyde.jpg'),
          link: 'https://blyde.nl/'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>