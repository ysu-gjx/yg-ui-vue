<template>
  <button class="g-button" :class="`icon-${iconPosition}`">
    <!-- <svg class="icon" v-if="icon">
      <use :xlink:href="`#yg-${icon}`"></use>
    </svg> -->
    <g-icon v-if="icon" :icon="icon" :class="{'loading': icon === 'loading'}"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  export default {
    // props: ['icon', 'iconPosition']
    props: {
      icon: String,
      iconPosition: {
        type: String,
        default: 'left',
        validator (value) {
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  @keyframes spin {
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
  }
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    vertical-align: middle;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    &:hover {border-color: var(--border-color-hover)}
    &:active {background-color: var(--button-active-bg)}
    &:focus {outline: none}
    > .yg-icon {order: 1;margin-right: .43em;}
    > .content {order: 2}
    &.icon-right {
      > .yg-icon{order: 2;margin-right: 0;margin-left: .43em}
      > .content{order: 1;}
    }
  }
  .loading {
    animation: spin 1s infinite linear;
  }
  
</style>