<template>
  <div
    v-if="ListItem[currentRoute]"
    style="border: 1px solid"
    class="tab-select-header h-[48px] rounded-lg w-full max-w-[270px] grid grid-cols-2 p-1 !border-neutral-400"
  >
    <div
      v-for="item in ListItem[currentRoute]"
      :key="item.value"
      @click="handleSelectTab(item.value)"
      class="flex flex-row items-center justify-center rounded-lg gap-2 cursor-pointer"
      :class="[ valueActive === item.value ? 'bg-emphasis-color-1' : 'text-neutral-400']"
    >
      <img v-if="currentRoute === 'token'" :src="item.icon" />
      <div v-else class="flex items-center">
        <apple-filled class="!flex !text-2xl"  v-if="item.value === 'ios'"/>
        <android-filled class="!flex !text-2xl" v-else />
      </div>
      <span class="text-content-3 !mb-0 !font-semibold">{{ item.label }}</span>
    </div>
  </div>
</template>
<script>
import TokenAth from '@/assets/icons/token/token_ath.svg'
import TokenGem from '@/assets/icons/token/token_gem.svg'
import {AppleFilled, AndroidFilled} from '@ant-design/icons-vue'

import Router from '@/router'
import { computed } from 'vue'
import { useAppStore } from '@/stores/appStore'
export default {
  name: 'TabSelectHeader',
  components: {
    AppleFilled,
    AndroidFilled
  },
  setup() {
    const currentRoute = computed(() => {
      return Router.currentRoute.value.name
    })
    const appStore = useAppStore()

    const valueActive = computed(() => {
      if (currentRoute.value === 'token') {
        return appStore.valueTabToken
      } else {
        return appStore.valueTabVersion
      }
    })
    const ListItem = {
      token: [
        {
          label: 'ATH',
          value: 'ATH',
          icon: TokenAth
        },
        {
          label: 'GEM',
          value: 'GEM',
          icon: TokenGem
        }
      ],
      'version-manager': [
        {
          label: 'IOS',
          value: 'ios'
        },
        {
          label: 'ANDROID',
          value: 'android'
        }
      ]
    }
    const handleSelectTab = (value) => {
      if (currentRoute.value === 'token') {
        appStore.setValueTabToken(value)
      } else {
        appStore.setValueTabVersion(value)
      }
    }
    return {
      ListItem,
      currentRoute,
      valueActive,
      handleSelectTab
    }
  }
}
</script>
