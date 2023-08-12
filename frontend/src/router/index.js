import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Audibilizationnnnnn',
      component: HomeView,
      // meta: { title: 'Audibilizationnnnnn' }
    },
    // { 
    //   path: '/signup',
    //   name: 'signup',
    //   component: SignupView
    // },
    { 
      path: '/login',
      name: 'Log in to Audibilizationnnnnn',
      component: LoginView,
      // meta: { title: 'Log in to Audibilizationnnnnn' }
    },
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.name;
  const token = localStorage.getItem('user.access')
    // If logged in, or going to the Login page.
    if (token || to.name === 'login' || to.name === 'signup') {
      // Continue to page.
      next()
    } else {
      // Not logged in, redirect to login.
      next({
        name: 'login',
        query: {
           redirect: to.fullPath,
        }
    })
    }
})

export default router
