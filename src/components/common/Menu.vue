<template>
  <div class="menu">
    <el-aside width="200px">
      <!-- router 配置路由 -->
      <el-menu
        router
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- 使用<template>包裹是为了使用v-for遍历以及v-if渲染，无法都写在el-submenu -->
        <div v-for="(item, index) in menus" :key="index">
          <!-- :index="index + ''"  动态绑定index并变成字符串 -->
          <el-submenu :index="index + ''" v-if="!item.hidden">
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item-group
              v-for="(child, index) in item.children"
              :key="index"
            >
              <el-menu-item :index="child.path">
                <i :class="child.iconClass"></i>
                {{ child.name }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </div>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menus: [],
    };
  },
  created() {
    // console.log(this.$router.options.routes);
    this.menus = [...this.$router.options.routes];
  },
};
</script>

<style lang="scss" scoped>
.menu {
  .el-aside {
    height: 100%;
    .el-menu {
      height: 100%;
      .fa {
        margin-right: 5px;
      }
      .el-submenu .el-menu-item {
        min-width: 0px;
      }
    }
  }
}
</style>
