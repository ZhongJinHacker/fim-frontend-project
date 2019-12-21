<template>
  <div class="page-container"> 
    <div class="login-container">
      <h3 class="title">FIM</h3>
      <el-form status-icon  class="item-container">
        <el-form-item label="账号">
          <el-input class="input-view" type="text" v-model="userName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input class="input-view" type="password" v-model="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item class="button-container">
          <el-button type="primary" :loading="loading" @click="clickLoginButton(userName, password)" >登录</el-button>
          <el-button @click="clickRegisterButton">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      password: '',
      loading: false
    }
  },
  methods: {
    clickLoginButton(userName, password) {
      const that = this
      console.log('userName: ' + userName + '  password: ' + password)
      var loginModel = { username: userName, pass: password }
      that.$store.dispatch('Login', loginModel)
      .then(
        () => {
          that.loading = false
          that.$router.push({ path: '/' })
        }
      )
      .catch(
        (err) => {
          that.loading = false
          console.log(err)
        }
      )
    },
    clickRegisterButton() {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import '@/styles/common.scss';

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