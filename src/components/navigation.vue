<template>
  <nav class="navigation">
    <ul class="menu-list">
      <li :key="navigationItem.id" v-for="navigationItem in navigationItems">
        <router-link :to="navigationItem.link" class="link">{{navigationItem.name}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props: ['navigationItems']
}
</script>

<style lang="scss" scoped>
  @import '../styles/_main.scss';

  .navigation {
    padding: 2em 0 0;

    .menu-list {
      padding: 0;
      display: flex;
      justify-content: space-around;
      color: white;

      li { 
        list-style-type: none;

        a {
          padding: 20px;
          color: $white;
          text-decoration: none;
          font-size: 1em;
          letter-spacing: 1px;
          font-family: 'cheltenham bold', sans-serif;
        }
      }
    }
  }
</style>
