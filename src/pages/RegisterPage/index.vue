<template>
  <div class="page-container">
    <div class="register-container">
      <h3 class="title">注册</h3>
      <el-form status-icon  class="item-container">
        <el-form-item label="账号">
          <el-input class="input-view" type="text" v-model="userName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input class="input-view" type="password" v-model="password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input class="input-view" type="password" v-model="passwordVerify" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item class="button-container">
          <el-button type="primary" :loading="loading" @click="clickRegisterButton">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'

const USERNAME_MIN_LEN = 6
const PASSWORD_MIN_LEN = 6

export default {

  data () {
    return {
      userName: '',
      password: '',
      passwordVerify: '',
      loading: false
    }
  },
  methods: {
    clickRegisterButton () {
      if (this.userName.length < USERNAME_MIN_LEN) {
        Message.error('账号名不得小于' + USERNAME_MIN_LEN + '位数')
        return
      }
      if (this.password.length < PASSWORD_MIN_LEN) {
        Message.error('密码不得小于' + USERNAME_MIN_LEN + '位数')
        return
      }
      if (this.password !== this.passwordVerify) {
        Message.error('密码与确认密码不一致')
        return
      }

      const that = this
      var registerModel = { username: this.userName, password: this.password }
      that.$store.dispatch('register', registerModel)
        .then(
          () => {
            that.loading = false
            Message.success('注册成功')
            that.$router.push({ path: '/login' })
          }
        )
        .catch(
          (err) => {
            that.loading = false
            console.log(err)
          }
        )
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import '@/styles/common.scss';

  .register-container {
    position: fixed;
    height: 500px;
    width: 600px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 10px #000;
  }
</style>
