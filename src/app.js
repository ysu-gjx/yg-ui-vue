import Vue from 'vue'
import GButton from './button'

Vue.component('g-button', GButton)

var vm = new Vue({
  el: '#app',
  data: {
    message: 'oooo'
  }
})
console.log(vm)
const el = document.querySelector('#app')
console.log(el)