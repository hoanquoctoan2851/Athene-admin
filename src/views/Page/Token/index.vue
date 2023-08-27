<template>
  <component v-bind:is="tabActive"></component>
</template>
<script>
import ATH from './component/TabAthToken.vue'
import GEM from './component/TabGemToken.vue'
import {useAppStore} from "@/stores/appStore";
import {computed} from "vue";
export default {
  name: 'TokenPage',
  components: {
    ATH,
    GEM
  },
  setup() {
    const appStore = useAppStore()
    const tabActive = computed(() => {
      return appStore.valueTabToken
    })
    return {
      tabActive
    }
  }
}
</script>