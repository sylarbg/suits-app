import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '@/views/Auth/Login';
import Register from '@/views/Auth/Register';
import User from "@/api/User";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {guestOnly: true}
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {guestOnly: true}
  },  
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/lawyers',
    name: 'Lawyers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/Lawyers/Index')
  },
  {
    path: '/appointments',
    name: 'Appointments',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Appointments/Index.vue'),
    meta: {authOnly: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!User.isLoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.guestOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (User.isLoggedIn()) {
      next({
        path: '/',        
      })
    } else {
      next()
    }
  }
  else {
    next() // make sure to always call next()!
  }
})


export default router
