<template>
  <div class="lock">
    <Header :is-left="true" title="选择申请门锁" btn_icon="ellipsis-h" />
    <div class="lock_list">
      <van-panel class="hubCell"
        v-for="(hub,index) in hubList"
        :key="index"
        :title="hubList[index].desc"
        desc="描述信息"
        status="状态"
      >
        <template #default>
          <div class="hubdesc">
            <van-cell :title="'hub_id'" :value="hubList[index].id" />
            <van-cell :title="'hub_info'" :value="hubList[index].info" />
          </div>
          <div class="lockdesc">
            <!-- <van-cell v-for="(lock,index1) in hub.locs"
             :key="index1" 
            :title="hub.locs[index1].Lock_id" center :value="hub.locs[index1].desc" ><van-tag type="danger">{{hub.locs[index1].acctype}}</van-tag></van-cell>-->
            <van-cell v-for="(lock,index1) in hub.locs" :key="index1"  :value="'描述:'+hub.locs[index1].desc" >
              <!-- 使用 title 插槽来自定义标题 -->
              <template #title>
                <span class="custom-title" :style="{'margin-right':'20px'}">{{hub.locs[index1].Lock_id}}</span>
                <van-tag round type="primary">{{hub.locs[index1].acctype}}</van-tag>
              </template>
            </van-cell>
          </div>
        </template>
        <template #footer :style="{'height':'20px'}">
          <van-button size="middle" :style="{'margin-right':'200px'}">隐藏信息</van-button>
          <!-- <van-switch v-model="checked" active-color="#07c160" inactive-color="#ee0a24" @click="checked=hubList[index].uuid" /> -->
          <label :style="{color: 'black', 'font-size': '15px'}">选择</label><input type="radio"  v-model="radio" :value="hubList[index]" >
        </template>
      </van-panel>
    </div>

    <div class="bottom">
      <van-radio-group class="privilege" v-model="radio2" direction="horizontal">
        <span
          :style="{color: 'blue', 'font-size': '20px' ,'margin-right': '28px','border':'1px solid black'}"
        >申请权限:</span>
        <van-radio class="vanRadio" name="1">权限1</van-radio>
        <van-radio class="vanRadio" name="2">权限2</van-radio>
        <van-radio class="vanRadio" name="3">权限3</van-radio>
        <van-radio class="vanRadio" name="4">权限4</van-radio>
        <van-radio class="vanRadio" name="5">权限5</van-radio>
      </van-radio-group>
      <Button @click="commit()">提交申请</Button>
    </div>
  </div>
</template>

<script>
import Header from "../components/privilegeManager/Header";
import LockCell from "../components/privilegeManager/LockCell";
import Button from "../components/privilegeManager/YButton";

export default {
  data() {
    return {
      radio: "",
      radio2: "",
      hubList: [
        {
          desc: "我是一号hub",
          id: "sdfsdfgearf",
          info: "dfhsedhsedrh",
          locs: [
            {
              Hub_uuid: "qwqqweqweq1we",
              Lock_id: 1,
              acctype: 0,
              desc: "xxx"
            },
            {
              Hub_uuid: "qwqewqeeeq1we",
              Lock_id: 2,
              acctype: 3,
              desc: "fajklfjl"
            }
          ],
          uuid: "qwqqweqweq1we",
          uuid_ow: "WAACDEFBBACA"
        },
        {
          desc: "我是二号hub",
          id: "sdfsdfgearf23",
          info: "dfhsedhsedrh32",
          locs: [
            {
              Hub_uuid: "qwqqweqweq1we",
              Lock_id: 1,
              acctype: 0,
              desc: "xxx"
            }
          ],
          uuid: "qwqqweqweq1we43243",
          uuid_ow: "WAACDEFBBACA"
        }
      ]
    };
  },
  components: {
    Header,
    LockCell,
    Button
  },
  methods: {
    commit() {
      console.log(this.radio.uuid);
      console.log(parseInt(this.radio2));
      console.log(this.radio.info);
      const json_string = {
        accsee: parseInt(this.radio2),
        hubuuid: this.radio.uuid,
        info: this.radio.info
      };
      console.log("json测试" + JSON.stringify(json_string));
      console.log(this.$store.state.target.targetuid);
      $APP.accreq(
        JSON.stringify(json_string),
        this.$store.state.target.targetuid
      ); //提交申请
    },
    change(str) {
      this.radio = str;
      console.log(this.radio);
    },
    ongetHub() {
      this.hubList = JSON.parse($APP.getHub());
    }
  },
  mounted() {
    window.showLockList = this.showLockList;
    this.ongetHub; //初始化门锁
  }
};
</script>

<style scoped>
.lock {
  width: 100%;
  height: 100%;
  
}
.hubCell{
  margin-bottom:10px;
  /* border:1px,solid,black; */
}
.lock_list {
  width: 100%;
  height: calc(100% - 150px);
  margin-top: 50px;
  box-sizing: border-box;
  /* padding: 16px 0; */
  background-color: #f1f1f1;
  overflow:scroll;
}
.privilege {
  font-size: 20px;
}
.privilege .vanRadio {
  margin-right: 40px;
  margin-bottom: 3px;
}
.lock .bottom{
  border-top:3px,solid,black;
  position:fixed;
  bottom:0; 
}

</style>
