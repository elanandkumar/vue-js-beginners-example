import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

const appProps = {props: {
  title: 'Vue JS Example 1',
  description: "A very basic vue js example created using @vue/cli",
  users: ["Anand", "Aarav", "Khushi"]
}};

new Vue({
  render: h => h(App, {...appProps}),
}).$mount('#app')
