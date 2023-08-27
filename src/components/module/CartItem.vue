<template>
  <div class="component_cart_item">
      <div class="flex flex-row items-center gap-2.5">
        <img v-if="data.icon" class="max-h-6" :src="data.icon"/>
        <p class="text-neutral-0 break-all font-semibold text-content-3">{{$t(`${data.title}`)}}</p>
      </div>
    <p class="text-emphasis-color text-heading-4 font-light">{{data.value.toLocaleString()}}</p>
    <slot></slot>
  </div>
</template>
<script>
export default {
    props: {
      data: {
          type: Object,
          default: () => {
              return {}
          }
      }
    },
    setup() {
        return {

        }
    }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';
.component_cart_item {
    min-height: 154px;
  width: 100%;
  background: $gray-3;
  border-radius: 8px;
  @apply px-8 py-7 flex flex-col gap-3;
}
</style>