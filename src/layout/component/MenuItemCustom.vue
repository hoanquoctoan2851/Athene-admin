<template>
  <div
    :class="[
      'menu-item-content transition-all duration-500',
      currentRoute === items.name ? 'active-menu-item' : '',
      isExpand ? 'justify-center' : ''
    ]"
    v-if="items.children.length < 2"
    @click="handleMenuClick(items)"
    :key="items.name"
  >
    <div :class="['flex flex-row items-center h-full gap-2']">
      <img class="w-8 transition-all duration-500" :src="iconMenuItem" />
      <span v-if="!isExpand">
        {{ items.title }}
      </span>
    </div>
  </div>
  <!-- <a-sub-menu v-else>
    <template #title>{{ items.title }}</template>
    <a-menu-item
      @click="handleMenuClick(children)"
      v-for="children in items.children"
      :key="children.name"
      >{{ children.title }}
    </a-menu-item>
  </a-sub-menu> -->
</template>
<script>
import { defineComponent, computed } from 'vue'
import { LIST_ROUTES } from '@/router'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/appStore'

export default defineComponent({
  name: 'MenuItemCustom',
  props: {
    items: {
      type: Object,
      default: () => {}
    },
    menuActive: {
      type: String,
      default: ''
    }
  },
  emits: ['checkActiveMenu'],
  setup(prop, { emit }) {
    const router = useRouter()
    const appStore = useAppStore()
    const isExpand = computed(() => {
      return appStore.isExpandSider
    })

    const currentRoute = computed(() => {
      return router.currentRoute.value.name
    })

    const iconMenuItem = computed(() => {
      return currentRoute.value === prop.items.name ? prop.items.iconActive : prop.items.icon
    })
    const handleMenuClick = (items) => {
      emit('checkActiveMenu', items.name)
      router.push({
        name: items.name
      })
    }
    return {
      LIST_ROUTES,
      isExpand,
      handleMenuClick,
      currentRoute,
      iconMenuItem
    }
  }
})
</script>
<style lang="scss">
@import '@/design/variable.scss';

.menu-item-content {
  cursor: pointer;
  height: 40px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  color: $color-menu;
  font-weight: 600;
}

.menu-item-content.active-menu-item {
  color: $color-active-menu;
  font-weight: 600;
}
</style>
