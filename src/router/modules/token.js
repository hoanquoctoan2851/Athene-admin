import Token from "@/views/Page/Token/index.vue";
import Layout from '@/layout/index.vue'
import Icon from '@/assets/icons/menu/icon_token.svg'
import IconActive from '@/assets/icons/menu/icon_token_active.svg'

const token = {
  path: '/',
  name: 'token',
  title: 'Token',
  component: Layout,
  redirect: '/token',
  icon: Icon,
  order: 3,
  meta: {
    title: 'Token',
  },
  iconActive: IconActive,
  children: [
    {
      path: 'token',
      name: 'token',
      title: 'Token',
      component: Token
    }
  ]
}

export default token
