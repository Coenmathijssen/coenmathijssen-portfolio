<template>
    <div id="canvas"></div>
</template>

<script>
export default {
  name: 'Grain'
}
</script>

<style lang="scss" scoped>
@import '../styles/colors.scss';

#canvas {
  position: fixed;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: -1;

  &::after {
    animation: grain 12s steps(10) infinite;
    background: $black url('../assets/noiseee.png');
    content: "";
    height: 300%;
    left: -50%;
    opacity: 1;
    position: fixed;
    top: -110%;
    width: 300%;
    z-index: -1;
  }
}

  @keyframes grain {
    0%, 100% { transform:translate3d(0, 0, 0) }
    10% { transform:translate3d(-5%, -10%, 0) }
    20% { transform:translate3d(-15%, 5%, 0) }
    30% { transform:translate3d(7%, -25%, 0) }
    40% { transform:translate3d(-5%, 25%, 0) }
    50% { transform:translate3d(-15%, 10%, 0) }
    60% { transform:translate3d(15%, 0%, 0) }
    70% { transform:translate3d(0%, 15%, 0) }
    80% { transform:translate3d(3%, 35%, 0) }
    90% { transform:translate3d(-10%, 10%, 0) }
  }
</style>
