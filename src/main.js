import Vue from 'vue';
import Router from "vue-router";
import Home from "./pages/Home";
import NewArrival from "./pages/NewArrival";
import Barand from "./pages/Barand";
import Me from "./pages/Me";
import Apply from "./pages/Apply";
import Activity from "./pages/Activity";
import App from './App';
//将Vue的Router中间注册给Vue框架
Vue.use(Router);
new Vue({
  el: '#app',
  //为当前Vue的app的实例化配置个性路由
  router : new Router({
  	mode : "history",//确保服务端开方了路径访问权限
  	routes : [
 	 	{
			path : "/",
			component : Home
		},
		{
			path : "/newarrival",
			component : NewArrival
		},
		{
			path : "/barand",
			component : Barand
		},
		{
			path : "/me",
			component : Me
		},
	  	{
			path : "/apply",
			component : Apply
		},
	  	{
			path : "/activity",
			component : Activity
		}
	]
  }),
  render: h => h(App)
})
