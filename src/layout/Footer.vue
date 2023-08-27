<template>
  <PageFooter>
    <div class="layout-footer padding-layout-global"></div>
  </PageFooter>
</template>
<script>
import { Layout } from 'ant-design-vue'

export default {
  name: 'LayoutFooter',
  components: {
    PageFooter: Layout.Footer
  },
  setup() {
    return {}
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.ant-layout-footer {
  overflow: hidden;
  background: #0e3b3e;
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @apply mobile:rounded-t-2xl rounded-t-2xl;
  .layout-footer {
    max-width: 1534px;
    margin-bottom: 40px;
    max-width: 1200px;
    width: 100%;
    @apply flex flex-row mobile:justify-center mobile:flex-wrap tablet:justify-center tablet:flex-wrap mx-auto tablet:gap-12 mobile:gap-12 mobile:pb-[60px];
  }
}
</style>
