import Vue from 'vue';
import Header from './Header.vue';

const install = function (Vue) {
  Vue.component(Header.name, Header)
}


export default install;