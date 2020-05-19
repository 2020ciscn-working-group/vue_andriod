<template>
  <div class="cell-wrapper" v-if="userInfo">
    <div class="cell-title">
      <img src="@/assets/pic/friends.png" />
      <span :style="{'font-size':'20px'}">{{userInfo.targetName}}</span>
    </div>
    <div class="cell-email">
      <!-- <img :src="userInfo.avatar" />
      <span>{{"邮箱:  "+userInfo.targetuid}}</span> -->
      <van-cell :style="{'padding-left':'0px'}" title="邮箱" icon="envelop-o" :value="userInfo.targetuid" />
    </div>
    <div class='cell-phoneNum'> 
      <!-- <img :src="userInfo.avatar"  />
      <span>{{"电话:  "+userInfo.targetphoneNum}}</span> -->
      <van-cell :style="{'padding-left':'0px'}" title="电话" icon="phone-o" :value="userInfo.targetphoneNum"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "info-cell",
  props: {
    userInfo: Object
  },
  created() {
    console.log(this.userInfo);
  }
};
</script>

<style scoped>
.cell-wrapper {
  background-color: #fff;
  box-sizing: border-box;
  color: inherit;
  min-height: 80px;
  display: block;
  font-size: 16px;
  line-height: 1;
  overflow: hidden;
  padding: 0 8px;
  width: 100%;
  line-height: 80px;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
}
.cell-title {
  flex: 1;
}
.cell-email {
  flex: 1;
  
}
.cell-phoneNum {
  flex: 1;
  
}
.cell-title img {
  width: 1.2rem;
  height: 1.2rem;
  vertical-align: middle;
  margin-right: 0.6rem;
}
.cell-title span {
  display: inline-block;
  vertical-align: middle;
}
</style>
