<template>
  <div class="home">
    <Header />
    <el-container class="content">
      <Menu />
      <el-container>
        <el-main>
          <Breadcrumb />
          <div class="cont">
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer><Footer /></el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "../components/common/Header.vue";
import Menu from "../components/common/Menu.vue";
import Footer from "../components/common/Footer.vue";
import Breadcrumb from "../components/common/Breadcrumb.vue";
export default {
  name: "Home",
  data: function () {
    return {};
  },
  components: { Header, Menu, Footer, Breadcrumb },
};
</script>

<!-- sass -->
<style lang="scss" scoped>
.home {
  // position: absolute;
  width: 100%;
  height: 100%;
  .content {
    position: absolute;
    width: 100%;
    top: 60px;
    bottom: 0;
    .cont {
      margin: 20px;
    }
  }
}
</style>
