<template>
   <!-- 三槽标题 -->
    <div class="Mana">
        <Header title= "授权管理"  btn_icon="plus"/>
        <div class="otherLock">
            <label>被授权门锁</label>
            <hr/>
        </div>
        
    </div>
</template>

<script>
import Header from "../components/privilegeManager/Header"
export default {
  components:{Header},
  data(){
      return {
         
      }
  },
  
  methods:{
      showMana(){

      }
  },
  mounted(){
    window.showMana=this.showMana
  }
}
</script>

<style scoped>
.Mana{
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color:#F5F5F5;
}
.otherLock{
 
  width: 100%;
  /* height: calc(100% - 50px); */
  margin-top: 50px;
  overflow: auto;
}
.otherLock label{
  font-size:20px;
  margin:3px;
}

</style>
