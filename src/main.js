import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/font/iconfont.css'
import 'amfe-flexible'
import {Tabbar,TabbarItem,Popup,Icon,Notify,Button, Divider, Cell, CellGroup,SwipeCell,RadioGroup,Radio,Switch,Panel,Tag} from 'vant'

Vue.use(Divider);
Vue.use(Icon);
Vue.use(Popup)
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Button);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(SwipeCell);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Switch);
Vue.use(Panel);
Vue.use(Tag);
Vue.use(Notify);



Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

