<template>
  <div class="page_version_manager w-full">
    <div class="page_version_manager_filter mb-6">
      <div class="flex flex-row items-center w-full justify-start gap-5">
        <ModalEditVersion @submitAdd="getListVersion"  :loading="states.loadingAdd" type="add"></ModalEditVersion>
      </div>
      <div class="flex flex-row items-end justify-end gap-5 w-full">
        <AppSelect @fetch-value="handleChangeStatus" type="versionStatus"></AppSelect>
        <AppInputSearch :placeholder="$t('placeholder.search_for_version_release')"
                        @fetch-value="handleChangeSearch"></AppInputSearch>
      </div>
    </div>
    <TableVersionManager @fetch-data="getListVersion" :loading="states.loading" :data="states.dataVersion"></TableVersionManager>
    <div class="w-full page_version_manager_pagination min-h-[80px] flex items-center bg-[#0f1518] px-7 rounded-b-lg">
      <AppPagination :total="states.total" @fetch-pagination="fetchPagination"></AppPagination>
    </div>
  </div>
</template>
<script>
import {computed, onMounted, watch, reactive} from "vue";
import {scrollToTop} from "@/helper";
import AppPagination from "@/components/app/AppPagination.vue";
import AppSelect from "@/components/app/AppSelect.vue";
import AppInputSearch from "@/components/app/AppInputSearch.vue";
import TableVersionManager from "@/components/module/table/TableVersionManager.vue";
import ModalEditVersion from "@/components/module/modal/ModalEditVersion.vue";
import {getListVersionApi} from "@/api/version";
import {useAppStore} from "@/stores/appStore";
import {useMessage} from "@/helper/hook/useMessage";


export default {
  name: 'VersionManagerPage',
  components: {
    TableVersionManager,
    AppPagination,
    AppSelect,
    AppInputSearch,
    ModalEditVersion
  },
  setup() {
    const {setMessageErrorGlobal} = useMessage()
    const states = reactive({
      dataVersion: [],
      total: 0,
      loading: false,
      loadingAdd: false
    })
    const stateFilter = reactive({
      limit: 10,
      offset: 1,
      filters: {
        status: '',
        search: '',
      }
    })
    const appStore = useAppStore()
    const typOs = computed(() => {
      return appStore.valueTabVersion
    })
    const fetchPagination = (data) => {
      stateFilter.limit = data.pageSize
      stateFilter.offset = data.page
    }
    const handleChangeStatus = (value) => {
      stateFilter.filters.status = value
    }

    const handleChangeSearch = (value) => {
      stateFilter.filters.search = value
    }
    const getListVersion = async () => {
      try {
        states.loading = true
        const res = await getListVersionApi(stateFilter, typOs.value)
        states.dataVersion = res.data
        states.total = res.total

      } catch (err) {
        console.log(err)
        setMessageErrorGlobal()
      } finally {
        states.loading = false
      }
    }

    watch(() => typOs.value, () => {
      getListVersion()
    })

    watch(() => stateFilter, () => {
      getListVersion()
    }, {deep: true})


    onMounted(() => {
      getListVersion()
      scrollToTop()
    })

    return {
      fetchPagination,
      handleChangeStatus,
      handleChangeSearch,
      getListVersion,
      states
    }
  }
}
</script>
<style lang="scss">
.page_version_manager {
  .page_version_manager_filter {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    gap: 20px;
  }
}
</style>
