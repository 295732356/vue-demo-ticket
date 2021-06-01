<template>
  <div class="content">
    <SecondAside :title="name" :subMenuList="subMenuList" class="left-content" />
    <router-view class="right-content"></router-view>
  </div>
</template>
<script>
export default {
  name: "Layout",
  data() {
    return {
      name:'销项',
      subMenuList:[
        {
          path:'/output/invoiceApply',
          name:'开票申请'
        },
        {
          path:'/output/invoiceTitle',
          name:'开票抬头'
        },
      ]
    }
  }
};
</script>
<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
.left-content {
    flex:0 0 150px;
    height:100%;
    background-color: #dddddd;
}
.right-content {
  flex: 1;
  height:100%;
  background: #ffffff;
}
</style>