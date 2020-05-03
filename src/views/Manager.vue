  <template>
     <div>
      <router-view></router-view>
  
      <van-tabbar v-model="active" @change="onChange" class="tarbar">
        <van-tabbar-item icon="manager">授权管理</van-tabbar-item>
        <van-tabbar-item icon="todo-list">出入记录</van-tabbar-item>
        <van-tabbar-item icon="friends">好友</van-tabbar-item>
        <van-tabbar-item icon="chat" badge="9">消息</van-tabbar-item>
      </van-tabbar>
     </div>
</template>



<script>

import Mana from "./Mana";
import Message from "./Message";
import Records from "./Records";
import Friends from "./Friends";
export default {
  data() {
    return {
      state1: 1,
      component: "Mana",
      active: 0,
       tabbarData: [
        { title: "微信", icon: "comment"},
        { title: "通讯录", icon: "address-book" },
        { title: "发现", icon: "compass" },
        { title: "我", icon: "user"}
      ]
    };
  },
  methods: {
    onChange(index) {
      switch (index) {
        case 0:
           this.$router.push('Mana').catch(err => {err});
          break;
        case 1:
           this.$router.push('Records').catch(err => {err});
          break;
        case 2:
           this.$router.push('Friends').catch(err => {err});
          break;
        case 3:
           this.$router.push('Message').catch(err => {err});
      }
    },
    // back(str){
    //    this.component=str
    // }
  },
  components: {
    Mana: Mana,
    Message:Message,
    Records: Records,
    Friends: Friends
  }
};
</script>

<style scoped>
.tarbar{
  width:100%;
  height:50px;
}
</style>
