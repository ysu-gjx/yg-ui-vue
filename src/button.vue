<template>
  <button class="yg-button" :class="`icon-${iconPosition}`" @click="$emit('click')">
    <!-- <svg class="icon" v-if="icon">
      <use :xlink:href="`#yg-${icon}`"></use>
    </svg> -->
    <g-icon v-if="icon && !loading" :icon="icon"></g-icon>
    <g-icon v-if="loading" class="loading yg-icon" icon="loading"></g-icon>
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
      loading: {
        type: Boolean,
        default: false
      },
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
  .yg-button {
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