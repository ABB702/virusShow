<template>
  <div id="homeApp">
    <section class="nav"><navi></navi></section>
    <div id="homeWrapper">
      <!--left side-->
      <aside class="homeLeft">
        <div><totalsicksnum></totalsicksnum></div>
        <div><floads></floads></div>
      </aside>
      <!--right side-->
      <section class="homeRight">
        <section>
          <div><chinamap></chinamap></div>
          <div><totalsickslist></totalsickslist></div>
        </section>
        <section>
          <div><countries></countries></div>
          <div><comments></comments></div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import navi from '../components/navi'
// import totalsicksnum from '@/components/totalsicksnum'
// import floads from '@/components/floads'
// import chinamap from '@/components/chinamap'
// import totalsickslist from '@/components/totalsickslist'
// import countries from '@/components/countries'
// import comments from '@/components/comments'
export default {
  data () {
    return {
      msg: 'hello'
    }
  },
  components: {
    navi
    // totalsicksnum,
    // floads,
    // chinamap,
    // totalsickslist,
    // countries,
    // comments
  }
}
</script>

<style lang="less" scoped>
.nav {
  width: 100%;
  height: 20px;
  background-color: blueviolet;
}
</style>
