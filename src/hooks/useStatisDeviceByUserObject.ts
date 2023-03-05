import { getDeviceByUserObject } from '/@/api/statisCharts';
// import { useHashMapDics } from "@/hooks/useHashMapDic";
import { chartsOptions, BarECOption, PieECOption, GaugeECOption, EChartsOption, ChartsEvents } from '/@/components/v-charts';

// export const useStatisDeviceByUserObject = () => {
//   // 使用chartsOptions确保所有传入v-charts组件的options数据都是## shallowReactive浅层作用形式，避免大量数据导致性能问题
//   const options = chartsOptions<BarECOption>({
//     yAxis: {},
//     xAxis: {},
//     series: [],
//   });
//   const init = async () => {
//     const xData = [];
//     const sData = [];
//     const dicts = useHashMapDics<['dev_user_object']>(['dev_user_object']);
//     const data = await statisDeviceByUserObject();
//     dicts.dictionaryMap.dev_user_object.forEach(({ label, value }) => {
//       if (value === '6') return; // 排除其他
//       xData.push(label);
//       const temp = data.find(({ name }) => name === value);
//       sData.push(temp?.qty || 0);

//       // 给options赋值时要注意options是浅层响应式
//       options.xAxis = { data: xData };
//       options.series = [{ ...options.series[0], data: sData }];
//     });
//   };

//   // 事件
//   const selectchanged = (params: ChartsEvents.Events['selectchanged']) => {
//     console.log(params, '选中图例了');
//   };

//   const handleChartClick = (params: ChartsEvents.Events['chartClick']) => {
//     console.log(params, '点击了图表');
//   };

//   onMounted(() => {
//     init();
//   });
//   return {
//     options,
//     selectchanged,
//     handleChartClick,
//   };
// };
/**
 * 设备使用分类统计
 */
export const useStatisDeviceByUserObject = () => {
  const options = chartsOptions<BarECOption>({
    yAxis: {},
    xAxis: {
      data: [],
    },
    series: [
      {
        type: 'bar',
        data: [],
      },
    ],
  });

  const init = async () => {
    const xData = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const sData = [120, 200, 150, 80, 70, 110, 130];
    const dicts = [
      {
        label: '人员',
        value: '1',
      },
      {
        label: '车辆',
        value: '2',
      },
      {
        label: '船舶',
        value: '3',
      },
      {
        label: '飞机',
        value: '4',
      },
      {
        label: '货物',
        value: '5',
      },
      {
        label: '其他',
        value: '6',
      },
    ];
    // const data = await getDeviceByUserObject();
    // dicts.forEach(({ label, value }) => {
    //   if (value === '6') return; // 排除其他
    //   xData.push(label);
    //   const temp = data.find(({ name }) => name === value);
    //   sData.push(temp?.qty || 0);
    // });
    // // setTimeout(() => {
    options.xAxis = { data: xData };
    options.series.data = sData;
    console.log(options.series, '--------sData');
    console.log(options, '--------options');
    // }, 2000);
  };

  const selectchanged = (params: ChartsEvents.Events['selectchanged']) => {
    console.log(params, '选中图例了');
  };

  const handleChartClick = (params: string) => {
    console.log(params, '点击了图表');
  };

  onMounted(() => {
    init();
  });
  return {
    options,
    selectchanged,
    handleChartClick,
  };
};
