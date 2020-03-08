<template>
  <div id="provincesApp">
    <div class="switchBox">
      <el-switch
        style="display: block"
        v-model="valueOn"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="全国"
        inactive-text="湖北省">
      </el-switch>
    </div>
    <div class="provincesBox tableBox" v-show="valueOn">
      <el-table :data="provinces" style="width: 100%" height="210">
        <el-table-column fixed prop="provinceName" label="省份" width="80" sortable></el-table-column>
        <el-table-column prop="confirmedCount" label="确诊" width="80" sortable></el-table-column>
        <el-table-column prop="suspectedCount" label="疑似" width="80" sortable></el-table-column>
      </el-table>
    </div>
    <div class="citiesBox tableBox" v-show="!valueOn">
      <el-table :data="provinces[0].cities" style="width: 100%" height="210">
        <el-table-column fixed prop="cityName" label="城市" width="80" sortable></el-table-column>
        <el-table-column prop="confirmedCount" label="确诊" width="80" sortable></el-table-column>
        <el-table-column prop="suspectedCount" label="疑似" width="80" sortable></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      provinces: [],
      valueOn: true
    }
  },
  mounted: function () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http.get('/provinces').then(ret => {
        this.provinces = ret.data
      })
    }
  }
}
</script>
<style lang="less" scoped>
#provincesApp {
  box-sizing:border-box;
  margin: 0px;
  width: 100%;
  height: 100%;
  padding:4%;
  background-image: url('../assets/provinces.png');
  background-size: cover;
  background-repeat:no-repeat;
  .tableBox {
    margin-top:10px;
  }
}
</style>
