import AdminLog from "@/views/Page/Admin-log/index.vue";
import Layout from '@/layout/index.vue'
import Icon from '@/assets/icons/menu/icon_admin_log.svg'
import IconActive from '@/assets/icons/menu/icon_admin_log_active.svg'

const token = {
    path: '/',
    name: 'admin-log',
    title: 'Admin log',
    component: Layout,
    redirect: '/admin-log',
    icon: Icon,
    meta: {
        title: 'Admin log',
    },
    order: 8,
    iconActive: IconActive,
    children: [
        {
            path: 'admin-log',
            name: 'admin-log',
            title: 'Admin log',
            component: AdminLog
        }
    ]
}

export default token
