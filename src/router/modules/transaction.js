import Layout from '@/layout/index.vue'
import Icon from '@/assets/icons/menu/icon_transaction.svg'
import IconActive from '@/assets/icons/menu/icon_transaction_active.svg'
import Transaction from "@/views/Page/Transaction/index.vue";

const transaction = {
    path: '/',
    name: 'transaction',
    title: 'Transaction',
    component: Layout,
    redirect: '/transaction',
    icon: Icon,
    order: 4,
    meta: {
        title: 'Transaction',
    },
    iconActive: IconActive,
    children: [
        {
            path: 'transaction',
            name: 'transaction',
            title: 'Transaction',
            component: Transaction
        }
    ]
}

export default transaction
