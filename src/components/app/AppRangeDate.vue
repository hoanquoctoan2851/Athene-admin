<template>
  <div
    :class="[
      separate ? 'w-full' : '',
      'flex flex-row gap-3 items-center justify-between'
    ]"
  >
    <div v-if="separate" class="w-full h-[1px] bg-gray-4"></div>
    <div class="w-full max-w-[274px]">
      <a-range-picker v-model:value="rangeDate" :picker="pickerType" :format="'DD/MM/YYYY'" value-format="YYYY/MM/DD">
        <template #separator>
          <minus-outlined class="!text-neutral-400" />
        </template>
      </a-range-picker>
    </div>
    <div v-if="separate" class="w-full h-[1px] bg-gray-4"></div>
  </div>
</template>
<script>
import { ref, watch } from 'vue'
import { MinusOutlined } from '@ant-design/icons-vue'
import dayjs from "dayjs";


const date = new Date();
const gmtOffsetMinutes = date.getTimezoneOffset();
const timeStampToGmt = gmtOffsetMinutes * 60 * 1000 * -1;

export default {
  components: {
    MinusOutlined
  },
  props: {
    separate: {
      type: Boolean,
      default: true
    },
    pickerType: {
      type: String,
      default: 'week'
    }
  },
  emits: ['fetchRangeDate'],
  setup(_, {emit}) {
    const rangeDate = ref(['', ''])

    watch(() => rangeDate.value, () => {
      emit('fetchRangeDate', [
        rangeDate?.value?.[0]
            ? dayjs(rangeDate?.value?.[0]).unix() * 1000 + timeStampToGmt
            : '',
        rangeDate?.value?.[1]
            ? dayjs(rangeDate.value?.[1]).endOf('day').unix() * 1000 + timeStampToGmt
            : '',
      ]);
    })
    return {
      rangeDate
    }
  }
}
</script>
