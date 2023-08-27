<template>
  <div class="page_transaction w-full">
    <div class="page_transaction_filter mb-6">
      <div class="flex flex-row w-full items-end justify-start gap-5">
        <AppRangeDate @fetch-range-date="fetchRangeDate" :separate="false" :picker-type="'day'"></AppRangeDate>
        <AppSelect @fetch-value="handleChangeToken" type="token"></AppSelect>
        <AppSelect @fetch-value="handleChangeTransaction" type="transaction"></AppSelect>
        <AppSelect @fetch-value="handleChangeStatus" type="status"></AppSelect>
      </div>
      <AppInputSearch :placeholder="$t('common.placeholder_input_search')"
                      @fetch-value="handleChangeSearch"></AppInputSearch>
    </div>
    <TableTransaction :loading="states.loading" :data="states.dataTable"></TableTransaction>
    <div class="w-full page_transaction_pagination min-h-[80px] flex items-center bg-[#0f1518] px-7 rounded-b-lg">
      <AppPagination :total="states.total" @fetch-pagination="fetchPagination"></AppPagination>
    </div>
  </div>
</template>
<script>
import TableTransaction from "@/components/module/table/TableTransaction.vue";
import {onMounted, reactive, watch} from "vue";
import { scrollToTop} from "@/helper";
import AppPagination from "@/components/app/AppPagination.vue";
import AppRangeDate from "@/components/app/AppRangeDate.vue";
import AppSelect from "@/components/app/AppSelect.vue";
import AppInputSearch from "@/components/app/AppInputSearch.vue";
import {getTransactionApi} from "@/api/transaction";

export default {
  name: 'TransactionPage',
  components: {
    TableTransaction,
    AppPagination,
    AppRangeDate,
    AppSelect,
    AppInputSearch
  },
  setup() {
    const states = reactive({
      dataTable: [],
      total: 0,
      loading: false
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

    const fetchRangeDate = (value) => {
      console.log(value)
      stateFilter.filters.startDate = value[0]
      stateFilter.filters.endDate = value[1]

    }

    const fetchTransactionData = async () => {
      try {
        states.loading = true
        const res = await getTransactionApi(stateFilter)
        if (res) {
          states.dataTable = res.data
          states.total = res.total
        }

      } catch (err) {
        return err
      } finally {
        states.loading = false
      }
    }

    watch(() => stateFilter, () => {
      fetchTransactionData()
    }, {deep: true})

    onMounted(() => {
      scrollToTop()
      fetchTransactionData()
    })

    return {
      fetchPagination,
      handleChangeToken,
      handleChangeTransaction,
      handleChangeStatus,
      handleChangeSearch,
      fetchRangeDate,
      states
    }
  }
}
</script>
<style lang="scss">
.page_transaction {
  .page_transaction_filter {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    gap: 20px;
  }
}
</style>
