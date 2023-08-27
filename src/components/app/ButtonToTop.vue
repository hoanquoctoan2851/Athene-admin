<template>
  <div class="wrap_float_action">
    <div @click="handleScroll" :class="hidden ? 'opacity-100' : 'opacity-0'" class="button_to_top">
      <img class="w-[50%] icon-button m-auto" :src="IconToTop"/>
    </div>
  </div>
</template>
<script>
import IconToTop from '@/assets/svg/icon-to-top.svg'
import { onMounted,ref, onUnmounted } from 'vue';

export default  {
    setup() {
      const hidden = ref(false)
      const handleCheckScroll = () => {
        if(window.scrollY > 400) {
          hidden.value = true
        } else {
          hidden.value = false
        }
      };
      const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      onMounted(() => {
        window.addEventListener('scroll', handleCheckScroll);
      });

      onUnmounted(() => {
        window.removeEventListener('scroll', handleCheckScroll);
      });
      return {
        IconToTop,
        hidden,
        handleScroll
      }
    }
  }
</script>
<style lang="scss">

.wrap_float_action {
  bottom: 100px;
  right: 100px;
  position: fixed;
  z-index: 100;
  @apply flex flex-row items-center gap-12 mobile:right-[22px]
  ;
}

.button_to_top {
  transition: all 1s;
  width: 60px;
  height: 60px;
  border: 1px solid #3D342F;
  border-radius: 50%;
  display: flex;
  cursor: pointer;

  .icon-button {
    transition: all 1s;
  }

  @media only screen and (min-width: 1024px) {
    &:hover {
      transform: translateY(-20px);
      box-shadow: 0 0 1px 5px #2B937A, 0 0 1px 10px rgb(25, 166, 124, 0.6),
      0 0 1px 20px rgba(148, 255, 223, 0.2);

      .icon-button {
        scale: 0.9;
      }
    }
  }
}
</style>