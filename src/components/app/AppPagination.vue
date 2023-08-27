<template>
  <div v-if="total" class="flex flex-row items-center justify-between w-full">
    <div class="text-neutral-0 text-content-4">
      <p class="!mb-0">
        {{
          $t('common.is_display', {
            start: getNumberPage.start,
            end: getNumberPage.end,
            total: total
          })
        }}
      </p>
    </div>
    <div class="flex flex-row items-center gap-8">
      <a-select
        v-if="total > sizeArray?.[0]"
        ref="select"
        class="wrap_select-size-pagination"
        v-model:value="pageSize"
        @focus="focus"
        @change="handleChange"
      >
        <template #suffixIcon>
          <caret-down-outlined class="!text-xl !text-neutral-400" />
        </template>
        <a-select-option v-for="item in sizeArray" :key="'size' + item" :value="item">
          <div class="flex flex-row items-center gap-2">
            <span class="custom-label">{{ $t('common.number_of_page') }} </span>{{ item
            }}<span class="hidden suffix-label-custom">{{ $t('common.items') }}</span>
          </div>
        </a-select-option>
      </a-select>
      <a-pagination
        v-model:current="page"
        :page-size="pageSize"
        :total="total"
        :showSizeChanger="false"
      />
    </div>
  </div>
</template>
<script>
import { ref, computed, watch } from 'vue'
import { CaretDownOutlined } from '@ant-design/icons-vue'
export default {
  name: 'ComponentPagination',
  components: {
    CaretDownOutlined
  },
  props: {
    sizeArray: {
      type: Array,
      default: () => [10, 20, 40, 60]
    },
    total: {
      type: Number,
      default: 100
    },
    pageProp: {
      type: Number,
      default: 1
    },
    pageSizeProp: {
      type: Number,
      default: 10
    }
  },
  emits: ['fetchPagination'],
  setup(prop, context) {
    const page = ref(1)
    const pageSize = ref(10)
    const getNumberPage = computed(() => {
      return {
        start: pageSize.value * (page.value - 1) + 1,
        end: prop.total < pageSize.value ? prop.total : pageSize.value * page.value
      }
    })
    const changeDataPagination = () => {
      context.emit('fetchPagination', {
        page: page.value,
        pageSize: pageSize.value
      })
    }
    const handleChange = () => {
      page.value = 1
      changeDataPagination()
    }

    watch(
      () => prop.total,
      () => {
        page.value = 1
        changeDataPagination()
      }
    )

    watch(
      () => page.value,
      () => {
        changeDataPagination()
      }
    )

    return {
      page,
      pageSize,
      getNumberPage,
      handleChange
    }
  }
}
</script>
