<template>
  <div class="aside">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#1C2237"
      text-color="#fff"
      active-text-color="#fff"
      router>
      <el-menu-item index="/home">
        <i class="el-icon-s-home" style="font-size: 20px"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/ticketFolder">
        <i class="el-icon-menu"></i>
        <span slot="title">票夹</span>
      </el-menu-item>
      <el-menu-item index="/incomes">
        <i class="el-icon-document"></i>
        <span slot="title">进项</span>
      </el-menu-item>
      <el-menu-item index="/outputs">
        <i class="el-icon-setting"></i>
        <span slot="title">销项</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">抄报税</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">报表</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Aside',
  props: {
    msg: String
  },
  data(){
      return{
        navselected:null,
      }
  },
  methods:{
      handleOpen(key, keyPath) {
        console.log(1);
        
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
}
</script>
<style scoped>
 .el-menu-item.is-active { background-color: #409eff!important; }

</style>
