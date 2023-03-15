//项目中大多数会把大多数接口请求封装成api来调用
import service from "@/service";
import qs from "qs";

// 登录接口封装
export function login(data) {
  return service({
    method: "post",
    url: "/login",
    data: data,
  });
}
// 学生列表查询接口封装
export function students(params) {
  return service({
    method: "get",
    url: "/students",
    params: params,
  });
}

// 学生列表删除接口
export function studentDelete(id) {
  return service({
    method: "delete",
    url: `/students/${id}`,
  });
}

// 信息列表 新增接口
// export function info(data) {
//   data = qs.stringify(data);
//   return service({
//     method: "post",
//     url: "/info",
//     data: data,
//   });
// }

// 信息列表新增和修改接口
// 通过type进行控制
export function info(type, data) {
  data = qs.stringify(data);
  let obj = { method: type, url: "/info", data };
  return service(obj);
}

// 信息列表 修改接口
// export function changeInfo(data) {
//   data = qs.stringify(data);
//   return service({
//     method: "put",
//     url: "/info",
//     data: data,
//   });
// }

// 信息列表 查询接口
export function getInfo() {
  return service({
    method: "get",
    url: "/info",
  });
}

// 信息列表 删除接口
export function infoDelete(id) {
  return service({
    method: "delete",
    url: `/info/${id}`,
  });
}

// 作业列表 获取数据
export function works(params) {
  return service({
    method: "get",
    url: "/works",
    params,
  });
}

// echart接口封装
export function dataView() {
  return service({
    method: "get",
    url: "dataview",
  });
}

// 封装地图接口
export function travel() {
  return service({
    method: "get",
    url: "/travel",
  });
}
