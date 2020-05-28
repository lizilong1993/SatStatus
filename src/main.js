import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
// 引入全局变量，清除浏览器样式
import "./assets/style/global.css"
import "./assets/style/reset.css"

// 引入cesium库
var Cesium = require('cesium/Cesium');
var widget = require('cesium/Widgets/widgets.css');

Vue.prototype.Cesium = Cesium
Vue.prototype.widget = widget

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
