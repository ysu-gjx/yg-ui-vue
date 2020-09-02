<template>
  <svg class="yg-icon">
    <use :xlink:href="`#yg-${icon}`"></use>
  </svg>
</template>
<script>
  export default {
    props: ['icon']
  }
</script>
<style scoped lang="scss">
  .yg-icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    margin-top: 1px;
  }
</style>