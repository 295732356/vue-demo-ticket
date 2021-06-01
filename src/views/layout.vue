<template>
  <div id="layout">
    <el-container>
      <el-aside width="150px">
        <div class="logo">
          <img src="../assets/logo.png" alt />
        </div>
        <Aside />
      </el-aside>
      <el-main>
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import Header from '../components/Header.vue'
import Aside from "../components/Aside";

export default {
  name: "Layout",
  components: {
    // Header,
    Aside
  }
};
</script>

<style>
#layout {
  height: 100%;
}
.el-main{
   padding-left: 0;
   padding-top: 0;
}
</style>
