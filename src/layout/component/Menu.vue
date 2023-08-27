<template>
  <div class="menu-default-list">
    <MenuItemCustom
      v-for="item in list_menu"
      :key="item.name + 'menuItem'"
      :items="item"
      @checkActiveMenu="checkActiveMenu"
    ></MenuItemCustom>
  </div>
</template>
<script>
import { ref, computed, onMounted } from 'vue'
import { useAppStore } from '@/stores/appStore'
import { LIST_ROUTES } from '@/router/index.js'
import MenuItemCustom from './MenuItemCustom.vue'
import { useRouter } from 'vue-router'
export default {
  name: 'MenuDefault',
  components: {
    MenuItemCustom
  },
  setup() {
    const appStore = useAppStore()
    const collapsed = computed(() => {
      return appStore.isExpandSider
    })

      const list_menu = computed(() => {
          return LIST_ROUTES.sort((item1, item2) =>  item1.order - item2.order )
      })

    const selectedKeys = ref(['home'])

    const checkActiveMenu = (name) => {
      selectedKeys.value[0] = name
    }
    onMounted(() => {
      selectedKeys.value[0] = useRouter().currentRoute.value.name
    })
    return { collapsed,list_menu, checkActiveMenu, selectedKeys }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.menu-default-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 0 12px;
  padding-top: 24px;
}
</style>
