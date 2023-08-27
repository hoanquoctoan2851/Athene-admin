import HomeView from '@/views/Page/Home/index.vue'
import Layout from '@/layout/index.vue'
import Icon from '@/assets/icons/menu/icon_over_view.svg'
import IconActive from '@/assets/icons/menu/icon_over_view_active.svg'

const home = {
    path: '/',
    name: 'home',
    title: 'Dashboard',
    component: Layout,
    redirect: '/dashboard',
    icon: Icon,
    iconActive: IconActive,
    order: 1,
    meta: {
        title: 'Dashboard',
    },
    children: [
        {
            path: '',
            name: 'home',
            title: 'Dashboard',
            alias: '/dashboard',
            component: HomeView
        }
    ]
}

export default home
