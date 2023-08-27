<template>
  <div class="tab_ath_token">
    <div class="ath_token_total_statistics">
      <p class="text-content-2 text-neutral-0">{{ $t('page.token.ath.total_statistics') }}</p>
      <div class="flex flex-row items-center gap-4">
        <p class="text-emphasis-color text-[60px]">{{ totalAth }}</p>
        <img class="w-12 h-12" :src="LogoAth" />
      </div>
    </div>
    <div class="ath_token_cart_statistics">
      <CartItem v-for="item in listCartItem" :data="item" :key="item"> </CartItem>
    </div>
    <div class="w-full py-10">
      <AppRangeDate
          picker-type="
month"
      ></AppRangeDate>
    </div>
    <div class="ath_token_chart_statistics bg-gray-3 mb-10">
      <div class="flex flex-row items-center w-full justify-between mb-10">
        <p class="text-neutral-0 text-heading-5">{{$t('page.token.ath.chart_title_1')}}</p>
      </div>
      <div class="w-full h-[600px]">
        <LineChartAthToken></LineChartAthToken>
      </div>
    </div>
    <div class="ath_token_chart_statistics bg-gray-3">
      <div class="flex flex-row items-center w-full justify-between mb-10">
        <p class="text-neutral-0 text-heading-5">{{$t('page.token.ath.chart_title_2')}}</p>
      </div>
      <div class="w-full h-[600px]">
        <MutilLineChart></MutilLineChart>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive, toRefs } from 'vue'
import { formatDecimalNumber } from '@/helper'
import LogoAth from '@/assets/icons/token/token_ath.svg'
import CartItem from '@/components/module/CartItem.vue'
import AppRangeDate from '@/components/app/AppRangeDate.vue'
import LineChartAthToken from '@/components/module/chart/ChartLineAthStatistics.vue'
import MutilLineChart from '@/components/module/chart/MultiLineChart.vue'

export default {
  name: 'TabAth',
  components: {
    CartItem,
    AppRangeDate,
    LineChartAthToken,
    MutilLineChart
  },
  setup() {
    const states = reactive({
      totalAth: formatDecimalNumber(123123123.123123)
    })

    const listCartItem = [
      {
        key: 'item1',
        title: 'page.token.ath.cart_item_1_title',
        value: 123456
      },
      {
        key: 'item1',
        title: 'page.token.ath.cart_item_2_title',
        value: 123456
      },
      {
        key: 'item1',
        title: 'page.token.ath.cart_item_3_title',
        value: 123456
      }
    ]
    return {
      ...toRefs(states),
      listCartItem,
      LogoAth
    }
  }
}
</script>
<style lang="scss">
.tab_ath_token {
  .ath_token_total_statistics {
    @apply flex flex-col gap-3 mb-12;
  }
  .ath_token_cart_statistics {
    @apply grid grid-cols-3 gap-5;
  }

  .ath_token_chart_statistics, .user_country_statistics {
    width: 100%;
    padding: 36px;
    border-radius: 16px;
  }
}
</style>
