<template>
  <div>
    <button>原生按钮</button>
    <input type="text">
    <el-row>
      <atguigu-button>默认按钮</atguigu-button>
      <atguigu-button type="primary">主要按钮</atguigu-button>
      <atguigu-button type="success">成功按钮</atguigu-button>
      <atguigu-button type="info">信息按钮</atguigu-button>
      <atguigu-button type="warning">警告按钮</atguigu-button>
      <atguigu-button type="danger">危险按钮</atguigu-button>
    </el-row>
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
	export default {
		name:'App',
		components: {},
	}
</script>