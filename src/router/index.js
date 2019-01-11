import Vue from 'vue'
import Router from 'vue-router'
import Middle from '../components/Middle'
//import Header from '../components/Header'
//import Footer from '../components/Footer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Middle',
      component: Middle
    },
    /*{
      path:'/as/',
      name:Header,
      component:Header
    },
    {
      path:'/as1/',
      name:Footer,
      component:Footer
    }*/
  ]
})
