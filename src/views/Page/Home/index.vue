<template>
    <div class="wrap_home_page">
        <div class="home_list_user_statistics">
          <CartItem v-for="item in listCartItem" :data="item" :key="item">
            <div v-if="item.value_change" class="flex flex-row items-center gap-2 text-content-4 font-light" :class="item.value_change < 0 ? 'text-red-color-2' : 'text-emphasis-color'">
              <img :src="item.value_change < 0 ? ChartDowntrend : ChartUptrend"/>
              <p>{{item.percent_change}}</p>
              <p>{{item.value_change < 0 ? '' : '+'}}{{item.value_change}}</p>
              <p>{{$t('page.home.cart_item.week_title')}}</p>
            </div>
          </CartItem>
        </div>
      <AppRangeDate picker-type="
month"></AppRangeDate>
      <div class="w-full mt-5 flex flex-col gap-5">
        <ChartHomeStatistics></ChartHomeStatistics>
        <ChartHomeStatistics></ChartHomeStatistics>
      </div>
    </div>
</template>
<script>
import {onMounted} from "vue";
import {scrollToTop} from "@/helper";
import CartItem from "@/components/module/CartItem.vue";
import ChartHomeStatistics from "@/views/Page/Home/ChartHomeStatistics.vue";
import AppRangeDate from "@/components/app/AppRangeDate.vue";

import CartItem1 from '@/assets/icons/home/icon_cart_item_1.svg'
import CartItem2 from '@/assets/icons/home/icon_cart_item_2.svg'
import CartItem3 from '@/assets/icons/home/icon_cart_item_3.svg'
import ChartUptrend from '@/assets/icons/chart_up_trend.svg'
import ChartDowntrend from '@/assets/icons/chart_down_trend.svg'
export default {
  name: 'HomePage',
    components: {
        CartItem,ChartHomeStatistics,
      AppRangeDate

    },
  setup() {
    const listCartItem = [
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
        title: 'page.home.cart_item.item_3',
        value: 123456,
      },
    ]
    onMounted(() => {
      scrollToTop()
    })
    return {
      listCartItem,
      ChartUptrend,
      ChartDowntrend
    }
  }
}
</script>
<style lang="scss">
.wrap_home_page {
    width: 100%;

  .home_list_user_statistics  {
    @apply grid grid-cols-3 gap-6 mb-10;
  }
}
</style>
