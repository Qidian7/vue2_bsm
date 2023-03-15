import Vue from "vue";
import Router from "vue-router";
// import Home from "../components/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "首页",
      redirect: "/login",
      hidden: true,
      component: () => import("@/components/Login"),
    },
    {
      path: "/login",
      name: "登陆页",
      hidden: true,
      component: () => import("@/components/Login"),
    },
    {
      path: "*",
      name: "Notfound",
      hidden: true,
      component: () => import("@/components/Notfound"),
    },
    // {
    //   path: "/home",
    //   // component: () => import("@/components/Home"), // 懒加载不用在一开始import组件了
    //   component: (resolve) => require(["@/components/Home"], resolve),
    // },
    {
      path: "/home",
      name: "学生管理", // 页面上提示 studentmangement
      iconClass: "fa fa-users", // 一个fa相当于是class名
      redirect: "/home/student",
      component: () => import("@/components/Home"),
      children: [
        {
          path: "/home/student",
          name: "学生列表",
          iconClass: "fa fa-list",
          component: () => import("@/components/Student/StudentList"),
        },
        {
          path: "/home/info",
          name: "信息列表",
          iconClass: "fa fa-list-alt",
          component: () => import("@/components/Student/InfoList"),
        },
        {
          path: "/home/infomanagement",
          name: "信息管理",
          iconClass: "fa fa-list-alt",
          component: () => import("@/components/Student/InfoManagement"),
        },
        {
          path: "/home/worklist",
          name: "作业列表",
          iconClass: "fa fa-list-ul",
          component: () => import("@/components/Student/WorkList"),
        },
        {
          path: "/home/workmanagement",
          name: "作业管理",
          iconClass: "fa fa-th-list",
          component: () => import("@/components/Student/WorkManagement"),
        },
      ],
    },
    {
      path: "/home",
      name: "数据分析",
      iconClass: "fa fa-database",
      component: () => import("@/components/Home"),
      children: [
        {
          path: "/home/dataview",
          name: "数据概览",
          iconClass: "fa fa-line-chart",
          component: () => import("@/components/DataAnalysis/DataView"),
        },
        {
          path: "/home/mapview",
          name: "地图概览",
          iconClass: "fa fa-line-chart",
          component: () => import("@/components/DataAnalysis/MapView"),
        },
        {
          path: "/home/travelmap",
          name: "旅行地图",
          iconClass: "fa fa-line-chart",
          component: () => import("@/components/DataAnalysis/TravelMap"),
        },
        {
          path: "/home/scoremap",
          name: "分数地图",
          iconClass: "fa fa-line-chart",
          component: () => import("@/components/DataAnalysis/ScoreMap"),
        },
      ],
    },
    {
      path: "/users",
      name: "用户中心", //用户中心
      iconClass: "fa fa-user",
      component: () => import("@/components/Home"), // 懒加载不用在一开始import组件了
      children: [
        {
          path: "/users/user",
          name: "权限管理",
          iconClass: "fa fa-user",
          component: () => import("@/components/Users/User"),
        },
      ],
    },
  ],
  mode: "history",
});
