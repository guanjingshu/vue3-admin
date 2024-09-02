import { defineStore } from 'pinia';
import { reqLogin } from '@/api/user';
import type { UserState } from './types/type';
import { SET_TOKEN, GET_TOKEN } from '@/utils/token';
import { constantRoutes } from '@/router/routes';
let useUserStore = defineStore('user', {
  state: () => {
    return {
      token: GET_TOKEN('TOKEN') || '',
      menuRoutes: constantRoutes, //仓库存储生成菜单需要数组(路由)
    };
  },
  actions: {
    async userLogin(data) {
      let result = await reqLogin(data);
      if (result.code == 200) {
        // 登录成功
        this.token = result.data.token;
        SET_TOKEN(result.data.token);
        // localStorage.setItem("TOKEN", result.data.token);
        return 'ok';
      } else {
        // 登录失败
        return Promise.reject(new Error(result.data.message));
      }
    },
    //获取用户信息方法
    async userInfo() {
      //获取用户信息进行存储仓库当中[用户头像、名字]
      const result: userInfoReponseData = await reqUserInfo();
      //如果获取用户信息成功，存储一下用户信息
      if (result.code == 200) {
        this.username = result.data.name;
        this.avatar = result.data.avatar;
        this.buttons = result.data.buttons;
        //计算当前用户需要展示的异步路由
        const userAsyncRoute = filterAsyncRoute(cloneDeep(asnycRoute), result.data.routes);
        //菜单需要的数据整理完毕
        this.menuRoutes = [...constantRoute, ...userAsyncRoute, anyRoute];
        //目前路由器管理的只有常量路由:用户计算完毕异步路由、任意路由动态追加
        [...userAsyncRoute, anyRoute].forEach((route: any) => {
          router.addRoute(route);
        });
        return 'ok';
      } else {
        return Promise.reject(new Error(result.message));
      }
    },
    //退出登录
    async userLogout() {
      //退出登录请求
      // const result: any = await reqLogout();
      // if (result.code == 200) {
      //目前没有mock接口:退出登录接口(通知服务器本地用户唯一标识失效)
      this.token = '';
      this.username = '';
      this.avatar = '';
      // REMOVE_TOKEN();
      return 'ok';
      // } else {
      //   return Promise.reject(new Error(result.message));
      // }
    },
  },
  getters: {},
});

export default useUserStore;
