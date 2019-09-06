const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsBody from '../src/tabs-body'
import TabsPane from '../src/tabs-pane'

Vue.component('r-tabs', Tabs);
Vue.component('r-tabs-head', TabsHead);
Vue.component('r-tabs-item', TabsItem);
Vue.component('r-tabs-body', TabsBody);
Vue.component('r-tabs-pane', TabsPane);

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', () => {
  // BDD 行为驱动测试 Mocha

  it('存在.', () => {
    expect(TabsItem).to.exist
  })

  it('可以接受 name 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        name: 'xxx'
      }
    }).$mount()
    expect(vm.$el.getAttribute('data-name')).to.eq('xxx')
  })

  it('可以接受 disabled 属性', () => {
    const Constructor = Vue.extend(TabsItem)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    expect(vm.$el.classList.contains('disabled')).to.be.true
    const callback = sinon.fake()
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.not.been.called
  })
})
