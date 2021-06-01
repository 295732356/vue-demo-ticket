<template>
  <div id="app">
    <Layout/>
  </div>
</template>
<script>
import Layout from './views/layout'
export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.el-container {
  height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  /* line-height: 80px; */
}
.el-aside {
  /* overflow-y: scroll; */
  box-sizing: border-box;
  background-color: #1C2237;
  box-sizing: border-box;
  /* border-width: 1px;
  border-style: solid;
  border-color: #1C2237; */
  border-radius: 0px;
  color: #ffffff;
  font-size: 18px;
  /* padding: 20px; */
}
.el-menu{
  /* border-right: solid 1px #1C2237; */
  border: none;
}
.el-menu-item{
  font-size: 16px;
}
 .logo{
   width: 100%;
   height: 100px;
   line-height: 100px;
   font-size: 0;
 }
 .logo img{
   width: 80px;
   height: 80px;
   vertical-align:middle
 }
</style>
