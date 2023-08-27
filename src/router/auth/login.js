import LayoutWhite from '@/layout/LayoutWhite.vue'
import LoginPage from '@/views/Auth/LoginPage.vue'
const login = {
  path: '/',
  name: 'login',
  title: 'Login',
  component: LayoutWhite,
  redirect: '/login',
  children: [
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    }
  ]
}

export default login
