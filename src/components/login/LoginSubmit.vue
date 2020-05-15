<template>
  <span class="login_button">
    <input type="button" value="Sign Up" :disabled="signup_disable"  @click="onRegister()" />
    <input type="button" value="Sign In" :disabled="signin_disable"  @click="onLogin()" />
    

    
  </span>
</template>


<script>
export default {
  //  props:["FirstName","LastName","Email","Pass","Repass"],
  props: {
    FirstName: {
      type: String
    },
    LastName: {
      type: String
    },
    Email: {
      type: String
    },
    Pass: {
      type: String
    },
    Repass: {
      type: String
    },
    phoneNum:{
      type:String
    }
  },
  data() {
    return {
      state1: this.$store.state.state1 ,//控制按钮执行的功能
      user:{
          uid:this.Email,
          username:this.FirstName+this.LastName,      
          phoneNum:this.phoneNum,
      },
      signin_disable:false,
      signup_disable:true
    }
  },
  computed:{
    isFollow () {
    return this.$store.state.state1;　　//需要监听的数据
  }

  },
  watch:{
    isFollow(val){
        this.state1=val
    },
    state1(val){
      this.signin_disable=(val==1)?false:true,
      this.signup_disable=(val==2)?false:true
    },
  },
  methods: {
    onLogin(){   
      $APP.login(this.Email,this.Pass) 
    },
    onRegister(){
      $APP.signup(this.Email,this.FirstName+this.LastName,this.Pass,this.phoneNum)
    },
    signup_success(){
          this.$notify({
          message:'注册成功，请登录',
          background:'green',
          duration: 1000
        })
    },
    signin_success(){
          this.getuser();
          this.sethost(); 
          this.$notify({
          message:'登录成功',
          background:'green',
          duration: 1000
        })
        this.$router.push('/Manager')
    },
    getuser(){
      this.user.uid=this.Email,
      this.user.username=this.FirstName+this.LastName,
      this.user.phoneNum=this.phoneNum
    },
    //  保存登录状态到store中
     sethost(){
        this.$store.commit({
          type:'changestate',
          user:this.user
        })
        
    } ,
    show(){
      console.log(this.state1)
      console.log(this.signin_disable)
      console.log(this.signup_disable)
    }
  },
  mounted(){
    window.signup_success=this.signup_success
    window.signin_success=this.signin_success
    
  }
};
</script>

<style scoped>
.login_button {
  position: relative;
  display: flex;
  flex: 1;
}
.login_button input {
  width: 0;
  height: 40px;
  border: none;
  border-radius: 2px;
  outline: none;
  overflow: hidden;
  transition: all 0.6s ease;
  position: absolute;
  width: 100%;
  height: 100%;
  font-weight: 700;
}

</style>
