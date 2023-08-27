<template>
  <a-table :loading="loading" :columns="columns" :data-source="dataTableMap" :pagination="false" :scroll="{ x: 800 }">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'version'">
        <span>{{column.name}}</span>
      </template>
      <template v-else-if="column.key === 'release'">
        <span>
          {{ column.name }}
        </span>
      </template>
      <template v-else-if="column.key === 'status'">
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
      <template v-if="column.key === 'version'">
        <span class="text-content-3 text-neutral-0 font-semibold">{{record.version}}</span>
      </template>
      <template v-else-if="column.key === 'release'">
        <span class="text-content-3 font-light">
          {{ record.release }}
        </span>
      </template>
      <template v-else-if="column.key === 'status'">
        <span>
          <AppTags :type="record.status"></AppTags>
        </span>
      </template>
      <template v-else-if="column.key === 'action'">
        <div class="flex flex-row items-center gap-4">
          <ModalEditVersion @submit-edit="fetchData" :data="record" type="edit"></ModalEditVersion>
          <LoadingOutlined v-if="states.loading && states.columnsAction === record.versionId"></LoadingOutlined>
          <AppPopconfirm v-else @confirm="handleDeleteVersion(record.versionId)" :title="$t('page.version_manager.confirm_delete_version', {version : record.version})">
            <delete-outlined class="!text-2xl cursor-pointer !text-neutral-400 hover:!text-red-color" />
          </AppPopconfirm>
        </div>
      </template>
    </template>
  </a-table>
</template>
<script>
import AppTags from '@/components/app/AppTags.vue'
import { DeleteOutlined, LoadingOutlined} from '@ant-design/icons-vue'
import AppPopconfirm from "@/components/app/AppPopconfirm.vue";
import ModalEditVersion from "@/components/module/modal/ModalEditVersion.vue";
import {computed, reactive} from "vue";
import {deleteVersionApi} from "@/api/version";
import {useMessage} from "@/helper/hook/useMessage";
export default {
  name: 'ComponentTableVersionManager',
  components: {
    AppTags,
    DeleteOutlined,
    AppPopconfirm,
    ModalEditVersion,
    LoadingOutlined
  },
  props: {
    data: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['fetchData'],
  setup(prop, {emit}) {
    const {setMessageErrorGlobal, setMessageNotification} = useMessage()
    const states = reactive({
      loading: false,
      columnsAction: '',
    })

    const columns = [
      {
        name: 'Version',
        dataIndex: 'version',
        key: 'version'
      },
      {
        name: 'Release note',
        dataIndex: 'release',
        key: 'release'
      },
      {
        name: 'Status',
        dataIndex: 'status',
        key: 'status'
      },
      {
        name: 'Actions',
        dataIndex: 'action',
        key: 'action'
      }
    ]

    const mapDataTableTransaction  = (data) => {
      return data?.map((item) => {
        return {
            versionId: item.id,
            key: item.id + 'version',
            status: item.status,
            version: item.version,
            release: item.releaseNote,
            createdAt: item.createdAt,
          }
      })
    }

    const dataTableMap = computed(() => {
      return mapDataTableTransaction(prop.data)
    })

    const handleDeleteVersion = async (id) => {
      try {
        states.columnsAction = id
        states.loading = true
        const res = await deleteVersionApi(id)
        setMessageNotification('success', res.message)
        emit('fetchData')
      } catch (err) {
        console.log(err)
        setMessageErrorGlobal(err.message)
      } finally {
        states.loading = false
        states.columnsAction = ''
      }
    }
    const fetchData = () => {
      emit('fetchData')
    }
    return {
      columns,
      dataTableMap,
      states,
      fetchData,
      handleDeleteVersion
    }
  }
}
</script>
