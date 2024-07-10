<script setup lang="ts"></script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// import request from "@/utils/request";
import { reqLogin } from "@/api/user";
import { onMounted } from "vue";

import SvgIcon from "@/components/SvgIcon/index.vue";

onMounted(() => {
  reqLogin({ username: "admin", password: "111111" }).then((res) => {
    console.log("19", res);
  });
});

// request({
//     url: "/user/login",
//     method: "post",
//     data: {
//       username: "admin",
//       password: "111111",
//     },
//   }).then((res) => {
//     console.log(res);
//   });
</script>
<style lang="scss" scoped>
div {
  h1 {
    color: $color;
  }
}
</style>
