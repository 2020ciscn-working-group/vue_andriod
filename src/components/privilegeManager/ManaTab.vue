<template> 
<el-form :inline="true"  class="demo-form-inline">
  <el-form-item v-bind:label="lock">
   
    <el-input v-model="name" witdh="50px" placeholder="授予者"></el-input>
  </el-form-item>
  
  <el-form-item>
    <el-button type="primary" @click="onSubmit" class="">提交</el-button>
    <mt-cell  class="item" v-for="(item,index) in list" :key=index  title="授权给：">
    <span>{{item}}</span>
    <mt-button  icon="mintui mintui-icon_roundclose_fill" @func="getContent(index)" ></mt-button>
    </mt-cell>

  </el-form-item>
  
</el-form>
</template>

<script>
  export default {
    data() {
      return {
         lock:'一号楼',
         name:'',
         list:[]
         
      }
    },
    methods: {
      onSubmit() {
        if(this.name!='')
        this.list.push(this.name)
      },
      getContent(index) {
      this.comName.splice(index, 1);
    }
    }
  }
</script>
<style scoped>
.item{
  width:100%;
  margin-top: 10px;
}
</style>