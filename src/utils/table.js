//todo 封装infoManagement里面类似的操作
// import service from "@/service";

//todo 获取表格数据
export function getData(root, url, params) {
  root.service
    .get(url, { params: params || {} })
    .then((res) => {
      if (res.status === 200) {
        root.tableData = res.data.data;
        root.total = res.data.total;
        root.$message({ message: res.data.message, tyep: "success" });
      }
    })
    .catch((err) => {
      throw err;
    });
}

//todo 新增修改封装
import qs from "qs";
export function changeInfo(root, method, url, form, callback) {
  let data = qs.stringify(form);
  root.service[method](url, data)
    .then((res) => {
      if (res.status === 200) {
        callback(root, url);
        root.dialogFormVisible = false;
        root.$message({ type: "success", message: res.data.message });
      }
    })
    .catch((err) => {
      throw err;
    });
}

// 删除
export function delData(root, url, id, callFun) {
  root.$alert("确定删除？", "提示", {
    confirmButtonText: "确定",
    callback: () => {
      root.service
        .delete(`${url}/${id}`)
        .then((res) => {
          if (res.status === 200) {
            // getData();
            callFun(root, url);
            root.$message({ message: res.data.message, type: "success" });
          }
        })
        .catch((err) => {
          throw err;
        });
    },
  });
}

// 作业列表 获取表格数据方法封装
export function getTableData(root, url, params) {
  root.service
    .get(url, { params: params || {} })
    .then((res) => {
      if (res.status === 200) {
        root.tableData = res.data.data;
        root.total = res.data.total;
        root.tableData.forEach((item) => {
          item.completed
            ? (item.completed_text = "已完成")
            : (item.completed_text = "未完成");
        });
        root.loading = false;
      }
    })
    .catch((err) => {
      throw err;
    });
}
