<template>
  <div id="floadsApp">
    <section class="titleT">专家辟谣</section>
    <section class="contentT">
      <!--滚动框-->
      <vue-seamless-scroll :data="floads" :class-option="optionHover" class="seamless-warp">
        <ul class="item">
            <li v-for="item in floads" :key="item._id">
                <span v-text="item._id+'.'"></span>
                <span class="title" v-text="item.title"></span><br>
                <span class="mainSummary" v-text="item.mainSummary"></span><br><br>
            </li>
        </ul>
    </vue-seamless-scroll>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      floads: []
    }
  },
  mounted: function () {
    this.initData()
  },
  methods: {
    initData () {
      this.$http.get('/floads').then(ret => {
        this.floads = ret.data
        console.log(this.floads)
      })
    }
  }
}
</script>
<style lang="less" scoped>
#floadsApp {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 4%;
  margin: 0px;
  background-image: url('../assets/floads.png');
  background-size: cover;
  background-repeat:no-repeat;
}
#floadsApp section {
  width: 100%;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
.titleT {
  height: 10%;
  text-align: center;
}
.contentT {
  height: 90%;
}
.seamless-warp {
  height: 288px;
  overflow: hidden;
  width:100%;
  ul {
    margin:0;
    padding:10px;
    list-style: none;
    li {
      font-size: 10px;
    }
  }
}

</style>
