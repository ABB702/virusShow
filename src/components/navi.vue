<template>
  <div id="navApp">
    <div class="navWrapper">
      <li>
        <img src="#" alt="图标">
        <span>&emsp;User</span>
      </li>
      <li>
        <el-button type="info" size="mini" icon="el-icon-remove" round @click="logout">登出</el-button>
      </li>
    </div>
  </div>
</template>
<script>
export default {
  name: 'navi',
  data () {
    return {
      msg: 'hello'
    }
  },
  methods: {
    logout: function () {
      window.sessionStorage.clear()
      this.$router.push('/login')
      this.$message.success('成功退出')
    }
  }
}
</script>
<style lang="less" scoped>
#navApp {
  width: 100%;
  height: 30px;
  background-color: rgba(206, 214, 224,1);
  margin: 0px;
  padding: 0px;
  box-shadow: 2px 2px 2px #888888
}
.navWrapper {
  text-decoration: none;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 0px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.navWrapper li {
  list-style: none;
  display: inline-block;
}

.navWrapper li span {
  text-decoration: none;
  position: relative;
  color: #313131;
  font-size: 16px;
  font-weight: 600;
  font-family: Helvetica, Tahoma, Arial, "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
  overflow: hidden;

}
</style>
