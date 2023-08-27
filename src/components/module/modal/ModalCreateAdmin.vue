<template>
  <a-button @click="handleOpenModal" type="primary" class="!px-12">
    <div class="flex flex-row items-center gap-3">
      <span>{{$t('page.admin_manager.add_new_admin')}}</span>
      <plus-outlined />
    </div>
  </a-button>
  <a-modal width="893px" v-model:visible="modalTransaction" :title=" $t('page.admin_manager.add_new_admin')">
    <div class="grid grid-cols-2 gap-16">
      <a-form
          :model="formState"
          layout="vertical"
          :hideRequiredMark="true"
          autocomplete="off"
          class="w-full !flex !flex-col"
          @finish="handleSubmit"
      >
        <a-form-item
            :label="$t('common.email')"
            name="email"
            :rules="[{ required: true, message: $t('validate.email') }]"
        >
          <a-input :placeholder="$t('common.email')" v-model:value="formState.email" />
        </a-form-item>

        <a-form-item
            :label="$t('common.password')"
            name="password"
            :rules="[{ required: true, message: $t('validate.password') }]"

        >
          <a-input-password :placeholder="$t('common.password')" v-model:value="formState.password" />
        </a-form-item>
        <a-form-item
            :label="$t('common.password_confirm_1')"
            name="passwordConfirm"
            :rules="[{validator: validatePass }]"

        >
          <a-input-password :placeholder="$t('common.password_confirm_1')" v-model:value="formState.passwordConfirm" />
        </a-form-item>
        <a-form-item
            :label="$t('common.admin')"
            name="status"
        >
          <AppSelect @fetchValue="fetchValueAdmin" option="no-all" value-default="admin" class="w-full max-w-[100%]" type="role"></AppSelect>
        </a-form-item>
        <a-form-item>
          <a-button class="w-full" type="primary" html-type="submit">{{$t('page.admin_manager.add_new_admin')}}</a-button>
        </a-form-item>
      </a-form>
      <div>
        <div v-for="item in LIST_ADMIN" :key="item.value">
          <div class="flex flex-row items-center gap-4">
            <p class="text-content-2 mb-0 font-semibold" :style="`color: ${item.color}`">{{item.label}}</p>
            <AppTags :type="item.value"></AppTags>
          </div>
          <p class="text-neutral-400 text-content-3 mt-3">{{item.content}}</p>
        </div>
      </div>
    </div>
  </a-modal>
</template>
<script>
import { reactive, ref} from "vue";
import {PlusOutlined } from '@ant-design/icons-vue'
import AppTags from "@/components/app/AppTags.vue";
import AppSelect from "@/components/app/AppSelect.vue";
import {useI18n} from "vue-i18n";

export default {
  name: 'ModalTransaction',
  components: {
    PlusOutlined,
    AppTags,AppSelect

  },
  props: {
    data: {
      type: Object,
      default: () => {
        return {

        }
      }
    }
  },
  emits: ['submitAdd'],
  setup(prop, {emit}) {
    const formState = reactive({
      email: '',
      password: '',
      passwordConfirm: '',
      adminType: ''
    })

    const {t} = useI18n()

    const validatePass = async (_rule, value) => {
      if (formState.password !== value) {
        return Promise.reject(t('validate.confirm_password_like'));
      }
      return Promise.resolve();
    };
    const modalTransaction = ref(false)

    const handleOpenModal = () => {
      modalTransaction.value = true
    }


    const fetchValueAdmin = (value) => {
      formState.adminType = value
    }

    const handleSubmit = () => {
      emit('submitAdd', formState)
    }


    const LIST_ADMIN= [
      {
        value: 'supper_admin',
        label: 'Supper Admin',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec.',
        color: '#FF7324',
      },
      {
        value: 'admin',
        label: 'Admin',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec.',
        color: '#D7C736'

      },
      {
        value: 'admin_view',
        label: 'Admin view',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec.',
        color: '#FFFFFF'

      },
    ]

    return {
      handleOpenModal,
      modalTransaction,
      handleSubmit,
      formState,
      LIST_ADMIN,
      validatePass,
      fetchValueAdmin

    }
  }
}
</script>
