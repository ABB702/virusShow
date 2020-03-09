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
      <el-table :data="provinces" style="width: 100%;color:rgba(255,255,255,.8);background-color:#051655" height="210">
        <el-table-column fixed prop="provinceName" label="省份" width="80" sortable></el-table-column>
        <el-table-column prop="confirmedCount" label="确诊" width="80" sortable></el-table-column>
        <el-table-column prop="suspectedCount" label="疑似" width="80" sortable></el-table-column>
      </el-table>
    </div>
    <div class="citiesBox tableBox" v-show="!valueOn">
      <el-table :data="provinces[0].cities" style="width: 100%;color:rgba(255,255,255,.8);background-color:#051655" height="210">
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
<style lang="less">
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
    background: rgba(47, 121, 121, 0);
  }
}
.el-switch__label {
  font-size: 20px;
  font-weight: 700;
}
.el-table tr,
.el-table th,
.el-table td{
  background-color: rgba(204, 204, 204, 0);
  color: #c7ecee;
}
</style>
