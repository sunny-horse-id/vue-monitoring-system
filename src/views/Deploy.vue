<script setup>
// 引入相关依赖
import {ref, onMounted, watch} from "vue";
import * as echarts from 'echarts';
import 'echarts-liquidfill';
import {useLogStore} from "@/stores/log.js";
import {getPerSecondAPI} from "@/api/power.js";
import {getHourAPI} from "@/api/hour.js";
import {deleteLogAPI, getLogListAPI} from "@/api/log.js";
import {getIndicatorsAPI} from "@/api/indicators.js";


/* ECharts绘制图表 */
// 使用echarts绘制图表-氢气容量-左侧
function liquidFillLeft() {
  const chartDom = document.getElementById('LiquidFillChartLeft');
  const myChart = echarts.init(chartDom);

  // 模拟数据
  const value = 0.4; // 表示填充百分比

  const option = {
    title: {
      text: '电解水',
      top: '20px',
      left: '70px'
    },
    series: [{
      type: 'liquidFill',
      shape: 'roundRect',
      data: [value, value, value],
      radius: '70%',
      outline: {
        show: false
      },
      color: ['#00FFFF', '#00BFFF', '#1E90FF'],
      backgroundStyle: {
        color: '#666666' // 修改背景颜色为纯灰色
      },
      label: {
        normal: {
          textStyle: {
            color: '#fff',
            insideColor: 'yellow',
            fontSize: 20
          }
        }
      }
    }]
  };

  option && myChart.setOption(option);
}

// 使用echarts绘制图表-氢气容量-右侧
function liquidFillRight() {
  const chartDom = document.getElementById('LiquidFillChartRight');
  const myChart = echarts.init(chartDom);

  // 模拟数据
  const value = 0.6; // 表示填充百分比

  const option = {
    title: {
      text: '糠醛',
      top: '20px',
      left: '70px'
    },
    series: [{
      type: 'liquidFill',
      shape: 'roundRect',
      data: [value, value, value],
      radius: '70%',
      outline: {
        show: false
      },
      color: ['#00FFFF', '#00BFFF', '#1E90FF'],
      backgroundStyle: {
        color: '#666666' // 修改背景颜色为纯灰色
      },
      label: {
        normal: {
          textStyle: {
            color: '#fff',
            insideColor: 'yellow',
            fontSize: 20
          }
        }
      }
    }]
  };

  option && myChart.setOption(option);
}

// 使用echarts绘制图表-每分钟
function perMinute() {
  const chartDom = document.getElementById('PerMinute');
  const myChart = echarts.init(chartDom);

  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['12:30', '12:40', '12:50', '13:00', '13:10', '13:20', '13:30']
    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      trigger: 'axis', // 设置触发类型为坐标轴触发
      axisPointer: {
        type: 'line', // 指示器类型为直线
        label: {
          show: true, // 显示标签
          precision: 2, // 数据精度
          formatter: function (params) { // 自定义标签内容
            return params.value;
          }
        }
      }
    },
    series: [
      {
        data: [199, 197, 200, 210, 207, 205, 208],
        type: 'line',
        smooth: true, // To make the line smooth
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(2,12,32,0.8)' // Gradient start color
          }, {
            offset: 1,
            color: 'rgba(5,143,241,0.3)' // Gradient end color
          }])
        }
      }
    ]
  };
  option && myChart.setOption(option);
}

// 使用echarts绘制图表-每小时
function perHour() {
  const chartDom = document.getElementById('PerHour');
  const myChart = echarts.init(chartDom);

  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['12:30', '12:40', '12:50', '13:00', '13:10', '13:20', '13:30']
    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      trigger: 'axis', // 设置触发类型为坐标轴触发
      axisPointer: {
        type: 'line', // 指示器类型为直线
        label: {
          show: true, // 显示标签
          precision: 2, // 数据精度
          formatter: function (params) { // 自定义标签内容
            return params.value;
          }
        }
      }
    },
    series: [
      {
        data: [199, 197, 200, 210, 207, 205, 208],
        type: 'line',
        smooth: true, // To make the line smooth
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(32,119,136,0.8)' // Gradient start color
          }, {
            offset: 1,
            color: 'rgba(5,213,241,0.3)' // Gradient end color
          }])
        }
      }
    ]
  };
  option && myChart.setOption(option);
}

// 使用echarts绘制图表-每天
function perDays() {
  const chartDom = document.getElementById('PerDays');
  const myChart = echarts.init(chartDom);

  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['12:30', '12:40', '12:50', '13:00', '13:10', '13:20', '13:30']
    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      trigger: 'axis', // 设置触发类型为坐标轴触发
      axisPointer: {
        type: 'line', // 指示器类型为直线
        label: {
          show: true, // 显示标签
          precision: 2, // 数据精度
          formatter: function (params) { // 自定义标签内容
            return params.value;
          }
        }
      }
    },
    series: [
      {
        data: [199, 197, 200, 210, 207, 205, 208],
        type: 'line',
        smooth: true, // To make the line smooth
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(97,150,36,0.8)' // Gradient start color
          }, {
            offset: 1,
            color: 'rgba(92,241,5,0.3)' // Gradient end color
          }])
        }
      }
    ]
  };
  option && myChart.setOption(option);
}

// 使用echarts绘制图表-每月
function perMonth() {
  const chartDom = document.getElementById('PerMonth');
  const myChart = echarts.init(chartDom);

  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['12:30', '12:40', '12:50', '13:00', '13:10', '13:20', '13:30']
    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      trigger: 'axis', // 设置触发类型为坐标轴触发
      axisPointer: {
        type: 'line', // 指示器类型为直线
        label: {
          show: true, // 显示标签
          precision: 2, // 数据精度
          formatter: function (params) { // 自定义标签内容
            return params.value;
          }
        }
      }
    },
    series: [
      {
        data: [199, 197, 200, 210, 207, 205, 208],
        type: 'line',
        smooth: true, // To make the line smooth
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(155,30,151,0.8)' // Gradient start color
          }, {
            offset: 1,
            color: 'rgba(171,16,194,0.3)' // Gradient end color
          }])
        }
      }
    ]
  };
  option && myChart.setOption(option);
}

// 使用echarts绘制图表-每年
function perYear() {
  const chartDom = document.getElementById('PerYear');
  const myChart = echarts.init(chartDom);

  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['12:30', '12:40', '12:50', '13:00', '13:10', '13:20', '13:30']
    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      trigger: 'axis', // 设置触发类型为坐标轴触发
      axisPointer: {
        type: 'line', // 指示器类型为直线
        label: {
          show: true, // 显示标签
          precision: 2, // 数据精度
          formatter: function (params) { // 自定义标签内容
            return params.value;
          }
        }
      }
    },
    series: [
      {
        data: [199, 197, 200, 210, 207, 205, 208],
        type: 'line',
        smooth: true, // To make the line smooth
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(143,143,29,0.8)' // Gradient start color
          }, {
            offset: 1,
            color: 'rgba(241,229,5,0.3)' // Gradient end color
          }])
        }
      }
    ]
  };
  option && myChart.setOption(option);
}

// 使用echarts绘制图表-月发电量
function monthPower() {
  const chartDom = document.getElementById('MonthPower');
  const myChart = echarts.init(chartDom);
  const option = {
    title: {
      text: '每月总发电与上网电量(kWh)',
      top: '10px',
      left: '55px'
    },
    legend: {
      right: '85px',
      top: '15px'
    },
    tooltip: {},
    dataset: {
      source: [
        ['product', '总发电量', '上网电量'],
        ['1', 73.4, 55.1],
        ['2', 82.5, 65.2],
        ['3', 53.9, 39.1],
        ['4', 53.9, 39.1],
        ['5', 82.5, 65.2],
        ['6', 73.4, 55.1],
        ['7', 82.5, 65.2],
        ['8', 82.5, 65.2],
        ['9', 73.4, 55.1],
        ['10', 100, 39.1],
        ['11', 53.9, 39.1],
        ['12', 53.9, 39.1]
      ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    series: [
      {
        type: 'bar',
        itemStyle: {
          color: '#62D4CA' // 修改第一个柱子的颜色
        }
      },
      {
        type: 'bar',
        itemStyle: {
          color: '#80FFA5' // 修改第二个柱子的颜色
        }
      }
    ]
  };

  option && myChart.setOption(option);
}

// 使用echarts绘制图表-近30天总发电与上网电量
function perDay() {
  const chartDom = document.getElementById('PerDay');
  const myChart = echarts.init(chartDom);
  const option = {
    color: ['#80FFA5', '#00DDFF'],
    title: {
      top: '20px',
      left: '20px',
      text: '近30天总发电与上网电量(kWh)'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      right: '30px',
      top: '20px',
      data: ['总发电量', '上网电量']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [1, 2, 3, 4, 5, 6, 7, 8,
          9, 10, 11, 12, 13, 14, 15, 16,
          17, 18, 19, 20, 21, 22, 23, 24,
          25, 26, 27, 28, 29, 30]
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '上网电量',
        type: 'line',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(128, 255, 165)'
            },
            {
              offset: 1,
              color: 'rgb(1, 191, 236)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        // 数值小于总发电量的值
        data: [1.2, 1.1, 0.9, 1.2, 1.3, 1.4, 1.5,
          1.6, 1.7, 1.8, 1.9, 1.0, 1.1, 1.2, 1.3,
          1.4, 1.5, 1.6, 1.7, 2.0, 1.9, 1.6, 1.1,
          1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8],
        z: 999,
      },
      {
        name: '总发电量',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(0, 221, 255)'
            },
            {
              offset: 1,
              color: 'rgb(77, 119, 255)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        // 总发电量的值
        data: [2.2, 3.2, 4.5, 2.3, 2.5, 2.3, 1.8,
          2.2, 2.5, 2.8, 3.0, 3.3, 3.5, 3.0, 2.0,
          1.8, 1.8, 2.0, 2.3, 2.5, 2.3, 1.8, 2.2,
          2.5, 2.8, 3.0, 3.3, 3.5, 3.0, 2.0]
      },
    ]
  };

  option && myChart.setOption(option);
}

// 使用echarts绘制图表-制氢速率
function h2Rate() {
  const chartDom = document.getElementById('H2Rate');
  const myChart = echarts.init(chartDom);

  const option = {
    color: ['#80FFA5'],
    title: {
      text: '制氢速率',
      left: '15px'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['制氢速率'],
      right: '20px'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['12:30', '12:40', '12:50', '13:00', '13:10', '13:20', '13:30']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '制氢速率',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(128, 255, 165)'
            },
            {
              offset: 1,
              color: 'rgb(1, 191, 236)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [140, 232, 101, 264, 90, 340, 250]
      }
    ]
  };

  option && myChart.setOption(option);
}

// 使用echarts绘制图表-糠酸产量
function output() {
  const chartDom = document.getElementById('output');
  const myChart = echarts.init(chartDom);

  // prettier-ignore
  const data = [["2000-06-05", 116], ["2000-06-06", 129], ["2000-06-07", 135], ["2000-06-08", 86], ["2000-06-09", 73], ["2000-06-10", 85], ["2000-06-11", 73], ["2000-06-12", 68], ["2000-06-13", 92], ["2000-06-14", 130], ["2000-06-15", 245], ["2000-06-16", 139], ["2000-06-17", 115], ["2000-06-18", 111], ["2000-06-19", 309], ["2000-06-20", 206], ["2000-06-21", 137], ["2000-06-22", 128], ["2000-06-23", 85], ["2000-06-24", 94], ["2000-06-25", 71], ["2000-06-26", 106], ["2000-06-27", 84], ["2000-06-28", 93], ["2000-06-29", 85], ["2000-06-30", 73], ["2000-07-01", 83], ["2000-07-02", 125], ["2000-07-03", 107], ["2000-07-04", 82], ["2000-07-05", 44], ["2000-07-06", 72], ["2000-07-07", 106], ["2000-07-08", 107], ["2000-07-09", 66], ["2000-07-10", 91], ["2000-07-11", 92], ["2000-07-12", 113], ["2000-07-13", 107], ["2000-07-14", 131], ["2000-07-15", 111], ["2000-07-16", 64], ["2000-07-17", 69], ["2000-07-18", 88], ["2000-07-19", 77], ["2000-07-20", 83], ["2000-07-21", 111], ["2000-07-22", 57], ["2000-07-23", 55], ["2000-07-24", 60]];
  const dateList = data.map(function (item) {
    return item[0];
  });
  const valueList = data.map(function (item) {
    return item[1];
  });
  const option = {
    // Make gradient line here
    visualMap: [
      {
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 400
      }
    ],
    title: {
      left: 'center',
      text: '糠酸产量'
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      data: dateList
    },
    yAxis: {},
    series: [
      {
        type: 'line',
        showSymbol: false,
        data: valueList
      }
    ]
  };

  option && myChart.setOption(option);
}

// 使用echarts绘制图表-经济收益
function economyProfit() {
  const chartDom = document.getElementById('EconomyProfit');
  const myChart = echarts.init(chartDom);
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: '全年收益',
        type: 'bar',
        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
        emphasis: {
          focus: 'series'
        },
        markLine: {
          lineStyle: {
            type: 'dashed'
          },
          data: [[{type: 'min'}, {type: 'max'}]]
        }
      },
      {
        name: '第一季度收益',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: [620, 732, 701, 734, 1090, 1130, 1120]
      },
      {
        name: '第二季度收益',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 290, 230, 220]
      },
      {
        name: '第三季度收益',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: [60, 72, 71, 74, 190, 130, 110]
      },
      {
        name: '第四季度收益',
        type: 'bar',
        stack: 'Search Engine',
        emphasis: {
          focus: 'series'
        },
        data: [62, 82, 91, 84, 109, 110, 120]
      }
    ]
  };

  option && myChart.setOption(option);
}

// 初始化加载绘制的图表
setTimeout(() => {
  perMinute();
  monthPower();
  perDay();
}, 1);


/* 表格样式控制 */
// 氢气容量表格格式
// eslint-disable-next-line no-unused-vars
function tableCellStyle({row, column, rowIndex, columnIndex}) {
  return {textAlign: 'center',}
}


/* 按钮控制函数 */
//年月日时分选择函数
function selectButton(index) {
  selectedButton.value = index;
  switch (index) {
    case 0:
      setTimeout(() => {
        perMinute();
      }, 1);
      break;
    case 1:
      setTimeout(() => {
        perHour();
      }, 1);
      break;
    case 2:
      setTimeout(() => {
        perDays();
      }, 1);
      break;
    case 3:
      setTimeout(() => {
        perMonth();
      }, 1);
      break;
    case 4:
      setTimeout(() => {
        perYear();
      }, 1);
      break;
  }
}

// 使用按钮选择图标图表
function selectIconButtons(index) {
  selectedIconButtons.value = index;
  switch (index) {
    case 0:
      setTimeout(() => {
        monthPower();
        perDay();
      }, 1);
      break;
    case 1:
      setTimeout(() => {
        h2Rate();
      }, 1);
      break
    case 2:
      setTimeout(() => {
        liquidFillLeft();
        liquidFillRight()
      }, 1);
      break
    case 3:
      setTimeout(() => {
        output();
      }, 1);
      break
    case 4:
      setTimeout(() => {
        economyProfit();
      }, 1);
      break
  }
}


/* 数据定义 */
// 获取pinia全局数据
const logStore = useLogStore()
// 选择日志类型
const logType = ref(['故障日志', '事故日志'])
// 警告弹窗
const centerDialogVisible = ref(false)
// 实时显示电流和功率
const power = ref(200.0)
const current = ref(48.6)
// 使用按钮选择图标图表
const selectedIconButtons = ref(0)
// 年月日时分秒进行选择
const buttons = ref(['分', '时', '日', '月', '年'])
const selectedButton = ref(0)
// 日志数据
const warningData = ref([])
const errorData = ref([])
// 氢气容量表格数据
const tableData = [
  {
    left: '100.2MPa',
    name: '气压',
    right: '100.6MPa',
  },
  {
    left: '20℃',
    name: '温度',
    right: '20℃',
  },
  {
    left: '20℃',
    name: '温度',
    right: '20℃',
  },
  {
    left: '20℃',
    name: '温度',
    right: '20℃',
  },
  {
    left: '20℃',
    name: '温度',
    right: '20℃',
  },
]
// 小时数
const hour = ref(2140)
// 指标数据
const indicators = ref({
  temperature: 9.5,
  flowRate: 4.3,
  density: 50,
  ph: 8.2,
})

/* API接口调用获取数据 */
// 获取当前秒的功率
const getPerSecondData = async () => {
  const res = await getPerSecondAPI(power.value)
  power.value = res.data
}
// 获取使用小时数
const getHourData = async () => {
  const res = await getHourAPI()
  hour.value = res.data
}
// 获取日志信息
const getLogListData = async (type) => {
  const res = await getLogListAPI(type)
  if (type) {
    errorData.value = res.data
    logStore.setErrLogLength(errorData.value.length)
  } else {
    warningData.value = res.data
    logStore.setWarningLogLength(warningData.value.length)
  }
}
// 删除日志
const deleteLogData = async (id, type) => {
  await deleteLogAPI(id)
  getLogListData(type)
}
// 获取指标数据
const getIndicatorsData = async () => {
  const res = await getIndicatorsAPI(indicators.value)
  indicators.value = res.data
}
// 监听log的变化获取对应日志
watch(logStore, (newValue) => {
  getLogListData(newValue.logValue)
});
// 挂载时调用
onMounted(() => {
  getLogListData(0)
  getLogListData(1)
  getPerSecondData()
  getHourData()
  getIndicatorsData()
  // 每三秒调用一次
  setInterval(() => {
    getPerSecondData()
    getIndicatorsData()
  }, 3000)
  // 每隔一个小时调用一次
  setInterval(() => {
    getHourData()
  }, 1000 * 60 * 60)
})
</script>

<template>
  <div class="page-container">
    <!--上部分-->
    <el-row :gutter="8">
      <!--左侧-->
      <el-col :span="5">
        <el-card>
          <!--上半部分-->
          <div class="div-header">
            <el-row :gutter="1">
              <el-col :span="2">
                <div class="bar"></div>
              </el-col>
              <el-col :span="22">
                <p class="p-header">站点信息</p>
              </el-col>
            </el-row>
          </div>
          <div>
            <div class="div-normal">
              <img src="@/assets/images/Deploy/powerStation.png" alt="" class="div-img">
              <p class="div-p">
                电站名称&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;渗透能电站</p>
            </div>
            <div class="div-normal">
              <img src="@/assets/images/Deploy/store.png" alt="" class="div-img">
              <p class="div-p">装机容量&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;600kW</p>
            </div>
            <div class="div-normal">
              <img src="@/assets/images/Deploy/hours.png" alt="" class="div-img">
              <p class="div-p">连续使用小时数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ hour }}h</p>
            </div>
          </div>
          <el-row :gutter="20">
            <el-col :span="12" class="el-col-center" style="padding: 0">
              <div>
                <div style="text-align: center;">
                  <div class="special-p">{{ power.toFixed(2) }}</div>
                </div>
                <div style="text-align: center;">
                  实时发电功率(kW)
                </div>
              </div>
            </el-col>
            <el-col :span="12" class="el-col-center" style="padding: 0">
              <div>
                <div style="text-align: center;">
                  <div class="special-p">{{ current }}</div>
                </div>
                <div style="text-align: center;">
                  总产氢量(t)
                </div>
              </div>
            </el-col>
          </el-row>
          <!--下半部分-->
          <div class="div-header" style="margin-top: 10px">
            <el-row :gutter="1">
              <el-col :span="2">
                <div class="bar"></div>
              </el-col>
              <el-col :span="22">
                <p class="p-header">完成指标</p>
              </el-col>
            </el-row>
          </div>
          <!--日历进度-->
          <div class="box-text">
            <span class="normal-text">日历进度</span>
            <span class="light-text">85%</span>
          </div>
          <div class="calendar-bar-shadow">
            <div class="bar-light" style="width: 85%"></div>
          </div>
          <div class="box-text">
            <span class="normal-text">1天</span>
            <span class="normal-text">366天</span>
          </div>
          <!--总发电量-->
          <div class="box-text">
            <span class="normal-text">总发电量(上网电量)</span>
            <span class="light-text">78%(<span style="color: #80FFA5">20%</span>)</span>
          </div>
          <div class="calendar-bar-shadow">
            <div class="bar-light" style="width: 78%">
              <div class="special-bar-light" style="width: 25%"></div>
            </div>
          </div>
          <div class="box-text">
            <span class="normal-text">0</span>
            <span class="normal-text">500万kWh</span>
          </div>
          <!--氢气产量-->
          <div class="box-text">
            <span class="normal-text">氢气产量</span>
            <span class="light-text">70%</span>
          </div>
          <div class="calendar-bar-shadow">
            <div class="bar-light" style="width: 70%"></div>
          </div>
          <div class="box-text">
            <span class="normal-text">0</span>
            <span class="normal-text">200t</span>
          </div>
        </el-card>
      </el-col>
      <!--中间-->
      <el-col :span="12">
        <div style="height: 328px">
          <el-card style="height: 100%">
            <div v-if="selectedIconButtons === 0">
              <div>
                <div id="MonthPower"
                     style="width: 118%; height: 210px; position: relative; top: -15px; left: -50px"></div>
              </div>
              <div>
                <div id="PerDay" style="width: 105%; height: 170px; position: relative; top: -75px; left: -15px"></div>
              </div>
            </div>
            <div v-if="selectedIconButtons === 1">
              <div id="H2Rate" style="width: 100%;height: 300px"></div>
            </div>
            <div v-if="selectedIconButtons === 2">
              <el-row :gutter="10">
                <el-col :span="7">
                  <div id="LiquidFillChartLeft" style="width: 100%;height: 300px; margin-top: 20px"></div>
                </el-col>
                <el-col :span="10">
                  <el-table :data="tableData" border style="width: 100%; margin-top: 30px" :cell-style="tableCellStyle">
                    <el-table-column prop="left" label="电解水" width="95" header-align="center"/>
                    <el-table-column prop="name" label="指标" width="95" header-align="center"/>
                    <el-table-column prop="right" label="糠醛" header-align="center"/>
                  </el-table>
                </el-col>
                <el-col :span="7">
                  <div id="LiquidFillChartRight" style="width: 100%;height: 300px; margin-top: 20px"></div>
                </el-col>
              </el-row>
            </div>
            <div v-if="selectedIconButtons === 3">
              <div id="output" style="width: 105%;height: 340px"></div>
            </div>
            <div v-if="selectedIconButtons === 4">
              <div id="EconomyProfit" style="width: 105%;height: 300px; position: relative; left: -15px"></div>
            </div>
          </el-card>
        </div>
        <div style="margin-top: 5px">
          <el-card style="">
            <el-row :gutter="20" style="margin-top: 5px">
              <el-col :span="5">
                <div class="el-col-center">
                  <img src="@/assets/images/Deploy/total.png" alt="" class="lower-left-img"
                       @click="selectIconButtons(0)">
                </div>
                <p style="padding: 0; text-align: center; font-size: small; margin: 5px 0 0;">总发电量</p>
                <div v-if="selectedIconButtons===0" style="width: 50px; height: 5px; background-color: #5FA6FE;margin-top: 10px; position: absolute;
                top: 45px; left: 50px"></div>
              </el-col>
              <el-col :span="5">
                <div class="el-col-center">
                  <img src="@/assets/images/Deploy/v.png" alt="" class="lower-left-img" @click="selectIconButtons(1)">
                </div>
                <p style="padding: 0; text-align: center; font-size: small; margin: 5px 0 0;">制氢速率</p>
                <div v-if="selectedIconButtons===1" style="width: 50px; height: 5px; background-color: #5FA6FE;margin-top: 10px; position: absolute;
                top: 45px; left: 198px"></div>
              </el-col>
              <el-col :span="5">
                <div class="el-col-center">
                  <img src="@/assets/images/Deploy/h2.png" alt="" class="lower-left-img" @click="selectIconButtons(2)">
                </div>
                <p style="padding: 0; text-align: center; font-size: small; margin: 5px 0 0;">氢气容量</p>
                <div v-if="selectedIconButtons===2" style="width: 50px; height: 5px; background-color: #5FA6FE;margin-top: 10px; position: absolute;
                top: 45px; left: 346px"></div>
              </el-col>
              <el-col :span="5">
                <div class="el-col-center">
                  <img src="@/assets/images/Deploy/get.png" alt="" class="lower-left-img" @click="selectIconButtons(3)">
                </div>
                <p style="padding: 0; text-align: center; font-size: small; margin: 5px 0 0;">糠酸产量</p>
                <div v-if="selectedIconButtons===3" style="width: 50px; height: 5px; background-color: #5FA6FE;margin-top: 10px; position: absolute;
                top: 45px; left: 495px"></div>
              </el-col>
              <el-col :span="4">
                <div class="el-col-center">
                  <img src="@/assets/images/Deploy/year-get.png" alt="" class="lower-left-img"
                       @click="selectIconButtons(4)">
                </div>
                <p style="padding: 0; text-align: center; font-size: small; margin: 5px 0 0;">经济收益</p>
                <div v-if="selectedIconButtons===4" style="width: 50px; height: 5px; background-color: #5FA6FE;margin-top: 10px; position: absolute;
                top: 45px; left: 628px"></div>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
      <!--右侧-->
      <el-col :span="7">
        <el-card>
          <div class="div-header">
            <el-row :gutter="1">
              <el-col :span="2">
                <div class="bar"></div>
              </el-col>
              <el-col :span="22">
                <p class="p-header">
                  {{ logType[logStore.logValue] }}
                </p>
              </el-col>
            </el-row>
          </div>
          <div style="margin-top: 10px">
            <el-table :data="warningData" style="width: 100%" height="350px" v-if="logStore.logValue === 0">
              <el-table-column fixed prop="occurrenceTime" label="时间" width="115"/>
              <el-table-column prop="occurrencePlace" label="位置" width="75"/>
              <el-table-column prop="content" label="内容" width="110"/>
              <el-table-column label="操作" width="100px" v-slot="scope">
                <el-button type="warning" round @click="deleteLogData(scope.row.id, scope.row.type)">解决</el-button>
              </el-table-column>
            </el-table>
            <el-table :data="errorData" style="width: 100%" height="350px" v-if="logStore.logValue === 1">
              <el-table-column fixed prop="occurrenceTime" label="时间" width="115"/>
              <el-table-column prop="occurrencePlace" label="位置" width="75"/>
              <el-table-column prop="content" label="内容" width="110"/>
              <el-table-column label="操作" width="100px" v-slot="scope">
                <el-button type="danger" round @click="deleteLogData(scope.row.id, scope.row.type)">解决</el-button>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
        <el-dialog
            v-model="centerDialogVisible"
            width="500"
            align-center
        >
          <template #title>
            <div style="display: flex;align-items: center;">
              <img src="@/assets/images/Deploy/warning.png" alt="" style="width: 25px; height: 25px">
              <div style="font-weight: bold; font-size: x-large">警告</div>
            </div>
          </template>
          <span>警告：系统出现故障，请尽快检查！</span>
          <template #footer>
            <div class="dialog-footer">
              <el-button type="danger" @click="centerDialogVisible = false">确定</el-button>
            </div>
          </template>
        </el-dialog>
      </el-col>
    </el-row>
    <!--下部分-->
    <el-row :gutter="8" class="el-row-footer">
      <!--左侧-->
      <el-col :span="5">
        <el-card style="height: 99%">
          <el-row :gutter="10" style="height: 45%">
            <el-col :span="12" class="footer-left-item">
              <img src="@/assets/images/Deploy/temperature.png" alt="" class="item-img">
              <span class="item-text-top">流体温度</span>
              <span class="item-text-bottom">{{ indicators.temperature.toFixed(1) }}℃</span>
            </el-col>
            <el-col :span="12" class="footer-left-item">
              <img src="@/assets/images/Deploy/velocity.png" alt="" class="item-img">
              <span class="item-text-top">液体流速</span>
              <span class="item-text-bottom">{{ indicators.flowRate.toFixed(1) }}km/h</span>
            </el-col>
          </el-row>
          <el-row :gutter="10" style="height: 45%; margin-top: 5px">
            <el-col :span="12" class="footer-left-item">
              <img src="@/assets/images/Deploy/concentration.png" alt="" class="item-img">
              <span class="item-text-top">浓度梯度</span>
              <span class="item-text-bottom">{{ indicators.density.toFixed(0) }}</span>
            </el-col>
            <el-col :span="12" class="footer-left-item">
              <img src="@/assets/images/Deploy/ph.png" alt="" class="item-img">
              <span class="item-text-top">流体pH</span>
              <span class="item-text-bottom">{{ indicators.ph.toFixed(1) }}</span>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <!--右侧-->
      <el-col :span="19">
        <el-card>
          <div class="div-header">
            <el-row :gutter="1">
              <el-col :span="5" style="display: flex">
                <div class="bar"></div>
                <div style="width: 15px"></div>
                <p class="p-header">功率(kW)及发电趋势</p>
              </el-col>
              <el-col :span="19"></el-col>
            </el-row>
          </div>
          <div style="max-height: 145px">
            <el-row :gutter="20">
              <el-col :span="2">
                <div style="display: flex; flex-direction: column; align-items: center;">
                  <el-button
                      v-for="(button, index) in buttons"
                      :key="index"
                      :plain="true"
                      :type="selectedButton === index ? 'primary' : 'default'"
                      @click="selectButton(index)"
                      style="width: 21px; height: 21px; margin: 4px; z-index: 999;"
                  >
                    {{ button }}
                  </el-button>
                </div>
              </el-col>
              <el-col :span="22">
                <div v-if="selectedButton === 0" class="echarts-bar" id="PerMinute"></div>
                <div v-else-if="selectedButton === 1" class="echarts-bar" id="PerHour"></div>
                <div v-if="selectedButton === 2" class="echarts-bar" id="PerDays"></div>
                <div v-else-if="selectedButton === 3" class="echarts-bar" id="PerMonth"></div>
                <div v-if="selectedButton === 4" class="echarts-bar" id="PerYear"></div>
              </el-col>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;

  .div-header {
    height: 30px;
  }

  .bar {
    height: 28px;
    width: 5px;
    background-color: #409D92;
  }

  .p-header {
    font-size: 20px;
    font-weight: normal;
    margin-top: 1px;
  }

  .div-normal {
    height: 40px;

    display: flex;
    align-items: center;

    .div-p {
      margin-left: 10px;
    }

    .div-img {
      height: 30px;
      width: 30px;
    }
  }

  .el-row-footer {
    margin-top: 8px;

    .footer-left-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .item-img {
        width: 40px;
        height: 40px;
      }

      .item-text-top {
        font-size: small;
        margin: 1px;
      }

      .item-text-bottom {
        font-size: large;
        font-weight: bold;
      }
    }
  }

  .el-col-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .special-p {
    font-family: electronicFont, serif;
    font-weight: bold;
    font-size: 20px;
    color: #048197;
    margin: 5px;
  }

  .lower-left-img {
    width: 30px;
    height: 30px;
  }

  .echarts-bar {
    position: absolute;
    left: 20px;
    top: -40px;
    width: 100%;
    height: 250px;
  }

  .box-text {
    display: flex;
    justify-content: space-between;
    margin-top: 3px;
    width: 100%;

    .normal-text {
      font-size: 13px;
    }

    .light-text {
      font-size: 13px;
      color: #62D4CA;
      font-weight: bolder;
    }
  }

  .calendar-bar-shadow {
    width: 100%;
    height: 10px;
    background-color: #85867e;
  }

  .bar-light {
    position: relative;
    height: 10px;
    background-color: #62D4CA;

    .special-bar-light {
      position: relative;
      height: 10px;
      background-color: #80FFA5;
    }
  }
}
</style>