<template>
  <a-table :loading="loading" :columns="columns" :data-source="data" :pagination="false" :scroll="{ x: 800 }">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'stt'">
        <span> # </span>
      </template>
      <template v-else-if="column.key === 'email'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'name'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'dateRegister'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'kyc'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'status'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'ref'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'balanceAth'">
        <span>
          {{ column.name }}
        </span></template
      >
      <template v-else-if="column.key === 'balanceGem'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <span>
          {{ column.name }}
        </span>
      </template>
    </template>
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'stt'">
        <span>{{ data.indexOf(record) + 1 }}  </span>
      </template>
      <template v-else-if="column.key === 'email'">
        <span>
          <p>{{ record.email }}</p>
        </span>
      </template>
      <template v-else-if="column.key === 'name'">
        <span>
          <p>{{ record.name }}</p>
        </span>
      </template>
      <template v-else-if="column.key === 'dateRegister'">
        <span>
          {{ record.dateRegister }}
        </span>
      </template>
      <template v-else-if="column.key === 'kyc'">
        <AppTags type="kyc" :value="record.kyc"></AppTags>
      </template>
      <template v-else-if="column.key === 'status'">
        <AppTags type="status" :value="record.status"></AppTags>
      </template>
      <template v-else-if="column.key === 'ref'">
        <span>{{ record.ref }}</span>
      </template>
      <template v-else-if="column.key === 'balanceAth'">
        <span>{{ record.balanceAth }}</span>
      </template>
      <template v-else-if="column.key === 'balanceGem'">
        <span>{{ record.balanceGem }}</span>
      </template>
      <template v-else-if="column.key === 'action'">
        <div class="flex flex-row items-center gap-4">
          <LoadingOutlined v-if="states.loadingComp && record.userId === states.userAction"></LoadingOutlined>
          <AppPopconfirm v-else @confirm="handleBandUser(record.userId)"
                         :title="$t(record.status === 'active' ? 'page.user_manager.confirm_lock' : 'page.user_manager.confirm_un_lock', {user: record.email})">
            <lock-outlined v-if="record.status === 'active'"
                           class="!text-2xl cursor-pointer !text-neutral-400 hover:!text-red-color"/>
            <unlock-outlined v-else class="!text-2xl cursor-pointer !text-neutral-400 hover:!text-green-color"/>
          </AppPopconfirm>
          <ModalTransaction :user-id="record.userId"></ModalTransaction>
        </div>
      </template>
    </template>
  </a-table>
</template>
<script>
import {reactive} from 'vue'
import AppTags from '@/components/app/AppTags.vue'
import ModalTransaction from "@/components/module/modal/ModalTransaction.vue";
import {LockOutlined, UnlockOutlined, LoadingOutlined} from '@ant-design/icons-vue'
import AppPopconfirm from "@/components/app/AppPopconfirm.vue";
import {bandUser} from "@/api/user-manager";
import {useMessage} from "@/helper/hook/useMessage";

export default {
  name: 'ComponentTableUserManager',
  components: {
    AppTags,
    ModalTransaction,
    LockOutlined,
    UnlockOutlined,
    LoadingOutlined,
    AppPopconfirm
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
  },
  emits: ['fetchData'],
  setup(_, {emit}) {
    const states = reactive({
      loadingComp: false,
      userAction: '',
    })
    const {setMessageErrorGlobal, setMessageNotification} = useMessage()
    const columns = [
      {
        name: '#',
        dataIndex: 'stt',
        key: 'stt'
      },
      {
        name: 'Email',
        dataIndex: 'email',
        key: 'email'
      },
      {
        name: 'UserName',
        dataIndex: 'name',
        key: 'name'
      },
      {
        name: 'Registration date',
        dataIndex: 'dateRegister',
        key: 'dateRegister'
      },
      {
        name: 'KYC',
        dataIndex: 'kyc',
        key: 'kyc'
      },
      {
        name: 'Status',
        dataIndex: 'status',
        key: 'status'
      },
      {
        name: 'Ref',
        dataIndex: 'ref',
        key: 'ref'
      },
      {
        name: 'Balance ATH',
        dataIndex: 'balanceAth',
        key: 'balanceAth'
      },
      {
        name: 'Balance GEM',
        dataIndex: 'balanceGem',
        key: 'balanceGem'
      },
      {
        name: 'Actions',
        dataIndex: 'action',
        key: 'action'
      }
    ]

    const handleBandUser = async (id) => {
      states.userAction = id
      try {
        states.loadingComp = true
        const res = await bandUser(id)
        emit('fetchData')
        setMessageNotification('success', res.message)
      } catch (err) {
        console.log(err)
        setMessageErrorGlobal()
      } finally {
        states.loadingComp = false
        states.userAction = ''
      }
    }
    return {
      columns,
      handleBandUser,
      states
    }
  }
}
</script>
