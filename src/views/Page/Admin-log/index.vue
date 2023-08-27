<template>
  <div class="page_admin_log w-full">
    <div class="page_admin_log_filter mb-6">
      <div class="flex flex-row items-center w-full justify-start gap-5">
        <AppRangeDate :separate="false" :picker-type="'day'"></AppRangeDate>
        <AppSelect @fetch-value="handleChangeToken" type="role"></AppSelect>
      </div>
      <AppInputSearch :placeholder="$t('placeholder.search_for_email')" @fetch-value="handleChangeSearch"></AppInputSearch>
    </div>
    <TableAdminLog></TableAdminLog>
    <div class="w-full page_admin_log_pagination min-h-[80px] flex items-center bg-[#0f1518] px-7 rounded-b-lg">
      <AppPagination :total="100" @fetch-pagination="fetchPagination"></AppPagination>
    </div>
  </div>
</template>
<script>
import TableAdminLog from "@/components/module/table/TableAdminLog.vue";
import {onMounted} from "vue";
import {scrollToTop} from "@/helper";
import AppPagination from "@/components/app/AppPagination.vue";
import AppRangeDate from "@/components/app/AppRangeDate.vue";
import AppSelect from "@/components/app/AppSelect.vue";
import AppInputSearch from "@/components/app/AppInputSearch.vue";

export default {
  name: 'AdminLogPage',
  components: {
    TableAdminLog,
    AppPagination,
    AppRangeDate,
    AppSelect,
    AppInputSearch
  },
  setup() {

    const fetchPagination = (data) => {
      console.log(data)
    }

    const handleChangeToken = (value) => {
      console.log(value)
    }

    const handleChangeTransaction = (value) => {
      console.log(value)
    }

    const handleChangeStatus = (value) => {
      console.log(value)
    }

    const handleChangeSearch = (value) => {
      console.log(value)
    }
    onMounted(() => {
      scrollToTop()
    })

    return {
      fetchPagination,
      handleChangeToken,
      handleChangeTransaction,
      handleChangeStatus,
      handleChangeSearch
    }
  }
}
</script>
<style lang="scss">
.page_admin_log {
  .page_admin_log_filter {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
}
</style>