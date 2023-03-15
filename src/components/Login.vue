<!-- 登录页面注重的是表单的提交 -->
<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>314-2管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <!-- prop用来表单验证 -->
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// 把正则判定拉出去放到utils里面封装
import { nameRule, pwdRule } from "../utils/validate.js";
import { setToken } from "../utils/setToken.js";
import { login } from "@/api/api";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          //新方法 自定义校验规则
          { required: true, validator: nameRule, trigger: "blur" },
          //旧方法
          //   { required: true, message: "请输入用户名", trigger: "blur" },
          //   { min: 6, max: 10, message: "长度在6-10位字符之间", trigger: "blur" },
        ],
        password: [
          //新方法 自定义校验规则
          { required: true, validator: pwdRule, trigger: "blur" },
          //旧方法
          //   { required: true, message: "请输入密码", trigger: "blur" },
          //   { min: 6, max: 12, message: "长度在6-10位字符之间", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form);
          /*
           把这个登录封装成api进行调用
          this.service.post("/login", this.form).then((res) => {
            if (res.status === 200) {
              setToken("username", res.data.username);
              setToken("token", res.data.token);
              this.$message({ message: res.data.message, type: "success" });
              this.$router.push("/home");
            }
            // console.log(res);
          });
          */
          login(this.form).then((res) => {
            if (res.status === 200) {
              setToken("username", res.data.username);
              setToken("token", res.data.token);
              this.$message({ message: res.data.message, type: "success" });
              this.$router.push("/home");
            }
          });
        } else {
          console.error(this.form);
        }
      });
    },
  },
};
</script>

<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  //   background-color: #409eff;
  background: url(../assets/pic/bg1.jpeg) center no-repeat;
  background-size: 100%;
  .box-card {
    width: 450px;
    margin: 200px auto;
    // color: #fff;
    opacity: 0.78;
    .clearfix {
      font-size: 36px;
      text-align: center;
    }
    .el-button {
      width: 50%;
      transform: translateX(50px);
    }
  }
}
</style>
