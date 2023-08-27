<template>
  <a-tag v-if="!['status', 'kyc'].includes(type)" :class="`tag-custom-${type}`" :color="LIST_TAGS[type]?.color">
    <span :style="`color: ${ LIST_TAGS[type]?.color_label }`">
      {{ LIST_TAGS[type]?.label }}
    </span>
    <template #icon>
      <img :src="LIST_TAGS[type]?.icon"/>
    </template>
  </a-tag>
  <a-tag
      v-else
      :class="`tag-custom-${type}-${value}`"
      :color="renderDataStatus?.color"
  >
    <span>
      {{ renderDataStatus?.label }}
    </span>
    <template #icon>
      <img :src="renderDataStatus?.icon"/>
    </template>
  </a-tag>
</template>
<script>
import Claimed from '@/assets/icons/tags/claimed.svg'
import Convert from '@/assets/icons/tags/convert.svg'
import Executing from '@/assets/icons/tags/executing.svg'
import Failed from '@/assets/icons/tags/failed.svg'
import Pending from '@/assets/icons/tags/pending.svg'
import Received from '@/assets/icons/tags/received.svg'
import Success from '@/assets/icons/tags/success.svg'
import Send from '@/assets/icons/tags/send.svg'
import Lock from '@/assets/icons/tags/lock.svg'
import Active from '@/assets/icons/tags/active.svg'
import Admin from '@/assets/icons/tags/admin.svg'
import AdminView from '@/assets/icons/tags/admin_view.svg'
import SupperAdmin from '@/assets/icons/tags/supper_admin.svg'
import {computed} from "vue";
import {TYPE_TRANSACTION} from "@/helper/const";

export default {
  name: 'ComponentTags',
  props: {
    type: {
      type: String,
      default: 'success'
    },
    value: {
      type: String,
      default: 'active'
    }
  },
  setup(prop) {
    const LIST_TAGS = {
      admin_view: {
        color: 'rgba(134, 134, 134, 0.05)',
        label: 'Admin View',
        icon: AdminView
      },
      admin: {
        color: 'rgba(134, 134, 134, 0.05)',
        label: 'Admin',
        icon: Admin
      },
      supper_admin: {
        color: 'rgba(134, 134, 134, 0.05)',
        label: 'Supper Admin',
        icon: SupperAdmin
      },
      success: {
        color: 'rgba(34, 255, 96, 0.05)',
        label: 'Success',
        icon: Success
      },
      [TYPE_TRANSACTION.RECEIVE_TOKEN]: {
        color: 'rgba(34, 255, 96, 0.05)',
        color_label: '#A2FFBC',
        label: 'Received Token',
        icon: Received
      },
      [TYPE_TRANSACTION.SEND_TOKEN]: {
        color: 'rgba(243, 102, 255, 0.05)',
        color_label: '#F8A2FF',
        label: 'Send Token',
        icon: Send
      },
      [TYPE_TRANSACTION.CONVERT_ATH]: {
        color: 'rgba(134, 132, 255, 0.05)',
        color_label: '#8684FF',
        label: 'Convert ATH',
        icon: Convert
      },
      [TYPE_TRANSACTION.CLAIMED]: {
        color: 'rgba(255, 203, 17, 0.05)',
        color_label: '#FFCB11',
        label: 'Claimed',
        icon: Claimed
      },
      failed: {
        color: 'rgba(255, 102, 102, 0.05)',
        label: 'Failed',
        icon: Failed
      },
      executing: {
        color: 'rgba(100, 125, 255, 0.05)',
        label: 'Executing',
        icon: Executing
      },
      pending: {
        color: 'rgba(134, 134, 134, 0.05)',
        label: 'Pending',
        icon: Pending
      },
      enable: {
        color: 'rgba(34, 255, 96, 0.05)',
        label: 'Enable',
        icon: Success
      },
      disable: {
        color: 'rgba(255, 102, 102, 0.05)',
        label: 'Disable',
        icon: Failed
      },
      status: {
        active: {
          icon: Active,
          label: 'Active',
          color: 'rgba(100, 125, 255, 0.05)',
        },
        inactive: {
          icon: Lock,
          label: 'Locked',
          color: 'rgba(255, 102, 102, 0.05)',
        }
      },
      kyc: {
        yes: {
          icon: Success,
          color: 'rgba(34, 255, 96, 0.05)',

        },
        no: {
          icon: Failed,
          color: 'rgba(255, 102, 102, 0.05)',

        }
      }
    }
    // console.log(LIST_TAGS[prop.type][prop.value])
    const renderDataStatus = computed(() => {
      return LIST_TAGS[prop.type][prop.value]
    })
    return {LIST_TAGS, renderDataStatus}
  }
}
</script>
