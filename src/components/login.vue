<template>
  <div class="loginContainer">
      <el-form :model="formData" :rules="rules" ref="formRef" class="loginBox">
        <h1>--LOGIN--</h1>
        <el-form-item prop="username">
          <el-input v-model= "formData.username" prefix-icon="el-icon-user-solid" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item prop="password"><!--注意prop需要与检测值同名-->
          <el-input v-model= "formData.password" prefix-icon="el-icon-s-goods" placeholder="password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">登录</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formData: {
        username: '贱哥哥jj',
        password: '3'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 3, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },

  methods: {
    submitForm () {
      this.$refs.formRef.validate(valid => { // 表单预验证,存在读取undefined的情况
        if (valid) {
          this.$http.get('/users').then(res => {
            const getPwd = res.data.filter(item => item.name === this.formData.username) // return [{}]
            console.log(res) // tempconsole
            if (getPwd[0].id == this.formData.password){ //eslint-disable-line
              console.log('跳转')
              window.sessionStorage.setItem('token', getPwd[0].id) // 假token
              this.$router.push('/home')
            }//eslint-disable-line
            else {
              this.$message.error('用户名或密码错误')
              return false
            }
          })
        } else {
          this.$message.error('信息填写不完整!!')
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
