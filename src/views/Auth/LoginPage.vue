<template>
  <div class="wrap_page_login w-screen h-screen bg-neutral-900 flex">
    <div class="page_login_body bg-bg-global">
      <div class="page_login_body_left">
        <div class="login_body_left_form">
          <p class="text-neutral-0 text-heading-2 !mb-10">Đăng nhập</p>
          <a-form
              :model="formState"
              layout="vertical"
              :hideRequiredMark="true"
              autocomplete="off"
              class="w-full !flex !flex-col"
              @finish="login"
          >
            <a-form-item
                label="Email"
                name="email"
                :rules="[{ required: true, message: $t('validate.email') }]"
            >
              <a-input placeholder="Email" v-model:value="formState.email"/>
            </a-form-item>

            <a-form-item
                label="Password"
                name="password"
                :rules="[{ required: true, message: $t('validate.password') }]"
            >
              <a-input-password placeholder="Password" v-model:value="formState.password"/>
            </a-form-item>
            <a-form-item
                label="2FA"
                name="code"
                :rules="[{ required: true, message: $t('validate.2fa') }]"
            >
              <a-input placeholder="2FA" v-model:value="formState.code"/>
            </a-form-item>
            <a-form-item>
              <a-button :loading="loading" :disabled="loading" class="w-full" type="primary" html-type="submit">Submit
              </a-button>
            </a-form-item>
          </a-form>
        </div>
      </div>
      <div class="page_login_body_right flex">
        <div class="blur-light-login"></div>
        <img class="image-right-login" :src="ImageRight"/>
      </div>
    </div>
  </div>
</template>
<script>
import {userStore} from '@/stores/userStore'
import router from '@/router'
import ImageRight from '@/assets/image/login/image-right.gif'
import {reactive, ref} from 'vue'
import {useMessage} from "@/helper/hook/useMessage";
import {useDebounceFn} from "@vueuse/core";
import {useI18n} from "vue-i18n";

export default {
  name: 'PageLogin',
  setup() {
    const {t} = useI18n()
    const loading = ref(false)
    const formState = reactive({
      email: 'admin@gmail.com',
      password: '123456',
      code: '',
    })
    const {setMessageErrorGlobal, setMessageNotification} = useMessage()
    const storeUser = userStore()
    const login = useDebounceFn(async () => {
      try {
        loading.value = true
        const params = {
          email: formState.email,
          password: formState.password,
          code2Fa: formState.code,
        }
        const res = await storeUser.loginAction(params)
        if (res) {
          setMessageNotification('success', t('page.login.login_success'))
          router.push({
            name: 'home'
          })
        }
      } catch (err) {
        setMessageErrorGlobal(err.message)
      } finally {
        loading.value = false
      }
    }, 200)
    return {login, formState, ImageRight, loading}
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.wrap_page_login {
  display: flex;
  overflow: hidden;
  overflow-y: visible;

  .page_login_body {
    @apply w-full max-w-[1366px] overflow-hidden h-full h-[800px] m-auto grid grid-cols-2;

    .page_login_body_left {
      @apply flex;
      .login_body_left_form {
        @apply max-w-[308px] w-full flex m-auto flex-col justify-center items-center;
      }
    }

    .page_login_body_right {
      @apply overflow-hidden relative;
      .blur-light-login {
        border-radius: 302px;
        mix-blend-mode: lighten;
        background: $emphasis-color-1;
        filter: blur(250px);
        @apply absolute w-[315px] h-[315px] -top-[150px] -left-[150px];
      }

      .image-right-login {
        @apply w-full max-w-[53%]  m-auto mix-blend-lighten;
      }
    }
  }
}
</style>
