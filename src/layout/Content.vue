<template>
  <div class="wrap-layout-content">
    <RouterView>
      <template #default="{ Component, route }">
        <component :is="Component" :key="route.fullPath"/>
      </template>
    </RouterView>
  </div>
</template>
<script>
import {Layout} from 'ant-design-vue'

export default {
  name: 'LayoutContent',
  components: {
    PageContent: Layout.Content
  },
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.wrap-layout-content {
  width: 100%;
  padding-top: calc($height-header + 48px);
  padding-bottom: 48px;
}
</style>
