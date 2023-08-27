<template>
  <a-dropdown overlayClassName="dropdown-user-info" :placement="'bottomLeft'" trigger="click">
    <div
        :class="[
      [
        userInfo.email ? 'max-w-[600px]' : 'max-w-[100px]',
        'right-header-info overflow-hidden cursor-pointer'
      ]
    ]"
    >
      <div v-if="userInfo.email" class="flex flex-col items-end justify-center">
        <p class="font-semibold name text-content-3 text-neutral-0">{{ userInfo.name }}</p>
        <p class="font-light email text-content-4 text-neutral-400">{{ userInfo.email }}</p>
      </div>
      <loading-outlined v-else class="!text-neutral-400 text-2xl" />
      <CaretDownFilled class="text-2xl !text-neutral-400"></CaretDownFilled>
    </div>
    <template #overlay>
        <div class="flex flex-col text-neutral-0 rounded-lg overflow-hidden" style="border: 1px solid #9AA7A4 !important;">
          <div @click="handleOpenModal"  class="h-[56px] items-select-info flex cursor-pointer">
            <span class="m-auto">
            Đổi mật khẩu
          </span>
          </div>
          <div @click="handleOpenModalLogout" class="h-[56px] flex items-select-info cursor-pointer">
              <span class="m-auto">
                Đăng xuất
              </span>
          </div>
          </div>
    </template>
  </a-dropdown>
  <a-modal
    wrapClassName="modal-user-info"
    centered
    v-model:visible="modalUserInfo"
    :title="$t('common.change_password')"
    @ok="handleOk"
  >
    <div class="flex flex-col items-start justify-center text-neutral-0 !mb-4">
      <p class="mb-2 font-semibold name text-content-2">{{ userInfo.name }}</p>
      <p class="font-normal email text-content-3">{{ userInfo.email }}</p>
    </div>
    <a-form
      :model="formState"
      layout="vertical"
      :hideRequiredMark="true"
      autocomplete="off"
      class="w-full !flex !flex-col"
      @finish="handleChangePass"
    >
      <a-form-item
        :label="$t('common.old_password')"
        name="password"
        :rules="[{ required: true, message: $t('validate.password') }]"
      >
        <a-input-password :placeholder="$t('common.password')" v-model:value="formState.password" />
      </a-form-item>

      <a-form-item
        :label="$t('common.new_password')"
        name="newPassword"
        :rules="[{ required: true, message: $t('validate.new_password') }]"
      >
        <a-input-password
          :placeholder="$t('common.password')"
          v-model:value="formState.newPassword"
        />
      </a-form-item>
      <a-form-item
        :label="$t('common.password_confirm')"
        name="confirmPassword"
        :rules="[{ required: true, message: $t('validate.confirm_password') }]"
      >
        <a-input-password
          :placeholder="$t('common.password')"
          v-model:value="formState.confirmPassword"
        />
      </a-form-item>
      <a-form-item
        :label="$t('common.2fa')"
        name="code"
        :rules="[{ required: true, message: $t('validate.2fa') }]"
      >
        <a-input-password :placeholder="$t('common.2fa')" v-model:value="formState.code" />
      </a-form-item>
      <a-form-item>
        <a-button class="w-full !mt-7" type="primary" html-type="submit">{{
          $t('common.change_password')
        }}</a-button>
      </a-form-item>
    </a-form>
  </a-modal>
  <a-modal
      wrapClassName="modal-confirm-logout"
      centered
      v-model:visible="modalLogout"
  >
    <div>
      <p class="text-content-1 !font-semibold text-neutral-0 !mb-12">{{$t('pop_confirm.confirm_logout')}}</p>
      <div class="w-full flex flex-row gap-5">
        <a-button @click="() => modalLogout = false" class="!w-full" type="ouline">{{$t('common.cancel')}}</a-button>
        <a-button @click="logOut" class="!w-full" type="danger">{{$t('common.logout')}}</a-button>
      </div>
    </div>
  </a-modal>
</template>
<script>
import { userStore } from '@/stores/userStore'
import { computed, reactive, ref } from 'vue'
import { CaretDownFilled, LoadingOutlined } from '@ant-design/icons-vue'
import { useMessage } from '@/helper/hook/useMessage'
import {logOut} from "@/helper";
export default {
  name: 'ComponentUserInfo',
  components: { CaretDownFilled, LoadingOutlined },
  setup() {
    const modalUserInfo = ref(false)
    const modalLogout = ref(false)

    const formState = reactive({
      newPassword: '',
      password: '',
      confirmPassword: '',
      code: ''
    })
    const storeUser = userStore()
    const { setMessageErrorGlobal } = useMessage()
    const userInfo = computed(() => {
      return {
        email: storeUser.userInfo?.email,
        name: storeUser.userInfo?.name
      }
    })

    const handleOpenModal = () => {
      modalUserInfo.value = true
    }

    const handleOpenModalLogout = () => {
      modalLogout.value = true
    }
    const handleChangePass = () => {
      try {
        const params = {
          newPassword: formState.newPassword,
          password: formState.password,
          confirmPassword: formState.confirmPassword,
          code: formState.code
        }
        setMessageErrorGlobal()
      } catch (erorr) {
        console.log(erorr)
        setMessageErrorGlobal()
      }
    }
    return {logOut, userInfo,modalLogout, formState, modalUserInfo, handleOpenModal, handleChangePass, handleOpenModalLogout }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';
.right-header-info {
  height: 56px;
  padding: 0 16px 0 24px;
  background: rgba(255, 255, 255, 0.02);
  @apply flex flex-row justify-between transition-all rounded-lg duration-1000 items-center gap-4;
  &:hover {
    background: $gray-2;
  }

}

.dropdown-user-info  {
  .items-select-info {
    background: #131D20 !important;
    &:hover {
      background: #1f292b !important;

    }
  }
}

.modal-confirm-logout {
  .ant-modal-close-x {
    display: none !important;
  }

  .ant-modal-body {
    padding: 24px !important;
  }
}
</style>
