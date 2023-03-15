<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <!-- width+180px 改成 align="center" 居中显示去除滚动条 -->
      <el-table-column prop="id" label="用户id" align="center">
      </el-table-column>
      <el-table-column prop="userId" label="班级" align="center">
      </el-table-column>
      <el-table-column prop="title" label="作业名称" align="center">
      </el-table-column>
      <el-table-column prop="completed_text" label="完成情况" align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { works } from "@/api/api";
export default {
  name: "WorkList",
  data() {
    return {
      tableData: [],
      // total: 0,
    };
  },
  created() {
    this.getWorkList();
  },
  methods: {
    getWorkList(params) {
      works(params).then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.tableData = res.data.data;
          // this.total = res.data.total;
          this.$message({ message: res.data.message, type: "success" });
          this.tableData.forEach((item) => {
            item.completed
              ? (item.completed_text = "已完成")
              : (item.completed_text = "未完成");
          });
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
