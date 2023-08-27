<template>
  <a-button v-if="type === 'add'" @click="handleOpenModal" type="primary" class="!px-12">
    <div class="flex flex-row items-center gap-3">
      <span>{{ $t('page.version_manager.add_new_version') }}</span>
      <plus-outlined/>
    </div>
  </a-button>
  <edit-outlined v-else class="!text-2xl cursor-pointer !text-neutral-400 hover:!text-neutral-0"
                 @click="handleOpenModal"/>
  <a-modal :destroyOnClose="true" width="475px" v-model:visible="modalTransaction"
           :title="type === 'add' ? $t('common.add_new') : $t('common.edit')">
    <a-form
        :model="formState"
        layout="vertical"
        :hideRequiredMark="true"
        autocomplete="off"
        class="w-full !flex !flex-col"
        @finish="handleSubmit"
    >
      <a-form-item
          v-if="type === 'add'"
          :label="$t('page.version_manager.version')"
          name="version"
          :rules="[{ required: true, message: $t('validate.version') }]"
      >
        <a-input :placeholder="$t('page.version_manager.version')" v-model:value="formState.version"/>
      </a-form-item>

      <a-form-item
          :label="$t('page.version_manager.release_note')"
          name="release"
      >
        <a-input :placeholder="$t('page.version_manager.release_note')" v-model:value="formState.release"/>
      </a-form-item>
      <a-form-item
          :label="$t('common.status')"
          name="status"
      >
        <a-switch v-model:checked="formState.status"/>
      </a-form-item>
      <a-form-item>
        <a-button :loading="formState.loadingAdd" class="w-full" type="primary" html-type="submit">
          {{ $t(type === 'add' ? 'page.version_manager.add_version' : 'common.edit') }}
        </a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
import {computed, nextTick, reactive, ref, watch} from "vue";
import {PlusOutlined, EditOutlined} from '@ant-design/icons-vue'
import {createVersionApi, updateVersionApi} from "@/api/version";
import {useMessage} from "@/helper/hook/useMessage";
import {useAppStore} from "@/stores/appStore";

export default {
  name: 'ModalTransaction',
  components: {
    PlusOutlined,
    EditOutlined
  },
  props: {
    type: {
      type: String,
      default: 'add'
    },
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    loading: {
      type: Boolean,
      default: false
    },
  },
  emits: ['submitEdit', 'submitAdd'],
  setup(prop, {emit}) {
    const {setMessageErrorGlobal, setMessageNotification} = useMessage()
    const formState = reactive({
      version: '',
      release: '',
      status: true,
      loadingAdd: false,
    })
    const appStore = useAppStore()
    const modalTransaction = ref(false)
    const typOs = computed(() => {
      return appStore.valueTabVersion
    })

    const handleOpenModal = () => {
      modalTransaction.value = true
    }

    const handleAddVersion = async () => {
      try {
        formState.loadingAdd = true
        const params = {
          releaseNote: formState.release,
          status: formState.status ? 'enable' : 'disable',
          version: formState.version,
          os: typOs.value
        }
        const res = await createVersionApi(params)
        setMessageNotification('success', res.message)
        emit('submitAdd')
        modalTransaction.value = false
      } catch (err) {
        console.log(err)
        setMessageErrorGlobal()
      } finally {
        formState.loadingAdd = false
      }
    }
    const initData = () => {
      formState.version = ''
      if (prop.data) {
        formState.release = prop.data?.release
        formState.status = prop.data?.status === 'enable' ? true : false
      } else {
        formState.loadingAdd = false,
        formState.release = '',
        formState.status = false
      }
    }

    const handleUpdateVersion = async () => {
      try {
        formState.loadingAdd = true
        const params = {
          releaseNote: formState.release,
          status: formState.status ? 'enable' : 'disable',
        }
        const res = await updateVersionApi(params, prop.data.versionId )
        setMessageNotification('success', res.message)
        emit('submitEdit')
        modalTransaction.value = false
      } catch (err) {
        console.log(err)
        setMessageErrorGlobal(err.message)
      } finally {
        formState.loadingAdd = false
      }
    }

    const handleSubmit = () => {
      if (prop.type === 'edit') {
        handleUpdateVersion()
      } else {
        handleAddVersion()
      }
    }

    nextTick(() => {
      initData()
    })

    watch(() => modalTransaction.value, () => {
      initData()
    })

    return {
      handleOpenModal,
      handleSubmit,
      modalTransaction,
      formState
    }
  }
}
</script>