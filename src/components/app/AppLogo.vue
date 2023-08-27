<template>
  <a :href="`/dashboard`" class="pb-6">
    <img
      :class="`w-full`"
      :style="`max-width: ${fullLogo ? maxWidth : '160px'}`"
      :src="fullLogo ? Logo : LogoFull"
    />
  </a>
</template>
<script>
import Logo from '@/assets/logo.png'
import LogoFull from '@/assets/logo-full.png'
import {ROOT_ROUTE} from "@/router";

export default {
  props: {
    maxWidth: {
      type: String,
      default: '32px'
    },
    fullLogo: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    return { Logo, LogoFull, ROOT_ROUTE }
  }
}
</script>
