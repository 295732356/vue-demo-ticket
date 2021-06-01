<template>
  <div id="secondAside">
    <div class="menuName">{{title}}</div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#ddd"
      text-color="#212943"
      active-text-color="#409eff"
      router>
      <el-menu-item v-for="item in subMenuList" :key="item.path" :index="item.path">
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: Number,
      default: 100
    },
    subMenuList: {
      type: Array,
      default: () => []// default: function () { return [] }  注意：数组不能直接给默认值[]
    }
  },
  data() {
      return{

      }
  },
  methods:{
  },
}
</script>
<style scoped>
  .menuName{
    height: 60px;
    line-height: 60px;
    border-bottom: 1px solid #aaa;
  }
  .el-menu-item:hover{
    background-color: #dddddd!important;
  }
  .el-menu-item.is-active { background-color: #ffffff!important; }
</style>
