<template>
  <span class="login_textfield">
    <label><i v-if="icon" :class="['fa', `fa-${icon}`]"></i> {{ label }}</label>
    <input v-model="message" :type="type" @input="sendMsg" />
    
  </span>
</template>
<script>
export default {
  props: {
    label: {
      type: String
    },
    icon: {                              
      type: String
    },
    type:{
       type: String,
       default: "text"
    }
  },
  data(){
    return{
      message:""
    }
  },
  methods:{
     sendMsg(){

             //func: 是父组件指定的传数据绑定的函数，this.msg:子组件给父组件传递的数据

             this.$emit('func',this.message)

         }
  }
}
</script>
<style scoped>
.login_textfield {
  flex: 1;
  display: flex;
  padding: 10px;
  width: 100%;
  border-radius: 2px;
  background-color: white;
  box-shadow: 0 1px 1px #0066d0;
}
.login_textfield label {
  margin-right: 10px;
  color: #007dff;
}
.login_textfield label i {
  width: 20px;
}
.login_textfield input {
  flex: 1;
  width: 0;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  color:black;
  
}
</style>
