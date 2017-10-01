import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello.vue'
import MainBoard from '@/pages/MainBoard.vue'
import SignUp from '@/pages/SignUp.vue'
import logIn from '@/pages/logIn.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/sign_up',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/login',
      name: 'logIn',
      component: logIn,
    },
    {
      path: '/',
      name: 'MainBoard',
      component: MainBoard,
    },
  ],
})

export default router
