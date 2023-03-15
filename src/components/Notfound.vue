<template>
  <div class="notfound">
    <div class="wrapper">
      <div>
        点击<router-link to="/" class="route_link">这里 </router-link>进入首页
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notfound",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.notfound {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: aquamarine; */
  background: url(../assets/pic/404error.png) center no-repeat;
  background-size: 100% 100%;
  .wrapper {
    position: absolute;
    top: 26%;
    left: 47%;
    color: #999;
    font-size: 20px;
    .route_link {
      color: #fff;
      text-decoration: none;
      margin-left: 5px;
    }
  }
}
</style>
