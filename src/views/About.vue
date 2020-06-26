<template>
  <section class="about">
    <div class="page-container">
      <h1>This is about</h1>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  components: {
  }
}
</script>

<style scoped>
h1 {
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

h1 {
  color: white;
  text-shadow:
   -0.1px -0.1px 0 #000,  
    0.1px -0.1px 0 #000,
    -0.1px 0.1px 0 #000,
     0.1px 0.1px 0 #000;
}

@supports (-webkit-text-stroke: 1px black) {
  h1 {
    text-shadow: none;
    -webkit-text-stroke: 1px black;
    -webkit-text-fill-color: white;
  }
}
</style>
