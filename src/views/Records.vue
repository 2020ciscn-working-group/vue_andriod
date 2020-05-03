<template>
  <div>
      <Header title="出入记录"  btn_icon="plus"/>
  </div>
</template>

<script>
import Header from "../components/privilegeManager/Header"
export default {
  components:{Header},
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      list: [
        {
          date: "2019-10-1",
          name: "lijiarui",
          place: "2号楼"
        },
        {
          date: "2019-10-1",
          name: "Sst",
          place: "2号楼"
        }
      ]
    };
  }
};
</script>
<style scoped>

</style>
