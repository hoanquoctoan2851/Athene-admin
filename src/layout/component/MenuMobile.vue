<template>
  <a-drawer
    class="drawer-menu-mobile"
    :class="!openDrawer ? 'seperate-top' : ''"
    placement="bottom"
    :closable="false"
    :visible="openDrawer"
  >
    <template #title>
      <div class="flex flex-row items-center justify-between">
        <div class="w-[200px]">
          <AppLogo></AppLogo>
        </div>
        <close-outlined @click="onClose" class="text-lg text-white" style="color: white" />
      </div>
    </template>
    <div class="flex gap-12 flex-col justify-between pb-10">
      <div class="flex flex-col gap-6">
        <div class="menu-mobile-routes flex flex-col gap-10">
          <div v-for="item in listMenu" :key="item.path">
            <div v-if="item.children.length < 2" @click="handleSelectMenu(item)" class="flex flex-row items-center justify-start gap-3">
              <img class="w-8 transition-all duration-500" :src="currentRoutes.name === item.name ? item.iconActive : item.icon" alt="icon" />
              <span
                :class="[
                  '!font-semibold text-xl !text-neutral-0',
                  currentRoutes.name === item.name ? '!text-primary-color' : ''
                ]"
                >{{ item.title }}</span
              >
            </div>
            <div v-else :class="['py-1 border-b border-gray-1']">
              <span
                :class="[
                  'font-bold text-2xl',
                  currentRoutes.meta?.parent === item.name ? 'text-white' : 'text-gray-4'
                ]"
                >{{ item.title }}</span
              >
              <div class="flex flex-col overflow-hidden mt-4">
                <div
                  class="group cursor-pointer"
                  v-for="children in item.children"
                  :key="children.name"
                  @click="handleSelectMenu(children)"
                >
                  <div
                    v-if="!children.hideMenu"
                    class="h-[40px] w-full transition-all duration-500 px-6 flex items-center"
                  >
                    <p
                      :class="[
                        currentRoutes.name === children.name ? 'text-white' : 'text-gray-4',
                        'group-hover:!text-white transition-all duration-500 text-lg font-bold cursor-pointer'
                      ]"
                      @click.prevent
                    >
                      {{ children.title }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </a-drawer>
</template>
<script>
import { computed } from 'vue'
import AppLogo from '@/components/app/AppLogo.vue'
import { CloseOutlined } from '@ant-design/icons-vue'
import router, { LIST_ROUTES } from '@/router'
import { useAppStore } from '@/stores/appStore'

export default {
  components: { AppLogo, CloseOutlined },
  setup() {
    const appStore = useAppStore()

    const currentRoutes = computed(() => {
      return router.currentRoute.value
    })

    const openDrawer = computed(() => {
      return appStore.isExpandSider
    })

    const listMenu = computed(() => {
      return LIST_ROUTES.map((item) => {
        return item
      }).filter((item) => !item.hideMenu).sort((item1, item2) =>  item1.order - item2.order)
    })

    const onClose = () => {
      appStore.setExpandSider(false)
    }

    const handleSelectMenu = (menu) => {
      const LIST_ROUTE_COMING = ['product']
      if (LIST_ROUTE_COMING.includes(menu.name)) {
        useAppStore().setModalComingSoon(true)
      } else {
        if (menu.name === 'mobile-app') {
          onClose()
          setTimeout(() => {
            if (window.innerWidth < 768) {
              document.getElementById('form-download-mobile')?.scrollIntoView({
                behavior: 'smooth'
              })
            } else {
              document.getElementById('form-download-footer')?.scrollIntoView({
                behavior: 'smooth'
              })
            }
          }, 300)
        } else {
          document.body.scrollTo({ top: 0, behavior: 'smooth' })
          router.push({
            name: menu.name
          })
          onClose()
        }
      }
    }
    return {
      onClose,
      handleSelectMenu,
      listMenu,
      currentRoutes,
      openDrawer
    }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.drawer-menu-mobile {
  width: 100vw !important;
  z-index: 10000000000;

  .ant-drawer-content-wrapper {
    box-shadow: unset !important;
    transition-duration: 1s !important;
  }

  .ant-drawer-header,
  .ant-drawer-body {
    border-bottom: unset;
    border-top: unset;
  }

  .ant-drawer-body,
  .ant-drawer-header {
    background: #0c0f11;
  }

  .ant-drawer-content {
    background-color: transparent !important;
    overflow: hidden;
    @apply rounded-t-2xl;
  }

  .ant-select-selection-item {
    padding-right: 0 !important;
  }
}

.seperate-top {
  .ant-drawer-content {
    margin-top: 0px;
  }
}
</style>
