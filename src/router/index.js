import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Layout from '@/views/Layout'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Usercenter from '@/views/Usercenter'
import UserInfo from '@/views/UserInfo'
import Favorite from '@/views/Favorite'
import Cart from '@/views/Cart'
import CheckOut from '@/views/CheckOut'
import Product from '@/views/Product'
import Address from '@/views/Address'

Vue.use(Router)

// 页面刷新时，重新赋值token
if (sessionStorage.getItem('token')) {
    store.commit('set_token', sessionStorage.getItem('token'));
}

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'layOut',
      component: Layout
    },
    {
      path: '/login',
      name: 'laygin',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/usercenter',
      name: 'usercenter',
      component: Usercenter,
      meta: { requireAuth: true },
      children:[
        {
          path: '',
          component: UserInfo,
        },
        {
          path: 'favorite',
          component: Favorite,
        },
        {
          path: 'address',
          component: Address
        },
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/products/:id',
      name: 'product',
      props:true,
      component: Product
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckOut,
      meta: { requireAuth: true },
    },
  ]
})

router.beforeEach((to, from, next) => {
  //这里的requireAuth为路由中定义的 meta:{requireAuth:true}，意思为：该路由添加该字段，表示进入该路由需要登陆的
  if (to.matched.some(r => r.meta.requireAuth)) {           
    if (store.state.token) {
      next();
    }
    else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  else {
    next();
  }
})

export default router;