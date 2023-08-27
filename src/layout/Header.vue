<template>
  <div class="wrap_header">
      <AppUserInfo></AppUserInfo>
    <AppLocale></AppLocale>
  </div>
</template>
<script>
import AppLocale from "@/components/app/AppLocale.vue";
import AppUserInfo from "@/components/app/AppUserInfo.vue";
export default {
  name: 'LayoutHeader',
  components: {
    AppLocale,
      AppUserInfo
  },
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.wrap_header {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
