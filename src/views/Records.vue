<template>
  <div class="records">
    <Header title="出入记录" btn_icon="plus" />
    
  </div>
</template>

<script>
import Header from "../components/privilegeManager/Header";
export default {
  components: { Header },
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      record_list: [
        //assreq
        {
          accsee: "一号门",
          hubuuid: "ACCDCBAEFFAAV",
          info: "北京市通州区xx镇xxx街道xxx号",
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
          time: "1591548122366"
        }
      ]
    };
  },
  methods: {
    record_receive(str) {
      record_receive.push(json.parse(str).Auditexp.accexp.accreq); //把accreq追加到json数组中显示
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
.records span {
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
