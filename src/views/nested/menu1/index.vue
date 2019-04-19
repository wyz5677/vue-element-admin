<template>
  <!-- 原则上有多少级路由嵌套就需要多少个<router-view> -->
  <div style="padding:30px;">
    <el-alert :closable="false" title="menu 1">
      <router-view />
    </el-alert>
  </div>
</template>
