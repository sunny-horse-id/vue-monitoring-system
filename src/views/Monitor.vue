<script setup>
import {ref} from "vue";
import * as echarts from 'echarts';

// 日期常量
const times = ref(['00:00', '00:10', '00:20', '00:30', '00:40', '00:50', '01:00', '01:10', '01:20', '01:30', '01:40', '01:50', '02:00',
  '02:10', '02:20', '02:30', '02:40', '02:50', '03:00'])

// 模拟总的数据
const totalData = [
  {
    name: '发电侧电压',
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
  },
  {
    name: '发电侧电流',
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
  },
  {
    name: '氢气罐压力',
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
  },
  {
    name: '储能侧健康度',
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
  },
  {
    name: '流体浓度梯度',
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
  },
]

// 模拟错误数据
const errData = [
  {
    name: '发电侧电压',
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
  },
  {
    name: '发电侧电流',
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
  },
  {
    name: '氢气罐压力',
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
  },
  {
    name: '储能侧健康度',
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
  },
  {
    name: '流体浓度梯度',
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
  },
]

function getErrChart() {
  const chartDom = document.getElementById('Err');
  const myChart = echarts.init(chartDom);
  const option = {
    title: {
      text: '季度故障分布',
      left: '20px'
    },
    legend: {
      right: '55px'
    },
    tooltip: {},
    dataset: {
      source: [
        ['季度', '故障1', '故障2', '故障3', '故障4', '故障5'],
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

// 初始化加载绘制的图表
setTimeout(() => {
  getErrChart();
}, 1);
</script>

<template>
  <el-card>
    <el-date-picker
        type="date"
        placeholder="2023-04-21"
        style="width: 115px;position: absolute;z-index: 999; top:85px"
    />
    <el-table :data="totalData" style="width: 100%; position: relative; top: -5px" height="313px" :row-style="{height:'55px'}">
      <el-table-column fixed prop="name" width="115"/>
      <el-table-column v-for="(item, index) in times" :key="index" :prop="'date_' + index" :label="item" width="100"/>
    </el-table>
  </el-card>
  <el-row style="margin-top: 5px" :gutter="5">
    <el-date-picker
        type="date"
        placeholder="2023-04-21"
        style="width: 115px;position: absolute;z-index: 999; top:15px; left: 20px"
    />
    <el-col :span="15">
      <el-card style="height: 298px">
        <el-table :data="errData" style="width: 100%; position: relative; top: -10px" height="290px" :row-style="{height:'50px'}">
          <el-table-column fixed prop="name" width="115"/>
          <el-table-column v-for="(item, index) in times" :key="index" :prop="'date_' + index" :label="item"
                           width="100"/>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="9">
      <el-card style="height: 298px">
        <div id="Err" style="width: 115%; height: 320px; position: relative; left: -20px;"></div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>

</style>