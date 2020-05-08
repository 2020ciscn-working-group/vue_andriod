<template>
  <div class="lock">
    <Header :is-left="true" title="选择申请门锁" btn_icon="ellipsis-h" />
    <div class="lock_list">
      <LockCell 
      v-for="(lock,index) in lockList"
      @adduuid ="addUUID(index)"
      :key="index" 
      :name="lock.name"
    />
    </div>
  <Button @click="commit()">提交申请</Button>
  </div>
</template>

<script>
import Header from "../components/privilegeManager/Header";
import LockCell from "../components/privilegeManager/LockCell";
import Button from "../components/privilegeManager/YButton";

export default {
  data() {
    return {
      lockList: [
        {
          name: "1号楼502",
          uuid:'1'

        },
        {
          name: "2号楼602",
          uuid:'2'
        }
      ],
      result: ''
    };
  },
  components: {
    Header,
    LockCell,
    Button
  },
  methods: {
      addUUID(index){  //目前做的是单选，如果需要可以改多选
        //   if(checked==false)
        this.result=this.lockList[index].uuid
        //   if(checked==true)
        //   this.result.pop(index)
      },
    commit(){
    console.log(this.result)  //后面与接口对接
    
    },
    showLockList(){

    }
  },
  mounted(){
      window.showLockList=this.showLockList
  }
};
</script>

<style scoped>
.lock {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.lock_list {
  width: 100%;
  height: calc(100% - 100px);
  margin-top: 50px;
  box-sizing: border-box;
  padding: 16px 0;
  background-color: #f1f1f1;
}

.btn_wrapper {
  box-sizing: border-box;
  padding: 20px;
}
</style>
