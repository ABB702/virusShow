<template>
  <div id="chinaMap">
    <div class="zouWrapper">
      <el-carousel class="zouMaDeng">
        <el-carousel-item v-for="item in imgList" :key="item.index">
          <img v-bind:src="item.url">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      imgList: [
        {
          index: 0,
          url: require('../assets/1.jpg')
        },
        {
          index: 1,
          url: require('../assets/2.jpg')
        },
        {
          index: 2,
          url: require('../assets/3.jpg')
        },
        {
          index: 3,
          url: require('../assets/4.jpg')
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
#chinaMap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  background-image: url('../assets/chinamap.png');
  background-size: cover;
  background-repeat:no-repeat;
  .zouWrapper {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 10px;
    .zouMaDeng {
      box-sizing: content-box;
      padding: 0px;
      margin: 0px;
      width: 100%;
      height: auto;
    }
  }
}
</style>
