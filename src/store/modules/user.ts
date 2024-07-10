import { defineStore } from "pinia";
import { reqLogin } from "@/api/user";
import type { UserState } from "./types/type";
import { SET_TOKEN, GET_TOKEN } from "@/utils/token";
let useUserStore = defineStore("user", {
  state: () => {
    return {
      token: GET_TOKEN("TOKEN") || "",
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
        return "ok";
      } else {
        // 登录失败
        return Promise.reject(new Error(result.data.message));
      }
    },
  },
  getters: {},
});

export default useUserStore;
