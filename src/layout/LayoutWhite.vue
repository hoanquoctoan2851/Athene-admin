<template>
  <PageContent class="wrap-layout-white-content">
    <RouterView></RouterView>
  </PageContent>
</template>
<script>
import { Layout } from 'ant-design-vue'

export default {
  name: 'LayoutContent',
  components: {
    PageContent: Layout.Content
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.wrap-layout-white-content {
  width: 100vw;
  min-height: 100vh;
}
</style>
