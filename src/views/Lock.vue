<template>
  <div class="lock">
    <Header :is-left="true" title="选择申请门锁" btn_icon="ellipsis-h" />
    <div class="container">
    <div class="hublist">
      <hubCell v-for="(hub,index) in hubList" :key="index" :hub="hub" :radio="radio" @func="select"></hubCell>
    </div>

    <div class="bottom">
      <!-- <van-radio-group class="privilege" v-model="radio2" direction="horizontal">
        <span
          :style="{color: 'blue', 'font-size': '20px' ,'margin-right': '10%','border':'1px solid black'}"
        >申请权限:</span>
        <van-radio class="vanRadio" name="1">权限1</van-radio>
        <van-radio class="vanRadio" name="2">权限2</van-radio>
        <van-radio class="vanRadio" name="3">权限3</van-radio>
        <van-radio class="vanRadio" name="4">权限4</van-radio>
        <van-radio class="vanRadio" name="5">权限5</van-radio>
      </van-radio-group>-->
      <van-dropdown-menu  direction="up" class="select">
        <van-dropdown-item  v-model="radio2" :options="option" />

      </van-dropdown-menu>
      <Button @click="commit()">提交申请</Button>
    </div>
  </div>
  </div>
</template>

<script>
import Header from "../components/privilegeManager/Header";
import LockCell from "../components/privilegeManager/LockCell";
import Button from "../components/privilegeManager/YButton";
import hubCell from "../components/privilegeManager/HubCell";

export default {
  data() {
    return {
      radio: {},
      radio2: 0,
      option: [
        { text: '请选择权限', value: 0 },
        { text: '权限1', value: 1 },
        { text: '权限2', value: 2 },
        { text: '权限3', value: 3 },
        { text: '权限4', value: 4 },
        { text: '权限5', value: 5 },
      ],
      status: "",
      hubList: [
        // {
        //   desc: "我是一号hub",
        //   id: "sdfsdfgearf",
        //   info: "dfhsedhsedrh",
        //   locs: [
        //     {
        //       Hub_uuid: "qwqqweqweq1we",
        //       Lock_id: 1,
        //       acctype: 2,
        //       desc: "北京市通州区梨园镇玉桥街道3号楼201"
        //     },
        //     {
        //       Hub_uuid: "qwqewqeeeq1we",
        //       Lock_id: 2,
        //       acctype: 3,
        //       desc: "北京市通州区梨园镇玉桥街道1号楼102"
        //     }
        //   ],
        //   uuid: "qwqqweqweq1we",
        //   uuid_ow: "WAACDEFBBACA"
        // },
        // {
        //   desc: "我是二号hub",
        //   id: "sdfsdfgearf23",
        //   info: "dfhsedhsedrh32",
        //   locs: [
        //     {
        //       Hub_uuid: "qwqqweqweq1we",
        //       Lock_id: 1,
        //       acctype: 4,
        //       desc: "北京市通州区永顺镇中仓街道街道5号楼302"
        //     }
        //   ],
        //   uuid: "qwqqweqweq1we43243",
        //   uuid_ow: "WAACDEFBBACA"
        // }
      ]
    };
  },
  components: {
    Header,
    LockCell,
    Button,
    hubCell
  },
  methods: {
    commit() {
      console.log(this.radio.uuid);
      console.log(this.radio2);
      console.log(this.radio.info);
      const json_string = {
        accsee: parseInt(this.radio2),
        hubuuid: this.radio.uuid,
        info: this.radio.info
      };
      console.log("json测试" + JSON.stringify(json_string));
      console.log(this.$store.state.target.targetuid);

      if (this.radio2 && this.radio)
        $APP.accreq(
          JSON.stringify(json_string),
          this.$store.state.target.targetuid
        );
      //提交申请
      else
        this.$notify({
          message: "请检查是否有未选项",
          background: "red",
          duration: 1000
        });
    },
    ongetHub() {
      var Hub_json = $APP.getHub(this.$store.state.target.targetuid);
      if (Hub_json != null) this.hubList = JSON.parse(Hub_json);
    },

    select(obj) {
      this.radio = obj;
    }
  },
  mounted() {
    window.showLockList = this.showLockList;
  },
  created() {
    this.ongetHub(); //初始化门锁
  }
};
</script>

<style scoped>
.lock {
  width: 100%;
  height: 100%;
}
.hubCell {
  margin-bottom: 10px;
  /* border:1px,solid,black; */
}
.hublist {
  width: 100%;
  height: calc(100% - 150px);
  margin-top: 50px;
  box-sizing: border-box;
  /* padding: 16px 0; */
  background-color: #f1f1f1;
  overflow: scroll;
}
.privilege {
  font-size: 20px;
}
.privilege .vanRadio {
  margin-right: 40px;
  margin-bottom: 3px;
}
.lock .container .bottom {
 
  width:100%;
  border-top:1px solid #66FFFF;
  position: fixed;
  bottom: 0;
}

</style>
