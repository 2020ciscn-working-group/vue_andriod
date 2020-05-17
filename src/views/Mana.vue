<template>
  <!-- 三槽标题 -->
  <div class="Mana">
    <Header title="授权管理" />
    <van-divider
      class="otherLock"
      content-position="left"
      :style="{ color: 'black', borderColor: 'green' }"
    >被授权</van-divider>
    <!-- 显示被授权 -->
    <van-swipe-cell v-for="(record,index) in manaList" :key="index">
      <template #left>
        <van-button square type="primary" text="选择" />
      </template>
      <van-cell  v-if="uid_list[index]==user_uid"
        :border="false"
        :title="manaList[index].accexp.accreq.info+manaList[index].accexp.accreq.accsee"
      />
      <template #right>
        <van-button square type="danger" text="删除" @click="del()" />

      </template>
    </van-swipe-cell>

    <van-divider
      class="otherLock"
      content-position="left"
      :style="{ color: 'black', borderColor: 'green' }"
    >我的授权</van-divider>
    <!-- 显示我的授权 -->
   <van-swipe-cell v-for="(record1,index1) in manaList" :key="'A'+index1">
      <template #left>
        <van-button square type="primary" text="选择" />
      </template>
      <van-cell  v-if="uid_list[index1]!=user_uid"
        :border="false"
        :title="manaList[index1].accexp.accreq.info+manaList[index1].accexp.accreq.accsee"
      />
      <template #right>
        <van-button square type="danger" text="删除" @click="del(manaList[index1].uuid)" />
        <!-- <van-button square type="primary" text="收藏" /> -->
      </template>
    </van-swipe-cell>
  </div>
</template>

<script>
import Header from "../components/privilegeManager/Header";
export default {
  components: { Header },
  data() {
    return {
      user_uid:this.$store.state.uid,
      uid_list:[],
      manaList: []
    };
  },
  methods: {
    del(tockenuuid) {
       $APP.deleteTocken(tockenuuid)
    },
    ongetTockens(){
      
      var list=$APP.getTockens()
      if(list!=null)
         this.manaList=JSON.parse(list)              //获取token列表      
      for(var i=0;i<this.manaList.length;i++){
        let useruid=this.manaList[i].uuid.split(" ")[0];
        console.log(useruid)
        this.uid_list.push(useruid)    //把好友uid装进列表里
      }    
    },
  },
  created(){
    this.ongetTockens()
  }
};
</script>

<style scoped>
.Mana {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
}
.otherLock {
  width: 100%;
  /* height: calc(100% - 50px); */
  margin-top: 60px;
  font-size: 20px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
</style>
