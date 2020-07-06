<template>
  <div class="workItem">
    <div class="work-overview container">
      <h1 class="title"><span class="count">0{{index + 1}}.</span> {{work.title}}</h1>
      <div class="keywords">
        <p class="keyword" :key="keyword.id" v-for="keyword in work.keywords">
          {{keyword}}
        </p>
      </div>
    </div>
    <img :src="work.image" class="content__img" alt="img2"/>
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
    overflow: hidden;

    .container {
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      flex-wrap: nowrap;

      .title {
        display: inline-block;
        color: $white;
        font-size: 2.3em;
        margin: 20px 0 0;

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
        margin: 0;
      }
    }

    @media all and (max-width: 1265px) {
      .container .title {
        margin: 30px 0 0;
      }

      .keywords {
        position: absolute;
        right: 0;
        top: 0;
      }
    }

    @media all and (max-width: 1020px) {
      .container .title {
        font-size: 2em;
      }
    }

     @media all and (max-width: 900px) {
      .container .title {
        font-size: 1.5em;
      }
    }

    @media all and (max-width: 704px) {
      .container .title {
        font-size: 1.5em;
      }
      
       .keywords {
         position: relative;
       }
    }
 }

.image-appear {
  cursor: pointer;
}

.image-appear img {
  display: none;
}

</style>