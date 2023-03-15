<template>
  <div class="workList">
    <el-table :data="tableData" v-loading="loading" border style="width: 100%">
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
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[10, 20, 30, 40, 50]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getTableData } from "@/utils/table";
export default {
  name: "WorkList",
  data() {
    return {
      tableData: [],
      total: 0,
      page: 1,
      size: 10,
      loading: true, // 页面一直转圈在加载
    };
  },
  methods: {
    handleSizeChange(val) {
      this.size = val;
      this.page = 1;
      // 改完之后需重新请求
      getTableData(
        this,
        "/works",
        { page: this.page, size: this.size },
        this.tableData
      );
    },
    handleCurrentChange(val) {
      this.page = val;
      getTableData(
        this,
        "/works",
        { page: this.page, size: this.size },
        this.tableData
      );
    },
  },
  // 后段分页，传入page，size
  created() {
    getTableData(
      this,
      "/works",
      { page: this.page, size: this.size },
      this.tableData
    );
  },
};
</script>

<style lang="scss" scoped>
.workList {
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}
</style>
