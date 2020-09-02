import Vue from 'vue'
import GButton from './button'
import GIcon from './icon'

Vue.component('g-button', GButton)
Vue.component('g-icon', GIcon)

var vm = new Vue({
  el: '#app',
  data: {
    message: 'oooo'
  }
})
console.log(vm)
const el = document.querySelector('#app')
console.log(el)