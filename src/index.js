import Vue from 'vue';
import App from './App.vue';
import commonComponents from './components';
Vue.use(commonComponents);
Vue.config.productionTip = false;
Vue.config.devtools = true;


const app = new Vue({
  el: "#root",
  render: h => h(App)
});

export default app;