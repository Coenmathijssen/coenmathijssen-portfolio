<template>
  <div id="home">
  <!--   <a class="link" href="#">
      <h1>Coen Mathijssen</h1>
      <img src="https://images.pexels.com/photos/3540104/pexels-photo-3540104.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Some image" />
    </a> -->

    <Grain />
  </div>
</template>

<script>
import Grain from '@/components/Grain.vue'

export default {
  name: 'Home',
  components: {
    Grain
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  @import '../styles/_main.scss';

  h1 {
    color: $white;
    text-align: center;
    margin: auto;
  }

  #home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
