import About from '@/views/Page/User/index.vue'
import Layout from '@/layout/index.vue'
import Icon from '@/assets/icons/menu/icon_about.svg'
import IconActive from '@/assets/icons/menu/icon_about_active.svg'

const token = {
    path: '/',
    name: 'user',
    title: 'User',
    component: Layout,
    redirect: '/user',
    icon: Icon,
    order: 2,
    meta: {
        title: 'User',
    },
    iconActive: IconActive,
    children: [
        {
            path: 'user',
            name: 'user',
            title: 'User',
            component: About
        }
    ]
}

export default token
