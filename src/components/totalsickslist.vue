<template>
  <div class="totalSicksListApp">
    <div class="listBox" ref="echarts"></div>
  </div>
</template>

<script>
export default {
  name: 'sicklist',
  data () {
    return {
      totalsicks: [],
      times: [],
      suspectedA: [],
      diagnoseA: [],
      curedA: [],
      deathA: []
    }
  },
  mounted: function () {
    this.getData().then(ret => {
      this.initData(ret)
      this.drawChart()
    })
    // const vm = this
    // vm.$nextTick(() => {
    // })
  },
  created: () => {},
  methods: {
    getData: async function () {
      const ret = await this.$http.get('/totalsicksnum')
      return ret
    },
    initData (ret) {
      this.totalsicks = ret.data.slice(-10) // 只要最新10天的数据

      const tempArr = this.totalsicks.map(item => item.time.split('-'))
      this.times = tempArr.map(item => item[1] + '-' + item[2]) // 时间
      this.deathA = this.totalsicks.map(item => Number(item.death))
      this.suspectedA = this.totalsicks.map(item => Number(item.suspected))
      this.curedA = this.totalsicks.map(item => Number(item.cured))
      this.diagnoseA = this.totalsicks.map(item => Number(item.diagnose))
      console.log(this.diagnoseA)
    },
    drawChart () {
      console.log('aaa' + this.times)
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(this.$refs.echarts)
      // 绘制图表
      myChart.setOption({
        title: {
          text: '病例统计图',
          textStyle: {
            color: '#badc58'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['疑似病例', '确诊病例', '治愈人数', '死亡人数'],
          textStyle: {
            color: '#ffffff'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.times,
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisLabel: {
              textStyle: {
                color: '#fff'
              }
            }
          }
        ],
        series: [
          {
            name: '疑似病例',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: this.suspectedA
          },
          {
            name: '确诊病例',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: this.diagnoseA
          },
          {
            name: '治愈人数',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: this.curedA
          },
          {
            name: '死亡人数',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: this.deathA
          }
        ]
      })
    }
  }
}
</script>
<style lang="less" scoped>
.totalSicksListApp {
  box-sizing:border-box;
  margin: 0px;
  width: 100%;
  height: 100%;
  padding:2px;
  padding-top:2%;
  background-image: url('../assets/sicklist.png');
  background-size: cover;
  background-repeat:no-repeat;
  .listBox {
    width: 100%;
    height: 100%;
    margin: auto 10px;
  }
}
</style>
