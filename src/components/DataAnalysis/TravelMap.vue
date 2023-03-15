<template>
  <div class="travelMap">
    <div id="main"></div>
  </div>
</template>

<script>
import geoJson from "@/assets/data.json";
import { travel } from "@/api/api";
export default {
  name: "MapView",
  data() {
    return {};
  },
  created() {
    travel().then((res) => {
      // console.log(res);
      if (res.status === 200) {
        let { points, linesData } = res.data.data;
        this.draw(points);
      }
    });
  },
  // 封装方法
  // mounted() {
  //   // console.log(geoJson);
  //   let myChart = this.$echarts.init(document.getElementById("main"));
  //   //  地图的注册,必须包括geo组件和map图表才行
  //   this.$echarts.registerMap("china", geoJson);
  //   let option = {
  //     backgroundColor: "rgb(121,145,209)",
  //     geo: {
  //       map: "china",
  //       aspectScale: 0.75, //scale地图长宽比
  //       zoom: 1.1, //当前视角缩放比
  //       regions: [
  //         {
  //           name: "南海诸岛",
  //           itemStyle: {
  //             opacity: 0.6,
  //           },
  //         },
  //       ],
  //     },
  //     series: [
  //       // 配置地图相关参数，绘制地图，这个对象是关于地图图标的相关设置
  //       {
  //         type: "map",
  //         label: {
  //           // 正常状态
  //           normal: {
  //             show: true, // 展示字体
  //             textStyle: {
  //               color: "#fff",
  //             },
  //           },
  //           // 高亮状态
  //           emphasis: {
  //             textStyle: {
  //               color: "rgb(240,0,144)",
  //             },
  //           },
  //         },
  //         zoom: 1.1,
  //         map: "china",
  //         itemStyle: {
  //           // 自然状态
  //           normal: {
  //             backgroundColor: "rgb(147,235,248)",
  //             areaColor: {
  //               type: "radial", // 渐变
  //               x: 0.5,
  //               y: 0.5,
  //               r: 0.8,
  //               colorStops: [
  //                 {
  //                   offset: 0,
  //                   color: "#09132c", // 0%处的颜色
  //                 },
  //                 {
  //                   offset: 1,
  //                   color: "#274d68", // 0%处的颜色
  //                 },
  //               ],
  //               globalCoord: true,
  //             },
  //             shadowColor: "#274d68",
  //             // 有3d效果通过偏移值产生的
  //             shadowOffsetX: 10,
  //             shadowOffsetY: 10,
  //           },
  //           // 高亮状态
  //           emphasis: {
  //             areaColor: "rgba(49,229,206)",
  //             borderWidth: 1,
  //           },
  //         },
  //       },
  //       // 地图中散点图的配置
  //       {
  //         type: "effectScatter", // 散点图
  //         coordinateSystem: "geo",
  //         showEffectOn: "render", //什么时候显示特效,绘制完成显示特效
  //         symbolSize: 10, //散点大小
  //         zlevel: 1, //散点图要在底图上面显示，所以设置为1，比底图层级高
  //         // data: [
  //         //   // 天津市的坐标
  //         //   { value: [117.4219, 39.4189], itemStyle: { color: "#4ab2e5" } },
  //         // ],
  //         data: points,
  //         rippleEffect: {
  //           // 涟漪特效相关配置
  //           color: "#red",
  //           period: 15, //动画周期，秒数
  //           scale: 4, //波纹最大缩放比例
  //           brushType: "fill", //波纹绘制方式
  //         },
  //       },
  //     ],
  //   };
  //   myChart.setOption(option);
  // },
  methods: {
    draw(points) {
      // console.log(geoJson);
      let myChart = this.$echarts.init(document.getElementById("main"));
      //  地图的注册,必须包括geo组件和map图表才行
      this.$echarts.registerMap("china", geoJson);
      let option = {
        backgroundColor: "rgb(121,145,209)",
        geo: {
          map: "china",
          aspectScale: 0.75, //scale地图长宽比
          zoom: 1.1, //当前视角缩放比
          regions: [
            {
              name: "南海诸岛",
              itemStyle: {
                opacity: 0.6,
              },
            },
          ],
        },
        series: [
          // 配置地图相关参数，绘制地图，这个对象是关于地图图标的相关设置
          {
            type: "map",
            label: {
              // 正常状态
              normal: {
                show: true, // 展示字体
                textStyle: {
                  color: "#fff",
                },
              },
              // 高亮状态
              emphasis: {
                textStyle: {
                  color: "rgb(240,0,144)",
                },
              },
            },
            zoom: 1.1,
            map: "china",
            itemStyle: {
              // 自然状态
              normal: {
                backgroundColor: "rgb(147,235,248)",
                areaColor: {
                  type: "radial", // 渐变
                  x: 0.5,
                  y: 0.5,
                  r: 0.8,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#09132c", // 0%处的颜色
                    },
                    {
                      offset: 1,
                      color: "#274d68", // 0%处的颜色
                    },
                  ],
                  globalCoord: true,
                },
                shadowColor: "#274d68",
                // 有3d效果通过偏移值产生的
                shadowOffsetX: 10,
                shadowOffsetY: 10,
              },
              // 高亮状态
              emphasis: {
                areaColor: "rgba(49,229,206)",
                borderWidth: 1,
              },
            },
          },
          // 地图中散点图的配置
          {
            type: "effectScatter", // 散点图
            coordinateSystem: "geo",
            showEffectOn: "render", //什么时候显示特效,绘制完成显示特效
            symbolSize: 10, //散点大小
            zlevel: 1, //散点图要在底图上面显示，所以设置为1，比底图层级高
            data:
              // 天津市的坐标
              // { value: [117.4219, 39.4189], itemStyle: { color: "#4ab2e5" } },
              points,
            // data: points,
            rippleEffect: {
              // 涟漪特效相关配置
              color: "#red",
              period: 15, //动画周期，秒数
              scale: 4, //波纹最大缩放比例
              brushType: "fill", //波纹绘制方式
            },
          },
          // 地图中线路动图的配置
          {
            type: "lines",
            zlevel: 2,
            effect: {
              show: true,
              period: 6,
              symbol: "arrow",
              symbolSize: 7,
              travelLength: 0.6,
            },
            // 设置线的样式
            lineStyle: {
              normal: {
                color: "#1DE986",
                width: 1.5,
                curveness: 0.2, // 弯曲的效果
              },
            },
            // data: linesData,
            data: [
              {
                coords: [
                  [116.4551, 40.2539], //北京
                  [117.4219, 39.4189],
                ],
                lineStyle: { color: "#4ab2e5" },
              },
              {
                coords: [
                  [126.3746, 44.5938], //黑龙江
                  [117.4219, 39.4189],
                ],
                lineStyle: { color: "#4ab2e5" },
              },
              {
                coords: [
                  [128.3746, 45.5938], ///吉林
                  [117.4219, 39.4189],
                ],
                lineStyle: { color: "#4ab2e5" },
              },
              {
                coords: [
                  [123.3746, 42.3938], //辽宁
                  [117.4219, 39.4189],
                ],
                lineStyle: { color: "#4ab2e5" },
              },
              {
                coords: [
                  [112.4121, 37.8611], //山西
                  [117.4219, 39.4189],
                ],
                lineStyle: { color: "#4ab2e5" },
              },
              {
                coords: [
                  [84.9023, 41.748], //新疆
                  [117.4219, 39.4189],
                ],
                lineStyle: { color: "#4ab2e5" },
              },
              {
                coords: [
                  [102.9652, 25.5007], //云南
                  [117.4219, 39.4189],
                ],
                lineStyle: { color: "#4ab2e5" },
              },
              {
                coords: [
                  [119.3008, 25.9277], //福建
                  [117.4219, 39.4189],
                ],
                lineStyle: { color: "#4ab2e5" },
              },
            ],
          },
        ],
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.travelMap {
  width: 100%;
  #main {
    width: 100%;
    height: 600px;
  }
}
</style>
