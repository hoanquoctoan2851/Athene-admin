<template>
  <a-input
    v-model:value="searchValue"
    @change="handleChangeValueSearch"
    :placeholder="placeholder"
    class="w-full max-w-[270px]"
  >
    <template #prefix>
      <SearchOutlined class="!text-xl !text-neutral-400" />
    </template>
    <template #suffix>
      <CloseOutlined
        @click="handleClearSearch"
        v-if="searchValue"
        class="!text-sm cursor-pointer !text-neutral-400"
      />
    </template>
  </a-input>
</template>
<script>
import { CloseOutlined, SearchOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'
export default {
  name: 'ComponentInputSearch',
  components: {
    CloseOutlined,
    SearchOutlined
  },
  props: {
    placeholder: {
      type: String,
      default: '',
    }

  },
  emits: ['fetchValue'],
  setup(_, { emit }) {
    const searchValue = ref('')
    const handleClearSearch = () => {
      searchValue.value = ''
      emit('fetchValue', searchValue.value)
    }
    const handleChangeValueSearch = useDebounceFn(() => {
      emit('fetchValue', searchValue.value)
    }, 500)

    return { searchValue, handleChangeValueSearch, handleClearSearch }
  }
}
</script>
