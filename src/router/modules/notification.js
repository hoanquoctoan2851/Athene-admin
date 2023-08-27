import Notification from "@/views/Page/Notification/index.vue";
import Layout from '@/layout/index.vue'
import Icon from '@/assets/icons/menu/icon_notification.svg'
import IconActive from '@/assets/icons/menu/icon_notification_active.svg'

const token = {
    path: '/',
    name: 'notification',
    title: 'Notification',
    component: Layout,
    redirect: '/notification',
    icon: Icon,
    order: 10,
    meta: {
        title: 'Notification',
    },
    iconActive: IconActive,
    children: [
        {
            path: 'notification',
            name: 'notification',
            title: 'Notification',
            component: Notification
        }
    ]
}

export default token
