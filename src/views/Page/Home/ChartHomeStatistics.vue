<template>
  <div class="chart_home_statistics">
    <div ref="test" class="chart_line_home">
      <MultiLineChart></MultiLineChart>
    </div>
    <div class="chart_pie_home">
      <PieChart></PieChart>
    </div>
  </div>
</template>
<script>
import {ref, watch} from 'vue'
import MultiLineChart from "@/components/module/chart/MultiLineChart.vue";
import PieChart from "@/components/module/chart/PieChart.vue";
export default  {
  components: {
    MultiLineChart,
    PieChart
  },
  setup() {
    const test = ref(null)
    watch(() => test, () => {
    }, {deep: true,
    immediate: true})
    return {
      test
    }
  }
}
</script>
<style lang="scss">
@import '@/design/variable.scss';

.chart_home_statistics {
  @apply w-full grid grid-cols-3 gap-6 grid-flow-row;
  .chart_line_home {
    background: $gray-3;
    height: 400px;
    @apply col-span-2 px-8 py-7 rounded-lg;
  }

  .chart_pie_home {
    background: $gray-3;
  }
}
</style>