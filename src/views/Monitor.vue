<script setup>
import {ref} from "vue";
import * as echarts from 'echarts';

// 使用按钮控制柱状图
const isShow = ref(true)
const select = (index) => {
  isShow.value = index
  switch (index) {
    case true:
      setTimeout(() => {
        getErrChart();
      }, 1);
      break
    case false:
      setTimeout(() => {
        getErrTotalChart();
      }, 1);
      break
  }
}

// 日期常量
const times = ref(['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00', '01:10', '01:20', '01:30', '01:40', '01:50', '02:00',
  '02:10', '02:20', '02:30', '02:40', '02:50', '03:00'])

const times_err = ref(['00:00', '00:40',  '01:00',  '01:50', '02:00', '02:10', '02:30', '02:40', '02:50', '03:00'])

// 模拟总的数据
const totalData = [
  {
    name: '发电侧电压V',
    date_0: 19.7,
    date_1: 20.2,
    date_2: 19.4,
    date_3: 20.1,
    date_4: 19.9,
    date_5: 20.6,
    date_6: 19.1,
    date_7: 20.9,
    date_8: 19.3,
    date_9: 19.9,
    date_10: 20.8,
    date_11: 19.5,
    date_12: 20.6,
    date_13: 1,
    date_14: 1,
    date_15: 1,
    date_16: 1,
    date_17: 1,
    date_18: 1,
  },
  {
    name: '发电侧电流A',
    date_0: 9.3,
    date_1: 10.7,
    date_2: 9.5,
    date_3: 10.2,
    date_4: 9.8,
    date_5: 10.4,
    date_6: 9.9,
    date_7: 10.1,
    date_8: 9.6,
    date_9: 10.9,
    date_10: 9.2,
    date_11: 10.6,
    date_12: 9.7,
    date_13: 1,
    date_14: 1,
    date_15: 1,
    date_16: 1,
    date_17: 1,
    date_18: 1,
  },
  {
    name: '氢气罐压力/MPa',
    date_0: 58.2,
    date_1: 61.7,
    date_2: 59.8,
    date_3: 62.1,
    date_4: 57.3,
    date_5: 60.5,
    date_6: 60.1,
    date_7: 62.9,
    date_8: 57.6,
    date_9: 61.4,
    date_10: 59.0,
    date_11: 61.0,
    date_12: 59.5,
    date_13: 1,
    date_14: 1,
    date_15: 1,
    date_16: 1,
    date_17: 1,
    date_18: 1,
  },
  {
    name: '储能侧健康度/%',
    date_0: 99.7,
    date_1: 99.7,
    date_2: 99.7,
    date_3: 99.7,
    date_4: 99.7,
    date_5: 99.7,
    date_6: 99.7,
    date_7: 99.7,
    date_8: 99.7,
    date_9: 99.7,
    date_10: 99.7,
    date_11: 99.7,
    date_12: 99.7,
    date_13: 1,
    date_14: 1,
    date_15: 1,
    date_16: 1,
    date_17: 1,
    date_18: 1,
  },
  {
    name: '流体浓度梯度',
    date_0: 50.1,
    date_1: 49.8,
    date_2: 50.2,
    date_3: 50.1,
    date_4: 49.4,
    date_5: 50.2,
    date_6: 49.5,
    date_7: 50.0,
    date_8: 49.7,
    date_9: 50.3,
    date_10: 49.9,
    date_11: 50.1,
    date_12: 50.4,
    date_13: 1,
    date_14: 1,
    date_15: 1,
    date_16: 1,
    date_17: 1,
    date_18: 1,
  },
]

// 模拟错误数据
const errData = [
  {
    name: '发电侧电压/V',
    date_0: "-",
    date_1: "-",
    date_2: "-",
    date_3: "41.3",
    date_4: "-",
    date_5: "-",
    date_6: "-",
    date_7: "-",
    date_8: "-",
    date_9: "-",
    date_10: 1,
    date_11: 1,
    date_12: 1,
    date_13: 1,
    date_14: 1,
    date_15: 1,
    date_16: 1,
    date_17: 1,
    date_18: 1,
  },
  {
    name: '发电侧电流/A',
    date_0: "-",
    date_1: "-",
    date_2: "-",
    date_3: "17.6",
    date_4: "-",
    date_5: "-",
    date_6: "-",
    date_7: "-",
    date_8: "-",
    date_9: "-",
    date_10: 1,
    date_11: 1,
    date_12: 1,
    date_13: 1,
    date_14: 1,
    date_15: 1,
    date_16: 1,
    date_17: 1,
    date_18: 1,
  },
  {
    name: '氢气罐压力',
    date_0: "-",
    date_1: "-",
    date_2: "-",
    date_3: "-",
    date_4: "-",
    date_5: "20.3",
    date_6: "-",
    date_7: "-",
    date_8: "-",
    date_9: "-",
    date_10: 1,
    date_11: 1,
    date_12: 1,
    date_13: 1,
    date_14: 1,
    date_15: 1,
    date_16: 1,
    date_17: 1,
    date_18: 1,
  },
  {
    name: '储能侧健康度/%',
    date_0: "-",
    date_1: "-",
    date_2: "64.8",
    date_3: "-",
    date_4: "-",
    date_5: "-",
    date_6: "-",
    date_7: "-",
    date_8: "-",
    date_9: "-",
    date_10: 1,
    date_11: 1,
    date_12: 1,
    date_13: 1,
    date_14: 1,
    date_15: 1,
    date_16: 1,
    date_17: 1,
    date_18: 1,
  },
  {
    name: '流体浓度梯度',
    date_0: "-",
    date_1: "-",
    date_2: "-",
    date_3: "-",
    date_4: "-",
    date_5: "-",
    date_6: "24.3",
    date_7: "-",
    date_8: "-",
    date_9: "-",
    date_10: 1,
    date_11: 1,
    date_12: 1,
    date_13: 1,
    date_14: 1,
    date_15: 1,
    date_16: 1,
    date_17: 1,
    date_18: 1,
  },
  {
    name: '1',
    date_0: 1,
    date_1: 1,
    date_2: 1,
    date_3: 1,
    date_4: 1,
    date_5: 1,
    date_6: 1,
    date_7: 1,
    date_8: 1,
    date_9: 1,
    date_10: 1,
    date_11: 1,
    date_12: 1,
    date_13: 1,
    date_14: 1,
    date_15: 1,
    date_16: 1,
    date_17: 1,
    date_18: 1,
  }
]

function getErrChart() {
  const chartDom = document.getElementById('Err');
  const myChart = echarts.init(chartDom);
  const option = {
    legend: {
      top: '5px',
      right: '45px'
    },
    tooltip: {},
    dataset: {
      source: [
        ['季度', '发电侧电压', '发电测电流', '氢气罐压力', '储能侧健康度', '流体浓度梯度'],
        ['1', 73, 55, 66, 32, 44],
        ['2', 82, 65, 61, 26, 47],
        ['3', 53, 39, 55, 38, 41],
        ['4', 43, 22, 42, 18, 23],
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
      },
      {
        type: 'bar',
        itemStyle: {
          color: '#08c8e8' // 修改第二个柱子的颜色
        }
      },
      {
        type: 'bar',
        itemStyle: {
          color: '#b40fd8' // 修改第二个柱子的颜色
        }
      },
      {
        type: 'bar',
        itemStyle: {
          color: '#deed04' // 修改第二个柱子的颜色
        }
      }
    ]
  };

  option && myChart.setOption(option);
}

function getErrTotalChart() {
  const chartDom = document.getElementById('ErrTotal');
  const myChart = echarts.init(chartDom);
  const option = {
    tooltip: {},
    dataset: {
      source: [
        ['季度', '总数'],
        ['1', 273],
        ['2', 265],
        ['3', 210],
        ['4', 150],
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
    ]
  }
  option && myChart.setOption(option);
}

// 初始化加载绘制的图表
setTimeout(() => {
  getErrChart();
}, 1);

// 修改上面表格的颜色
// eslint-disable-next-line no-unused-vars
function topTableCellStyle({row, column, rowIndex, columnIndex}) {
  if (rowIndex === 4 && columnIndex === 2) {
    return {
      textAlign: 'center',
      background: 'red',
      color: 'white',
      borderRadius: '20px' // 背景区域的圆角
    };
  }
  if (rowIndex === 3 && columnIndex === 4) {
    return {
      textAlign: 'center',
      background: 'red',
      color: 'white',
      borderRadius: '20px' // 背景区域的圆角
    };
  }
  if (rowIndex === 1 && columnIndex === 6) {
    return {
      textAlign: 'center',
      background: 'red',
      color: 'white',
      borderRadius: '20px' // 背景区域的圆角
    };
  }
  return {textAlign: 'center',}
}

// 下面的表格的颜色
// eslint-disable-next-line no-unused-vars
function bottomTableCellStyle({row, column, rowIndex, columnIndex}) {
  return {textAlign: 'center',}
}
</script>

<template>
  <el-card>
    <el-date-picker
        type="date"
        placeholder="2023-04-21"
        style="width: 115px;position: absolute;z-index: 999; top:85px"
    />
    <el-table :data="totalData" style="width: 100%; position: relative; top: -5px" height="313px"
              :row-style="{height:'55px'}" :cell-style="topTableCellStyle">
      <el-table-column fixed prop="name" width="130" header-align="center"/>
      <el-table-column v-for="(item, index) in times" :key="index" :prop="'date_' + index" :label="item" width="100"
                       header-align="center"/>
    </el-table>
  </el-card>
  <el-row style="margin-top: 5px" :gutter="5">
    <el-date-picker
        type="date"
        placeholder="2023-04-23"
        style="width: 115px;position: absolute;z-index: 999; top:15px; left: 20px"
    />
    <el-col :span="15">
      <el-card style="height: 298px">
        <el-table :data="errData" style="width: 100%; position: relative; top: -10px" height="290px"
                  :row-style="{height:'50px'}" :cell-style="bottomTableCellStyle">
          <el-table-column fixed prop="name" width="130" header-align="center"/>
          <el-table-column v-for="(item, index) in times_err" :key="index" :prop="'date_' + index" :label="item"
                           width="100" header-align="center"/>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="9">
      <el-card style="height: 298px">
        <el-container style="position: relative; top: -5px">
          <el-button :type="isShow ? 'success' : 'primary'" :plain="!isShow" @click="select(true)" style="z-index: 999">
            季度故障详细分布
          </el-button>
          <el-button :type="!isShow ? 'success' : 'primary'" :plain="isShow" @click="select(false)"
                     style="z-index: 999">季度故障总计
          </el-button>
        </el-container>
        <div v-if="isShow===true" id="Err"
             style="width: 115%; height: 285px; position: relative; left: -20px; top:10px"></div>
        <div v-if="isShow===false" id="ErrTotal"
             style="width: 115%; height: 310px; position: relative; left: -20px; top:-30px"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>

</style>