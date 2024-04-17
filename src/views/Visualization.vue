<script setup>
// 引入echarts
import * as echarts from "echarts";

// 使用echarts绘制图表-日发电量
function dailyPower() {
  const chartDom = document.getElementById('DailyPower');
  let myChart = echarts.getInstanceByDom(chartDom); // 获取图表实例

  if (!myChart) {
    myChart = echarts.init(chartDom); // 如果图表实例不存在，则初始化
  }

  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['12:30', '12:40', '12:50', '13:00', '13:10', '13:20', '13:30'],
      axisLabel: {
        textStyle: {
          color: 'white' // 设置x轴标签文字颜色为白色
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        textStyle: {
          color: 'white' // 设置y轴标签文字颜色为白色
        }
      }
    },
    series: [
      {
        data: [0.1, 0.4, 0.3, 0.2, 0.3, 0.5, 0.3],
        label: {
          show: true,
          position: 'top'
        },
        type: 'line',
        smooth: true, // To make the line smooth
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: 'rgba(3,87,255,0.8)' // Gradient start color
          }, {
            offset: 1,
            color: 'rgba(33,96,137,0.3)' // Gradient end color
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
      text: '发电量(MWh)',
      textStyle: {
        color: 'white', // 设置标题文字颜色为白色
        fontSize: 12
      },
      top: '25px',
      left: '10px',
    },
    legend: {
      top: '25px',
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
    series: [{type: 'bar'}, {type: 'bar'}]
  };

  option && myChart.setOption(option);
}

// 使用echarts绘制图表-功率曲线
function powerCurve() {
  const chartDom = document.getElementById('PowerCurve');
  const myChart = echarts.init(chartDom);

  const option = {
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
      top: '30px',
      right: '20px',
      textStyle: {
        color: '#fff' // 设置字体颜色为白色
      },
      data: ['Email', 'Union Ads', 'Video Ads']
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
            color: '#fff' // 设置字体颜色为白色
          }
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '万kWh', // 单位描述
        nameTextStyle: {
          color: '#fff' // 单位描述文本颜色设置为白色
        },
        axisLabel: {
          textStyle: {
            color: '#fff' // 设置字体颜色为白色
          }
        }
      }
    ],
    series: [
      {
        name: 'Email',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'Union Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Video Ads',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      }
    ]
  };

  option && myChart.setOption(option);
}

// 加载绘制的图表
setTimeout(() => {
  dailyPower();
  monthPower();
  powerCurve();
}, 1);
</script>

<template>
  <div class="page-container">
    <!--日发电量表-->
    <div class="daily-power-generation">
      <div class="box-top">
        <div class="block"></div>
        <h4 class="font">&nbsp;日发电量(万kWh)</h4>
      </div>
      <div class="bar"></div>
      <div id="DailyPower" class="chart"></div>
    </div>
    <!--月发电量表-->
    <div class="monthly-power-generation">
      <div class="box-top">
        <div class="block"></div>
        <h4 class="font">&nbsp;月发电量(万kWh)</h4>
      </div>
      <div class="bar"></div>
      <div id="MonthPower" class="chart"></div>
    </div>
    <!--完成电量-->
    <div class="completion-battery">
      <div class="box-top">
        <div class="block"></div>
        <h4 class="font">&nbsp;完成电量</h4>
      </div>
      <div class="bar"></div>
      <!--日历进度-->
      <div class="calendar-progress-text">
          <span class="left-text">日历进度</span>
          <span class="right-text">85%</span>
      </div>
      <div class="calendar-progress-bar-shadow"></div>
      <div class="calendar-progress-bar-light"></div>
      <div class="calendar-progress-text">
        <span class="left-text">1天</span>
        <span class="left-text">366天</span>
      </div>
      <!--发电量-->
      <div class="calendar-progress-text">
        <span class="left-text">发电量</span>
        <span class="right-text">70%</span>
      </div>
      <div class="calendar-progress-bar-shadow"></div>
      <div class="power-generation-bar-light"></div>
      <div class="calendar-progress-text">
        <span class="left-text">0万kWh</span>
        <span class="left-text">11500万kWh</span>
      </div>
      <!--百分比-->
      <div class="calendar-progress-text">
        <span class="left-text">百分对比</span>
        <span class="right-text">21%</span>
      </div>
      <div class="calendar-progress-bar-shadow"></div>
      <div class="percent-comparison"></div>
      <div class="calendar-progress-text">
        <span class="left-text">0%</span>
        <span class="left-text">100%</span>
      </div>
    </div>
    <!--功率曲线-->
    <div class="power">
      <div class="box-top">
        <div class="block"></div>
        <h4 class="font">&nbsp;功率曲线</h4>
      </div>
      <div class="bar"></div>
      <div id="PowerCurve" class="power-curve"></div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;
  background: url('@/assets/images/Visualization/bg.jpg') no-repeat;
  background-size: cover;

  .daily-power-generation {
    position: absolute;
    margin-top: 30px;
    margin-left: 20px;
    width: 350px;

    .box-top {
      display: flex;
      align-items: center; /* 垂直居中 */

      .block {
        margin-left: 5px;
        width: 10px;
        height: 15px;
        background-color: white;
      }

      .font {
        color: white;
        margin: 2px;
      }
    }

    .bar {
      margin-top: 2px;
      width: 100%;
      height: 2px;
      background-color: white;
    }

    .chart {
      position: absolute;
      top: -10px;
      left: -13px;
      width: 110%;
      height: 250px;
    }
  }

  .monthly-power-generation {
    position: absolute;
    margin-top: 240px;
    margin-left: 20px;
    width: 350px;

    .box-top {
      display: flex;
      align-items: center; /* 垂直居中 */

      .block {
        margin-left: 5px;
        width: 10px;
        height: 15px;
        background-color: white;
      }

      .font {
        color: white;
        margin: 2px;
      }
    }

    .bar {
      margin-top: 2px;
      width: 100%;
      height: 2px;
      background-color: white;
    }

    .chart {
      position: absolute;
      top: 10px;
      left: -13px;
      width: 110%;
      height: 250px;
    }
  }

  .completion-battery {
    position: absolute;
    margin-top: 460px;
    margin-left: 20px;
    width: 350px;

    .box-top {
      display: flex;
      align-items: center; /* 垂直居中 */

      .block {
        margin-left: 5px;
        width: 10px;
        height: 15px;
        background-color: white;
      }

      .font {
        color: white;
        margin: 2px;
      }
    }

    .bar {
      margin-top: 2px;
      width: 100%;
      height: 2px;
      background-color: white;
    }

    .calendar-progress-text {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 5px;

      .left-text {
        font-size: 13px;
        color: white;
      }

      .right-text {
        font-size: 13px;
        color: #62D4CA;
        font-weight: bolder;
      }
    }

    .calendar-progress-bar-shadow {
      width: 100%;
      height: 10px;
      margin-top: 2px;
      background-color: #85867e;
    }

    .calendar-progress-bar-light {
      position: absolute;
      top: 53px;
      width: 85%;
      height: 10px;
      background-color: #62D4CA;
    }

    .power-generation-bar-light {
      position: absolute;
      top: 107px;
      width: 70%;
      height: 10px;
      background-color: #62D4CA;
    }

    .percent-comparison {
      position: absolute;
      top: 163px;
      width: 21%;
      height: 10px;
      background-color: #62D4CA;
    }
  }

  .power {
    position: absolute;
    left: 500px;
    top: 525px;
    width: 65%;

    .box-top {
      display: flex;
      align-items: center; /* 垂直居中 */

      .block {
        margin-left: 5px;
        width: 10px;
        height: 15px;
        background-color: white;
      }

      .font {
        color: white;
        margin: 2px;
      }
    }

    .bar {
      margin-top: 2px;
      width: 100%;
      height: 2px;
      background-color: white;
    }

    .power-curve {
      position: absolute;
      top: 2px;
      width: 100%;
      height: 200px;
    }
  }
}
</style>