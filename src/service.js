import axios from "axios";
import { getToken } from "./utils/setToken";
import { Message } from "element-ui";

const service = axios.create({
  baseURL: "/api", // baseURL会自动加在接口上
  timeout: 6000, //指定请求的超时毫秒数，如果请求超过这个时间，那么请求就会中断
});
//添加拦截器
service.interceptors.request.use(
  (config) => {
    //请求之前做些什么？
    // 1.获取并设置token
    // console.log(getToken('token'));
    config.headers["token"] = getToken("token"); // 每次请求之前携带token，否则拿不到数据
    return config;
  },
  (error) => {
    //请求错误做些什么
    return Promise.reject(error);
  }
);
//添加响应拦截器
service.interceptors.response.use(
  (response) => {
    //对响应数据做些什么
    let { status, message } = response.data;
    if (status !== 200) {
      Message({ message: message || "error", type: "warning" });
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default service;
