<script setup>

</script>

<template>
  <div class="page-container">
    <el-row :gutter="8">
      <el-col :span="5">
        <el-card>
          666
        </el-card>
      </el-col>
      <el-col :span="14">
        <el-card>
          777
        </el-card>
      </el-col>
      <el-col :span="5">
        <el-card>
          888
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="8" class="el-row-footer">
      <el-col :span="5">
        <el-card>
          666
        </el-card>
      </el-col>
      <el-col :span="19">
        <el-card>
          777
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.page-container {
  min-height: 100%;
  box-sizing: border-box;

  .el-row-footer {
    margin-top: 8px;
  }
}
</style>