import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from "./views/Index.vue"
import Focus from "./views/Focus.vue"
import Message from "./views/Message.vue"
import Mine from "./views/Mine.vue"
import uLogin from "./views/Userlogin.vue"
import ureg from "./views/Userreg.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children:[
        {path: '',redirect() {
          return 'index'
        }},
        {path: 'index',name: 'Index',component: Index},
        {path: 'focus',name: 'Focus',component: Focus},
        {path: 'Message',name: 'Message',component: Message},
        {path: 'Mine',name: 'Mine',component: Mine},
        
      ]
    },
    {path: '/uLogin',name: 'uLogin',component: uLogin},
    {path: '/ureg',name: 'ureg',component: ureg},
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
