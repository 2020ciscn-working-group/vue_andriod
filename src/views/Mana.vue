<template>
   <!-- 三槽标题 -->
    <div>
        <Header :title="title"  btn_icon="plus"/>
    </div>
</template>

<script>
import Header from "../components/privilegeManager/Header"
export default {
  components:{Header},
  data(){
      return {
        title:'授权管理',
      }
  },
  
  methods:{
     onBack() {
      this.$emit('func1','Mana')
    }
  }
}
</script>

<style scoped>


</style>
