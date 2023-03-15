<template>
  <div class="studentList">
    <!-- 查询、重置表单 -->
    <el-form
      :inline="true"
      :model="formInline"
      class="demo-form-inline"
      size="small"
    >
      <el-form-item label="姓名">
        <el-input v-model="formInline.name" placeholder="请输入需要查询的姓名">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="find">查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
    <!-- 分页公式：slice(（当前页数-1）*每页条数,当前页数*每页条数) -->
    <el-table :data="computedData" border style="width: 100%">
      <!-- width+180px 改成 align="center" 居中显示去除滚动条 -->
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="sex_text" label="性别" align="center">
      </el-table-column>
      <el-table-column prop="age" label="年龄" align="center">
      </el-table-column>
      <el-table-column prop="number" label="学号" align="center">
      </el-table-column>
      <el-table-column prop="class" label="班级" align="center">
      </el-table-column>
      <el-table-column prop="state_text" label="状态" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="联系方式" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="del(scope.row)"
          >
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { students, studentDelete } from "@/api/api";
export default {
  name: "StudentList",
  data() {
    return {
      tableData: [],
      currentPage: 1, // 当前页数
      pageSize: 10, //每页显示条数
      total: 0,
      formInline: {
        name: "",
      },
    };
  },
  computed: {
    computedData() {
      return this.tableData.slice(
        (this.currentPage - 1) * this.pageSize,
        this.currentPage * this.pageSize
      );
    },
  },
  methods: {
    find() {
      // console.log(this.formInline);
      this.getData(this.formInline);
    },
    reset() {
      // console.log(this.formInline);
      this.formInline = {};
      this.getData(this.formInline);
    },
    del(row) {
      console.log(row);
      studentDelete(row.id).then((res) => {
        if (res.data.status === 200) {
          this.$message({ message: "删除成功", type: "success" });
          // 刷新数据
          this.getData();
        }
      });
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    getData(params) {
      students(params).then((res) => {
        //console.log(res); // 所有学生数据
        if (res.status === 200) {
          this.tableData = res.data.data;
          this.total = res.data.total;
          this.tableData.forEach((item) => {
            // 这样做直接修改原数据了，尽量不要这么做
            // item.sex === 1 ? (item.sex = "男") : (item.sex = "女");
            item.sex === 1 ? (item.sex_text = "男") : (item.sex_text = "女");
            if (item.state === "1") {
              return (item.state_text = "已入学");
            } else {
              return (item.state_text = "已毕业");
            }
          });
        }
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss" scoped>
.studentList {
  .demo-form-inline,
  .el-form-item {
    text-align: left;
  }
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}
</style>
