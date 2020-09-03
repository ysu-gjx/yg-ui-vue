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


// 单元测试
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect

{
  const Constructor = Vue.extend(GButton)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#yg-settings')

  vm.$destroy()
}

{
  const Constructor = Vue.extend(GButton)
  const vm = new Constructor({
    propsData: {
      icon: 'settings',
      loading: true
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  let href = useElement.getAttribute('xlink:href')
  expect(href).to.eq('#yg-loading')

  vm.$destroy()
}

{
  const oDiv = document.createElement('div')
  document.body.appendChild(oDiv)

  const Constructor = Vue.extend(GButton)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount(oDiv)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')

  vm.$el.remove()
  vm.$destroy()
}

{
  const oDiv = document.createElement('div')
  document.body.appendChild(oDiv)

  const Constructor = Vue.extend(GButton)
  const button = new Constructor({
    propsData: {
      icon: 'settings',
      iconPosition: 'right'
    }
  })
  button.$mount(oDiv)
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')

  button.$el.remove()
  button.$destroy()
}

{
  const Constructor = Vue.extend(GButton)
  const vm = new Constructor({
    propsData: {
      icon: 'settings'
    }
  })
  vm.$mount()

  const spy = chai.spy(() => {})

  vm.$on('click', spy)

  // 希望这个函数被执行
  const btn = vm.$el
  btn.click()
  expect(spy).to.have.been.called()

  vm.$destroy()
}
