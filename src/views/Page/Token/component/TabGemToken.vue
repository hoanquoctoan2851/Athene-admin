<template>
  <div class="tab_gem_token">
    <div class="gem_token_cart_statistics">
      <CartItem v-for="item in listCartItem" :data="item" :key="item"> </CartItem>
    </div>
    <div class="w-full py-10">
      <AppRangeDate
          picker-type="
month"
      ></AppRangeDate>
    </div>
    <div class="gem_token_chart_statistics bg-gray-3 mb-10">
      <div class="flex flex-row items-center w-full justify-between mb-10">
        <p class="text-neutral-0 text-heading-5">{{$t('page.token.gem.gem_chart_title_statistics')}}</p>
      </div>
      <div class="w-full h-[600px]">
        <BarChartGemToken></BarChartGemToken>
      </div>
    </div>
    <div class="gem_token_chart_statistics bg-gray-3">
      <div class="flex flex-row items-center w-full justify-between mb-10">
        <p class="text-neutral-0 text-heading-5">{{$t('page.token.gem.gem_chart_title_statistics_per_day')}}</p>
      </div>
      <div class="w-full h-[600px]">
        <BarStackChart></BarStackChart>
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
import BarStackChart from "@/components/module/chart/BarStackChart.vue";
import BarChartGemToken from "@/components/module/chart/BarChartGemToken.vue";

export default {
  name: 'TabGem',
  components: {
    CartItem,
    AppRangeDate,
    BarStackChart,BarChartGemToken

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
.tab_gem_token {
  .gem_token_total_statistics {
    @apply flex flex-col gap-3 mb-12;
  }
  .gem_token_cart_statistics {
    @apply grid grid-cols-3 gap-5;
  }

  .gem_token_chart_statistics, .user_country_statistics {
    width: 100%;
    padding: 36px;
    border-radius: 16px;
  }
}
</style>
