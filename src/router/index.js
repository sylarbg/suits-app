import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Auth/Login';
import Register from '@/views/Auth/Register';
import Logout from '@/views/Auth/Logout';
import User from "@/api/User";

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {guestOnly: true, title: "Login"}
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
    meta: { title: "Logout"}
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {guestOnly: true,  title: "Register"}
  },   
  {
    path: '/lawyers',
    name: 'Lawyers',    
    component: () => import(/* webpackChunkName: "about" */ '@/views/Lawyers/Index'),
    alias: '/',
    meta: {title: "Lawyers"}
  },
  {
    path: '/appointments',
    name: 'Appointments',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Appointments/Index.vue'),
    meta: {authOnly: true,  title: 'Appointments',}
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

const DEFAULT_TITLE = 'Suits'
router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
      document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router
