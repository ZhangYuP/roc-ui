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

describe('Tabs', () => {
  // BDD 行为驱动测试 Mocha

  it('存在.', () => {
    expect(Tabs).to.exist
  })

  it('可以接受 selected prop', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <r-tabs selected="finance">
        <r-tabs-head>
          <r-tabs-item name="woman"> 美女 </r-tabs-item>
          <r-tabs-item name="finance" > 财经 </r-tabs-item>
          <r-tabs-item name="sports"> 体育 </r-tabs-item>
        </r-tabs-head>
        <r-tabs-body>
          <r-tabs-pane name="woman"> 美女相关资讯 </r-tabs-pane>
          <r-tabs-pane name="finance"> 财经相关资讯 </r-tabs-pane>
          <r-tabs-pane name="sports"> 体育相关资讯 </r-tabs-pane>
        </r-tabs-body>
      </r-tabs>
    `
    const vm = new Vue({
      el: div
    })
    vm.$nextTick(() => {
      let x = vm.$el.querySelector('.tabs-item[data-name="finance"]')
      expect(x.classList.contains('active')).to.eq(true)
    })
  })

  it('可以接受 direction prop', () => {

  })
})
