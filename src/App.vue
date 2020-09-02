<template>
  <div id="app">
    
    <g-button></g-button>
  </div>
</template>

<script>
import GButton from './components/GButton'

export default {
  name: 'App',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    const el = document.querySelector('#app')
    console.log(el)
  },
  components: {
    GButton
  }
}
</script>

<style>
* {margin: 0;padding: 0;box-sizing: border-box;}
:root{
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: #fff;
  --button-active-bg:#eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
body{
  font-size: var(--font-size)
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
