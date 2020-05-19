<template>
     <div class="HubCell">
     <van-panel  > 
        <template #header>
              <van-cell :title="hub.desc"  label="描述信息" is-link  arrow-direction="down" @click="onshowdetail"/>
        </template>
        <template #default>
          <div v-show="showdetail" class="hubdesc">
            <van-cell :title="'hub_id'" :value="hub.id" />
            <van-cell :title="'hub_info'" :value="hub.info" />
          <!-- </div>
          <div class="lockdesc"> -->
           
            <van-cell v-for="(lock,index1) in hub.locs" :key="index1"  :value="'描述:'+hub.locs[index1].desc" >
              <!-- 使用 title 插槽来自定义标题 -->
              <template #title>
                <span class="custom-title" :style="{'margin-right':'20px'}">{{hub.locs[index1].Lock_id}}</span>
                <van-tag round type="primary">{{hub.locs[index1].acctype}}</van-tag>
              </template>
            </van-cell>
          </div>
        </template>
        <template #footer :style="{'height':'15px'}" >
          <!-- <van-button size="middle" :style="{'margin-right':'200px'}">隐藏信息</van-button> -->
          
          <label :style="{color: 'black', 'font-size': '15px','margin-left':'82%'}">选择</label><input type="radio" v-model="radio" @click="$emit('func',hub)" :value="hub" >
        </template>
      </van-panel>
     </div>
</template>

<script>
export default {
   props:{
       hub:{
           type:Object
       },
       radio:{
           type:Object
       }
   },
   data(){
        return{
            showdetail: true
        }
    },
    methods:{
      onshowdetail(){
        this.showdetail=!this.showdetail
      }
    }
}
</script>

<style  scoped>
.HubCell{
  margin-bottom: 20px;
}

</style>