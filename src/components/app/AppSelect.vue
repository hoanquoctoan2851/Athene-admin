<template>
  <div :class="[type === 'country' ? 'max-w-[200px]' : 'max-w-[185px]', 'flex flex-col w-full justify-start gap-2']">
    <span class="text-neutral-0 font-light capitalize">{{ type }}:</span>
    <a-select
        class="select-custom-app !w-full"
        :class="['w-full',['select_day'].includes(type) ? 'border-style' : '']"
        ref="select"
        v-model:value="valueSelect"
        @focus="focus"
        @change="handleChangeValue"
    >
      <template #suffixIcon>
        <caret-down-outlined class="!text-xl"
                             :class="['select_day'].includes(type) ? '!text-primary-color' : '!text-neutral-400'"/>
      </template>
      <a-select-option v-for="item in listSelect[type]" :key="'select-custom' + item.value" :value="item.value"
                       :class="(item.value === '' && option !== 'all') ? '!hidden' : ''">
        <div v-if="type === 'token'" class="flex flex-row items-center gap-2">
          <img :src="item.logo"/>
          <span class="text-neutral-0">{{ $t(`${item.label}`) }}</span>
        </div>
        <div class="w-full" v-else-if="type === 'transaction'">
          <span v-if="item.value === ''" class="text-neutral-0">{{ $t(`${item.label}`) }}</span>
          <AppTags v-else class="w-full" :type="item.value"></AppTags>
        </div>
        <div class="w-full" v-else-if="type === 'status'">
          <span v-if="item.value === ''" class="text-neutral-0">{{ $t(`${item.label}`) }}</span>
          <AppTags v-else class="w-full" :type="item.value"></AppTags>
        </div>
        <div class="w-full" v-else-if="type === 'versionStatus'">
          <span v-if="item.value === ''" class="text-neutral-0">{{ $t(`${item.label}`) }}</span>
          <AppTags v-else class="w-full" :type="item.value"></AppTags>
        </div>
        <div v-if="type === 'role'" class="flex flex-row items-center gap-2">
          <span v-if="item.value === ''" class="text-neutral-0">{{ $t(`${item.label}`) }}</span>
          <AppTags v-else class="w-full" :type="item.value"></AppTags>
        </div>
        <div v-if="type === 'select_user'" class="flex flex-row items-center gap-2">
          <span class="text-neutral-0">{{ $t(`${item.label}`) }}</span>
        </div>
        <div v-if="type === 'select_day'" class="flex flex-row items-center gap-2">
          <span class="text-neutral-0">{{ $t(`${item.label}`, {number: item.value}) }}</span>
        </div>
        <div v-if="type === 'country'" class="flex flex-row items-center gap-2">
          <span v-if="item.code.toLowerCase()" :class="`fi fi-${item.code.toLowerCase()}`"></span>
          <span class="text-neutral-0">{{ item.label }}</span>
        </div>
      </a-select-option>
    </a-select>
  </div>
</template>
<script>
import {nextTick, ref, watch} from 'vue'
import {CaretDownOutlined} from '@ant-design/icons-vue';
import TokenAth from '@/assets/icons/token/token_ath.svg'
import TokenGem from '@/assets/icons/token/token_gem.svg'
import AppTags from "@/components/app/AppTags.vue";
import {countryCodeList} from "@/helper/const";
import {TYPE_TRANSACTION} from "@/helper/const";

export default {
  name: 'ComponentSelection',
  components: {
    CaretDownOutlined,
    AppTags
  },
  props: {
    labelSelect: {
      type: String,
      default: 'Select'
    },
    type: {
      type: String,
      default: 'token'
    },
    valueDefault: {
      type: String,
      default: null,
    },
    option: {
      type: String,
      default: 'all',
    }
  },
  emits: ['fetchValue'],
  setup(prop, {emit}) {
    const valueSelect = ref('')
    const listSelect = {
      token: [
        {
          value: '',
          label: 'common.all',
        },
        {
          value: 'ATH',
          label: 'ATH',
          logo: TokenAth,
        },
        {
          value: 'GEM',
          label: 'GEM',
          logo: TokenGem,
        }
      ],
      transaction: [
        {
          value: '',
          label: 'common.all',
        },
        {
          value: TYPE_TRANSACTION.RECEIVE_TOKEN,
        },
        {
          value: TYPE_TRANSACTION.SEND_TOKEN,
        },
        {
          value: TYPE_TRANSACTION.CLAIMED,
        },
        {
          value: TYPE_TRANSACTION.CONVERT_ATH,
        }
      ],
      status: [
        {
          value: '',
          label: 'common.all',
        },
        {
          value: 'success',
        },
        {
          value: 'failed',
        },
        {
          value: 'pending',
        },
        {
          value: 'executing',
        }
      ],
      versionStatus: [
        {
          value: '',
          label: 'common.all',
        },
        {
          value: 'enable',
        },
        {
          value: 'disable',
        },
      ],
      role: [
        {
          value: '',
          label: 'common.all',
        },
        {
          value: 'admin',
        },
        {
          value: 'admin_view',
          label: 'Admin View',
        },
        {
          value: 'supper_admin',
        },
      ],
      select_user: [
        {
          value: '',
          label: 'common.all',
        }
      ],
      select_day: [
        {
          value: 7,
          label: 'page.user.number_day',
        },
        {
          value: 30,
          label: 'page.user.number_day',
        },
        {
          value: 90,
          label: 'page.user.number_day',
        },
        {
          value: 180,
          label: 'page.user.number_day',
        }
      ],
      country: countryCodeList.map((item) => {
        return {
          value: item.Name,
          label: item.Name,
          code_number: item.code_number,
          code: item.code
        }
      })
    }

    const initValueSelect = () => {
      if (prop.valueDefault) {
        valueSelect.value = prop.valueDefault
      } else {
        valueSelect.value = listSelect[prop.type]?.[0]?.value
      }
      emit('fetchValue', valueSelect.value)
    }

    const handleChangeValue = () => {
      if (prop.type === 'country') {
        const code_coutry = countryCodeList.find((item) => item.Name === valueSelect.value).code
        emit('fetchValue', code_coutry)
        console.log(code_coutry)
      } else {
        emit('fetchValue', valueSelect.value)
      }
    }

    watch(() => prop.type, () => {
      initValueSelect()
    })

    nextTick(() => {
      initValueSelect()
    })


    return {
      valueSelect,
      listSelect,
      handleChangeValue
    }
  }
}
</script>
