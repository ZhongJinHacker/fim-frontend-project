<template>
  <div class="page-container"> 
    <div class="login-container">
      <h3 class="title">FIM</h3>
      <el-form :model="loginForm" status-icon :rules="rules2" ref="loginForm" class="item-container">
        <el-form-item label="账号" prop="username">
          <el-input class="input-view" type="text" v-model="loginForm.username"  auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input class="input-view" type="password" v-model="loginForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item class="button-container">
          <el-button type="primary" :loading="loading" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    };
    var validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else if (value.length < 3) {
        callback(new Error('用户名不得小于三位'))
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: '',
        pass: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        username: [
          { validator: validateUserName, trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  methods: {
    submitForm(formName) {
      const that = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          that.loading = true
          that.$store.dispatch('Login', that.loginForm)
          .then(
            () => {
              that.loading = false
              that.$router.push({ path: '/' })
            }
          )
          .catch(() => {
            that.loading = false
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}

</script>

<style rel="stylesheet/scss" lang="scss">
  $bg: #2d3a4b;
  $light_gray:#eee;
  $dark_gray:#889aa4;

  .page-container {
    display: flex;
    display:-webkit-flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $light_gray
  }

  .login-container {
    position: fixed;
    height: 300px;
    width: 400px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px #000;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $dark_gray;
    margin: 40px auto 10px auto;
    text-align: center;
    font-weight: bold;
  }
  .input-view {
    width: 300px;
  }
  .item-container {
    height: 100%;
    width: 100%;
    margin: 10px 10px;
  }
  .button-container {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
</style>
