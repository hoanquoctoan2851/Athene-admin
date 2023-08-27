<template>
  <div class="h-full w-full" ref="lineChart"></div>
</template>
<script>
import {onMounted, reactive, ref} from 'vue'
import * as echarts from 'echarts';
export default  {
  name:'PieChart',
  setup() {
    const lineChart = ref(null)
    const option = reactive({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
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