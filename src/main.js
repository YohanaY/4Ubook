import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import qs from 'qs';//序列化post类型的数据.发送带json格式参数的请求，则需要使用qs模块来处理参数

Vue.config.productionTip = false;

// 引入vant所有组件
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
// 懒加载：使用前需要对指令进行注册
import {Lazyload} from "vant";
Vue.use(Lazyload);

// 引入全局组件
import Myfooter from './components/Myfooter.vue'
Vue.component("my-footer",Myfooter)

// axios全局设置
// axios发送请求端口
axios.defaults.baseURL=" /api";
// 公共请求头
axios.defaults.headers.common['Authorization'] = "";
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.axios=axios;
Vue.prototype.qs=qs;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
