<template>
  <div class="infoList">
    <el-form :inline="true" class="demo-form-inline" size="small">
      <el-form-item>
        <el-button type="primary" @click="addStudent">新增</el-button>
      </el-form-item>
    </el-form>
    <!--  -->
    <el-table :data="tableData" border style="width: 100%">
      <!-- width+180px 改成 align="center" 居中显示去除滚动条 -->
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="sex" label="性别" align="center">
      </el-table-column>
      <el-table-column prop="age" label="年龄" align="center">
      </el-table-column>
      <el-table-column prop="father" label="父亲" align="center">
      </el-table-column>
      <el-table-column prop="mother" label="母亲" align="center">
      </el-table-column>
      <el-table-column prop="address" label="家庭住址" align="center">
      </el-table-column>
      <el-table-column prop="time" label="入校时间" align="center">
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
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-edit"
            @click="edit(scope.row)"
          >
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--  -->
    <el-dialog
      :title="state ? '添加学生信息' : '修改学生信息'"
      :visible.sync="dialogFormVisible"
      width="500px"
    >
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" :label-width="formLabelWidth" prop="sex">
          <el-radio v-model="form.sex" label="1">男</el-radio>
          <el-radio v-model="form.sex" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth" prop="age">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="父亲姓名"
          :label-width="formLabelWidth"
          prop="father"
        >
          <el-input v-model="form.father" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="母亲姓名"
          :label-width="formLabelWidth"
          prop="mother"
        >
          <el-input v-model="form.mother" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="家庭住址"
          :label-width="formLabelWidth"
          prop="address"
        >
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          label="入校时间"
          :label-width="formLabelWidth"
          prop="time"
        >
          <!-- formar value-formar 是elementui自带的 -->
          <el-date-picker
            v-model="form.time"
            align="right"
            format="yyyy年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          label="联系方式"
          :label-width="formLabelWidth"
          prop="phone"
        >
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeInfo('form')"> 取 消 </el-button>
        <el-button type="primary" @click="sure('form')"> 确 定 </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getInfo, info, infoDelete } from "@/api/api";
export default {
  name: "InfoList",
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {
        name: "",
        sex: "1",
        age: "",
        father: "",
        mother: "",
        address: "",
        time: "",
        phone: "",
      },
      state: true,
      formLabelWidth: "80px",
      rules: {
        name: [
          {
            required: true,
            message: "请输入姓名",
          },
        ],
        sex: [
          {
            required: true,
          },
        ],
        age: [
          {
            required: true,
            message: "请输入年龄",
          },
        ],
        address: [
          {
            required: true,
            message: "请输入地址",
          },
        ],
        time: [
          {
            required: true,
          },
        ],
        phone: [
          {
            required: true,
            message: "请输入联系方式",
          },
        ],
      },
      total: 0,
    };
  },
  created() {
    getData(this, "/info");
  },
  methods: {
    del(row) {
      this.$alert("确定删除？", "提示", {
        confirmButtonText: "确定",
        callback: () => {
          infoDelete(row.id).then((res) => {
            if (res.status === 200) {
              this.getData();
              this.$message({ message: res.data.message, type: "success" });
            }
          });
        },
      });
    },
    edit(row) {
      this.form = { ...row }; // 不要把当行的值直接赋给form，这样会有一个bug就是你在修改时表单也会跟着改
      this.state = false;
      this.dialogFormVisible = true;
      this.title = "修改学生信息";
    },
    closeInfo(form) {
      this.dialogFormVisible = false;
      this.$refs[form].resetFields();
    },
    addStudent() {
      this.form = {
        name: "",
        sex: "1",
        age: "",
        father: "",
        mother: "",
        address: "",
        time: "",
        phone: "",
      };
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs[form].resetFields();
      });
      this.state = true;
    },
    getData() {
      getInfo().then((res) => {
        if (res.status === 200) {
          this.tableData = res.data.data;
          this.total = res.data.total;
        }
      });
    },
    sure(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(form, this.form);
          if (this.state) {
            info("post", this.form).then((res) => {
              console.log(res);
              if (res.status === 200) {
                this.getData();
                this.dialogFormVisible = false;
                this.$message({ type: "success", message: res.data.message });
              }
            });
          } else {
            info("put", this.form).then((res) => {
              if (res.status === 200) {
                this.getData();
                this.dialogFormVisible = false;
                this.$message({ type: "success", message: res.data.message });
              }
            });
          }
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.infoList {
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
