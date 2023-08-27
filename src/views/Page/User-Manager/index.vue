<template>
  <div class="page_user_manager w-full">
    <div class="page_user_manager_filter mb-6">
      <div class="flex flex-row items-center w-full justify-start gap-5">
        <AppRangeDate @fetch-range-date="fetchRangeDate" :separate="false" :picker-type="'day'"></AppRangeDate>
      </div>
      <AppInputSearch :placeholder="$t('placeholder.search_for_email')"
                      @fetch-value="handleChangeSearch"></AppInputSearch>
    </div>
    <TableUserManager @fetch-data="fetchListUser" :loading="loading" :data="states.dataTable"></TableUserManager>
    <div class="w-full page_user_manager_pagination min-h-[80px] flex items-center bg-[#0f1518] px-7 rounded-b-lg">
      <AppPagination :total="states.total" @fetch-pagination="fetchPagination"></AppPagination>
    </div>
  </div>
</template>
<script>
import TableUserManager from "@/components/module/table/TableUserManager.vue";
import {onMounted, reactive, ref, watch} from "vue";
import {formatDate, formatDecimalNumber, scrollToTop} from "@/helper";
import AppPagination from "@/components/app/AppPagination.vue";
import AppRangeDate from "@/components/app/AppRangeDate.vue";
import AppInputSearch from "@/components/app/AppInputSearch.vue";
import {getListUserApi} from "@/api/user-manager";
export default {
  name: 'UserManagerPage',
  components: {
    TableUserManager,
    AppPagination,
    AppRangeDate,
    AppInputSearch,
  },
  setup() {

    const states = reactive({
      dataTable: [],
      total: 0,
    })
    const loading = ref(false)
    const stateFilter = reactive({
      limit: 10,
      offset: 1,
      filters: {
        search: '',
        startDate: '',
        endDate: ''
      }
    })

    const mapDataUserTable = (data) => {
      return data?.map((user) => {
        return {
          userId: user.id,
          key: user.id,
          email: user.email,
          name: user.name,
          dateRegister: formatDate(user.createdAt, 'DD/MM/YYYY'),
          kyc: user.kycStatus === 'approved' ? 'yes' : 'no',
          status: user.status,
          ref: user.refCode,
          balanceAth: formatDecimalNumber(user.userBalances?.[0]?.balance),
          balanceGem: formatDecimalNumber(user.userBalances?.[1]?.balance),
        }
      })
    }
    const fetchPagination = (data) => {
      stateFilter.limit = data.pageSize
      stateFilter.offset = data.page
    }
    const handleChangeSearch = (value) => {
      stateFilter.filters.search = value
    }
    const fetchRangeDate = (rangeDate) => {
      stateFilter.filters.endDate = rangeDate[1]
      stateFilter.filters.startDate = rangeDate[0]

    }
    const fetchListUser = async () => {
      try {
        loading.value = true
        const user = await getListUserApi(stateFilter)
        states.dataTable = mapDataUserTable(user.data)

      } catch (err) {
        console.log(err)
      } finally {
        loading.value = false
      }
    }
    watch(() => stateFilter, () => {
      fetchListUser()
    }, {deep: true})

    onMounted(() => {
      fetchListUser()
      scrollToTop()
    })

    return {
      fetchPagination,
      handleChangeSearch,
      fetchRangeDate,
      fetchListUser,

      states,
      loading
    }
  }
}
</script>
<style lang="scss">
.page_user_manager {
  .page_user_manager_filter {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    gap: 20px;
  }
}
</style>
