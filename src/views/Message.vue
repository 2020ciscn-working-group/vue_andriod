<template>
  <div class="container">
  <Header title="消息"  btn_icon="plus"/>
  <button @click="onPushMessage">测试拉取</button>
  </div>
</template>

<script>
import Header from "../components/privilegeManager/Header"
export default {
     components:{Header},
     methods:{
       onPushMessage(){
         $APP.pushmessage(this.hostid,this.guestid)
       }
     }
}
</script>

<style scoped>

</style>