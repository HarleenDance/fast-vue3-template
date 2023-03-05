<script lang="ts" setup>
  import { PropType } from 'vue';
  import * as echarts from 'echarts/core';
  import { useCharts, ChartType, ChartsEvents } from './useCharts';

  /**
   * echarts事件类型
   * 截至目前，vue3类型声明参数必须是以下内容之一，暂不支持外部引入类型参数
   * 1. 类型字面量
   * 2. 在同一文件中的接口或类型字面量的引用
   * // 文档中有说明：https://cn.vuejs.org/api/sfc-script-setup.html#typescript-only-features
   */
  interface EventEmitsType {
    <T extends ChartsEvents.EventType>(e: `${T}`, event: ChartsEvents.Events[Uncapitalize<T>]): void;
  }
  // npm i unplugin-vue-define-options
  defineOptions({
    name: 'VCharts',
  });

  const props = defineProps({
    type: {
      type: String as PropType<ChartType>,
      default: 'bar',
    },
    options: {
      type: Object as PropType<echarts.EChartsCoreOption>,
      default: () => ({}),
    },
  });

  // 定义事件，提供ts支持，在组件使用时可获得友好提示
  defineEmits<EventEmitsType>();

  const { type, options } = toRefs(props);
  const chartRef = shallowRef();
  const { charts, setOptions, initChart } = useCharts({ type, el: chartRef });

  onMounted(async () => {
    await initChart();
    setOptions(options.value);
  });
  watch(
    options,
    () => {
      setOptions(options.value);
    },
    {
      deep: true,
    },
  );
  defineExpose({
    $charts: charts,
  });
</script>

<template>
  <div class="v-charts" ref="chartRef" />
</template>
<style lang="less" scoped>
  .v-charts {
    width: 100%;
    height: 100%;
    min-height: 300px;
  }
</style>
