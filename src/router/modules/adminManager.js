import AdminManager from "@/views/Page/Admin-manager/index.vue";
import Layout from '@/layout/index.vue'
import Icon from '@/assets/icons/menu/icon_admin_manager.svg'
import IconActive from '@/assets/icons/menu/icon_admin_manager_active.svg'

const token = {
    path: '/',
    name: 'admin-manager',
    title: 'Admin manager',
    component: Layout,
    redirect: '/admin-manager',
    icon: Icon,
    order: 9,
    iconActive: IconActive,
    meta: {
        title: 'Admin manager',
    },
    children: [
        {
            path: 'admin-manager',
            name: 'admin-manager',
            title: 'Admin manager',
            component: AdminManager
        }
    ]
}

export default token
