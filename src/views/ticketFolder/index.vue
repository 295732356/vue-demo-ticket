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
      name:'票夹',
      subMenuList:[
        {
          path:'/ticketFolder/input',
          name:'进项发票'
        },
        {
          path:'/ticketFolder/output',
          name:'销项发票'
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