<script setup>
const totalData = [
  {
    date: '1',
    place: '制氢侧',
    content: '储气罐泄露'
  },
  {
    date: '2',
    place: '制氢侧',
    content: '储气罐泄露'
  },
  {
    date: '3',
    place: '制氢侧',
    content: '储气罐泄露'
  },
  {
    date: '4',
    place: '制氢侧',
    content: '储气罐泄露'
  },
  {
    date: '5',
    place: '制氢侧',
    content: '储气罐泄露'
  },
  {
    date: '6',
    place: '制氢侧',
    content: '储气罐泄露'
  },
  {
    date: '2024-04-19 18:44:10',
    place: '制氢侧',
    content: '储气罐泄露'
  },
  {
    date: '2024-04-19 18:44:10',
    place: '制氢侧',
    content: '储气罐泄露'
  },
  {
    date: '2024-04-19 18:44:10',
    place: '制氢侧',
    content: '储气罐泄露'
  },
]
</script>

<template>
  <el-card>
    <el-table :data="totalData" style="width: 100%; position: relative; top: -10px" height="310px">
      <el-table-column fixed prop="date" width="115" />
      <el-table-column prop="place" label="2024-04-19 00:00" width="150" />
      <el-table-column prop="content" label="内容" width="100" />
      <el-table-column label="操作" width="100px">
        <el-button type="success" round>已解决</el-button>
      </el-table-column>
    </el-table>
  </el-card>
  <el-row style="margin-top: 5px" :gutter="5">
    <el-col :span="16">
      <el-card style="height: 298px">
        1
      </el-card>
    </el-col>
    <el-col :span="8">
      <el-card style="height: 298px">
        2
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>

</style>