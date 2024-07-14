export const constantRoutes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    //登录成功以后展示数据的路由
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
    meta: {
      title: "",
      hidden: false,
      icon: "",
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          hidden: false,
          icon: "HomeFilled",
        },
      },
    ],
  },
  // {
  //   path: "/",
  //   name: "Home",
  //   component: () => import("@/views/home/index.vue"),
  // },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404/index.vue"),
  },
  { path: "/:pathMatch(.*)*", redirect: "/404", name: "NotFound" },
];
