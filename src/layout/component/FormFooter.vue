<template>
  <div
      class="w-full mobile:mb-[120px] flex flex-col gap-[60px] items-center relative mb-[242px] max-w-[824px] mobile:px-3"
  >
    <img v-motion-title-section-visible
         class="absolute max-w-[400%] mobile:max-w-[200%] mobile:bottom-[52%] -bottom-[50%]"
         :src="BgFooter"
    />
    <div v-motion-title-section-visible
         class="box-icon-hammer flex w-[162px] h-[162px] mobile:w-[120px] mobile:h-[120px] z-10">
      <img class="w-[60%] m-auto" :src="HammerIcon"/>
    </div>
    <h2 v-motion-title-section-visible
        id="form-download-mobile"
        class="text-neutral-0 text-heading-2 !font-medium text-center"
        v-html="$t('footer.title')"
    ></h2>
    <p v-motion-title-section-visible
       class="text-content-4 !text-neutral-400 !font-light max-w-[731px] w-full text-center"
       v-html="$t('footer.content')"
    ></p>
  </div>
</template>
<script>
import HammerIcon from '@/assets/icons/hammer_icon.png'
import BgFooter from '@/assets/images/bg-footer.png'
import ButtonAppstore from '@/assets/images/app-store-button.png'
import ButtonGooglePlay from '@/assets/images/google-play-button.png'
import {useAppStore} from '@/stores/appStore'

export default {
  setup() {
    const LIST_PLAT_FORM = [
      {
        logo: ButtonAppstore,
        title: 'Download on the',
        sub_title: 'App Store',
        maxWidth: '39px',
        link: ''
      },
      {
        logo: ButtonGooglePlay,
        title: 'GET IT ON',
        sub_title: 'Google Play',
        maxWidth: '45px',
        link: ''
      }
    ]

    const handleDirect = (link) => {
      if (link) {
        window.open(link, '_blank')
      } else {
        useAppStore().setModalComingSoon(true)
      }
    }
    return {
      HammerIcon,
      LIST_PLAT_FORM,
      BgFooter,
      handleDirect
    }
  }
}
</script>
<style lang="scss">
.box-icon-hammer {
  border-radius: 28.729px;
  background: var(--neutral-900, #0d100f);
  box-shadow: 0px 0px 39.9014778137207px 0px #00ffc2 inset;
}
</style>
