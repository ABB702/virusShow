<template>
  <div id="navApp">
    <div class="navWrapper">
      <article>
        <embed src="../assets/sysytem.svg" alt="图标">
        <p>{{usernameNav}} 登录中</p>
      </article>
      <article>
        <button>logout</button>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hello'
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
#navApp {
  width: 100%;
  height: 20px;
  background-color: yellow;
}
</style>
