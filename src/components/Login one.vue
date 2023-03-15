<!-- 登录页面注重的是表单的提交 -->
<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>后台管理系统</span>
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
export default {
  name: "Login",
  data() {
    const validateName = (rule, value, callback) => {
      // 4-8位昵称
      let reg = /^[a-zA-Z0-9]{4,8}$/;
      if (value === "" || value === undefined || value === null) {
        callback(new Error("请输入用户名"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入4-8位昵称"));
      } else {
        callback();
      }
    };
    const validatePwd = (rule, value, callback) => {
      // 6-12位密码
      let pwd =
        /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!_.])\S*$/;
      if (value === "" || value === undefined || value === null) {
        callback(new Error("请输入密码"));
      } else if (!pwd.test(value)) {
        callback(
          new Error("请输入6-12位密码,需要包含大小写字母和数字及特殊符号")
        );
      } else {
        callback();
      }
    };
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          //新方法 自定义校验规则
          { required: true, validator: validateName, trigger: "blur" },
          //旧方法
          //   { required: true, message: "请输入用户名", trigger: "blur" },
          //   { min: 6, max: 10, message: "长度在6-10位字符之间", trigger: "blur" },
        ],
        password: [
          //新方法 自定义校验规则
          { required: true, validator: validatePwd, trigger: "blur" },
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
          this.axios
            .post("http://www.boredapi.com/api/activity/", this.form)
            .then((res) => {
              console.log(res);
              //   console.log("@@@@@", this);
              if (res.status === 200) {
                // console.log("%%%%%", this);
                localStorage.setItem("username", res.data.username);
                this.$message({ message: res.data.message, type: "success" });
                this.$router.push("/home");
              }
            })
            .catch((err) => {
              console.error(err);
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
  background-color: #409eff;
  .box-card {
    width: 450px;
    margin: 200px auto;
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
