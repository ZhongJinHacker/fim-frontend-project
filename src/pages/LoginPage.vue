<template>
  <div class="page-container"> 
    <div class="login-container">
      <h3 class="title">FIM</h3>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="item-container">
        <el-form-item label="账号" prop="pass">
          <el-input class="input-view" type="text" v-model="ruleForm2.pass"  auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input class="input-view" type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item class="button-container">
          <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
          <el-button @click="resetForm('ruleForm2')">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules2: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
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
