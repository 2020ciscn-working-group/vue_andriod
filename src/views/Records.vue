<template>
  <div class="records">
    <Header title="出入记录"/>
    <div class="records_list">
    <van-cell v-for="(record,index) in record_list" :key="index"  
    :title="record_list[index].info+' '+record_list[index].accsee" 
     is-link  icon="location-o"
     :label="'时间:'+record_list[index].time">
     <template #right-icon>
    <van-icon @click="close(index)" name="close" style="line-height: inherit;" />
   </template>
    </van-cell>
  </div>
  </div>
</template>

<script>
import Header from "../components/privilegeManager/Header";

export default {
  components: { Header },
  data() {
    return {
      record_list: [
        //assreq
        {
          accsee: "3号门",
          hubuuid: "ACCDCBAEFFAAV",
          info: "北京市通州区梨园镇玉桥街道3号楼",
          infolen: 18,
          signdata: [
            -100,
            121,
            85,
            57,
            -115,
            -93,
            -36,
            83,
            39,
            104,
            70,
            54,
            -95,
            45,
            -76,
            116,
            -86,
            82,
            115,
            92,
            118,
            16,
            37,
            -33,
            76,
            38,
            -45,
            0,
            -94,
            -35,
            -116,
            32,
            18,
            54,
            76,
            -111,
            99,
            -55,
            17,
            -77,
            87,
            -77,
            -12,
            -12,
            17,
            -119,
            -82,
            -21,
            -48,
            -108,
            124,
            -48,
            30,
            -63,
            -109,
            -7,
            60,
            74,
            1,
            -60,
            22,
            -86,
            -61,
            -36
          ],
          signdatalen: 64,
          time: "2020-1-5  20:00"
        },
               {
          accsee: "1号门",
          hubuuid: "ACCDCBAEFFAAV",
          info: "北京市通州区永顺镇中仓街道5号楼",
          infolen: 18,
          signdata: [
            -100,
            121,
            85,
            57,
            -115,
            -93,
            -36,
            83,
            39,
            104,
            70,
            54,
            -95,
            45,
            -76,
            116,
            -86,
            82,
            115,
            92,
            118,
            16,
            37,
            -33,
            76,
            38,
            -45,
            0,
            -94,
            -35,
            -116,
            32,
            18,
            54,
            76,
            -111,
            99,
            -55,
            17,
            -77,
            87,
            -77,
            -12,
            -12,
            17,
            -119,
            -82,
            -21,
            -48,
            -108,
            124,
            -48,
            30,
            -63,
            -109,
            -7,
            60,
            74,
            1,
            -60,
            22,
            -86,
            -61,
            -36
          ],
          signdatalen: 64,
          time: "2020-1-5  21:00"
        }
      ]
    };
  },
  methods: {
    record_receive(str) {
      console.log(str) //看看传过来的字符串
      record_list.push(JSON.parse(str).Auditexp.accexp.accreq); //把accreq追加到json数组中显示
    },
    close(index){
      // console.log("关闭")   //后面可以删除记录，需要配合,暂时不考虑
      this.record_list.pop(index)
    }
  },
  mounted() {
    window.record_receive = this.record_receive; //被调用生成消息记录,把记录里的"accreq"单摘出来
  }
};
</script>

<style scoped>
.records {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.records_list {
  width: 100%;
  height: calc(100% - 100px);
  margin-top: 50px;
  box-sizing: border-box;
  padding: 16px 0;
  background-color: #f1f1f1;
}

/* .btn_wrapper {
  box-sizing: border-box;
  padding: 20px;
} */
</style>
