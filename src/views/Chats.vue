<template>
  <div class="chat">
    <Header title="微信" btn_icon="plus"/>
    <div class="container">
      <Cell
        v-for="chatItem in chatDataList"
        :key="chatItem._id"
        :user="chatItem.target"
        :count="chatItem.count"
        @click="$router.push({name: 'chat',params: {user: chatItem.target}})" 
      />
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
import Cell from "../components/UserCell";
import WSocket from "../socket.js";
export default {
  name: "chats",
  data() {
    return {
      chatDataList: []
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  mounted() {
    WSocket.init(
      { user: this.user },
      message => {
        console.log(message);
        this.setMsgCount(message);
      },
      error => {
        console.log(error);
      }
    );
  },
  methods: {
    setMsgCount(message) {
      // 判断消息列表中是否有该用户
      let chatUser = this.chatDataList.filter(chatItem => {
        return chatItem.target._id == message.from;
      });

      // console.log(chatUser);
      // 如果存在， count + 1 并将消息保存在列表中
      if (chatUser.length > 0) {
        chatUser[0].count++;
        chatUser[0].message.push({
          msg: message.msg,
          source: "other"
        });
        this.saveMsg(
          chatUser[0].target,
          chatUser[0].count,
          chatUser[0].message
        );
      } else {
        // 如果不存在， 那么获取用户信息 并现实提醒
        this.getUserInfo(message);
      }
    },
    getUserInfo(message) {
      // 根据id查询用户信息
      this.$axios(`/api/users/${message.from}`).then(res => {
        // console.log(res.data);
        const msg = [];
        msg.push({
          msg: message.msg,
          source: "other"
        });

        // 将消息保存在聊天列表中 count为1
        this.chatDataList.push({
          target: res.data,
          count: 1,
          message: msg
        });

        this.saveMsg(res.data, 1, msg);
      });
    },
    // 保存方法
    saveMsg(targetUser, count, msg) {
      const messageObj = {
        target: {
          avatar: targetUser.avatar,
          name: targetUser.name,
          _id: targetUser._id
        },
        count: count,
        message: msg,
        user_id: this.user.id
      };
      this.$axios.post("/api/profile/addmsg", messageObj).then(res => {
        console.log("数据保存成功");
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$axios(`/api/profile/msg/${vm.user.id}`).then(res => {
        // console.log(res.data);
        vm.chatDataList = res.data;
      });
    });
  },
  components: {
    Header,
    Cell
  }
};
</script>

<style scoped>
.chat {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.container {
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 50px;
  overflow: auto;
}
</style>