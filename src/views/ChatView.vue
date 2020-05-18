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
          <img :src="targetUser.avatar" alt />
          <span>{{item.message}}</span>
        </div>
        <!-- 我的内容 -->
        <div class="right_msg" v-if="item.source=='self'">
          <span>{{item.message}}</span>
          <img :src="user.avatar" alt />
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
      messageList: [],
      json_str:'',
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
      $APP.sendMessage(this.msgValue, 100, this.targetUser.targetuid);
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
      this.json_str=str
      var accreq_json=JSON.parse(str)
      this.information=JSON.stringify('accsee: '+this.accreq_json.accsee)+'\n'+JSON.stringify('hubuuid: '+this.accreq_json.hubuuid)+'\n'+JSON.stringify('info: '+this.accreq_json.info)+'\n'+JSON.stringify('time: '+this.accreq_json.info)
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
  margin: 5px 0;
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
