<template>
  <div class="dashboard-editor-container">
    <!-- 右上角图标组件 -->
    <github-corner style="position: absolute; top: 0px; border: 0; right: 0;" />
    <!-- 上面可以点的组件 -->
    <panel-group @handleSetLineChartData="handleSetLineChartData" />
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <!-- 折线图 -->
      <line-chart :chart-data="lineChartData" />
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <!-- 雷达图 -->
          <raddar-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <!-- 饼图 -->
          <pie-chart />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <!-- 柱形图 -->
          <bar-chart />
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <!-- 交易表格组件 -->
        <transaction-table />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <!-- 代办事项清单 -->
        <todo-list />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <!-- 卡片箱 -->
        <box-card />
      </el-col>
    </el-row>

  </div>
</template>

<script>
// 右上角图标组件
import GithubCorner from '@/components/GithubCorner'
// 上面可以点的组件
import PanelGroup from './components/PanelGroup'
// 折线图
import LineChart from './components/LineChart'
// 雷达图
import RaddarChart from './components/RaddarChart'
// 饼图
import PieChart from './components/PieChart'
// 柱形图
import BarChart from './components/BarChart'
// 交易表格组件
import TransactionTable from './components/TransactionTable'
// 代办事项清单
import TodoList from './components/TodoList'
// 卡片箱
import BoxCard from './components/BoxCard'

// 写在这里是全局变量
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    GithubCorner,
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard
  },
  data() {
    return {
      // 默认显示lineChartData.newVisitis
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
    // 拿到子组件传过来的类型
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}
</style>
