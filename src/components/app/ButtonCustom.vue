<template>
  <div
    @click="handleDirect"
    :class="[
      'button-custom-app select-none !font-bold group w-full',
      disabled ? 'cursor-not-allowed !text-gray-400' : 'cursor-pointer !text-content-4'
    ]"
    :style="`height: ${height}; color: ${color} !important`"
  >
    <span
      :class="[
        color === 'white' ? 'group-hover:!text-emphasis' : 'group-hover:!text-white',
        'text-lg font-semibold transition-all duration-500'
      ]"
      >{{ label }}</span
    >
    <loading-outlined v-if="loading" />
    <div v-else>
      <download-outlined
        v-if="icon"
        :class="[
          color === 'white' ? 'group-hover:!text-emphasis' : 'group-hover:!text-white',
          '!text-xl transition-all duration-500 pb-1'
        ]"
      />
    </div>
  </div>
</template>
<script>
import { DownloadOutlined, LoadingOutlined } from '@ant-design/icons-vue'
import { useAppStore } from '@/stores/appStore'
export default {
  components: {
    DownloadOutlined,
    LoadingOutlined
  },
  props: {
    height: {
      type: String,
      default: '48px'
    },
    link: {
      type: Object,
      default: () => {
        return {
          link: '',
          target: '_blank'
        }
      }
    },
    color: {
      type: String,
      default: 'white'
    },
    label: {
      type: String,
      default: 'Download'
    },
    type: {
      type: String,
      default: 'link'
    },
    icon: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(prop, { emit }) {
    const handleDirect = () => {
      if (!prop.disabled) {
        if (prop.type === 'link') {
          if (prop.link.link) {
            window.open(prop.link.link, prop.link.target)
          } else {
            useAppStore().setModalComingSoon(true)
          }
        } else {
          emit('click')
        }
      }
    }
    return { handleDirect }
  }
}
</script>
<style lang="scss">
@import '@/design/variable';
.button-custom-app {
  border-radius: 4px;
  border: 1px solid var(--primary-400, #2b937a);
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 12px;
  background: var(
    --button-fill,
    radial-gradient(
      2058.68% 50% at 50% 50%,
      rgba(43, 147, 122, 0.1) 0%,
      rgba(43, 147, 122, 0) 100%
    ),
    #0a1013
  );
  @apply px-[64px];
  transition: all 1s;

  @media only screen and (min-width: 1024px) {
    &:hover {
      box-shadow: 0px 0px 40px 0px $primary-color, 0px 0px 8px 2px $primary-color inset !important;
      .icon-button {
        scale: 0.9;
      }
    }
  }
}
</style>
