import Vue from 'vue'
import GButton from './button'
import GIcon from './icon'
import GButtonGroup from './button-group'

Vue.component('g-button', GButton)
Vue.component('g-icon', GIcon)
Vue.component('g-button-group', GButtonGroup)

var vm = new Vue({
  el: '#app',
  data: {
    message: 'oooo',
    loading: false
  },
  methods: {
    clickBtn() {
      this.loading = !this.loading
      console.log(this.loading)
    }
  }
})
console.log(vm)
const el = document.querySelector('#app')
console.log(el)