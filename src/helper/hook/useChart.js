import * as echarts from 'echarts';
// import { useDebounceFn } from '@vueuse/core'
import {useAppStore} from "@/stores/appStore";
import {watch,unref} from "vue";
export function useECharts(elRef) {
    const { isExpandSider } = useAppStore()
    let echart = null;
    function innitEchart () {
        const el = unref(elRef);
        if (!el || !unref(el)) {
            return;
        }

        echart = echarts.init(el);
    }
    function setOption(option) {
        innitEchart()
        echart.setOption(option)
    }

    watch(() => isExpandSider, () => {
        setOption()
    })

    return {
        setOption
    }
}