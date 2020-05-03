import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/font/iconfont.css'
import 'amfe-flexible'
import {Tabbar,TabbarItem,Popup,Col,Row,Icon,NavBar,Notify,Button } from 'vant'

Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Col);
Vue.use(Row);
Vue.use(Popup)
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(Notify);


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

router.beforeEach((to, from, next) => { 
	//console.log(to, from, next) //
	if(to.name=='/'){ //本身就是登录页，就不用验证登录session了
		next()
		return
	}
	// if(!sessionStorage.getItem('username')){ //没有登录/登录过期
	// 	next({path:'/', query:{redirect:to.path}})
  // }
  else{
		next()
	}
})
