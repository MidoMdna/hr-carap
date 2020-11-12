import Vue from 'vue'

Vue.filter('currency', (val) => {
  return val.toLocaleString()
})
