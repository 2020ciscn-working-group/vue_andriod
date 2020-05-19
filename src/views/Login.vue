<template>
  
  <div 
    class="login"
    :class="{ login__signin: isSignIn, login__signup: isSignUp }"
  >
    
    <login-tabs :style="{'padding-top':'50px'}" class="tab" @click.native="switchState" />
    <login-form  v-bind:state="state"/>

  </div>
</template>
<script>
import LoginTabs from '../components/login/LoginTabs'
import LoginForm from '../components/login/LoginForm'

export default {
  components: {
    LoginTabs,
    LoginForm
  },
  data () {
    return {
      state: 1
    }
  },
  computed: {
    isSignIn () {
      return this.state === 1
    },
    isSignUp () {
      return this.state === 2
    }
  },
  methods: {
    switchState () {
      this.state = this.state === 1 ? 2 : 1,
      this.getstate()
    },
    getstate(){
    this.$store.commit({
          type:'getState',
          state:this.state
        })
    }
  }
}
</script >
<style scoped>
.login {
 
  width: 100%;
  height:100%;

  font-size: 14px;
  background-color:#669999;

 

 
}

</style>
