import Layout from '@/layout/index.vue'
import Icon from '@/assets/icons/menu/icon_version_manager.svg'
import IconActive from '@/assets/icons/menu/icon_version_manager_active.svg'
import VersionManager from "@/views/Page/Version-Manager/index.vue";

const token = {
    path: '/',
    name: 'version-manager',
    title: 'Version manager',
    component: Layout,
    redirect: '/version-manager',
    icon: Icon,
    order: 7,
    meta: {
        title: 'Version manager',
    },
    iconActive: IconActive,
    children: [
        {
            path: 'version-manager',
            name: 'version-manager',
            title: 'Version manager',
            component: VersionManager
        }
    ]
}

export default token
