<template>
  <div class="chat">
    <Header v-if="targetUser" :is-left="true" :title="targetUser.targetName" />
    <van-cell
      :style="{'height':'50px','margin-top':'10px'}"
      class="switch"
      center
      title="保密通讯密钥交换申请"
    >
      <template #right-icon>
        <van-button @click="onNegoreq()" color="linear-gradient(to right, #4bb0ff, #6149f6)">更换密钥</van-button>
      </template>
    </van-cell>

    <div class="container">
      <!-- 聊天内容 -->
      <div
        class="content_wrap"
        v-if="targetUser && user"
        v-for="(item,index) in messageList"
        :key="index"
      >
        <!-- 别人的内容 -->
        <div class="left_msg" v-if="item.source == 'other'">
          <img :src="imgsrc2" alt />
          <span>{{item.message}}</span>
        </div>
        <!-- 我的内容 -->
        <div class="right_msg" v-if="item.source=='self'">
          <span>{{item.message}}</span>
          <img :src="imgsrc1" alt />
        </div>
      </div>
    </div>

    <div class="footer_wrap">
      <input type="text" v-model="msgValue" />
      <button :disabled="msgValue == ''" @click="onsendMessage">发送</button>
      <button @click="getMessage">拉取</button>
    </div>
    <van-dialog v-model="show" title="收到授权申请" 
     show-cancel-button confirmButtonText="同意" 
     confirmButtonColor="green" 
     cancelButtonColor="red" 
     cancelButtonText="拒绝" 
     :message="information" 
     @confirm="Onconfirm" @cancel="Oncancel">

     </van-dialog>
  </div>
</template>

// <script>
import Header from "../components/privilegeManager/Header";

export default {
  data() {
    return {
      msgValue: "",
      show:false,
      messageList: [
      //   {message:'你好 张三',
      //   source:'self'      
      // },
      // {
      //   message:'你好',
      //   source:'other'
      // },
      // {message:'今天5点我在办公楼等你',
      //   source:'self'      
      // },
      ],
      accreq_json:{
  //  "accsee": 5,
  //  "hubuuid": "ACCDCBAEFFAAV",
  //  "info": "北京市通州区西集镇北苑街道2号楼",
  //  "infolen": 18,
  //  "pub": [-9, -39, 20, 22, 33, 19, 116, -11, 93, 101, 81, -124, 44, 98, -78, 1, 82, 59, -37, 57, -18, 108, 93, -41, -93, -25, -109, 23, -99, 48, -32, -27, -34, -120, -41, -34, -58, 12, -82, 113, 57, -82, 68, 92, -84, -128, -107, 86, 0, -62, -82, 80, 47, -101, 63, -50, -58, 62, 40, 55, 100, 82, 64, -58],
  //  "signdata": [-66, -110, -75, 33, 37, -92, -104, 54, 101, -50, 109, -19, -117, 103, 6, 83, -77, 93, -83, 85, -59, -65, -53, 60, 72, 21, 106, -47, -33, -40, 29, 114, -32, 79, 47, 4, 69, 24, 108, -21, 74, 16, -89, -121, 116, -106, -103, 58, 108, -114, 111, -112, -63, -70, 1, 16, 17, -89, -3, 26, -54, 38, -83, -17],
  //  "signdatalen": 64,
  //  "time":"2020-03-26 :05:16:47"
  },
      imgsrc1:require('../assets/pic/me.png'),
      imgsrc2:require('../assets/pic/friends.png'),
      information:'',
      user: {
        uid: this.$store.state.uid,
        avatar: ""
      },
      targetUser: this.$store.state.target,
    }
  },
  components: {
    Header
  },

  mounted() {
    //一上来先拉取消息

    //  this.getMessage()
    console.log(this.targetUser);
    console.log(this.user.uid);
    window.pullmessage_success = this.pullmessage_success; //挂载拉取成功后的方法
    window.chatItem_receieve = this.chatItem_receieve;
    window.accreq=this.accreq
  },
  methods: {
    onsendMessage() {
      //发送消息
      // $APP.sendMessage(this.msgValue, 100, this.targetUser.targetuid);
      // 需要发送的消息对象
      const msgObj = {
        // host_id:this.user.uid,
        // guest_id: this.targetUser.targetuid,
        message: this.msgValue,
        // msg_type:100,
        source: "self" //这块的source为了区分消息是我发的还是对方发的，后面会去掉这个属性，直接以message的host_id和guest_id判断
      };
      // 本地客户端显示
      this.messageList.push(msgObj);
      // 清空input
      this.msgValue = "";
    },
    getMessage() {
      $APP.pullmessage(this.targetUser.targetuid, this.user.uid);
    },
    pullmessage_success() {
      console.log("拉取成功");
    },
    chatItem_receieve(str) {
      const msg_item = {
        message: str,
        source: "other"
      };
      this.messageList.push(msg_item);
    },
    onNegoreq() {
      $APP.negoreq(this.targetUser.targetuid);
    },
    Onconfirm(){
      console.log("调用了确认事件")
      $APP.acceptaccreq(this.json_str,this.$store.state.target.targetuid)
    },
    Oncancel(){
      console.log("调用了拒绝事件")
       $APP.denide(this.json_str,this.$store.state.target.targetuid)
       
    },
    accreq(str){    
      this.accreq_json=JSON.parse(str)
      this.information=JSON.stringify('accsee: '+this.accreq_json.accsee)+'\n'+JSON.stringify('hubuuid: '+this.accreq_json.hubuuid)+'\n'+JSON.stringify('info: '+this.accreq_json.info)+'\n'+JSON.stringify('time: '+this.accreq_json.time)
      this.show=true
//         console.log(str)
//         this.accreq_json=JSON.parse(str)
//         this.$dialog.confirm({
//          confirmButtonText:"同意",
//          showCancelButton:true,
//          confirmButtonColor:'green',
//          cancelButtonColor:'red',
//          cancelButtonText:"拒绝",
//          title: "接到授权申请", //加上标题
//          message:JSON.stringify('accsee: '+this.accreq_json.accsee)+'\n'+JSON.stringify('hubuuid: '+this.accreq_json.hubuuid)+'\n'+JSON.stringify('info: '+this.accreq_json.info)+'\n'+JSON.stringify('time: '+this.accreq_json.info)//改变弹出框的内容
// })
//     .then(() => { //点击确认按钮后的调用
//          console.log("调用接受事件")
//          
         
// })
//     .catch(() => { //点击取消按钮后的调用
//            console.log("调用拒绝事件")
//          
          
// })
}
  }
};
</script>
<style scoped>
.chat {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.head {
  height: 90px;
}
.container {
  width: 100%;
  height: calc(100% - 140px);
  box-sizing: border-box;
  background-color: #f1f1f1;
  margin-top: 105px;
  padding: 8px;
  overflow-y: scroll;
}
.switch {
  position: absolute;
  width: 100%;
  top: 40px;
}
.footer_wrap {
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  border-top: 1px solid #d9d9d9;
  position: absolute;
  bottom: 0;
  padding: 8px;
  background-color: #fafafa;
}
.footer_wrap input {
  width: 50%;
  height: 30px;
  outline: none;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  font-size: 15px;
}
.footer_wrap button {
  width: 20%;
  height: 34px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin-left: 8px;
  outline: none;
  background-color: #f1f1f1;
  font-size: 15px;
}
.footer_wrap button[disabled] {
  background-color: #d9d9d9;
  cursor: not-allowed;
  pointer-events: none;
}

.left_msg {
  justify-content: flex-start;
}
.right_msg {
  justify-content: flex-end;
}
.left_msg,
.right_msg {
  width: 100%;

  display: flex;
  margin: 10px 0;
}
.content_wrap img {
  width: 1rem;
  height: 1rem;
}
.content_wrap span {
  display: inline-block;
  max-width: 65%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin: 0 5px;
  padding: 8px;
  box-sizing: border-box;
  word-break: break-all;
}
.left_msg span {
  background-color: #fff;
  font-size: 15px;
}
.right_msg span {
  background-color: #0fce0d;
  font-size: 15px;
}
</style>
