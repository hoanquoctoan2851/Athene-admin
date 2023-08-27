import UserManager from "@/views/Page/User-Manager/index.vue";
import Layout from '@/layout/index.vue'
import Icon from '@/assets/icons/menu/icon_user_manager.svg'
import IconActive from '@/assets/icons/menu/icon_user_manager_active.svg'

const token = {
    path: '/',
    name: 'user-manager',
    title: 'User manager',
    component: Layout,
    redirect: '/user-manager',
    icon: Icon,
    order: 5,
    meta: {
        title: 'User manager',
    },
    iconActive: IconActive,
    children: [
        {
            path: 'user-manager',
            name: 'user-manager',
            title: 'User manager',
            component: UserManager
        }
    ]
}

export default token
