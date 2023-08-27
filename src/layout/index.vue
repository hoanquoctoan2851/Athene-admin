<template>
  <a-layout class="main-layout">
    <a-layout-sider
        v-if="isDesktop"
        v-model:collapsed="collapsed"
        :trigger="null"
        :class="['main-layout-sider']"
    >
      <div :class="['logo-sider', collapsed ? 'justify-center' : 'justify-start']">
        <Logo :fullLogo="collapsed"></Logo>
      </div>
      <MenuDefault></MenuDefault>
    </a-layout-sider>
    <MenuMobile v-else></MenuMobile>
    <a-layout
        :class="[
        'main-layout-body',
        collapsed ? '' : 'is-expand',
        isDesktop ? '' : 'main-layout-body-mobile'
      ]"
    >
      <a-layout-header :class="[isDesktop ? '' : 'main-header-mobile', 'main-layout-header']">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="handleExpandSider"/>
        <menu-fold-outlined v-else class="trigger" @click="handleExpandSider"/>
        <div class="w-full px-6 flex flex-row items-center gap-5">
          <span class="text-content-1 select-none text-gradient !font-semibold">{{currentRoutes}}</span>
          <TabSelectHeader></TabSelectHeader>
        </div>
        <HeaderContent></HeaderContent>
      </a-layout-header>
      <a-layout-content class="main-layout-content">
        <ContentPage></ContentPage>
      </a-layout-content>
<!--      <a-layout-footer class="layout-footer-custom hidden"></a-layout-footer>-->
    </a-layout>
  </a-layout>
</template>
<script>
import {computed, onMounted} from 'vue'
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons-vue'
import MenuDefault from '@/layout/component/Menu.vue'
import {useAppStore} from '@/stores/appStore'
import Logo from '@/components/app/AppLogo.vue'
import ContentPage from '@/layout/Content.vue'
import HeaderContent from '@/layout/Header.vue'
import MenuMobile from '@/layout/component/MenuMobile.vue'
import {useDevice} from '@/helper/hook/useDevice'
import {userStore} from '@/stores/userStore'
import router from "@/router";
import TabSelectHeader from "@/components/app/TabSelectHeader.vue";

export default {
  name: 'LayoutDefault',
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    MenuDefault,
    ContentPage,
    HeaderContent,
    MenuMobile,
    TabSelectHeader,
    Logo
  },
  setup() {
    const appStore = useAppStore()
    const {isDesktop} = useDevice()
    const collapsed = computed(() => {
      return appStore.isExpandSider
    })

    const currentRoutes = computed(() => {
      return router.currentRoute.value.meta?.title
    })

    const handleExpandSider = () => {
      appStore.setExpandSider(!appStore.isExpandSider)
    }
    onMounted(() => {
      userStore().getUserInfo()
    })
    return {collapsed, isDesktop, handleExpandSider, currentRoutes}
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.main-layout {
  .main-layout-sider {
    position: fixed;
    height: 100vh;
    z-index: 1000;
    flex: 0 0 $width-sider-expand !important;
    max-width: $width-sider-expand !important;
    min-width: $width-sider-expand !important;
    width: $width-sider-expand !important;
    user-select: none;
    padding: 12px 10px;
    background: $background-sider;
  }

  .ant-layout-sider-children {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.02) 100%);
    border-radius: 4px;
  }

  .main-layout-sider.ant-layout-sider-collapsed {
    flex: 0 0 $width-sider !important;
    max-width: $width-sider !important;
    min-width: $width-sider !important;
    width: $width-sider !important;
  }

  .main-layout-body {
    padding-left: $width-sider;
    background: $bg-global;

    .main-layout-content {
      min-height: calc(100vh  - $height-footer);
      background: $bg-global;
      @apply px-6;
    }

    .main-layout-header {
      background: $background-header;
      padding: 0 24px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      z-index: 100;
      width: calc(100vw - $width-sider);
      height: $height-header;
      border-bottom: 1px solid $border-header;

      .trigger {
        font-size: 24px;
        color: $primary-color;
      }
    }

    .main-header-mobile {
      width: 100% !important;
      left: 0 !important;
      flex-direction: row-reverse;
    }

    .layout-footer-custom {
      width: 100%;
      height: $height-footer !important;
      background: $background-footer;
      padding: 0 !important;
    }
  }

  .main-layout-body.is-expand {
    padding-left: $width-sider-expand;

    .main-layout-header {
      width: calc(100vw - $width-sider-expand);
    }
  }

  .main-layout-body-mobile {
    padding-left: 0;
  }

  .main-layout-body-mobile.is-expand {
    padding-left: 0;
  }

  .logo-sider {
    height: $height-header;
    display: flex;
    align-items: center;
    padding: 0 12px;
  }
}
</style>
