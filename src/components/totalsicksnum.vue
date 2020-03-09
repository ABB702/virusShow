<template>
  <div class="totalSicksNumApp">
    <article class="sTitle">截止{{totalsicks.time}},武汉病例</article>
    <div class="sWrap">
      <section><article class="tTitle">确诊</article><article class="tData" style="color:#c0392b;">{{totalsicks.diagnose}}</article></section>
      <section><article class="tTitle">疑似</article><article class="tData" style="color:#f1c40f;">{{totalsicks.suspected}}</article></section>
      <section><article class="tTitle">治愈</article><article class="tData" style="color:#27ae60;">{{totalsicks.cured}}</article></section>
      <section><article class="tTitle">死亡</article><article class="tData" style="color:#000;">{{totalsicks.death}}</article></section>
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
.totalSicksNumApp article {
  font-size: 1em;
  align-items:center;
}
.totalSicksNumApp .sTitle {
  box-sizing:border-box;
  margin: 10px;
  width: 100%;
  height: 20%;
  padding: 2px;
  text-align: center;
  vertical-align: center;
  font-size: 15px;
  font-weight: 600;
  color: #dff9fb;
}
.totalSicksNumApp .sWrap {
  display: flex;
  box-sizing:border-box;
  margin: 0px;
  width: 100%;
  height: 70%;
  padding: 0px;
  section {
    height: 100%;
    margin: 0 1%;
    padding-top: 2%;
    box-sizing:border-box;
    flex: 1 1 auto;
    background-color:rgba(1, 163, 164,0.4);
    text-align: center;
    position: relative;
    .tTitle {
      font-size:20px;
      font-weight: 700;
      color: #fff;
    }
    .tData {
      width:100%;
      font-size:15px;
      font-weight: 700;
      text-align: center;
      padding: 5px 0px;
      position: absolute;
      bottom: 2px;
    }
  }
}
</style>
