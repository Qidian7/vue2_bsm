<template>
  <div class="dataView">
    <el-card>
      <div id="main1"></div>
    </el-card>
    <el-card>
      <div id="main2"></div>
    </el-card>
  </div>
</template>

<script>
import { dataView } from "@/api/api";
export default {
  name: "DataView",
  data() {
    return {};
  },
  created() {
    // 第二个图标的绘制
    dataView()
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          let { legend, xAxis, series } = res.data.data;
          this.draw(legend, xAxis, series);
        }
      })
      .catch((err) => {
        throw err;
      });
  },
  // 在mounted中绘制图表
  mounted() {
    // 首先初始化echarts图表
    let myChart = this.$echarts.init(document.getElementById("main1"));
    myChart.setOption({
      title: {
        text: "课题组人数分布",
      },
      tooltip: {}, // 鼠标放上去有对应提示
      xAxis: {
        data: ["2018", "2019", "2020", "2021", "2022", "2023"],
      },
      yAxis: {},
      // 数据配置在series中
      series: [
        {
          name: "人数",
          // 图表类型，线图line 柱状图bar
          type: "bar",
          data: [2, 4, 23, 27, 31, 39],
        },
      ],
    });
  },
  methods: {
    draw(legend, xAxis, series) {
      let myChart1 = this.$echarts.init(document.getElementById("main2"));
      let option = {
        title: {
          text: "会话量",
        },
        toolbar: {
          trigger: "axis",
        },
        legend: {
          data: legend,
        },
        xAxis: {
          type: "category",
          data: xAxis,
        },
        yAxis: {
          type: "value",
        },
        series,
      };
      myChart1.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
// 图表中一定要给宽高 ， 如果不给宽高会出现代码不报错但是什么都没有
.dataView {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 50%;
    #main1,
    #main2 {
      height: 500px;
    }
  }
}
</style>
