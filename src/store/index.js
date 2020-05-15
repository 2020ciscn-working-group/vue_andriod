import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state={
//主人的信息  
     uid:'',
     username:'',
     phoneNum:'',
     friend_uid_list:'',

//当前要对其进行操作的好友信息
     target:{
     targetuid:'',
     targetName:'',
     targetphoneNum:'',
     targetguestid:''
     },

//登录还是注册
    state1:1
}
const mutations= {
  changestate(state,payload){
        state.uid=payload.user.uid;
        state.username=payload.user.username;
        state.phoneNum=payload.user.phoneNum;
        state.friend_uid_list=payload.user.friend_uid_list;
  },
  getTarget(state,payload){
    state.target.targetuid=payload.Friend.firend_uid;
    state.target.targetName=payload.Friend.username;
    state.target.targetphoneNum=payload.Friend.phnum;
    state.target.targetguestid=payload.Friend.Guestid;
  },
  getState(state,payload){
    state.state1=payload.state
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions: {}
})
