<template>
  <div class="page_notification w-full">
    <div class="page_notification_filter mb-6">
      <div class="flex flex-row items-center w-full justify-start gap-5">
        <ModalCreateNotification></ModalCreateNotification>
      </div>
      <AppInputSearch :placeholder="$t('placeholder.search_for_title_content')" @fetch-value="handleChangeSearch"></AppInputSearch>
    </div>
    <TableNotification></TableNotification>
    <div class="w-full page_notification_pagination min-h-[80px] flex items-center bg-[#0f1518] px-7 rounded-b-lg">
      <AppPagination :total="100" @fetch-pagination="fetchPagination"></AppPagination>
    </div>
  </div>
</template>
<script>
import {onMounted} from "vue";
import {scrollToTop} from "@/helper";
import AppPagination from "@/components/app/AppPagination.vue";
import AppInputSearch from "@/components/app/AppInputSearch.vue";
import TableNotification from "@/components/module/table/TableNotification.vue";
import ModalCreateNotification from "@/components/module/modal/ModalCreateNotification.vue";
export default {
  name: 'AdminManagerPage',
  components: {
    TableNotification,
    AppPagination,
    AppInputSearch,
    ModalCreateNotification
  },
  setup() {

    const fetchPagination = (data) => {
      console.log(data)
    }

    const handleChangeSearch = (value) => {
      console.log(value)
    }
    onMounted(() => {
      scrollToTop()
    })

    return {
      fetchPagination,
      handleChangeSearch
    }
  }
}
</script>
<style lang="scss">
.page_notification {
  .page_notification_filter {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
}
</style>