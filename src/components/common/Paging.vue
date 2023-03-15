<!-- 此组件用于封装分页，不分页版是worklist -->
<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="page"
    :page-sizes="[10, 20, 30, 40, 50]"
    :page-size="size"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total"
    :url="url"
  >
    <!-- 传递路由URL使得在其他地方都能进行复用 -->
  </el-pagination>
</template>

<script>
import { getTableData } from "@/utils/table";
export default {
  name: "Paging",
  data() {
    return {
      page: 1, //当前页数
      size: 10, // 当前每页显示条数
    };
  },
  props: {
    total: Number,
    url: String,
  },
  //我们想要的this是work management的vm，所以不能直接用this，用 this.$parent
  methods: {
    handleSizeChange(val) {
      this.size = val;
      this.page = 1;
      // 改完之后需重新请求
      getTableData(this.$parent, this.url, {
        page: this.page,
        size: this.size,
      });
    },
    handleCurrentChange(val) {
      this.page = val;
      getTableData(this.$parent, this.url, {
        page: this.page,
        size: this.size,
      });
    },
    created() {
      getTableData(this.$parent, this.url, {
        page: this.page,
        size: this.size,
      });
    },
  },
};
</script>

<style></style>
