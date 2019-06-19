// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  el: '#app',
  data: function () {
    return {count: 0, values: []}
  },
  methods: {
    add: function (count) {
      this.values.push({exp: count})
    },
    remove: function (count) {
      this.values.splice(count)
    },
    addtocount: function (count) {
      this.values = []
      for (let i = 0; i < count; i++) {
        this.values.push({exp: i})
      }
    }
  }
})

Vue.component('Deg', {
  props: ['base', 'exp'],
  template: '<p>{{base}}<sup>{{exp}}</sup> = {{Math.pow(base,exp)}}</p>'
})
