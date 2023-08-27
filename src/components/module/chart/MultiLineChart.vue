<template>
  <div class="h-full w-full" ref="lineChart"></div>
</template>
<script>
import {onMounted, reactive, ref} from 'vue'
import * as echarts from 'echarts';
export default  {
  name:'LineChart',
  setup() {
    const lineChart = ref(null)
    const option = reactive({
      title: {
        text: 'Stacked Line'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Ath','Email', 'Union Ads',]
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      // toolbox: {
      //   feature: {
      //     saveAsImage: {}
      //   }
      // },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Ath',
          type: 'line',
          smooth: true,
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: 'Email',
          type: 'line',
          smooth: true,
          data: [120, 110, 80, 100, 70, 2000, 210]
        },
        {
          name: 'Union Ads',
          type: 'line',
          smooth: true,
          data: [220, 182, 191, 234, 290, 330, 310]
        }]
    })


    const innitChart = () => {
      echarts.init(lineChart.value).setOption(option);
    }

    onMounted(() => {
      innitChart()
    })

    return {
      lineChart,
      option
    }
  }
}
</script>
<style lang="scss">

</style>