<template>
  <form class="login_form">
    <div class="login_form_r1">
      <div class="login_text">
        <login-textfield  @func="getFirstName"  label="First name" icon="user" />
        <login-textfield  @func="getLastName"   label="Last name" />
      </div>
    </div>
     <div class="login_form_r6">
      <Login-Textfield @func="getPhonenum"  label="Phone number" icon="phone"/>
    </div>
    <div class="login_form_r2">
      <Login-Textfield @func="getEmail"  label="Email address" icon="envelope-o"/>
    </div>
   
    <div class="login_form_r3">
      <login-textfield @func="getPass" type="password" label="Enter password" icon="lock" />
    </div>
    <div class="login_form_r4">
      <login-textfield @func="getRepass" type="password"  label="Re-enter password" icon="lock" />
    </div>
    <div class="login_form_r5">
      <login-checkbox label="Keep me sign in" />
      <label>Forget passwords</label>
      
    </div>
    <div>
      <login-submit  v-bind:Repass="Repass"  v-bind:Pass="Pass"  v-bind:Email="Email" v-bind:FirstName="FirstName" v-bind:LastName="LastName" v-bind:phoneNum="phoneNum" v-bind="this.$attrs" />
      
    </div>
  </form>
</template>
<script>
import LoginTextfield from './LoginTextfield'
import LoginCheckbox from './LoginCheckbox'
import LoginSubmit from './LoginSubmit'

export default {
  data(){
    return{
        FirstName:'',
        LastName:'',
        phoneNum:'',
        Email:'',
        Pass:'',
        Repass:'',
    }
  },
  methods:{
        getFirstName(data){
            this.FirstName = data
        },
        getLastName(data){
          this.LastName = data
          
        },
        getEmail(data){
          this.Email = data
        },
        getPass(data){
          this.Pass = data
        },
        getRepass(data){
          this.Repass = data
          
        },
        getPhonenum(data){
          this.phoneNum=data
        }
  },
  components: {
    LoginTextfield,
    LoginCheckbox,
    LoginSubmit
  }
}
</script>
<style >
.login_form {
  padding: 20px;
  
}
.login_form > div {
  padding-bottom: 10px;
  display: flex;
  min-height: 40px;
  justify-content: space-between;
  transition: all 0.6s ease;
}
.login_text {
  display: flex;
  flex: 1;
}
.login_text .login_textfield {
  border-radius: 0;
}
.login_text .login_textfield:first-child {
  border-radius: 2px 0 0 2px;
}
.login_text .login_textfield:last-child {
  border-radius: 0 2px 2px 0;
}
.login__signup .login_form_r5 {
  opacity: 0;
  /* transform: translateY(100%); */
  transition-duration: 0.4s;
}
.login__signup .login_button label:nth-child(2) {
  transform: translateY(-100%);
  opacity: 0;
}
.login__signin .login_form_r1,
.login__signin .login_form_r4,
.login__signin .login_form_r6 {
  opacity: 0;
  transform: translateY(30%) scale(0.8);
}
.login__signin .login_form_r2,
.login__signin .login_form_r3 {
  transform: translateY(-100%);
}
.login__signin .login_form_r5 {
  transform: translateY(-200%);
}
.login__signin .login_button label:nth-child(3) {
  transform: translateY(100%);
  opacity: 0;
}

.login__signin .login_button input:nth-child(1) {
  transform: translateY(-100%);
  opacity: 0;
}
.login__signup .login_button input:nth-child(2) {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
