import Vue from "vue";
import Router from "vue-router";
import Home from '../views/home'
Vue.use(Router);

export default new Router({
  mode: "history", //去掉#号
  routes: [
    {
      path: "/",
      redirect: "/home",
      name: "Home",         //配置默认地址
     
    },
    {
        path: '/home',//设置默认指向的路径指向的是下面的MyHome组件
        component: Home,
        name: '首页'
    },
  ],
});
