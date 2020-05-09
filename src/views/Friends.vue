<template>
  <div class="address_book">
    <Header title="通讯录" btn_icon="user-plus" @rightClick="add" />
    <div class="container">
      <!-- 上面 搜索框 -->
      <div class="search_wrap">
        <div class="sear_content">
          <i class="fa fa-search"></i>
          <input type="text" placeholder="搜索" v-model="search_value" />
        </div>
      </div>
      <div v-show="list_show">
        <!-- 中间 -->
        <div class="content_wrap">
          <Cell
            @click="cellClick(friend)"
            v-for="(friend,index) in friendsList"
            :key="index"
            :user="friend"
          />
        </div>
        <!-- 下面 -->
        <div class="count_wrap">
          <span>{{friendsList.length}}位联系人</span>
        </div>
      </div>
      
    </div>
    <Button class="btn_wrap" @click="confirm" v-show ="bt_show">发送请求</Button>
  </div>
</template>
<script>
import Header from "../components/privilegeManager/Header";
import Cell from "../components/privilegeManager/UserCell";
import Button from "../components/privilegeManager/YButton";

export default {
  name: "contacts",
  data() {
    return {
      list_show: true, //好友列表是否显示，当加好友时不显示
      bt_show:false, //加好友时按钮显示
      friendsList: [
        
      ],
      allFriends: [

      ],
      search_value: ""
    };
  },
  mounted() {
    this.getFriendsList();
    this.friendsList=this.allFriends
    console.log(this.friendsList);
    window.addFriend_success=this.addFriend_success
  },
  methods: {
    // 获取好友列表
    getFriendsList() {
       allFriends.push(JSON.parse($APP.getFriends()))
    },
    confirm(){
      //发送加好友请求
      $APP.addFriend(this.search_value)
    },
    addFriend_success(str){
      //把相应信息追加到allfriendlist中
      console.log(str)
      allFriends.push(JSON.parse(str)) //把获取特定的好友信息追加到AllfriendList中
      
    },
    add() {
      this.list_show = !this.list_show;
      this.bt_show = !this.bt_show;
    },
    filterData() {
      this.friendsList = this.allFriends.filter(friend => {
        return friend.name.indexOf(this.search_value) != -1;
      });
    },
    cellClick(friend) {
      // console.log(friend);
      this.$store.commit({ type: "getTarget", Friend: friend });
      this.$router.push("/information");
    }
  },
  watch: {
    search_value() {
      this.filterData();
    }
  },
  components: {
    Header,
    Cell,
    Button
  }
};
</script>
<style scoped>
.address_book {
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
.btn_wrap {
  width:90%;
  box-sizing: border-box;
  padding: 20px;
  margin-top: 50px;
  border-radius: 10px;
  margin-left: 20px;
  margin-right: 20px;
}
.search_wrap {
  background-color: #f1f1f1;
  padding: 8px;
  box-sizing: border-box;
  width: 100%;
}
.sear_content {
  height: 40px;
  background: #fff;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
}
.sear_content i {
  color: #888;
  margin-right: 10px;
}
.sear_content input {
  height: 36px;
  width: 90%;
  outline: none;
  border: none;
  font-size: 14px;
}

.count_wrap {
  min-height: 50px;
  background-color: #fff;
  box-sizing: border-box;
  color: #888;
  font-size: 16px;
  width: 100%;
  line-height: 50px;
  text-align: center;
}
</style>