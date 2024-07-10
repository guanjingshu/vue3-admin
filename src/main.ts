import { createApp } from "vue";
import App from "@/App.vue";
import ElementPlus from "element-plus";
import "virtual:svg-icons-register";
//@ts-ignore
import zhCn from "element-plus/es/locale/lang/zh-cn";
// 引入样式
import "element-plus/dist/index.css";
import "@/styles/index.scss";
import gloalComponent from "@/components";
// 引入路由
import router from "@/router";
import pinia from "@/store";
//svg插件需要配置代码
const app = createApp(App);

app.use(ElementPlus, {
  locale: zhCn,
});

app.use(gloalComponent);
app.use(router);
app.use(pinia);
app.mount("#app");

// console.log(import.meta.env);
// 测试代码
// import axios from "axios";
// axios({
//   url: "/api/user/login",
//   method: "post",
//   data: {
//     username: "admin",
//     password: "111111",
//   },
// });
