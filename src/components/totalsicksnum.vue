<template>
  <div class="totalSicksNumApp">
    <article class="sTitle">截止{{totalsicks.time}},病例统计</article>
    <div class="sWrap">
      <section><article>确诊</article><article class="tData">{{totalsicks.diagnose}}</article></section>
      <section><article>疑似</article><article class="tData">{{totalsicks.suspected}}</article></section>
      <section><article>治愈</article><article class="tData">{{totalsicks.cured}}</article></section>
      <section><article>死亡</article><article class="tData">{{totalsicks.death}}</article></section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      totalsicks: {
        death: '?',
        suspected: '?',
        cured: '?',
        diagnose: '?',
        time: '?'
      }
    }
  },
  mounted: function () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http.get('/totalsicksnum').then(ret => {
        this.totalsicks = ret.data[ret.data.length - 1]
      })
    }
  }
}
</script>
<style lang="less" scoped>
.totalSicksNumApp {
  box-sizing:border-box;
  margin: 0px;
  width: 100%;
  height: 100%;
  padding:4%;
  background-image: url('../assets/totalsicksnum.png');
  background-size: cover;
  background-repeat:no-repeat;
}
.totalSicksNumApp .sWrap {
  display: flex;
  box-sizing:border-box;
  margin: 0px;
  width: 100%;
  height: 90%;
  padding: 0px;
}
.totalSicksNumApp .sTitle {
  box-sizing:border-box;
  margin: 0px;
  width: 100%;
  height: 10%;
  padding: 0px;
  text-align: center;
  font-size: bold;
}
.tData {
  padding: 6px;
  position: absolute;
  bottom: 0px;
}
.totalSicksNumApp .sWrap section {
  height: 100%;
  margin: 2%;
  padding-top: 10%;
  box-sizing:border-box;
  flex: 1 1 auto;
  background-color:rgba(1, 163, 164,0.4);
  text-align: center;
  overflow: hidden;
  position: relative;
}
.totalSicksNumApp article {
  font-size: 1em;
  align-items:center;
}
</style>
