<template>
  <div class="loginContainer">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="0px"
        class="loginBox"
      >
        <h1>LOGIN</h1>
        <el-form-item label="" prop="name">
          <el-input prefix-icon="el-icon-user-solid" placeholder="Username" v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="" prop="pass">
          <el-input prefix-icon="el-icon-s-goods" placeholder="password" type="password" v-model="ruleForm.pass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        pass: ''
      },
      rules: { // 自动校验
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 18, message: '长度在 2 到 18 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 1, max: 18, message: '长度在 1 到 18 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          this.$http.get('/users').then(res => {
            console.log(res.data)
            const getPwd = res.data.filter(item => item.name === ruleForm.name).id // 暂时写ID，实际上是密码
            console.log(getPwd)
            console.log(ruleForm.name)
            if (getPwd === ruleForm.pass) console.log('跳转')
            else {
              prompt('error')
              return false
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.loginContainer {
  background: url(../assets/bg.jpg);
  height: 100%;
}
.loginBox {
  width: 300px;
  padding: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background: rgba(44, 62, 80,0.5);
  text-align: center;
}
.loginBox h1 {
  color: white;
  text-transform: uppercase;
  font-weight: 500;
}

</style>
