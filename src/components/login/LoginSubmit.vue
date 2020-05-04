<template>
  <span class="login_button">
    <input type="button" value="Sign Up"  @click="onRegister()"  @mouseenter="state1=$attrs.state"/>
    <input type="button" value="Sign In" @click="onLogin()" @mouseenter="state1=$attrs.state" />
    

    
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
    Phonenum:{
      type:String
    }
  },
  data() {
    return {
      list: null,
      state1: 1 //控制按钮执行的功能
    }
  },
  methods: {
    onLogin(){   
      $APP.login(this.Email,this.Pass) 
    },
    onRegister(){
      $APP.signup(this.Email,this.FirstName+this.LastName,this.Pass,this.Phonenum)
    },
    signup_success(){
          this.$notify({
          message:'注册成功，请登录',
          background:'green',
          duration: 1000
        })
    },
    signin_success(){
          this.$notify({
          message:'登录成功',
          background:'green',
          duration: 1000
        })
        this.$router.push('/Manager')
    }
  },
  mount(){
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
