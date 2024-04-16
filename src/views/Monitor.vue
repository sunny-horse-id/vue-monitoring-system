<script setup>
import * as echarts from 'echarts';

// 加载绘制的图表
setTimeout(() => {
  powerAndWindSpeedAnalysis();
  monthPowerAnalysis();
}, 1);

// 使用echarts绘制图表-功率与风速实时分析
function powerAndWindSpeedAnalysis() {
  const chartDom = document.getElementById('PowerAndWindSpeedAnalysis');
  const myChart = echarts.init(chartDom);

  const option = {
    color: ['#80FFA5', '#00DDFF'],
    title: {
      text: '功率(kW)与风速实时趋势分析',
      textStyle: {
        color: 'white' // 设置标题文字颜色为白色
      }
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
      data: ['功率曲线', '风速'],
      right: '20px', // 将图例移到右边，距离图表区域右边缘 20px
      textStyle: {
        color: 'white' // 设置图例文字颜色为白色
      }
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
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
          textStyle: {
            color: 'white' // 设置x轴标签文字颜色为白色
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: 'white' // 设置y轴标签文字颜色为白色
          }
        }
      }
    ],
    series: [
      {
        name: '功率曲线',
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
      },
      {
        name: '风速',
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
        data: [120, 282, 111, 234, 220, 340, 310]
      }
    ]
  };

  option && myChart.setOption(option);
}

// 使用echarts绘制图表-月发电量对比分析
function monthPowerAnalysis() {
  const chartDom = document.getElementById('MonthPowerAnalysis');
  const myChart = echarts.init(chartDom);

  const option = {
    title: {
      text: '月发电量(MWh)对比分析',
      textStyle: {
        color: 'white' // 设置标题文字颜色为白色
      }
    },
    legend: {
      top: '0',
      right: '20px',
      textStyle: {
        color: 'white' // 设置图例文字颜色为白色
      }
    },
    tooltip: {},
    dataset: {
      source: [
        // 删除第一个子数组
        ['product', '2016', '2017'],
        ['Milk Tea', 73.4, 55.1],
        ['Cheese Cocoa', 65.2, 82.5],
        ['Walnut Brownie', 53.9, 39.1]
      ]
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        textStyle: {
          color: 'white' // 设置x轴标签文字颜色为白色
        }
      }
    },
    yAxis: {
      axisLabel: {
        textStyle: {
          color: 'white' // 设置y轴标签文字颜色为白色
        }
      }
    },
    series: [{ type: 'bar' }, { type: 'bar' }]
  };

  option && myChart.setOption(option);
}

</script>

<template>
  <div class="page-container">
    <div class="chart-powerAndWindSpeed">
      <div id="PowerAndWindSpeedAnalysis" style="width: 450px;height: 300px;"></div>
    </div>
    <div class="chart-monthPowerAnalysis">
      <div id="MonthPowerAnalysis" style="width: 450px;height: 300px;"></div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;
  max-height: 100%;
  background: url('@/assets/images/Monitor/bg.jpg') no-repeat;

  .chart-powerAndWindSpeed {
    position: absolute;
    margin-top: 20px;
    right: 10px;
    background-color: rgba(0, 158, 180, 0.7);
  }

  .chart-monthPowerAnalysis {
    position: absolute;
    top: 420px;
    right: 10px;
    background-color: rgba(0, 158, 180, 0.7);
  }
}
</style>