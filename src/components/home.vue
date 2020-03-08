<template>
  <div id="homeApp">
    <section class="nav"><navi></navi></section>
    <div id="homeWrapper">
      <!--left side-->
      <aside class="homeLeft">
        <div class="totalsicksnum"><totalsicksnum></totalsicksnum></div>
        <div class="floads"><floads></floads></div>
      </aside>
      <!--right side-->
      <section class="homeRight">
        <section class="homeRL">
          <div class="chinaMap"><chinamap></chinamap></div>
          <div class="totalsickslist"><totalsickslist></totalsickslist></div>
        </section>
        <section class="homeRR">
          <div class="provinces"><provinces></provinces></div>
          <div class="comments"><comments></comments></div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import navi from '../components/navi'
import totalsicksnum from '@/components/totalsicksnum'
import floads from '@/components/floads'
import chinamap from '@/components/chinamap'
// import totalsickslist from '@/components/totalsickslist'
import provinces from '@/components/provinces'
import comments from '@/components/comments'
export default {
  name: 'home',
  data () {
    return {
      msg: 'hello'
    }
  },
  components: {
    navi,
    totalsicksnum,
    floads,
    chinamap,
    // totalsickslist,
    provinces,
    comments
  }
}
</script>

<style lang="less" scoped>
#homeApp {
  width: 100%;
  height: 100%;
}
.nav {
  width: 100%;
  height: 30px;
  background-color: blueviolet;
}
#homeWrapper {
  box-sizing:border-box;
  width: 100%;
  height: 100%;
  padding:4%;
  background-image: url('../assets/background.jpg');
  background-size: cover;
  background-repeat:no-repeat;
}
#homeWrapper aside {
  box-sizing:border-box;
  width: 20%;
  height: 100%;
  padding: 0px;
  float: left;
}
#homeWrapper aside .totalsicksnum {
  box-sizing:border-box;
  width: 100%;
  height: 30%;
  background-color: green;
}
#homeWrapper aside .floads {
  box-sizing:border-box;
  width: 100%;
  height: 70%;
  background-color: green;
}
.homeRight {
  background-color: black;
  box-sizing:border-box;
  width: 79%;
  height: 100%;
  margin-left:1%;
  padding: 0px;
  float: left;
  .homeRL {
    box-sizing:border-box;
    background-color: blue;
    width:75%;
    margin-right: 1%;
    height:100%;
    float:left;
    .chinaMap {
      box-sizing:border-box;
      width: 100%;
      height: 60%;
      background-color: white;
    }
    .totalsickslist {
      box-sizing:border-box;
      width: 100%;
      height: 40%;
    }
  }
  .homeRR {
    box-sizing:border-box;
    background-color: yellow;
    width:24%;
    height:100%;
    overflow: hidden;
    .provinces {
      box-sizing:border-box;
      width:100%;
      height: 50%;
      background-color: white;
    }
    .comments {
      box-sizing:border-box;
      width:100%;
      height: 50%;
    }
  }
}
</style>
