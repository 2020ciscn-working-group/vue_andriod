<template>
  <!-- 三槽标题 -->
  <div class="Mana">
    <Header title="授权管理" btn_icon="plus" />
    <van-divider class="otherLock" content-position="left"  :style="{ color: 'black', borderColor: 'green' }">被授权</van-divider>
    <van-cell v-for="(record,index) in manaList" :key="index"  
    :title="manaList[index].accexp.accreq.info+manaList[index].accexp.accreq.accsee" 
     is-link  icon="location-o">
     <template #right-icon>
    <van-icon @click="close" name="close" style="line-height: inherit;" />
   </template>
    </van-cell>
  </div>
</template>

<script>
import Header from "../components/privilegeManager/Header";
export default {
  components: { Header },
  data() {
    return {
      manaList:[{
	"accexp":
		{
			"PIK":[-91,-2,5,-63,-73,100,49,55,64,-37,102,61,-45,72,-17,-62,72,-56,51,114,4,21,88,-59,-111,-41,11,-63,116,115,-64,-43,-97,-26,-59,52,76,-14,79,-57,120,126,-105,32,27,-60,9,-33,120,-50,97,-124,-33,17,75,63,-26,-56,117,121,-98,-56,62,-51],
			"accendtime":["2","0","2","0","-","1","2","-","1","2"," ",":","1","0",":","1","0",":","1","0"],
			"access":["一","号","门"],
			"accreq":
				{
					"accsee":"一号门","info":["北","京","市","通","州","区","x","x","镇","x","x","x","街","道","x","x","x","号"],
          "infolen":18,
          "signdate":[79,55,-14,-125,55,-35,14,-126,28,-119,-122,7,15,105,-83,-56,-51,19,67,35,91,-65,69,16,-127,18,117,98,-99,53,-110,20,79,63,98,-48,5,-79,124,-56,49,-3,-11,-30,-119,-113,41,70,-52,71,-83,60,-17,-43,-25,37,45,29,69,-27,-115,11,35,-86],
					"signdatelen":64,
					"time":"2020-03-26 :05:16:47"
				},
			"info":["北","京","市","通","州","区","x","x","x","镇","x","x","0","1","街","道","x","x","号"],
			"signkey":[-91,-2,5,-63,-73,100,49,55,64,-37,102,61,-45,72,-17,-62,72,-56,51,114,4,21,88,-59,-111,-41,11,-63,116,115,-64,-43,-97,-26,-59,52,76,-14,79,-57,120,126,-105,32,27,-60,9,-33,120,-50,97,-124,-33,17,75,63,-26,-56,117,121,-98,-56,62,-51]
		},
	"signdate":[79,55,-14,-125,55,-35,14,-126,28,-119,-122,7,15,105,-83,-56,-51,19,67,35,91,-65,69,16,-127,18,117,98,-99,53,-110,20,79,63,98,-48,5,-79,124,-56,49,-3,-11,-30,-119,-113,41,70,-52,71,-83,60,-17,-43,-25,37,45,29,69,-27,-115,11,35,-86],
	"singdatelen":64,
	"uuid":["4","F","3","7","F","2","8","3","3","7","D","D","0","E","8","2"]
}]
    };
  },

  methods: {
    showMana(str) {
      manaList.push(JSON.parse(str).accexp)
    },
    close(){
      console.log("已删除该权限")
    }
  },
  mounted() {
    window.showMana = this.showMana;
  }
};
</script>

<style scoped>
.Mana {
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
}
.otherLock {
  width: 100%;
  /* height: calc(100% - 50px); */
  margin-top: 60px;
  font-size:20px;
  font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif
}

</style>
