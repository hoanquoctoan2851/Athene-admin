<template>
  <info-circle-outlined class="!text-2xl !text-neutral-400 hover:!text-neutral-0" @click="handleOpenModal"/>
  <a-modal :destroyOnClose="true" width="90%" v-model:visible="states.modalTransaction" title="Transaction">
    <div class="modal_transaction w-full">
      <div class="modal_transaction_filter mb-6">
        <div class="flex flex-row items-end w-full justify-start gap-5">
          <AppRangeDate :separate="false" :picker-type="'day'"></AppRangeDate>
          <AppSelect @fetch-value="handleChangeToken" type="token"></AppSelect>
          <AppSelect @fetch-value="handleChangeTransaction" type="transaction"></AppSelect>
          <AppSelect @fetch-value="handleChangeStatus" type="status"></AppSelect>
        </div>
        <AppInputSearch @fetch-value="handleChangeSearch"></AppInputSearch>
      </div>
      <TableTransaction :loading="states.loading" :data="states.dataTable"></TableTransaction>
      <div class="w-full modal_transaction_pagination min-h-[80px] flex items-center bg-[#0f1518] px-7 rounded-b-lg">
        <AppPagination :total="states.total" @fetch-pagination="fetchPagination"></AppPagination>
      </div>
    </div>
  </a-modal>
</template>
<script>
import TableTransaction from "@/components/module/table/TableTransaction.vue";
import {onMounted, reactive, watch} from "vue";
import AppPagination from "@/components/app/AppPagination.vue";
import AppRangeDate from "@/components/app/AppRangeDate.vue";
import AppSelect from "@/components/app/AppSelect.vue";
import AppInputSearch from "@/components/app/AppInputSearch.vue";
import {InfoCircleOutlined} from '@ant-design/icons-vue'
import {getTransactionUserApi} from "@/api/transaction";
import {useMessage} from "@/helper/hook/useMessage";

export default {
  name: 'ModalTransaction',
  components: {
    TableTransaction,
    AppPagination,
    AppRangeDate,
    AppSelect,
    AppInputSearch,
    InfoCircleOutlined
  },
  props: {
    userId: {
      type: Number,
      default: null,
    }
  },
  setup(prop) {
    const states = reactive({
      loading: false,
      dataTable: [],
      modalTransaction: false,
      total: 0
    })
    const stateFilter = reactive({
      limit: 10,
      offset: 1,
      filters: {
        status: '',
        tokenId: '',
        type: '',
        search: '',
        startDate: '',
        endDate: '',
      }
    })
    const fetchPagination = (data) => {
      stateFilter.limit = data.pageSize
      stateFilter.offset = data.page
    }

    const handleChangeToken = (value) => {
      if (value) {
        stateFilter.filters.tokenId = value === 'ATH' ? 1 : 2
      } else {
        stateFilter.filters.tokenId = ''
      }
    }

    const handleChangeTransaction = (value) => {
      stateFilter.filters.type = value
    }

    const handleChangeStatus = (value) => {
      stateFilter.filters.status = value
    }

    const handleChangeSearch = (value) => {
      stateFilter.filters.search = value
    }
    const handleOpenModal = () => {
      states.modalTransaction = true
    }

    const fetchDataTransaction = async () => {
      try {
        states.loading = true
        if (prop.userId && states.modalTransaction) {
          const res = await getTransactionUserApi(stateFilter, prop.userId)
          states.dataTable = res.data
          states.total = res.total
        }
      } catch (err) {
        useMessage().setMessageErrorGlobal()
        console.log(err)
      } finally {
        states.loading = false
      }
    }

    watch(() => states.modalTransaction, () => {
      fetchDataTransaction()
    })

    watch(() => stateFilter, () => {
      fetchDataTransaction()
    }, {deep: true})

    onMounted(() => {
      fetchDataTransaction()
    })

    return {
      fetchPagination,
      handleChangeToken,
      handleChangeTransaction,
      handleChangeStatus,
      handleChangeSearch,
      handleOpenModal,
      states
    }
  }
}
</script>
<style lang="scss">
.modal_transaction {
  .modal_transaction_filter {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    gap: 20px;
  }
}
</style>
