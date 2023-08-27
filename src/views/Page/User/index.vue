<template>
  <div class="wrap_user_page">
    <div class="user_current_statistics bg-gray-3 rounded-2xl overflow-hidden">
      <div class=" py-[23px] flex justify-center items-center">
        <p class="text-content-1 font-light text-neutral-0">{{$t('page.user.current_statistics')}}</p>
      </div>
      <div class="grid grid-cols-3 !border-neutral-400" style="border-top: 1px solid">
        <CartItem :style="index === 1 ? 'border-left: 1px solid;border-right: 1px solid' : ''"  v-for="(item,index) in listCurrentStatistics" :data="item" :key="item" class="!bg-transparent !border-neutral-400 !rounded-[0px]">
          <div v-if="item.value_change" class="flex flex-row items-center gap-2 text-content-4 font-light" :class="item.value_change < 0 ? 'text-red-color-2' : 'text-emphasis-color'">
            <img :src="item.value_change < 0 ? ChartDowntrend : ChartUptrend"/>
            <p>{{item.percent_change}}</p>
            <p>{{item.value_change < 0 ? '' : '+'}}{{item.value_change}}</p>
            <p>{{$t('page.home.cart_item.week_title')}}</p>
          </div>
        </CartItem>
      </div>
    </div>
    <div class="user_new_statistics bg-gray-3 rounded-2xl overflow-hidden">
      <div class=" py-[23px] flex justify-center items-center">
        <p class="text-content-1 font-light text-neutral-0">{{$t('page.user.new_statistics')}}</p>
      </div>
      <div class="grid grid-cols-3 !border-neutral-400" style="border-top: 1px solid">
        <CartItem :style="index === 1 ? 'border-left: 1px solid;border-right: 1px solid' : ''"  v-for="(item,index) in listNewStatistics" :data="item" :key="item" class="!bg-transparent !border-neutral-400 !rounded-[0px]">
          <div class="flex flex-row items-center gap-2 text-content-4 text-neutral-400 font-light" :class="item.value_change < 0 ? 'text-red-color-2' : 'text-emphasis-color'">
            <p>{{$t('page.user.ref', {ref: formatDecimalNumber(item.ref, 0, 0)})}}</p>
            <p>{{$t('page.user.no_ref', {no_ref: formatDecimalNumber(item.no_ref, 0, 0)}) }}</p>
          </div>
        </CartItem>
      </div>
    </div>
    <div class="user_chart_statistics bg-gray-3">
      <div class="flex flex-row items-center w-full justify-between mb-10">
        <p class="text-neutral-0 text-heading-5">{{$t('page.user.chart_title')}}</p>
        <AppSelect type="select_day"></AppSelect>
      </div>
      <div class="w-full h-[600px]">
        <BarStackChart></BarStackChart>
      </div>
    </div>
    <div class="user_country_statistics bg-gray-3">
      <div class="flex flex-row items-center w-full justify-between mb-10">
        <p class="text-neutral-0 text-heading-5 w-full">{{$t('page.user.user_country')}}</p>
        <div class="flex flex-row items-center w-full justify-end gap-5">
          <AppSelect type="country"></AppSelect>
          <AppSelect type="select_day"></AppSelect>
        </div>
      </div>
      <TableCountryUserStatistics></TableCountryUserStatistics>
    </div>
  </div>
</template>
<script>
import {onMounted} from 'vue'
import {scrollToTop} from '@/helper'
import CartItem from "@/components/module/CartItem.vue";
import CartItem1 from "@/assets/icons/home/icon_cart_item_1.svg";
import CartItem2 from "@/assets/icons/home/icon_cart_item_2.svg";
import CartItem3 from "@/assets/icons/user/icon_cart_3.svg";
import ChartUptrend from '@/assets/icons/chart_up_trend.svg'
import ChartDowntrend from '@/assets/icons/chart_down_trend.svg'
import {formatDecimalNumber} from "@/helper";
import BarStackChart from "@/components/module/chart/BarStackChart.vue";
import AppSelect from "@/components/app/AppSelect.vue";
import TableCountryUserStatistics from "@/components/module/table/TableCountryUserStatistics.vue";

export default {
  name: 'AboutPage',
  components: {
    CartItem,
    BarStackChart,
    AppSelect,
    TableCountryUserStatistics
  },
  setup() {
    const listCurrentStatistics = [
      {
        key: 'item1',
        icon: CartItem1,
        title: 'page.home.cart_item.item_1',
        value: 123456,
        value_change: 50,
        percent_change: '50%',

      },
      {
        key: 'item1',
        icon: CartItem2,
        title: 'page.home.cart_item.item_2',
        value: 123456,
        value_change: 50,
        percent_change: '50%',
      },
      {
        key: 'item1',
        icon: CartItem3,
        title: 'page.user.current_user_item_1',
        value: 123456,
        value_change: 50,
        percent_change: '50%',
      },
    ]

    const listNewStatistics = [
      {
        key: 'item1',
        title: 'common.day',
        value: 123456,
        ref: 400,
        no_ref: 3000,

      },
      {
        key: 'item1',
        title: 'common.week',
        value: 123456,
        ref: 400,
        no_ref: 3000,
      },
      {
        key: 'item1',
        title: 'common.month',
        value: 123456,
        ref: 400,
        no_ref: 3000,
      },
    ]

    onMounted(() => {
      scrollToTop()
    })

    return {
      listCurrentStatistics,
      ChartUptrend,ChartDowntrend,
      listNewStatistics,
      formatDecimalNumber
    }
  }
}
</script>
<style lang="scss">
.wrap_user_page {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .user_chart_statistics, .user_country_statistics {
    width: 100%;
    padding: 36px;
    border-radius: 16px;
  }

}
</style>
