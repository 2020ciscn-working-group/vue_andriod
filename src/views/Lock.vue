<template>
  <div class="lock">
    <Header :is-left="true" title="选择申请门锁" btn_icon="ellipsis-h" />
    <div class="lock_list">
      <!-- <LockCell 
      v-for="(lock,index) in lockList"
      @adduuid ="addUUID(index)"
      :key="index" 
      :name="lock.name"
      />-->
      <van-radio-group v-model="radio">
        <van-cell-group>
          <van-cell
            :title="lock.name"
            clickable
            v-for="(lock,index) in lockList"
            :key="index"
           
          >
            <template #right-icon>
              <van-radio :name="lock.name" />
            </template>
          </van-cell>
        </van-cell-group>
      </van-radio-group>
    </div>
    <div class="bottom"> 
      <van-radio-group class="privilege" v-model="radio2" direction="horizontal">
       <van-radio name="1">授权1</van-radio>
       <van-radio name="2">授权2</van-radio>
    </van-radio-group>
    <Button @click="commit()">提交申请</Button></div>
   
  </div>
</template>

<script>
import Header from "../components/privilegeManager/Header";
import LockCell from "../components/privilegeManager/LockCell";
import Button from "../components/privilegeManager/YButton";

export default {
  data() {
    return {
      radio2:'',
      radio:'',
      lockList: [
        {
          name: "1号楼502",
          uuid: "1"
        },
        {
          name: "2号楼602",
          uuid: "2"
        }
      ],
      result: ""
    };
  },
  components: {
    Header,
    LockCell,
    Button
  },
  methods: {
    addUUID(index) {
      //目前做的是单选，如果需要可以改多选
      //   if(checked==false)
      this.result = this.lockList[index].uuid;
      //   if(checked==true)
      //   this.result.pop(index)
    },
    commit() {
      console.log(this.result); //后面与接口对接\
      console.log(this.radio)
    },
    showLockList(lock_str) {
      //显示传来的锁信息
    },
    change(str) {
      this.radio = str;
      console.log(this.radio);
    }
  },
  mounted() {
    window.showLockList = this.showLockList;
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
  height: calc(100% - 130px);
  margin-top: 50px;
  box-sizing: border-box;
  padding: 16px 0;
  background-color: #f1f1f1;
}
.privilege{
  font-size:20px;
  margin-right: 100px;
  margin-bottom: 10px;
}
.btn_wrapper {
  box-sizing: border-box;
  padding: 20px;
}
</style>
