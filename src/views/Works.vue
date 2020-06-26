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
          image: require('../assets/img/1.jpg'
)        },
        {
          title: 'KNMI Air Pollution',
          keywords: [
            'D3 data visualization',
            'Express server',
          ],
          image: require('../assets/img/2.jpeg')
        },
        {
          title: 'ApenkooiGym',
          keywords: [
            'Website'
          ],
          image: require('../assets/img/3.jpeg')
        },
        {
          title: 'RECESS logo & poster',
          keywords: [
            'Graphic Design'
          ],
          image: require('../assets/img/1.jpg')
        },
        {
          title: 'Company logo designs',
          keywords: [
            'Graphic Design',
            `Logo's`
          ],
          image: require('../assets/img/2.jpeg')
        },
        {
          title: 'Progressive Web App',
          keywords: [
            'Offline functionallity',
            'Installable Web App'
          ],
          image: require('../assets/img/3.jpeg')
        },
        {
          title: 'Popcorn Stories',
          keywords: [
            'Website'
          ],
          image: require('../assets/img/1.jpg'
)        },
        {
          title: 'Blyde',
          keywords: [
            'Website'
          ],
          image: require('../assets/img/2.jpeg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>