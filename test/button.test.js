const expect = chai.expect
import Vue from 'vue'
import GButton from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('GButton', () => {
  // BDD 行为

  it('存在', () => {
    expect(GButton).to.exist
  })

  it('可以设置icon', () => {
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
  })

  it('可以设置loading', () => {
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
  })

  it('icon 默认的 order 是 1', () => {
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
  })

  it('设置 iconPosition 可以改变 order', () => {
    const oDiv = document.createElement('div')
    document.body.appendChild(oDiv)
  
    const Constructor = Vue.extend(GButton)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      }
    })
    vm.$mount(oDiv)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')
  
    vm.$el.remove()
    vm.$destroy()
  })
  
  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(GButton)
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    })
    vm.$mount()
  
    const callback = sinon.fake()
    vm.$on('click', callback)
  
    // 希望这个函数被执行
    const btn = vm.$el
    btn.click()
    expect(callback).to.have.been.called
  
    vm.$destroy()
  })
})