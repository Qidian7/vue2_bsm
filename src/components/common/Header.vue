<template>
  <div class="header">
    <el-header>
      <div class="tittle">314-2管理系统</div>
      <div>{{ name }}</div>
    </el-header>
  </div>
</template>

<script>
import { getToken } from "@/utils/setToken";
export default {
  name: "Header",
  data() {
    return {
      name: "",
    };
  },
  created() {
    this.name = getToken("username");
  },
};
</script>

<style lang="scss" scoped>
.header {
  .el-header {
    background: #2578b5;
    color: #fff;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    .tittle {
      width: 200px;
      font-size: 24px;
    }
  }
}
</style>
