<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo></Logo>
      <el-scrollbar class="scrollbar">
        <!--根据路由动态生成菜单-->
        <!-- {{ userStore.menuRoutes  :collapse="LayOutSettingStore.fold?true:false"}} -->
        <el-menu :default-active="$route.path" background-color="#001529" text-color="white" active-text-color="yellowgreen">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <!--  :class="{ fold: LayOutSettingStore.fold ? true : false }" -->
    <div class="layout_tabbar">
      <!-- layout组件的顶部导航tabbar -->
      <Tabbar></Tabbar>
    </div>
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<script setup lang="ts">
  //获取路由对象
  import { useRoute } from 'vue-router';
  //引入左侧菜单logo子组件
  import Logo from './logo/index.vue';
  import Menu from './menu/index.vue';
  //右侧内容展示区域
  import Main from './main/index.vue';
  //引入顶部tabbar组件
  import Tabbar from './tabbar/index.vue';
  //获取用户相关的小仓库
  import useUserStore from '@/store/modules/user';
  import useLayOutSettingStore from '@/store/modules/setting';
  let userStore = useUserStore();
  //获取路由对象
  let $route = useRoute();
</script>

<style lang="scss" scoped>
  .layout_container {
    width: 100%;
    height: 100vh;

    .layout_slider {
      color: white;
      width: $base-menu-width;
      height: 100vh;
      background: $base-menu-background;
      transition: all 0.3s;

      .scrollbar {
        width: 100%;
        height: calc(100vh - $base-menu-logo-height);

        .el-menu {
          border-right: none;
        }
      }
    }

    .layout_tabbar {
      position: fixed;
      width: calc(100% - $base-menu-width);
      height: $base-tabbar-height;
      top: 0px;
      left: $base-menu-width;
      transition: all 0.3s;
      &.fold {
        width: calc(100vw - $base-menu-min-width);
        left: $base-menu-min-width;
      }
    }

    .layout_main {
      position: absolute;
      width: calc(100% - $base-menu-width);
      height: calc(100vh - $base-tabbar-height);
      left: $base-menu-width;
      top: $base-tabbar-height;
      padding: 20px;
      overflow: auto;
      transition: all 0.3s;

      &.fold {
        width: calc(100vw - $base-menu-min-width);
        left: $base-menu-min-width;
      }
    }
  }
</style>
