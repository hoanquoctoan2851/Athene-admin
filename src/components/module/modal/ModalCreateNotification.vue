<template>
  <a-button @click="handleOpenModal" type="primary" class="!px-12">
    <div class="flex flex-row items-center gap-3">
      <span>{{$t('page.notification.add_new_notification')}}</span>
      <plus-outlined />
    </div>
  </a-button>
  <a-modal width="893px" v-model:visible="modalTransaction" :title=" $t('page.notification.add_new_notification')">
    <a-form
        :model="formState"
        layout="vertical"
        :hideRequiredMark="true"
        autocomplete="off"
        class="w-full !flex !flex-col"
        @finish="handleSubmit"
    >
      <a-form-item
          :label="$t('page.notification.title')"
          name="title"
          :rules="[{ required: true, message: $t('validate.title') }]"
      >
        <a-input :placeholder="$t('page.notification.title')" v-model:value="formState.title" />
      </a-form-item>
      <a-form-item
          :label="$t('page.notification.content')"
          name="content"
          :rules="[{ required: true, message: $t('validate.content') }]"
      >
        <a-textarea :rows="4" :placeholder="$t('page.notification.content')" v-model:value="formState.content" />
      </a-form-item>
      <a-form-item
          :label="$t('page.notification.link')"
          name="passwordConfirm"
          :rules="[{ required: true, message: $t('validate.link') }]"

      >
        <a-input :placeholder="$t('page.notification.link')" v-model:value="formState.passwordConfirm" />
      </a-form-item>
      <a-form-item
          :label="$t('page.notification.action')"
          name="passwordConfirm"
          :rules="[{validator: validatePass }]"

      >
        <a-input :placeholder="$t('page.notification.action')" v-model:value="formState.passwordConfirm" />
      </a-form-item>
      <a-form-item
          :label="$t('page.notification.image')"
          name="passwordConfirm"
          :rules="[{validator: validatePass }]"

      >
        <UploadImage></UploadImage>
      </a-form-item>
      <a-form-item
          :label="$t('page.notification.select_user')"
          name="userId"
          :rules="[{validator: validatePass }]"

      >
        <AppSelect type="select_user"></AppSelect>
      </a-form-item>
      <a-form-item>
        <a-button class="w-full" type="primary" html-type="submit">{{$t('page.admin_manager.add_new_admin')}}</a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script>
import { reactive, ref} from "vue";
import {PlusOutlined } from '@ant-design/icons-vue'
import AppSelect from "@/components/app/AppSelect.vue";
import {useI18n} from "vue-i18n";
import UploadImage from "@/components/app/UploadImage.vue";

export default {
  name: 'ModalCreateNotification',
  components: {
    PlusOutlined,
    AppSelect,
    UploadImage

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
      title: '',
      content: '',
      link: '',
      image: '',
      action: '',
      userId: ''
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