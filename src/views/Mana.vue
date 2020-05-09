<template>
  <!-- 三槽标题 -->
  <div class="Mana">
    <Header title="授权管理" btn_icon="plus" />
    <van-divider class="otherLock" content-position="left"  :style="{ color: 'black', borderColor: 'green' }">被授权</van-divider>
  </div>
</template>

<script>
import Header from "../components/privilegeManager/Header";
export default {
  components: { Header },
  data() {
    return {};
  },

  methods: {
    showMana() {}
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
