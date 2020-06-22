<template>
  <div class="workItem">
    <div class="container">
      <h1 class="title"><span class="count">0{{index + 1}}.</span> {{work.title}}</h1>
      <div class="keywords">
        <p class="keyword" v-bind:key="keyword.id" v-for="keyword in work.keywords">
          {{keyword}}
        </p>
      </div>
    </div>
    <img class="content__img" src="https://images.pexels.com/photos/4328962/pexels-photo-4328962.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="img1" />
  </div>
</template>

<script>
export default {
  name: 'workItem',
  props: ['work', 'index']
}
</script>

<style lang="scss" scoped>
@import '../styles/_main.scss';

  .workItem {
    position: relative;
    display: inline-block;
    padding-top: 3em;
    overflow: hidden;

    .container {
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      flex-wrap: nowrap;

      .title {
        display: inline-block;
        color: $white;
        font-size: 4em;

        .count {
          color: $red;
        }
      }

      .keyword {
        display: block;
        color: $white;
        text-align: right;
        font-family: 'cheltenham book', arial, sans-serif;
        font-size: 0.75em;
        opacity: 0.9;
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

.link {
  cursor: pointer;
}

.link img {
  display: none;
}

</style>