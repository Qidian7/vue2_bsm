<template>
  <div class="mapView">
    <div id="main"></div>
  </div>
</template>

<script>
import geoJson from "@/assets/data.json";
export default {
  name: "MapView",
  data() {
    return {};
  },
  mounted() {
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
        // itemStyle: {
        //   // 自然状态
        //   normal: {
        //     areaColor: {
        //       type: "radial", // 渐变
        //       x: 0.5,
        //       y: 0.5,
        //       r: 0.8,
        //       colorStops: [
        //         {
        //           offset: 0,
        //           color: "#09132c", // 0%处的颜色
        //         },
        //         {
        //           offset: 1,
        //           color: "#274d68", // 0%处的颜色
        //         },
        //       ],
        //       globalCoord: true,
        //     },
        //   },
        // },
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
        {
          // 配置地图相关参数，绘制地图，这个对象是关于地图图标的相关设置
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
      ],
    };
    myChart.setOption(option);
  },
};
</script>

<style lang="scss" scoped>
.mapView {
  width: 100%;
  #main {
    width: 100%;
    height: 600px;
  }
}
</style>
